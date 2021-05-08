import type { Digit } from "./Digit";

/**
 * ISO month value (`"01"` to `"12"`).
 *
 * @category Date
 */
export type ISOMonth = `0${Exclude<Digit, 0>}` | `1${0 | 1 | 2}`;
