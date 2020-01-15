import { ISurvey } from "@/IConfig";

import ObjectMap from "@core/shared/domain/types/ObjectMap";

import CommandMapper from "@core/survey/infrastructure/command/Mapper";
import CompositeFactory from "@core/survey/infrastructure/composite/Factory";

export default class Survey {
  private commandContext: CommandMapper | undefined;
  private compositeContext: CompositeFactory | undefined;

  constructor(config: ISurvey) {
    if (config.compositeMap) {
      this.compositeContext = new CompositeFactory(config.compositeMap);
    }

    if (config.commandMap) {
      this.commandContext = new CommandMapper(config.commandMap);
    }
  }

  public notify(eventType: string, data: any) {
    this.commandContext?.observer.events.notify(this, eventType, data);
  }

  public undo() {
    this.commandContext?.observer.undo();
  }

  public parseJson(json: ObjectMap) {
    this.compositeContext?.setTree(json);
  }

  public getTree() {
    return this.compositeContext?.getTree();
  }
}
