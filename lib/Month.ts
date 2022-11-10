import type { Enumerate } from "./Enumerate.js";

/**
 * Month values in numeric format (from `0` to `11`).
 *
 * @category Date
 * @example
 * ```typescript
 * const days: ReadOnlyArray<Month> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
 * ```
 */
export type Month = Enumerate<12>;
