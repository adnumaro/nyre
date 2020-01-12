import Component from "@/shared/composite/Component";
import { Name, Title } from "@/shared/valueObject/index";

import { CompositeEnum, LeafEnum } from "@/survey/composite/Enums";
import Rules from "@/survey/composite/valueObject/Rules";

type JSONFields = {
  name?: string,
  title?: string,
  rules?: any,
};

export default class TextLeaf extends Component<CompositeEnum, LeafEnum> {
  protected type: LeafEnum = LeafEnum.TEXT;

  protected name!: Name;
  protected title!: Title;
  protected rules!: Rules;

  constructor(jsonFields: JSONFields) {
    super();

    this.parseJson(jsonFields);
  }

  public parseJson(jsonFields: JSONFields): TextLeaf {
    this.name = new Name(jsonFields.name || "");
    this.rules = new Rules(jsonFields.rules || {});
    this.title = new Title(jsonFields.title || "");

    return this;
  }

  public toJson(): object {
    return {
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
