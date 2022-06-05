import type { Unary } from "./Unary.js";

/**
 * Output type of an {@link Unary}.
 *
 * @category Function
 * @example
 * ```typescript
 * const unary: Unary<number, string> = n => `${n}`;
 * UnaryOutput<typeof unary> // `string`
 * ```
 */
export type UnaryOutput<UnaryFunction extends Unary<never, unknown>> =
	UnaryFunction extends Unary<never, infer Output> ? Output : never;
