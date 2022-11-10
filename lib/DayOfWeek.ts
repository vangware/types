import type { Enumerate } from "./Enumerate.js";

/**
 * Day of the week values in numeric format (from `0` to `6`).
 *
 * @category Date
 * @example
 * ```typescript
 * const daysOfWeek: ReadOnlyArray<DayOfWeek> = [0, 1, 2, 3, 4, 5, 6];
 * ```
 */
export type DayOfWeek = Enumerate<7>;
