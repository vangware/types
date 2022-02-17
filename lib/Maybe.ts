/**
 * Value that can be undefined.
 *
 * @category Common
 * @example
 * ```typescript
 * type MaybeNumber = Maybe<number>;
 * const maybeNumber: MaybeNumber = 1;
 * const notNumber: MaybeNumber = undefined;
 * ```
 */
export type Maybe<Value> = Value | undefined;
