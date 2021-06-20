import type { Unary } from "./Unary";

/**
 * {@link Unary} function that takes a `Wanted` value and returns another
 * {@link Unary} function that takes a `Received` value and returns a `boolean`.
 *
 * @category Function
 */
export type Comparative<Wanted, Received extends Wanted = Wanted> = Unary<
	Wanted,
	Unary<Received, boolean>
>;
