import { Component } from './Component'
import { LeafTypes, Name, Title, Rules } from './types/index'

export default class TextLeaf extends Component {
  protected type: LeafTypes = LeafTypes.TEXT

  protected name!: Name
  protected title!: Title
  protected rules!: Rules

  constructor (
    fields?: {
      name?: string,
      title?: string,
      rules?: any
    }) {
    super()

    this.parseJson(fields)
  }

  parseJson (fields?: {
    name?: string,
    title?: string,
    rules?: {}
  }): TextLeaf {
    this.name = new Name(fields?.name || '')
    this.title = new Title(fields?.title || '')
    this.rules = new Rules(fields?.rules || {})

    return this
  }

  toJson (): Object {
    return {
      type: this.type.toString(),
      name: this.name.value,
      title: this.title.value,
      rules: this.rules.value
    }
  }

  add (): void {}

  remove (): void {}
}
