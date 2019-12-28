// @ts-ignore
import * as t from 'io-ts'

import ColorType from './primitives/ColorType'
import ValidationType from './ValidationType'

const Type = ColorType('Color')

type ColorType = t.TypeOf<typeof Type>

export default class Color extends ValidationType {
  public value: ColorType

  constructor (value: string) {
    super(Type)

    if (Color.validate(value)) {
      this.value = value
    }
  }
}
