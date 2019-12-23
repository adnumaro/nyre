// @ts-ignore
import * as t from 'io-ts'

import StringType from './primitives/StringType'
import ValidationType from './ValidationType'

const Type = StringType('ImageUrl')

type ImageUrlType = t.TypeOf<typeof Type>

// TODO: Validate correctly ImageUrl (check well formed url and check if is an image)
export default class ImageUrl extends ValidationType {
  public value: ImageUrlType

  constructor (value: string) {
    super(Type)

    if (ImageUrl.validate(value)) {
      this.value = value
    }
  }
}
