import ObjectMap from "@core/shared/domain/types/ObjectMap";

import EventManager from "@core/shared/domain/observer/EventManager";
import IObserver from "@core/shared/domain/observer/IObserver";

import CommandOriginator from "./CommandOriginator";
import ICommand from "./ICommand";

export default class CommandObserver implements IObserver {
  public readonly events: EventManager = new EventManager();
  public readonly history: CommandOriginator = new CommandOriginator();
  private readonly commandMap: ObjectMap = {};

  public update(context: any, eventType: string, data: any): void {
    const command: ICommand = new this.commandMap[eventType](context, data);

    command.execute();

    this.history.save(command);
  }

  public undo(): void {
    this.history.restore();
  }

  public mapCommand(eventType: string, command: ICommand): void {
    this.events.subscribe(eventType, this);
    this.commandMap[eventType] = command;
  }

  public unMapCommand(eventType: string): void {
    this.events.unsubscribe(eventType, this);
    delete this.commandMap[eventType];
  }
}
