import type { Unary } from "./Unary.js";

/**
 * Unary function that returns a `boolean`.
 *
 * @category Function
 * @remarks
 * This type is useful for cases where a function needs to check if a certain
 * condition holds for an input value. For example, the type of a function that
 * checks if a number is even could be typed as `Predicate<number>`, a filtering
 * function could look like `Predicate<string | number, string>`, and so on.
 * @example
 * ```typescript
 * const isEven: Predicate<number> = number => number % 2 === 0;
 * ```
 * @see {Unary}
 *
 * @template Input The type of the input value.
 * @template Predicated The subset of `Input` for which the predicate holds.
 * @param input The input value to check.
 * @returns `true` if the predicate holds for the input value, and `false`
 * otherwise.
 */
export type Predicate<Input, Predicated extends Input = Input> =
	| Unary<Input, boolean>
	| ((input: Input) => input is Predicated);
