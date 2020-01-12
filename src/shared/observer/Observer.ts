export default abstract class Observer {
  public abstract update(context: any, eventType: string, data: any): void;
}
