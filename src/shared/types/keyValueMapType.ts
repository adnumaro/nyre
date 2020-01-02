// @ts-ignore
import * as t from "io-ts";

import getTypeOf from "@/shared/utils/getTypeOf";

type KeyValueMap = {
  key: string;
  value: string;
};

function isArrayOfKeyValueMap(input: unknown | any | KeyValueMap[]): boolean {
  console.log("isArrayOfKeyValueMap input", input);

  return Array.isArray(input) &&
    input.filter((element: any) =>
      (element.hasOwnProperty("key") && getTypeOf(element.key) === "String") &&
      (element.hasOwnProperty("value") && getTypeOf(element.value) === "String"),
    ).length > 0;
}

export default function keyValueMapType(type: string) {
  return new t.Type<KeyValueMap[], KeyValueMap[], unknown>(
    type,
    (input: unknown): input is KeyValueMap[] => isArrayOfKeyValueMap(input),
    (input: any, context: any) => (isArrayOfKeyValueMap(input)
      ? t.success(input)
      : t.failure(input, context, `Type error: ChoiceMap must be of type array => { key: string, value: string }`)
    ),
    t.identity,
  );
}
