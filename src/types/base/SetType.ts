// @ts-ignore
import * as t from 'io-ts'

function setOfElementsInstanceOf<T> (input: unknown | any | Set<T>): boolean {
  return input instanceof Set && every(input)
}

function every<T> (input: Set<T>) {
  let errors: boolean[] = []

  input.forEach(async (element: T) => {
    // @ts-ignore
    if (element instanceof T || typeof element === T) {
      errors.push(false)
    }

    errors.push(true)
  })

  return errors.filter(error => error).length === 0
}

export default function SetType<T> (type: string) {
  return new t.Type<Set<T>, Set<T>, unknown>(
    type,
    (input: unknown): input is Set<T> => setOfElementsInstanceOf<T>(input),
    (input: any, context: any) => (
      setOfElementsInstanceOf<T>(input) ? t.success(input) :
        t.failure(input, context, `Type error: ${type} must be of type set`)
    ),
    t.identity
  )
}
