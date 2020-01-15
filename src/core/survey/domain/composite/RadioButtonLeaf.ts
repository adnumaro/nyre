import Component from "@core/shared/domain/composite/Component";

// TODO: This must be not here
import { Name, Title } from "@core/shared/infrastructure/valueObject/index";
import ChoiceMap from "@core/survey/infrastructure/composite/valueObject/ChoiceMap";
import Rules from "@core/survey/infrastructure/composite/valueObject/Rules";

import { CompositeEnum, LeafEnum } from "./Enums";

type JSONFields = {
  name?: string,
  title?: string,
  choices?: any,
  rules?: any,
};

export default class RadioButtonLeaf extends Component<CompositeEnum, LeafEnum> {
  public readonly type: LeafEnum = LeafEnum.RADIO_BUTTON;

  protected name!: Name;
  protected title!: Title;
  protected choices!: ChoiceMap;
  protected rules!: Rules;

  constructor(jsonFields: JSONFields) {
    super();

    this.parseJson(jsonFields);
  }

  public parseJson(jsonFields: JSONFields): RadioButtonLeaf {
    this.choices = new ChoiceMap(jsonFields.choices || []);
    this.name = new Name(jsonFields.name || "");
    this.rules = new Rules(jsonFields.rules || {});
    this.title = new Title(jsonFields.title || "");

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

  public add(): void {
    throw new Error("Leaf cannot add elements");
  }

  public remove(): void {
    throw new Error("Leaf cannot remove elements");
  }
}
