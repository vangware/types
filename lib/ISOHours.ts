import type { Digit } from "./Digit.js";
import type { Enumerate } from "./Enumerate.js";

/**
 * ISO hours value (`"00"` to `"23"`).
 *
 * @category Date
 * @example
 * ```typescript
 * const hours01: ISOHours = "01";
 * const hours06: ISOHours = "06";
 * const hours23: ISOHours = "23";
 * ```
 */
export type ISOHours = `${Enumerate<2>}${Digit}` | `2${Enumerate<4>}`;
