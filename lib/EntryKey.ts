import type { Entry } from "./Entry.js";

/**
 * Key of an {@link Entry}.
 *
 * @category Array
 * @category Object
 * @example
 * ```typescript
 * const entry: Entry<string, number> = ["🟢", 1];
 * const entryKey: EntryKey<typeof entry> = entry[0];
 * ```
 */
export type EntryKey<Input extends Entry> = Input[0];
