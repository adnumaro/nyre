import { Component } from "@/shared/composite/Component";
import { Name, Title } from "@/shared/types/index";

import { CompositeEnum, LeafEnum } from "@/survey/composite/Enums";
import Elements from "@/survey/composite/types/Elements";

export default class PageComposite extends Component<CompositeEnum, LeafEnum> {
  protected type: CompositeEnum = CompositeEnum.PAGE;

  protected name!: Name;
  protected title!: Title;
  protected elements!: Elements;

  constructor(
    fields?: {
      name?: string,
      title?: string,
      elements?: any,
    }) {
    super();

    this.parseJson(fields);
  }

  public add(component: Component<CompositeEnum, LeafEnum>): void {
    this.elements.value.add(component);

    component.setParent(this);
  }

  public remove(component: Component<CompositeEnum, LeafEnum>): void {
    this.elements.value.delete(component);

    component.setParent(null);
  }

  public parseJson(
    fields?: {
      name?: string,
      title?: string,
      elements?: any,
    }): PageComposite {
    this.name = new Name(fields?.name || "");
    this.title = new Title(fields?.title || "");
    this.elements = new Elements(fields?.elements || []);

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
