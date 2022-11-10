import type { Enumerate } from "./Enumerate.js";

/**
 * Hours values in numeric format (from `0` to `23`).
 *
 * @category Date
 * @example
 * ```typescript
 * const days: ReadOnlyArray<Hours> = [0, 1, 2, 3, 20, 21, 22, 23];
 * ```
 */
export type Hours = Enumerate<24>;
