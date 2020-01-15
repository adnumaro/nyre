import Notifier from "./types/Notifier";

import IObserver from "./IObserver";

export default interface ISubject {
  subscribe(eventType: string, observer: IObserver): void;

  unsubscribe(eventType: string, observer: IObserver): void;

  notify(context: any, eventType: string, data: any): Notifier[] | boolean;
}
