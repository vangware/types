import type { Digit } from "./Digit.js";
import type { Enumerate } from "./Enumerate.js";

/**
 * ISO day of month value (`"01"` to `"31"`).
 *
 * @category Date
 * @example
 * ```typescript
 * const day01: ISODayOfMonth = "01";
 * const day15: ISODayOfMonth = "15";
 * const day31: ISODayOfMonth = "31";
 * ```
 */
export type ISODayOfMonth =
	// eslint-disable-next-line @typescript-eslint/sort-type-union-intersection-members
	`0${Exclude<Digit, 0>}` | `${1 | 2}${Digit}` | `3${Enumerate<2>}`;
