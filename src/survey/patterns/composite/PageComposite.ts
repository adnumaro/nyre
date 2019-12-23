import { Component } from './Component'
import { CompositeTypes, Name, Title, Elements } from './types/index'

export default class PageComposite extends Component {
  protected type: CompositeTypes = CompositeTypes.PAGE

  protected name!: Name
  protected title!: Title
  protected elements!: Elements

  constructor (
    fields?: {
      name?: string,
      title?: string,
      elements?: any
    }) {
    super()

    this.parseJson(fields)
  }

  public add (component: Component): void {
    this.elements.value.add(component)

    component.setParent(this)
  }

  public remove (component: Component): void {
    this.elements.value.delete(component)

    component.setParent(null)
  }

  parseJson (
    fields?: {
      name?: string,
      title?: string,
      elements?: any
    }): PageComposite {
    this.name = new Name(fields?.name || '')
    this.title = new Title(fields?.title || '')
    this.elements = new Elements(fields?.elements || [])

    return this
  }

  toJson (): Object {
    const elements = []

    for (const component of this.elements.value) {
      elements.push(component.toJson())
    }

    return {
      type: this.type.toString(),
      name: this.name.value,
      title: this.title.value,
      elements
    }
  }
}
