// @ts-ignore
import * as t from "io-ts";

import ValidationType from "@core/shared/domain/ValidationType";

import * as CustomTypes from "../customTypes/index";

const Type = CustomTypes.string({
  name: "Name",
});

type NameType = t.TypeOf<typeof Type>;

export default class Name extends ValidationType {
  public value: NameType;

  constructor(value: string) {
    super(Type);

    if (this.validate(value)) {
      this.value = value;
    }
  }
}
