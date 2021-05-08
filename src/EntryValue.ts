import type { Entry } from "./Entry";

/**
 * {@link Entry} value.
 *
 * @category Array
 * @category Object
 */
export type EntryValue<Input extends Entry> = Input[1];
