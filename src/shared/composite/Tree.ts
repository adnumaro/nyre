import _ from "lodash";

import { ITree } from "@/IConfig";
import { ObjectMapType } from "@/shared/types/ObjectMap";

interface IObjectMap {
  [key: string]: any;
}

export default class Tree {
  private compositeMap: IObjectMap = {};

  public fromJson(json: ObjectMapType): any {
    let baseTree: any;

    if (
      json.hasOwnProperty("type") &&
      this.compositeMap.hasOwnProperty(json.type)
    ) {
      if (json.hasOwnProperty("elements")) {
        const elements = _.clone(json.elements);

        delete json.elements;

        baseTree = new this.compositeMap[json.type]().parseJson(json);

        elements.forEach((element: any) => {
          baseTree.add(this.fromJson(element));
        });
      } else {
        baseTree = new this.compositeMap[json.type]().parseJson(json);
      }

      return baseTree;
    }

    throw new Error(`Tree fromJson error: Type key doesn't exist in Tree composite map. type = ${json.type}`);
  }

  public setConfig(config: ITree) {
    this.compositeMap = config.compositeMap;
  }
}
