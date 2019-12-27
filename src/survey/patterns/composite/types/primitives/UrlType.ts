// @ts-ignore
import * as t from 'io-ts'

// https://www.quora.com/What-is-the-best-way-to-validate-for-a-URL-in-JavaScript
const PATTERN = (extensions: string[] = []) => {
  let ext = extensions.filter((extension: string) => extension).join('|').trim()

  return new RegExp(
    '^(https?:\/\/)?' + // protocol
    '((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|' + // Domain name
    '((\d{1,3}\.){3}\d{1,3}))' +                     // Or IP (v4) address
    '(\:\d+)?(\/[-a-z\d%_.~+]*)*' +                  // Port and path
    `[^>](${ext})$`,                                 // Extensions allowed
    'i'
  )
}

export default function URLType (type: string, extensions: string[] = []) {
  return new t.Type<string, string, unknown>(
    type,
    (input: unknown): input is string => typeof input === 'string' && (PATTERN(extensions).test(input) || !input),
    (input: any, context: any) => (
      typeof input === 'string' && (PATTERN(extensions).test(input) || !input)
        ? t.success(input)
        : t.failure(input, context, `Type error: ${type} has invalid url`)
    ),
    t.identity
  )
}
