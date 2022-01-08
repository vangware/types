import type { Entry } from "./Entry";

/**
 * Value of an {@link Entry}.
 *
 * @category Array
 * @category Object
 * @example
 * ```typescript
 * const entry: Entry<string, number> = ["foo", 1];
 * const entryValue: EntryValue<typeof entry> = entry[1];
 * ```
 */
export type EntryValue<Input extends Entry> = Input[1];
