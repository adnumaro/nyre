// @ts-ignore
import * as t from 'io-ts'

import { Component } from '../Component'

import ValidationType from './ValidationType'
import SetType from './primitives/SetType'

const Type = SetType<Component>('Elements')

type ElementsType = t.TypeOf<typeof Type>

export default class Elements extends ValidationType {
  public value!: Set<ElementsType>

  constructor (value: any) {
    super(Type)

    let tempValue = value instanceof Set ? value : new Set(value)

    if (Elements.validate(tempValue)) {
      this.value = tempValue
    }
  }
}
