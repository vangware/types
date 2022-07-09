import type { AsynchronousIterable } from "./AsynchronousIterable.js";

/**
 * Type to get the type of the items of an iterable.
 *
 * @category Iterables
 */
export type AsynchronousIterableItem<
	SourceIterable extends AsynchronousIterable,
> = SourceIterable extends AsynchronousIterable<infer Item> ? Item : never;
