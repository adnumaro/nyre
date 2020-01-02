// @ts-ignore
import * as t from "io-ts";

import stringType from "@/shared/types/stringType";
import ValidationType from "@/shared/ValidationType";

const Type = stringType("Name");

type NameType = t.TypeOf<typeof Type>;

export default class Name extends ValidationType {
  public value: NameType;

  constructor(value: string) {
    super(Type);

    if (Name.VALIDATE(value)) {
      this.value = value;
    }
  }
}
