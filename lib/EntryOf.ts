import type { Entry } from "./Entry";
import type { KeyOf } from "./KeyOf";
import type { ReadOnlyArray } from "./ReadOnlyArray";
import type { ReadOnlyRecord } from "./ReadOnlyRecord";
import type { ValueOf } from "./ValueOf";

/**
 * {@link Entry} of given array or object.
 *
 * @category Array
 * @category Object
 * @example
 * ```typescript
 * const object = {
 * 	foo: 1,
 * 	bar: 2,
 * };
 * const entries: EntryOf<typeof object> = Object.entries(object)[0];
 * ```
 */
export type EntryOf<ArrayOrRecord extends ReadOnlyArray | ReadOnlyRecord> =
	Entry<KeyOf<ArrayOrRecord>, ValueOf<ArrayOrRecord>>;
