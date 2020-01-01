// @ts-ignore
import * as t from 'io-ts'

function mapOfElementsInstanceOf<K, V> (input: unknown | any | Map<K, V>): boolean {
  return input instanceof Map && every(input)
}

function every<K, V>(input: Map<K, V>) {
  let errors: boolean[] = []

  input.forEach(async(value: V, key: K) => {
    // @ts-ignore
    if ((value instanceof V || typeof value === V) && (key instanceof K || typeof key === K)) {
      errors.push(false)
    }

    errors.push(true)
  })

  return errors.filter(error => error).length === 0
}

export default function MapType<K, V> (type: string) {
  return new t.Type<Map<K, V>, Map<K, V>, unknown>(
    type,
    (input: unknown): input is Map<K, V> => mapOfElementsInstanceOf<K, V>(input),
    (input: any, context: any) => (mapOfElementsInstanceOf<K, V>(input)
      ? t.success(input)
      : t.failure(input, context, `Type error: ${type} must be of type map`)),
    t.identity
  )
}
