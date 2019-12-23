import ValidationType from './ValidationType'

// TODO: Validate correctly ChoiceMap
export default class ChoiceMap extends ValidationType {
  public value: any

  constructor (value: any) {
    super()

    this.value = value
  }
}
