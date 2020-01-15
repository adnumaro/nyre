// @ts-ignore
import { fold } from "fp-ts/lib/Either";
// @ts-ignore
import { pipe } from "fp-ts/lib/pipeable";
// @ts-ignore
import { Validation as t } from "io-ts";

export default class Reporter {
  public static REPORT<A>(validation: t.Validation<A>): string[] {
    return pipe(
      validation,
      fold(
        (errors: any[]) => new Error(errors.map((error) => error.message).join("\n")),
        (value: any | any[]) => value,
      ),
    );
  }
}
