import Payload from "@/shared/observer/types/Payload";

export default abstract class Observer {
  public abstract update(context: any, payload: Payload): void;
}
