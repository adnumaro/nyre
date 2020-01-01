import { Component } from "@/shared/composite/Component";
import { Color, ImageUrl, Name, Title } from "@/shared/types/index";

import { CompositeEnum, LeafEnum } from "@/survey/composite/Enums";
import Elements from "@/survey/composite/types/Elements";

export default class PagesComposite extends Component<CompositeEnum, LeafEnum> {
  protected type: CompositeEnum = CompositeEnum.PAGES;

  protected name!: Name;
  protected title!: Title;
  protected headerImage!: ImageUrl;
  protected backgroundColor!: Color;
  protected backgroundImage!: ImageUrl;
  protected elements!: Elements;

  constructor(
    fields?: {
      name?: string,
      title?: string,
      headerImage?: string,
      backgroundColor?: string,
      backgroundImage?: string,
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
      headerImage?: string,
      backgroundColor?: string,
      backgroundImage?: string,
      elements?: any,
    }): PagesComposite {
    this.name = new Name(fields?.name || "");
    this.title = new Title(fields?.title || "");
    this.headerImage = new ImageUrl(fields?.headerImage || "");
    this.backgroundColor = new Color(fields?.backgroundColor || "");
    this.backgroundImage = new ImageUrl(fields?.backgroundImage || "");
    this.elements = new Elements(fields?.elements || []);

    return this;
  }

  public toJson(): object {
    const elements = [];

    for (const element of this.elements.value) {
      elements.push(element.toJson());
    }

    return {
      backgroundColor: this.backgroundColor.value,
      backgroundImage: this.backgroundImage.value,
      elements,
      headerImage: this.headerImage.value,
      name: this.name.value,
      title: this.title.value,
      type: this.type.toString(),
    };
  }
}
