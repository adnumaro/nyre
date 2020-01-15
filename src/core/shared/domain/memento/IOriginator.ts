export default interface IOriginator<T, C> {
  readonly state: T;

  save(state: C): void;
  restore(): void;
}
