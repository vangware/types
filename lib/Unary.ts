/**
 * Unary function (takes a single value).
 *
 * @category Function
 * @example
 * ```typescript
 * const unary: Unary<number, number> = n => n + 1;
 * ```
 */
export type Unary<Input, Output> = (input: Input) => Output;
