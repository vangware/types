import type { ReadOnlyDeep } from "./ReadOnlyDeep.js";

/**
 * Value might be an `AsyncIterable` or just an `Iterable`.
 *
 * @category Iterables
 */
export type AsynchronousIterable<Item = unknown> = ReadOnlyDeep<
	AsyncIterable<Item> | Iterable<Item>
>;
