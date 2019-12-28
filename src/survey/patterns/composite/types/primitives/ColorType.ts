// @ts-ignore
import * as t from 'io-ts'

// https://stackoverflow.com/questions/43706082/validation-hex-and-rgba-colors-using-regex-in-php
// https://regex101.com/r/A2IjNO/4
const HEX = '\#[\da-f]{3}|\#[\da-f]{6}'
const RGB = 'rgb\(' +
            '((\d{1,2}|1\d\d|2([0-4]\d|5[0-5]))\s*,\s*){2}' +
            '((\d{1,2}|1\d\d|2([0-4]\d|5[0-5]))\s*)' +
            '\)'
const RGBA = 'rgba\(' +
             '((\d{1,2}|1\d\d|2([0-4]\d|5[0-5]))\s*,\s*){2}' +
             '((\d{1,2}|1\d\d|2([0-4]\d|5[0-5]))\s*)' +
             '(,\s*(0\.\d+|1))' +
             '\)'
const HSL = 'hsl\(' +
            '\s*((\d{1,2}|[1-2]\d{2}|3([0-5]\d|60)))\s*,' +
            '\s*((\d{1,2}|100)\s*%)\s*,' +
            '\s*((\d{1,2}|100)\s*%)' +
            '\)'
const HSLA = 'hsla\(' +
             '\s*((\d{1,2}|[1-2]\d{2}|3([0-5]\d|60)))\s*,' +
             '\s*((\d{1,2}|100)\s*%)\s*,' +
             '\s*((\d{1,2}|100)\s*%)' +
             '(,\s*(0\.\d+|1))' +
             '\)'

const PATTERN = new RegExp(`^(${HEX}|${RGB}|${RGBA}|${HSL}|${HSLA})$`, 'i')

export default function URLType (type: string) {
  return new t.Type<string, string, unknown>(
    type,
    (input: unknown): input is string => typeof input === 'string' && (PATTERN.test(input) || !input),
    (input: any, context: any) => (
      typeof input === 'string' && (PATTERN.test(input) || !input)
        ? t.success(input)
        : t.failure(input, context, `Type error: ${type} has invalid url`)
    ),
    t.identity
  )
}
