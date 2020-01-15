// @ts-ignore
import * as t from "io-ts";

import Component from "@core/shared/domain/composite/Component";
import ValidationType from "@core/shared/domain/ValidationType";

import * as CustomTypes from "@core/shared/infrastructure/customTypes/index";

import { CompositeEnum, LeafEnum } from "@core/survey/domain/composite/Enums";

const Type = CustomTypes.set<Component<CompositeEnum, LeafEnum>>("Elements");

type ElementsType = t.TypeOf<typeof Type>;

export default class Elements extends ValidationType {
  public value!: Set<ElementsType>;

  constructor(value: any) {
    super(Type);

    const tempValue = value instanceof Set ? value : new Set(value);

    if (this.validate(tempValue)) {
      this.value = tempValue;
    }
  }
}
