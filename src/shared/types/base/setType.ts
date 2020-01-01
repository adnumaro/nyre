// @ts-ignore
import * as t from "io-ts";

export default function setType<T>(type: string) {
  return new t.Type<Set<T>, Set<T>, unknown>(
    type,
    (input: unknown): input is Set<T> => input instanceof Set,
    (input: any, context: any) => (input instanceof Set
      ? t.success(input)
      : t.failure(input, context, `Type error: ${type} must be of type set`)
    ),
    t.identity,
  );
}
