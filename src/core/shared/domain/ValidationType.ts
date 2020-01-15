// TODO: Reporter must be not import here
import Reporter from "@core/shared/infrastructure/reporter";

export default abstract class ValidationType extends Reporter {
  private ownType: any;

  protected constructor(type?: any) {
    super();

    this.ownType = type;
  }

  public validate(value: any) {
    const result = this.ownType.decode(value);
    const report = ValidationType.REPORT(result);

    if (report instanceof Error) {
      throw report;
    }

    return true;
  }
}
