import type { KeyOfArray } from "./KeyOfArray.js";
import type { ReadOnlyArray } from "./ReadOnlyArray.js";
import type { ReadOnlyRecord } from "./ReadOnlyRecord.js";

/**
 * Generic key for either object or array.
 *
 * @category Array
 * @category Object
 */
export type KeyOf<ArrayOrRecord extends ReadOnlyArray | ReadOnlyRecord> =
	ArrayOrRecord extends ReadOnlyArray
		? KeyOfArray<ArrayOrRecord>
		: keyof ArrayOrRecord extends Exclude<PropertyKey, symbol>
		? `${keyof ArrayOrRecord}`
		: never;
