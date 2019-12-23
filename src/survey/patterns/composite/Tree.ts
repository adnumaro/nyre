import { Component } from './Component'
import PagesComposite from './PagesComposite'
import PageComposite from './PageComposite'
import PanelComposite from './PanelComposite'
import RadiobuttomLeaf from './RadiobuttomLeaf'
import TextLeaf from './TextLeaf'

import { ObjectMapType } from './Errors'

type ObjectMap = {
  [key: string]: any
}

export default class Tree {
  // This map must be load dynamically from a global instance
  // of different frameworks
  private compositeMap: ObjectMap = {
    pages: PagesComposite,
    page: PageComposite,
    panel: PanelComposite,
    radiobutton: RadiobuttomLeaf,
    text: TextLeaf
  }

  static fromJson (json: ObjectMapType): Component {
    const self: Tree = new Tree()
    let baseTree: Component

    if (
      json.hasOwnProperty('type') &&
      self.compositeMap.hasOwnProperty(json.type)
    ) {
      if (json.hasOwnProperty('elements')) {
        const elements = [...json.elements]

        delete json.elements

        baseTree = new self.compositeMap[json.type]().parseJson(json)

        elements.forEach(element => {
          baseTree.add(Tree.fromJson(element))
        })
      } else {
        baseTree = new self.compositeMap[json.type]().parseJson(json)
      }

      return baseTree
    }

    throw new Error(`Tree fromJson error: Type key doesn't exist in Tree composite map. type = ${json.type}`)
  }
}
