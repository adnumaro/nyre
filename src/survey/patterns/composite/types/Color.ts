// @ts-ignore
import * as t from 'io-ts'

import StringType from './primitives/StringType'
import ValidationType from './ValidationType'

const Type = StringType('Color')

type ColorType = t.TypeOf<typeof Type>

// TODO: Validate correctly Color (in hex or rgb)
export default class Color extends ValidationType {
  public value: ColorType

  constructor (value: string) {
    super(Type)

    if (Color.validate(value)) {
      this.value = value
    }
  }
}
