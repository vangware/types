import type { Unary } from "./Unary";

/**
 * Unary function that returns a boolean.
 *
 * @category Function
 */
export type Predicate<Input, Predicated extends Input = Input> =
	| Unary<Input, boolean>
	| ((input: Input) => input is Predicated);
