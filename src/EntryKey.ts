import type { Entry } from "./Entry";

/**
 * {@link Entry} key.
 *
 * @category Array
 * @category Object
 */
export type EntryKey<Input extends Entry> = Input[0];
