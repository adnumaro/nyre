// @ts-ignore
import * as t from "io-ts";

import ValidationType from "@core/shared/domain/ValidationType";
import * as CustomTypes from "@core/shared/infrastructure/customTypes/index";

const Type = CustomTypes.keyValueMap("ChoiceMap");

type ChoiceMapType = t.TypeOf<typeof Type>;

export default class ChoiceMap extends ValidationType {
  public value!: ChoiceMapType;

  constructor(value: any) {
    super(Type);

    if (this.validate(value)) {
      this.value = value;
    }
  }
}
