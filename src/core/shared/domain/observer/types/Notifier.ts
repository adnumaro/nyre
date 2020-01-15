import IObserver from "../IObserver";

declare type Notifier = {
  data: any,
  eventType: string,
  observer: IObserver,
};

export default Notifier;
