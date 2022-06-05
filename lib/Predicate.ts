import type { Unary } from "./Unary.js";

/**
 * Function that returns `boolean` ({@link Unary}).
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
