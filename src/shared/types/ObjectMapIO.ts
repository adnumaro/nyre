// @ts-ignore
import * as t from "io-ts";

const ObjectMap = t.type({
  // tslint:disable-next-line: no-bitwise
  [t.string]: t.string | t.boolean | t.number,
});

declare type ObjectMapIO = t.TypeOf<typeof ObjectMap>;

export default ObjectMapIO;
