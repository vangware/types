import type { Unary } from "./Unary";

/**
 * {@link Unary} output type.
 *
 * @category Function
 */
export type UnaryOutput<UnaryFunction extends Unary<never, unknown>> =
	UnaryFunction extends Unary<never, infer Output> ? Output : never;
