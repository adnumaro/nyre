/**
 * The Originator holds some important state that may change over time. It also
 * defines a method for saving the state inside a memento and another method for
 * restoring the state from it.
 *
 * Must be allowed to specify the type of state (T)
 * and the type that will save in the state (C)
 */
export default abstract class Originator<T, C> {
  protected abstract readonly state: T;

  public abstract save(state: C): void;

  public abstract restore(): void;
}
