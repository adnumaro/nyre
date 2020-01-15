// @ts-ignore
import * as t from "io-ts";

// https://www.quora.com/What-is-the-best-way-to-validate-for-a-URL-in-JavaScript
const PATTERN = (extensions: string[] = []) => {
  const ext = extensions.filter((extension: string) => extension).join("|").trim();

  return new RegExp(
    "^(http[s]?:\/\/)?" + // Protocol
    "(([a-z\d]+).?([a-z\d]+)?(.[a-z\d]{2,})?([a-z\d]*)|" + // Domain name or
    "([\d]{1,3}\.){3}[\d]{1,3})" + // IP (v4) address
    "([a-z0-9%_~\+-\/]*)" + // File extensions
    `.(${ext})$`,
    "i",
  );
};

function isUrlType(input: unknown, extensions?: string[]): boolean {
  return typeof input === "string" &&
    (PATTERN(extensions).test(input) || !input);
}

type Options = {
  name: string,
  extensions: string[],
};

export default function url(
  options: Options = {
    name: "Url",
    extensions: [],
  },
) {
  return new t.Type<string, string, unknown>(
    options.name,
    (input: unknown): input is string => isUrlType(input, options.extensions),
    (input: any, context: any) => (
      isUrlType(input, options.extensions)
        ? t.success(input)
        : t.failure(input, context, `Type error: ${options} has invalid url`)
    ),
    t.identity,
  );
}
