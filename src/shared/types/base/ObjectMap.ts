// @ts-ignore
import * as t from "io-ts";

const ObjectMap = t.type({
  // tslint:disable-next-line: no-bitwise
  [t.string]: t.string | t.boolean | t.number,
});

export type ObjectMapType = t.TypeOf<typeof ObjectMap>;
