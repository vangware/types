import type { Unary } from "./Unary";

/**
 * {@link Unary} input type.
 *
 * @category Function
 */
export type UnaryInput<UnaryFunction extends Unary<never, unknown>> =
	UnaryFunction extends Unary<infer Input, unknown> ? Input : never;
