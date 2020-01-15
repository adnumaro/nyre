// @ts-ignore
import * as t from "io-ts";

export default function number(type: string) {
  return new t.Type<number, number, unknown>(
    type,
    (input: unknown): input is number => typeof input === "number",
    (input: any, context: any) => (
      typeof input === "number"
        ? t.success(input)
        : t.failure(input, context, `Type error: ${type} must be of type number`)),
    t.identity,
  );
}
