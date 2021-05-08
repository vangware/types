import type { Digit } from "./Digit";

/**
 * ISO day value (`"01"` to `"31"`).
 *
 * @category Date
 */
export type ISODay =
	| `0${Exclude<Digit, 0>}`
	| `1${Digit}`
	| `2${Digit}`
	| `3${0 | 1}`;
