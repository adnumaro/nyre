import Notifier from "./types/Notifier";
import Observers from "./types/Observers";

import IObserver from "./IObserver";
import ISubject from "./ISubject";

export default class EventManager implements ISubject {
  private observers: Observers = {};

  public subscribe(eventType: string, observer: IObserver): void {
    if (!this.observers[eventType]) {
      this.observers[eventType] = [];
    }

    this.observers[eventType].push(observer);
  }

  public unsubscribe(eventType: string, observer: IObserver): void {
    const observers = this.observers[eventType];

    if (!observer) { return; }

    const index = observers.indexOf(observer);

    if (index > -1) { observers.splice(index, 1); }
  }

  public notify(context: any, eventType: string, data: any): Notifier[] | boolean {
    const observers = this.observers[eventType];

    if (!observers) { return false; }

    const notified: Notifier[] = [];

    observers.forEach((observer: IObserver) => {
      observer.update(context, eventType, data);
      notified.push({ data, eventType, observer });
    });

    return notified;
  }
}
