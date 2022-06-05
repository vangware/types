import type { Entry } from "./Entry.js";

/**
 * Array of {@link Entry}.
 *
 * @category Array
 * @category Object
 * @example
 * ```typescript
 * const entries: Entries<string, number> = [
 * 	["🟢", 1],
 * 	["🟩", 2],
 * ];
 * ```
 */
export type Entries<Key = PropertyKey, Value = unknown> = ReadonlyArray<
	Entry<Key, Value>
>;
