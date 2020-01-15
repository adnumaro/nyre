import ObjectMap from "./types/ObjectMap";

export default abstract class Serializable<T> {
  public abstract toJson(): object;
  public abstract parseJson(json: ObjectMap): T;
  public toString(): string {
    return JSON.stringify(this.toJson());
  }
}
