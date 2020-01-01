import ValidationType from './ValidationType'

// TODO: Validate correctly Rules
export default class Rules extends ValidationType{
  public value: any

  constructor (value: any) {
    super()

    this.value = value
  }
}
