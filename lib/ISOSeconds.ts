import type { Digit } from "./Digit.js";
import type { Enumerate } from "./Enumerate.js";

/**
 * ISO seconds value (`"00"` to `"59"`).
 *
 * @category Date
 * @example
 * ```typescript
 * const seconds01: ISOSeconds = "01";
 * const seconds06: ISOSeconds = "06";
 * const seconds59: ISOSeconds = "59";
 * ```
 */
export type ISOSeconds = `${Enumerate<6>}${Digit}`;
