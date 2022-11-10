/**
 * Recursive type to get a list of numbers of the given length.
 *
 * @category Number
 * @example
 * ```typescript
 * type From0To10 = Enumerate<11>;
 * ```
 */
export type Enumerate<
	Length extends number,
	Accumulator extends ReadonlyArray<number> = readonly [],
> = Accumulator["length"] extends Length
	? Accumulator[number]
	: Enumerate<Length, readonly [...Accumulator, Accumulator["length"]]>;
