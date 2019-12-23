import { Component } from './Component'
import { LeafTypes, Name, Title, ChoiceMap, Rules } from './types/index'

export default class RadiobuttonLeft extends Component {
  protected type: LeafTypes = LeafTypes.RADIOBUTTON

  protected name!: Name
  protected title!: Title
  protected choices!: ChoiceMap
  protected rules!: Rules

  constructor (
    fields?: {
      name?: string,
      title?: string,
      choices?: any,
      rules?: any
    }) {
    super()

    this.parseJson(fields)
  }

  parseJson (fields?: {
    name?: string,
    title?: string,
    choices?: string,
    rules?: string
  }): RadiobuttonLeft {
    this.name = new Name(fields?.name || '')
    this.title = new Title(fields?.title || '')
    this.choices = new ChoiceMap(fields?.choices || {})
    this.rules = new Rules(fields?.rules || {})

    return this
  }

  toJson (): Object {
    return {
      type: this.type.toString(),
      name: this.name.value,
      title: this.title.value,
      choices: this.choices.value,
      rules: this.rules.value
    }
  }

  add (): void {}

  remove (): void {}
}
