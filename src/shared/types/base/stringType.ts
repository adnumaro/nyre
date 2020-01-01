// @ts-ignore
import * as t from "io-ts";

export default function stringType(type: string) {
  return new t.Type<string, string, unknown>(
    type,
    (input: unknown): input is string => typeof input === "string",
    (input: any, context: any) => (typeof input === "string"
      ? t.success(input)
      : t.failure(input, context, `Type error: ${type} must be of type string`)),
    t.identity,
  );
}
