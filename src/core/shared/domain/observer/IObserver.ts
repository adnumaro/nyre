export default interface IObserver {
  update(context: any, eventType: string, data: any): void;
}
