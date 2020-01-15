import Component from "@core/shared/domain/composite/Component";

// TODO: This must be not here
import { Name, Title } from "@core/shared/infrastructure/valueObject/index";
import Elements from "@core/survey/infrastructure/composite/valueObject/Elements";

import { CompositeEnum, LeafEnum } from "./Enums";

type JSONFields = {
  name?: string,
  title?: string,
  elements?: any,
};

export default class PageComposite extends Component<CompositeEnum, LeafEnum> {
  public readonly type: CompositeEnum = CompositeEnum.PAGE;

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

  public parseJson(jsonFields: JSONFields): PageComposite {
    this.name = new Name(jsonFields.name || "");
    this.title = new Title(jsonFields.title || "");
    this.elements = new Elements(jsonFields.elements || []);

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
