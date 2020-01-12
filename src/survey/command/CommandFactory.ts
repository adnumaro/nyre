import CommandObserver from "@/shared/command/CommandObserver";
import ObjectMap from "@/shared/types/ObjectMap";

export default class CommandFactory {
  public observer: CommandObserver = new CommandObserver();

  constructor(config: ObjectMap) {
    this.mapCommands(config);
  }

  public mapCommands(map: ObjectMap) {
    Object.keys(map).forEach((key: string) => {
      this.observer.mapCommand(key, map[key]);
    });
  }
}
