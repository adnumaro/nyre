// @ts-ignore
import * as t from 'io-ts'

import UrlType from './primitives/UrlType'
import ValidationType from './ValidationType'

const Type = UrlType('ImageUrl', ['.jpg', '.jpeg', '.png', '.gif'])

type ImageUrlType = t.TypeOf<typeof Type>

export default class ImageUrl extends ValidationType {
  public value: ImageUrlType

  constructor (value: string) {
    super(Type)

    if (ImageUrl.validate(value)) {
      this.value = value
    }
  }
}
