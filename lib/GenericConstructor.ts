import type { ReadOnlyArray } from "./ReadOnlyArray.js";

/**
 * Generic constructor function.
 *
 * @category Function
 * @example
 * ```typescript
 * const example = (AClass: GenericConstructor) => new AClass("test");
 * ```
 */
export type GenericConstructor<
	Arguments extends ReadOnlyArray = ReadOnlyArray<never>,
	Instance = unknown,
> = new (..._arguments: Arguments) => Instance;
