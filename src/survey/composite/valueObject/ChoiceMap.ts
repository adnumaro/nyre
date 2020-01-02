// @ts-ignore
import * as t from "io-ts";

import keyValueMapType from "@/shared/types/keyValueMapType";
import ValidationType from "@/shared/ValidationType";

const Type = keyValueMapType("ChoiceMap");

type ChoiceMapType = t.TypeOf<typeof Type>;

export default class ChoiceMap extends ValidationType {
  public value!: ChoiceMapType;

  constructor(value: any) {
    super(Type);

    console.log("ChoiceMap value", value);

    if (ChoiceMap.VALIDATE(value)) {
      this.value = value;
    }
  }
}
