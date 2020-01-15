import _ from "lodash";

import ObjectMap from "@core/shared/domain/types/ObjectMap";

import Component from "@core/shared/domain/composite/Component";

import { CompositeEnum, LeafEnum } from "@core/survey/domain/composite/Enums";

export default class Factory {
  private tree: Component<CompositeEnum, LeafEnum> | undefined;
  private compositeMap: ObjectMap = {};

  constructor(config: ObjectMap) {
    this.compositeMap = config;
  }

  public setTree(json: ObjectMap): void {
    this.tree = this.parseJson(_.cloneDeep(json));
  }

  public getTree(): Component<CompositeEnum, LeafEnum> | undefined {
      return this.tree;
  }

  public parseJson(json: ObjectMap): any {
    let tree: any;

    if (
      json.hasOwnProperty("type") &&
      this.compositeMap.hasOwnProperty(json.type)
    ) {
      if (json.hasOwnProperty("elements")) {
        const elements = _.cloneDeep(json.elements);

        delete json.elements;

        tree = new this.compositeMap[json.type](json);

        elements.forEach((element: any) => {
          tree.add(this.parseJson(element));
        });
      } else {
        tree = new this.compositeMap[json.type](json);
      }

      return tree;
    }

    throw new Error(`TreeFactory fromJson error: Type key doesn't exist in Tree composite map. type = ${json.type}`);
  }
}
