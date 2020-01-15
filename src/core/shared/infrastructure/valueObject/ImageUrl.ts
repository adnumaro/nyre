// @ts-ignore
import * as t from "io-ts";

import ValidationType from "@core/shared/domain/ValidationType";

import * as CustomTypes from "../customTypes/index";

const Type = CustomTypes.url({
  name: "ImageUrl",
  extensions: [".jpg", ".jpeg", ".png", ".gif"],
});

type ImageUrlType = t.TypeOf<typeof Type>;

export default class ImageUrl extends ValidationType {
  public value: ImageUrlType;

  constructor(value: string) {
    super(Type);

    if (this.validate(value)) {
      this.value = value;
    }
  }
}
