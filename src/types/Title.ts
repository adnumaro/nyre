// @ts-ignore
import * as t from 'io-ts'

import StringType from './primitives/StringType'
import ValidationType from './ValidationType'

const Type = StringType('Title')

type TitleType = t.TypeOf<typeof Type>

export default class Title extends ValidationType {
  public value: TitleType

  constructor (value: string) {
    super(Type)

    if (Title.validate(value)) {
      this.value = value
    }
  }
}
