// @ts-ignore
import * as t from "io-ts";

import { Component } from "@/shared/composite/Component";
import setType from "@/shared/types/setType";
import ValidationType from "@/shared/ValidationType";
import { CompositeEnum, LeafEnum } from "@/survey/composite/Enums";

const Type = setType<Component<CompositeEnum, LeafEnum>>("Elements");

type ElementsType = t.TypeOf<typeof Type>;

export default class Elements extends ValidationType {
  public value!: Set<ElementsType>;

  constructor(value: any) {
    super(Type);

    const tempValue = value instanceof Set ? value : new Set(value);

    if (Elements.VALIDATE(tempValue)) {
      this.value = tempValue;
    }
  }
}
