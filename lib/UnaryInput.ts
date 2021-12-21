import type { Unary } from "./Unary";

/**
 * {@link Unary} input type.
 *
 * @category Function
 * @example
 * ```typescript
 * const unary: Unary<number, string> = n => `${n}`;
 * UnaryInput<typeof unary> // `number`
 * ```
 */
export type UnaryInput<UnaryFunction extends Unary<never, unknown>> =
	UnaryFunction extends Unary<infer Input, unknown> ? Input : never;
