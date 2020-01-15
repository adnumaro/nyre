export default interface IComponent<C, L> {
  readonly type: C | L;

  setParent(parent: IComponent<C, L> | null): void;
  getParent(): IComponent<C, L> | null;
}
