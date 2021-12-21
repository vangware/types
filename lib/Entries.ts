import type { Entry } from "./Entry";

/**
 * Array of {@link Entry}.
 *
 * @category Array
 * @category Object
 * @example
 * ```typescript
 * const entries: Entries<string, number> = [
 * 	["foo", 1],
 * 	["bar", 2],
 * ];
 * ```
 */
export type Entries<Key = PropertyKey, Value = unknown> = ReadonlyArray<
	Entry<Key, Value>
>;
