import type { Digit } from "./Digit.js";
import type { Enumerate } from "./Enumerate.js";

/**
 * ISO minutes value (`"00"` to `"59"`).
 *
 * @category Date
 * @example
 * ```typescript
 * const minutes01: ISOMinutes = "01";
 * const minutes06: ISOMinutes = "06";
 * const minutes59: ISOMinutes = "59";
 * ```
 */
export type ISOMinutes = `${Enumerate<6>}${Digit}`;
