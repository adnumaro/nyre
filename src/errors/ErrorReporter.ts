// @ts-ignore
import * as t from 'io-ts'
// @ts-ignore
import { pipe } from 'fp-ts/lib/pipeable'
// @ts-ignore
import { fold } from 'fp-ts/lib/Either'

export const ObjectMap = t.type({
  [t.string]: t.string | t.boolean | t.number
})

export type ObjectMapType = t.TypeOf<typeof ObjectMap>

export const errorReporter = <A> (validation: t.Validation<A>): Array<string> => {
  return pipe(validation, fold((errors: any[]) => errors.map(error => error.message), () => [null]))
}
