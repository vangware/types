import type { Entry } from "./Entry";

/**
 * {@link Entry} key.
 *
 * @category Array
 * @category Object
 * @example
 * ```typescript
 * const entry: Entry<string, number> = ["foo", 1];
 * const entryKey: EntryKey<typeof entry> = entry[0];
 * ```
 */
export type EntryKey<Input extends Entry> = Input[0];
