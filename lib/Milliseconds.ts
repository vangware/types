import type { Enumerate } from "./Enumerate.js";

/**
 * Milliseconds values in numeric format (from `0` to `999`).
 *
 * @category Date
 * @example
 * ```typescript
 * const days: ReadOnlyArray<Milliseconds> = [0, 1, 2, 3, 996, 997, 998, 999];
 * ```
 */
export type Milliseconds = Enumerate<999> | 999; // Enumerate<1000> is too much for TS
