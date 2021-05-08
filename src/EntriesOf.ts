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
 */
export type EntriesOf<Input extends ReadOnlyArray | ReadOnlyRecord> = Entries<
	KeyOf<Input>,
	ValueOf<Input>
>;
