import IMemento from "@core/shared/domain/memento/IMemento";
import IOriginator from "@core/shared/domain/memento/IOriginator";
import Memento from "@core/shared/domain/memento/Memento";

import ICommand from "./ICommand";

export default class CommandOriginator implements IOriginator<Set<IMemento<ICommand>>, ICommand> {
  public state: Set<IMemento<ICommand>> = new Set();
  protected currentState: Iterator<IMemento<ICommand>> | undefined;

  get length() {
    return this.state.size;
  }

  public save(command: ICommand): void {
    this.state.add(new Memento(command));
  }

  public restore(): void {
    if (!this.currentState) {
      this.currentState = this.state.values();
    }

    const memento = this.currentState.next();

    if (memento && memento.value) {
      memento.value.getState().undo();
    }
  }
 }
