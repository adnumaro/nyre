// @ts-ignore
import * as t from "io-ts";

import getTypeOf from "@core/shared/utils/getTypeOf";

type KeyValueMapType = {
  key: string;
  value: string;
};

function isArrayOfKeyValueMap(input: unknown | any | KeyValueMapType[]): boolean {
  return Array.isArray(input) &&
    input.filter((element: any) =>
      (element.hasOwnProperty("key") && getTypeOf(element.key) === "String") &&
      (element.hasOwnProperty("value") && getTypeOf(element.value) === "String"),
    ).length > 0;
}

export default function keyValueMap(type: string) {
  return new t.Type<KeyValueMapType[], KeyValueMapType[], unknown>(
    type,
    (input: unknown): input is KeyValueMapType[] => isArrayOfKeyValueMap(input),
    (input: any, context: any) => (
      isArrayOfKeyValueMap(input)
        ? t.success(input)
        : t.failure(input, context, `Type error: ChoiceMap must be of type array => { key: string, value: string }`)
    ),
    t.identity,
  );
}
