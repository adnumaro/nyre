import Command from "@/shared/command/Command";
import Survey from "@/survey/index";

type Payload = {
  eventType: string,
  data: any,
};

export default class AddPagesCommand extends Command {
  private context: Survey;
  private payload: any;
  private backup: any;

  constructor(context: Survey, payload: Payload) {
    super();

    this.context = context;
    this.payload = payload;
  }

  public execute(): void {
    this.context.parseJson(this.payload.data);

    this.backup = this.payload.data;
  }

  public undo(): void {
    if (this.backup) {
      this.context.parseJson(this.backup);
    }
  }
}
