import type { ReadOnlyArray } from "./ReadOnlyArray";

/**
 * Generic function type (safer than using `any`).
 *
 * @category Function
 * @example
 * ```typescript
 * const example = (callback: GenericFunction) => callback("test");
 * ```
 */
export type GenericFunction<
	Arguments extends ReadOnlyArray = ReadOnlyArray<never>,
	Output = unknown,
> = (..._arguments: Arguments) => Output;
