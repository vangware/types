import type { Digit } from "./Digit";

/**
 * ISO day value (`"01"` to `"31"`).
 *
 * @category Date
 * @example
 * ```typescript
 * const day01: ISODay = "01";
 * const day15: ISODay = "15";
 * const day31: ISODay = "31";
 * ```
 */
export type ISODay =
	| `0${Exclude<Digit, 0>}`
	| `1${Digit}`
	| `2${Digit}`
	| `3${0 | 1}`;
