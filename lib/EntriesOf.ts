import type { Entries } from "./Entries";
import type { KeyOf } from "./KeyOf";
import type { ReadOnlyArray } from "./ReadOnlyArray";
import type { ReadOnlyRecord } from "./ReadOnlyRecord";
import type { ValueOf } from "./ValueOf";

/**
 * Array of {@link EntryOf}.
 *
 * @category Array
 * @category Object
 * @example
 * ```typescript
 * const object = {
 * 	foo: 1,
 * 	bar: 2,
 * };
 * const entries: EntriesOf<typeof object> = Object.entries(object);
 * ```
 */
export type EntriesOf<ArrayOrRecord extends ReadOnlyArray | ReadOnlyRecord> =
	Entries<KeyOf<ArrayOrRecord>, ValueOf<ArrayOrRecord>>;
