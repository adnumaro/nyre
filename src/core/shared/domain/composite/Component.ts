import ObjectMap from "../types/ObjectMap";

import Serializable from "../Serializable";

import IComponent from "./IComponent";

export default abstract class Component<C, L> extends Serializable<IComponent<C, L>> implements IComponent<C, L> {
  public abstract readonly type: C | L;

  protected parent: IComponent<C, L> | null = null;

  public setParent(parent: IComponent<C, L> | null): void {
    this.parent = parent;
  }

  public getParent(): IComponent<C, L> | null {
    return this.parent;
  }

  public abstract add(component: IComponent<C, L>): void;

  public abstract remove(component: IComponent<C, L>): void;

  public abstract toJson(): object;

  public abstract parseJson(json: ObjectMap): IComponent<C, L>;
}
