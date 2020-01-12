import { ISurvey } from "@/IConfig";
import TreeFactory from "@/shared/composite/TreeFactory";
import ObjectMapIO from "@/shared/types/ObjectMapIO";
import CommandFactory from "@/survey/command/CommandFactory";

export default class Survey {
  private commandContext: CommandFactory | undefined;
  private compositeContext: TreeFactory | undefined;

  constructor(config: ISurvey) {
    if (config.compositeMap) {
      this.compositeContext = new TreeFactory(config.compositeMap);
    }

    if (config.commandMap) {
      this.commandContext = new CommandFactory(config.commandMap);
    }
  }

  public notify(eventType: string, data: any) {
    this.commandContext?.observer.events.notify(this, eventType, data);
  }

  public undo() {
    this.commandContext?.observer.undo();
  }

  public parseJson(json: ObjectMapIO) {
    this.compositeContext?.setTreeContent(json);
  }

  public getTree() {
    return this.compositeContext?.baseTree;
  }
}
