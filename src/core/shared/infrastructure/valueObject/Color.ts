// @ts-ignore
import * as t from "io-ts";

import ValidationType from "@core/shared/domain/ValidationType";

import * as CustomTypes from "../customTypes/index";

const Type = CustomTypes.color();

type ColorType = t.TypeOf<typeof Type>;

export default class Color extends ValidationType {
  public value: ColorType;

  constructor(value: string) {
    super(Type);

    if (this.validate(value)) {
      this.value = value;
    }
  }
}
