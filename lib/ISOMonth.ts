import type { Digit } from "./Digit.js";

/**
 * ISO month value (`"01"` to `"12"`).
 *
 * @category Date
 * @example
 * ```typescript
 * const month01: ISOMonth = "01";
 * const month06: ISOMonth = "06";
 * const month12: ISOMonth = "12";
 * ```
 */
export type ISOMonth = `0${Exclude<Digit, 0>}` | `1${0 | 1 | 2}`;
