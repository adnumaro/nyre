import ICommand from "@core/shared/domain/command/ICommand";

import Context from "@core/survey/index";

export default class AddPagesCommand implements ICommand {
  private context: Context;
  private data: any;
  private backup: any;

  constructor(context: Context, data: any) {
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
