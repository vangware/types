import type { Unary } from "./Unary";

/**
 * {@link Unary} function that returns a boolean.
 *
 * @category Function
 * @example
 * ```typescript
 * const isEven: Predicate<number> = n => n % 2 === 0;
 * ```
 */
export type Predicate<Input, Predicated extends Input = Input> =
	| Unary<Input, boolean>
	| ((input: Input) => input is Predicated);
