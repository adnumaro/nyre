// @ts-ignore
import * as t from 'io-ts'

import ValidationType from './ValidationType'
import MapType from './primitives/MapType'

const Type = MapType<string, string>('Choice')

type ElementsType = t.TypeOf<typeof Type>

export default class ChoiceMap extends ValidationType {
  public value!: ElementsType

  constructor (value: any) {
    super(Type)

    let tempValue =
      value instanceof Map ? value :
        new Map(value)

    if (ChoiceMap.validate(tempValue)) {
      this.value = tempValue
    }
  }
}
