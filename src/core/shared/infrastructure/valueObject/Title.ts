// @ts-ignore
import * as t from "io-ts";

import ValidationType from "@core/shared/domain/ValidationType";

import * as CustomTypes from "../customTypes/index";

const Type = CustomTypes.string({
  name: "Title",
});

type TitleType = t.TypeOf<typeof Type>;

export default class Title extends ValidationType {
  public value: TitleType;

  constructor(value: string) {
    super(Type);

    if (this.validate(value)) {
      this.value = value;
    }
  }
}
