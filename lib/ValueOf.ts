import type { KeyOf } from "./KeyOf.js";
import type { ReadOnlyArray } from "./ReadOnlyArray.js";
import type { ReadOnlyRecord } from "./ReadOnlyRecord.js";

/**
 * Generic key for either object or array.
 *
 * @category Array
 * @category Object
 * @example
 * ```typescript
 * const object: ReadOnlyRecord<number> = {
 * 	"🟢": 1,
 * 	"🟩": 2,
 * };
 * const key: ValueOf<typeof object> = 1;
 * ```
 */
export type ValueOf<ArrayOrObject extends ReadOnlyArray | ReadOnlyRecord> =
	ArrayOrObject[KeyOf<ArrayOrObject>];
