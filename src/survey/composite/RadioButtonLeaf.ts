import { Component } from "@/shared/composite/Component";
import { Name, Rules, Title } from "@/shared/types/index";

import { CompositeEnum, LeafEnum } from "@/survey/composite/Enums";
import ChoiceMap from "@/survey/composite/types/ChoiceMap";

export default class RadioButtonLeaf extends Component<CompositeEnum, LeafEnum> {
  protected type: LeafEnum = LeafEnum.RADIO_BUTTON;

  protected name!: Name;
  protected title!: Title;
  protected choices!: ChoiceMap;
  protected rules!: Rules;

  constructor(
    fields?: {
      name?: string,
      title?: string,
      choices?: any,
      rules?: any,
    }) {
    super();

    this.parseJson(fields);
  }

  public parseJson(fields?: {
    name?: string,
    title?: string,
    choices?: any,
    rules?: string,
  }): RadioButtonLeaf {
    this.name = new Name(fields?.name || "");
    this.title = new Title(fields?.title || "");
    this.choices = new ChoiceMap(fields?.choices || []);
    this.rules = new Rules(fields?.rules || {});

    return this;
  }

  public toJson(): object {
    return {
      choices: this.choices.value,
      name: this.name.value,
      rules: this.rules.value,
      title: this.title.value,
      type: this.type.toString(),
    };
  }

  // tslint:disable-next-line: no-empty
  public add(): void {}

  // tslint:disable-next-line: no-empty
  public remove(): void {}
}
