import Component from "@/shared/composite/Component";
import { Color, ImageUrl, Name, Title } from "@/shared/valueObject/index";

import { CompositeEnum, LeafEnum } from "@/survey/composite/Enums";
import Elements from "@/survey/composite/valueObject/Elements";

type JSONFields = {
  name?: string,
  title?: string,
  headerImage?: string,
  backgroundColor?: string,
  backgroundImage?: string,
  elements?: any,
};

export default class PagesComposite extends Component<CompositeEnum, LeafEnum> {
  protected type: CompositeEnum = CompositeEnum.PAGES;

  protected name!: Name;
  protected title!: Title;
  protected headerImage!: ImageUrl;
  protected backgroundColor!: Color;
  protected backgroundImage!: ImageUrl;
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

  public parseJson(jsonFields: JSONFields): PagesComposite {
    this.backgroundColor = new Color(jsonFields.backgroundColor || "");
    this.backgroundImage = new ImageUrl(jsonFields.backgroundImage || "");
    this.elements = new Elements(jsonFields.elements || []);
    this.headerImage = new ImageUrl(jsonFields.headerImage || "");
    this.name = new Name(jsonFields.name || "");
    this.title = new Title(jsonFields.title || "");

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
