import Command from "@/shared/command/Command";
import IMemento from "@/shared/memento/IMemento";
import Memento from "@/shared/memento/Memento";
import Originator from "@/shared/memento/Originator";

/**
 * The Memento Originator implementation for Commands.
 *
 * The state must be an array of Memento of Commands and
 * must be save a Command in the state
 */
export default class CommandOriginator extends Originator<Set<IMemento<Command>>, Command> {
  protected state: Set<IMemento<Command>> = new Set();
  protected currentState: Iterator<IMemento<Command>> | undefined;

  get length() {
    return this.state.size;
  }

  public save(command: Command): void {
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
