import _ from "lodash";

import Component from "@/shared/composite/Component";
import ObjectMap from "@/shared/types/ObjectMap";
import ObjectMapIO from "@/shared/types/ObjectMapIO";
import { CompositeEnum, LeafEnum } from "@/survey/composite/Enums";

export default class TreeFactory {
  public baseTree: Component<CompositeEnum, LeafEnum> | undefined;
  private compositeMap: ObjectMap = {};

  constructor(config: ObjectMap) {
    this.compositeMap = config;
  }

  public setTreeContent(json: ObjectMapIO): void {
    this.baseTree = this.parseJson(_.cloneDeep(json));
  }

  public parseJson(json: ObjectMapIO): any {
    let baseTree: any;

    if (
      json.hasOwnProperty("type") &&
      this.compositeMap.hasOwnProperty(json.type)
    ) {
      if (json.hasOwnProperty("elements")) {
        const elements = _.cloneDeep(json.elements);

        delete json.elements;

        baseTree = new this.compositeMap[json.type](json);

        elements.forEach((element: any) => {
          baseTree.add(this.parseJson(element));
        });
      } else {
        baseTree = new this.compositeMap[json.type](json);
      }

      return baseTree;
    }

    throw new Error(`TreeFactory fromJson error: Type key doesn't exist in Tree composite map. type = ${json.type}`);
  }
}
