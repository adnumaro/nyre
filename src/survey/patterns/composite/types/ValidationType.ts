import { errorReporter } from '../Errors'

export default abstract class ValidationType {
  private static ownType: any

  protected constructor (type?: any) {
    ValidationType.ownType = type
  }

  static validate (value: string) {
    let result = ValidationType.ownType.decode(value)
    let errors = []

    errors.push(errorReporter(result)[0])

    if (errors.filter(error => error).length === 0) {
      return true
    }

    throw new Error(errors.pop())
  }
}
