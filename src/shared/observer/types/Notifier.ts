import Observer from "@/shared/observer/Observer";

declare type Notifier = {
  data: any,
  eventType: string,
  observer: Observer,
};

export default Notifier;
