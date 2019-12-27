// @ts-ignore
import * as t from 'io-ts'

import { Component } from '../../Component'

function arrayElementsInstanceOfComponent (input: unknown | any): boolean {
  return Array.isArray(input) && input.filter((component: any) => component instanceof Component).length === input.length
}

export default function ComponentSetType (type: string) {
  return new t.Type<Component[], Component[], unknown>(
    type,
    (input: unknown): input is Component[] => arrayElementsInstanceOfComponent(input),
    (input: any, context: any) => (arrayElementsInstanceOfComponent(input)
      ? t.success(input)
      : t.failure(input, context, `Type error: ${type} must be of type array`)),
    t.identity
  )
}
