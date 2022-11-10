import type { Enumerate } from "./Enumerate.js";

/**
 * Generates a range of numbers using `Enumerate` with given `Length` and
 * omitting the first `From` numbers.
 *
 * @category Number
 * @example
 * ```typescript
 * type From5To9 = Range<5, 10>; // 5, 6, 7, 8, 9
 * ```
 */
export type Range<From extends number, Length extends number> = Exclude<
	Enumerate<Length>,
	Enumerate<From>
>;
