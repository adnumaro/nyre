// @ts-ignore
import * as t from "io-ts";

import getTypeOf from "@/shared/utils/getTypeOf";
import ValidationType from "@/shared/ValidationType";

type KeyValueMap = {
  key: string;
  value: string;
};

function setOfElementsInstanceOf(input: unknown | any | KeyValueMap[]): boolean {
  return Array.isArray(input) &&
    input.filter((element: any) =>
      (element.hasOwnProperty("key") && getTypeOf(element.key) === "String") &&
      (element.hasOwnProperty("value") && getTypeOf(element.value) === "String"),
    ).length > 0;
}

const Type = new t.Type<KeyValueMap[], KeyValueMap[], unknown>(
  "ChoiceMap",
  (input: unknown): input is KeyValueMap[] => setOfElementsInstanceOf(input),
  (input: any, context: any) => (setOfElementsInstanceOf(input)
    ? t.success(input)
    : t.failure(input, context, `Type error: ChoiceMap must be of type array => { key: string, value: string }`)
  ),
  t.identity,
);

type KeyValueMapType = t.TypeOf<typeof Type>;

export default class ChoiceMap extends ValidationType {
  public value!: KeyValueMapType[];

  constructor(value: any) {
    super(Type);

    if (ChoiceMap.VALIDATE(value)) {
      this.value = value;
    }
  }
}
