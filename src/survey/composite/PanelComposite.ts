import { Component } from "@/shared/composite/Component";
import { Name, Title } from "@/shared/valueObject/index";

import { CompositeEnum, LeafEnum } from "@/survey/composite/Enums";
import Elements from "@/survey/composite/valueObject/Elements";

type JSONFields = {
  name?: string,
  title?: string,
  elements?: any,
};

export default class PanelComposite extends Component<CompositeEnum, LeafEnum> {
  protected type: CompositeEnum = CompositeEnum.PANEL;

  protected name!: Name;
  protected title!: Title;
  protected elements!: Elements;

  constructor(jsonFields: JSONFields) {
    super();

    this.parseJson(jsonFields);
  }

  public add(component: Component<CompositeEnum, LeafEnum>): void {
    this.elements.value.add(component);

    component.setParent(this);
  }

  public remove(component: Component<CompositeEnum, LeafEnum>): void {
    this.elements.value.delete(component);

    component.setParent(null);
  }

  public parseJson(jsonFields: JSONFields): PanelComposite {
    this.elements = new Elements(jsonFields?.elements || []);
    this.name = new Name(jsonFields?.name || "");
    this.title = new Title(jsonFields?.title || "");

    return this;
  }

  public toJson(): object {
    const elements = [];

    for (const element of this.elements.value) {
      elements.push(element.toJson());
    }

    return {
      elements,
      name: this.name.value,
      title: this.title.value,
      type: this.type.toString(),
    };
  }
}
