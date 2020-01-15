import IMemento from "./IMemento";

export default class Memento<T> implements IMemento<T> {
  private readonly state: T;
  private readonly date: Date;

  constructor(state: T) {
    this.state = state;
    this.date = new Date();
  }

  public getState(): T {
    return this.state;
  }

  public getDate(): Date {
    return this.date;
  }
}
