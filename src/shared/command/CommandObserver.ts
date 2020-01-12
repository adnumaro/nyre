import Command from "@/shared/command/Command";
import CommandOriginator from "@/shared/command/CommandOriginator";
import Payload from "@/shared/command/types/Payload";
import EventManager from "@/shared/observer/EventManager";
import Observer from "@/shared/observer/Observer";
import ObjectMap from "@/shared/types/ObjectMap";

export default class CommandObserver extends Observer {
  public readonly events: EventManager = new EventManager();
  public readonly history: CommandOriginator = new CommandOriginator();
  private readonly commandMap: ObjectMap = {};

  public update(context: any, payload: Payload): void {
    const command: Command = new this.commandMap[payload.eventType](context, payload);

    command.execute();

    this.history.save(command);
  }

  public undo(): void {
    this.history.restore();
  }

  public mapCommand(eventType: string, command: Command): void {
    this.events.subscribe(eventType, this);
    this.commandMap[eventType] = command;
  }

  public unMapCommand(eventType: string): void {
    this.events.unsubscribe(eventType, this);
    delete this.commandMap[eventType];
  }
}
