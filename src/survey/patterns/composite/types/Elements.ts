// @ts-ignore
import * as t from 'io-ts'

import ValidationType from './ValidationType'
import SetType from './primitives/SetType'

const Type = SetType('Elements')

type ElementsType = t.TypeOf<typeof Type>

export default class Elements extends ValidationType {
  public value!: Set<ElementsType>

  constructor (value: any) {
    super(Type)

    if (Elements.validate(value)) {
      this.value = new Set(value)
    }
  }
}
