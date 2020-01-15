import IObserver from "../IObserver";

declare type Observers = {
  [eventType: string]: IObserver[];
};

export default Observers;
