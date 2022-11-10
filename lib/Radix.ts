import type { Range } from "./Range.js";

/**
 * Valid radix values (from `2` to `36`).
 *
 * @category Number
 * @example
 * ```typescript
 * const binary: Radix = 2;
 * const decimal: Radix = 10;
 * const hexadecimal: Radix = 16;
 * ```
 */
export type Radix = Range<2, 37>;
