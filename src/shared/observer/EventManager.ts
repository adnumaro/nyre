import Observer from "@/shared/observer/Observer";
import Subject from "@/shared/observer/Subject";

import Notifier from "@/shared/observer/types/Notifier";
import Observers from "@/shared/observer/types/Observers";

export default class EventManager extends Subject {
  private observers: Observers = {};

  public subscribe(eventType: string, observer: Observer): void {
    if (!this.observers[eventType]) {
      this.observers[eventType] = [];
    }

    this.observers[eventType].push(observer);
  }

  public unsubscribe(eventType: string, observer: Observer): void {
    const observers = this.observers[eventType];

    if (!observer) { return; }

    const index = observers.indexOf(observer);

    if (index > -1) { observers.splice(index, 1); }
  }

  public notify(context: any, eventType: string, data: any): Notifier[] | boolean {
    const observers = this.observers[eventType];

    if (!observers) { return false; }

    const notified: Notifier[] = [];

    observers.forEach((observer: Observer) => {
      observer.update(context, eventType, data);
      notified.push({ data, eventType, observer });
    });

    return notified;
  }
}
