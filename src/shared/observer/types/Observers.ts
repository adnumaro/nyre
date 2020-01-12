import Observer from "@/shared/observer/Observer";

declare type Observers = {
  [eventType: string]: Observer[];
};

export default Observers;
