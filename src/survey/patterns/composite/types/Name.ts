// @ts-ignore
import * as t from 'io-ts'

import StringType from './primitives/StringType'
import ValidationType from './ValidationType'

const Type = StringType('Name')

type NameType = t.TypeOf<typeof Type>

export default class Name extends ValidationType {
  public value: NameType

  constructor (value: string) {
    super(Type)

    if (Name.validate(value)) {
      this.value = value
    }
  }
}
