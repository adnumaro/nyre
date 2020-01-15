import ObjectMap from "@core/shared/domain/types/ObjectMap";

import CommandObserver from "@core/shared/domain/command/CommandObserver";

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
