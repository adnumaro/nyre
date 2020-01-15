import ValidationType from "@core/shared/domain/ValidationType";

export default class Rules extends ValidationType {
  public value: any;

  constructor(value: any) {
    super();

    this.value = value;
  }
}
