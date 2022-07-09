/**
 * Value might be an `AsyncIterable` or just an `Iterable`.
 *
 * @category Iterables
 */
export type AsynchronousIterable<Item = unknown> =
	| AsyncIterable<Item>
	| Iterable<Item>;
