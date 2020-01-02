// @ts-ignore
import * as t from "io-ts";

import colorType from "@/shared/types/colorType";
import ValidationType from "@/shared/ValidationType";

const Type = colorType("Color");

type ColorType = t.TypeOf<typeof Type>;

export default class Color extends ValidationType {
  public value: ColorType;

  constructor(value: string) {
    super(Type);

    if (Color.VALIDATE(value)) {
      this.value = value;
    }
  }
}
