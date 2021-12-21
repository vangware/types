import type { Unary } from "./Unary";

/**
 * Sorter function.
 *
 * @category Array
 * @category Function
 * @example
 * ```typescript
 * const array: ReadOnlyArray<number> = [1, 2, 3];
 * const sorter: Sorter<number> = value1 => value2 => value1 - value2;
 * ```
 */
export type Sorter<Item> = Unary<Item, Unary<Item, number>>;
