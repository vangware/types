import type { Unary } from "./Unary";

/**
 * Sorter function.
 *
 * @category Array
 * @category Function
 */
export type Sorter<Item> = Unary<Item, Unary<Item, number>>;
