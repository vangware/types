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
 */
export type EntryOf<Input extends ReadOnlyArray | ReadOnlyRecord> = Entry<
	KeyOf<Input>,
	ValueOf<Input>
>;
