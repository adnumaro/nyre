import { CompositeTypes, LeafTypes } from './types/index'

import { ObjectMapType } from './Errors'

export abstract class Component {
  protected abstract type: CompositeTypes | LeafTypes

  protected parent: Component | null = null

  public setParent (parent: Component | null) {
    this.parent = parent
  }

  public getParent (): Component | null {
    return this.parent
  }

  public abstract add (component: Component): void

  public abstract remove (component: Component): void

  public abstract toJson (): Object

  public abstract parseJson (json: ObjectMapType): Component

  toString (): string {
    return JSON.stringify(this.toJson())
  }
}
