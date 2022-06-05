import type { Unary } from "./Unary.js";

/**
 * Input type of an {@link Unary}.
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
