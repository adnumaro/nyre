export default interface IMemento<T> {
  getState(): T;
  getDate(): Date;
}
