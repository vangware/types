import type { Unary } from "./Unary";

/**
 * Reducer/Folder function.
 *
 * @category Array
 * @category Function
 */
export type Reducer<Item, Accumulator> = Unary<
	Item,
	Unary<Accumulator, Accumulator>
>;
