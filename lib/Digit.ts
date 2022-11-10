import type { Enumerate } from "./Enumerate.js";

/**
 * Valid digits (`0` to `9`).
 *
 * @category Number
 * @example
 * ```typescript
 * const numbers: ReadOnlyArray<Digit> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
 * ```
 */
export type Digit = Enumerate<10>;
