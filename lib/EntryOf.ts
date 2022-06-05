import type { Entry } from "./Entry.js";
import type { KeyOf } from "./KeyOf.js";
import type { ReadOnlyArray } from "./ReadOnlyArray.js";
import type { ReadOnlyRecord } from "./ReadOnlyRecord.js";
import type { ValueOf } from "./ValueOf.js";

/**
 * Object or array {@link Entry}.
 *
 * @category Array
 * @category Object
 * @example
 * ```typescript
 * const object = {
 * 	"🟢": 1,
 * 	"🟩": 2,
 * };
 * const entries: EntryOf<typeof object> = Object.entries(object)[0];
 * ```
 */
export type EntryOf<ArrayOrRecord extends ReadOnlyArray | ReadOnlyRecord> =
	Entry<KeyOf<ArrayOrRecord>, ValueOf<ArrayOrRecord>>;
