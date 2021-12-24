import type { ReadOnlyRecord } from "./ReadOnlyRecord";

/**
 * Empty record (object).
 *
 * @category Object
 * @example
 * ```typescript
 * const emptyRecord: EmptyRecord = {};
 * ```
 */
export type EmptyRecord = ReadOnlyRecord<never>;