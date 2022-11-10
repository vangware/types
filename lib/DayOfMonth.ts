import type { Enumerate } from "./Enumerate.js";

/**
 * Day of the month values in numeric format (from `1` to `31`).
 *
 * @category Date
 * @example
 * ```typescript
 * const days: ReadOnlyArray<DayOfMonth> = [0, 1, 2, 3, 28, 29, 30, 31];
 * ```
 */
export type DayOfMonth = Exclude<Enumerate<32>, 0>;
