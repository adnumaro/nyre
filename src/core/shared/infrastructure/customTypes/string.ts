// @ts-ignore
import * as t from "io-ts";

type Options = {
  name: string,
};

export default function string(
  options: Options = {
    name: "String",
  },
) {
  return new t.Type<string, string, unknown>(
    options.name,
    (input: unknown): input is string => typeof input === "string",
    (input: any, context: any) => (
      typeof input === "string"
        ? t.success(input)
        : t.failure(input, context, `Type error: ${options.name} must be of type string`)),
    t.identity,
  );
}
