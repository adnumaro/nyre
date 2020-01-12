import Command from "@/shared/command/Command";
import Survey from "@/survey/index";

export default class AddPagesCommand extends Command {
  private context: Survey;
  private data: any;
  private backup: any;

  constructor(context: Survey, data: any) {
    super();

    this.context = context;
    this.data = data;
  }

  public execute(): void {
    this.context.parseJson(this.data);

    this.backup = this.data;
  }

  public undo(): void {
    if (this.backup) {
      this.context.parseJson(this.backup);
    }
  }
}
