import { ObjectMapType } from "@/shared/types/ObjectMap";

export abstract class Component<C, L> {
  protected abstract type: C | L;

  protected parent: Component<C, L> | null = null;

  public setParent(parent: Component<C, L> | null) {
    this.parent = parent;
  }

  public getParent(): Component<C, L> | null {
    return this.parent;
  }

  public abstract add(component: Component<C, L>): void;

  public abstract remove(component: Component<C, L>): void;

  public abstract toJson(): object;

  public abstract parseJson(json: ObjectMapType): Component<C, L>;

  public toString(): string {
    return JSON.stringify(this.toJson());
  }
}
