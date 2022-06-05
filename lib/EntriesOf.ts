import type { Entries } from "./Entries.js";
import type { KeyOf } from "./KeyOf.js";
import type { ReadOnlyArray } from "./ReadOnlyArray.js";
import type { ReadOnlyRecord } from "./ReadOnlyRecord.js";
import type { ValueOf } from "./ValueOf.js";

/**
 * Array of {@link EntryOf}.
 *
 * @category Array
 * @category Object
 * @example
 * ```typescript
 * const object = {
 * 	"🟢": 1,
 * 	"🟩": 2,
 * };
 * const entries: EntriesOf<typeof object> = Object.entries(object);
 * ```
 */
export type EntriesOf<ArrayOrRecord extends ReadOnlyArray | ReadOnlyRecord> =
	Entries<KeyOf<ArrayOrRecord>, ValueOf<ArrayOrRecord>>;
