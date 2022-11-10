import type { Digit } from "./Digit.js";

/**
 * ISO milliseconds value (`"00"` to `"59"`).
 *
 * @category Date
 * @example
 * ```typescript
 * const milliseconds01: ISOMilliseconds = "01";
 * const milliseconds06: ISOMilliseconds = "06";
 * const milliseconds59: ISOMilliseconds = "59";
 * ```
 */
export type ISOMilliseconds = `${Digit}${Digit}${Digit}`;
