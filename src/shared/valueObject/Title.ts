// @ts-ignore
import * as t from "io-ts";

import stringType from "@/shared/types/stringType";
import ValidationType from "@/shared/ValidationType";

const Type = stringType("Title");

type TitleType = t.TypeOf<typeof Type>;

export default class Title extends ValidationType {
  public value: TitleType;

  constructor(value: string) {
    super(Type);

    if (Title.VALIDATE(value)) {
      this.value = value;
    }
  }
}
