import type { Unary } from "./Unary";

/**
 * Reducer/Folder function.
 *
 * @category Array
 * @category Function
 * @example
 * ```typescript
 * const array: ReadOnlyArray<number> = [1, 2, 3];
 * const reducer: Reducer<number, number> = item => accumulator => accumulator + item;
 * ```
 */
export type Reducer<Item, Accumulator> = Unary<
	Item,
	Unary<Accumulator, Accumulator>
>;
