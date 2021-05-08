import type { Entry } from "./Entry";

/**
 * Array of {@link Entry}.
 *
 * @category Array
 * @category Object
 */
export type Entries<Key = PropertyKey, Value = unknown> = ReadonlyArray<
	Entry<Key, Value>
>;
