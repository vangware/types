import type { Predicate } from "./Predicate";
import type { Unary } from "./Unary";

/**
 * Curried function that takes a `Right` and a `Left` value and returns a
 * `boolean` representing a comparison between those values.
 *
 * @category Function
 * @example
 * ```typescript
 * const biggerThan: Comparison<number> = right => left => right > left;
 * ```
 */
export type Comparison<
	Right,
	Left extends Right = Right,
	Predicated extends Left = Left,
> = Unary<Right, Predicate<Left, Predicated>>;
