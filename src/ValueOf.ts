import type { KeyOf } from "./KeyOf";
import type { ReadOnlyArray } from "./ReadOnlyArray";
import type { ReadOnlyRecord } from "./ReadOnlyRecord";

/**
 * Generic key for either object or array.
 *
 * @category Array
 * @category Object
 */
export type ValueOf<ArrayOrObject extends ReadOnlyArray | ReadOnlyRecord> =
	ArrayOrObject[KeyOf<ArrayOrObject>];
