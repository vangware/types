import type { NeverFallback } from "./NeverFallback.js";

/**
 * Get type of `index` of array (can be a `const` number or just a `number`).
 *
 * @category Array
 * @example
 * ```typescript
 * const lengthConst: KeyOfArray<[1, 2, 3]> = 2; // Can be: 0 | 1 | 2
 * const lengthUnknown: KeyOfArray<ReadOnlyArray<number>> = 10; // Can be any number
 * ```
 */
export type KeyOfArray<Input extends ArrayLike<unknown>> = NeverFallback<
	Exclude<Partial<Input>["length"], Input["length"]>,
	number
>;
