import type { Enumerate } from "./Enumerate.js";

/**
 * Minutes values in numeric format (from `0` to `59`).
 *
 * @category Date
 * @example
 * ```typescript
 * const days: ReadOnlyArray<Minutes> = [0, 1, 2, 3, 56, 57, 58, 59];
 * ```
 */
export type Minutes = Enumerate<60>;
