import { reporter } from "@/shared/reporter";

export default abstract class ValidationType {
  public static VALIDATE(value: any) {
    const result = ValidationType.ownType.decode(value);
    const report = reporter(result);

    if (report instanceof Error) {
      throw report;
    }

    return true;
  }

  private static ownType: any;

  protected constructor(type?: any) {
    ValidationType.ownType = type;
  }
}
