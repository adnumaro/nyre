// @ts-ignore
import * as t from "io-ts";

import urlType from "@/shared/types/urlType";
import ValidationType from "@/shared/ValidationType";

const Type = urlType("ImageUrl", [".jpg", ".jpeg", ".png", ".gif"]);

type ImageUrlType = t.TypeOf<typeof Type>;

export default class ImageUrl extends ValidationType {
  public value: ImageUrlType;

  constructor(value: string) {
    super(Type);

    if (ImageUrl.VALIDATE(value)) {
      this.value = value;
    }
  }
}
