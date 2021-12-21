import type { KeyOf } from "./KeyOf";
import type { ReadOnlyArray } from "./ReadOnlyArray";
import type { ReadOnlyRecord } from "./ReadOnlyRecord";

/**
 * Generic key for either object or array.
 *
 * @category Array
 * @category Object
 * @example
 * ```typescript
 * const object: ReadOnlyRecord<number> = {
 * 	foo: 1,
 * 	bar: 2,
 * };
 * const key: ValueOf<typeof object> = 1;
 * ```
 */
export type ValueOf<ArrayOrObject extends ReadOnlyArray | ReadOnlyRecord> =
	ArrayOrObject[KeyOf<ArrayOrObject>];
