import { Component } from './Component'
import { CompositeTypes, Name, Title, ImageUrl, Color, Elements } from './types/index'

export default class PagesComposite extends Component {
  protected type: CompositeTypes = CompositeTypes.PAGES

  protected name!: Name
  protected title!: Title
  protected headerImage!: ImageUrl
  protected backgroundColor!: Color
  protected backgroundImage!: ImageUrl
  protected elements!: Elements

  constructor (
    fields?: {
      name?: string,
      title?: string,
      headerImage?: string,
      backgroundColor?: string,
      backgroundImage?: string,
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
      headerImage?: string,
      backgroundColor?: string,
      backgroundImage?: string,
      elements?: any
    }): PagesComposite {
    this.name = new Name(fields?.name || '')
    this.title = new Title(fields?.title || '')
    this.headerImage = new ImageUrl(fields?.headerImage || '')
    this.backgroundColor = new Color(fields?.backgroundColor || '')
    this.backgroundImage = new ImageUrl(fields?.backgroundImage || '')
    this.elements = new Elements(fields?.elements || [])

    return this
  }

  toJson (): Object {
    const elements = []

    for (const element of this.elements.value) {
      elements.push(element.toJson())
    }

    return {
      type: this.type.toString(),
      name: this.name.value,
      title: this.title.value,
      headerImage: this.headerImage.value,
      backgroundColor: this.backgroundColor.value,
      backgroundImage: this.backgroundImage.value,
      elements
    }
  }
}
