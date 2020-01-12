import Observer from "@/shared/observer/Observer";
import Notifier from "@/shared/observer/types/Notifier";

export default abstract class Subject {
  public abstract subscribe(eventType: string, observer: Observer): void;

  public abstract unsubscribe(eventType: string, observer: Observer): void;

  public abstract notify(context: any, eventType: string, data: any): Notifier[] | boolean;
}
