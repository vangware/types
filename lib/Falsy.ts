import type { EmptyString } from "./EmptyString.js";

/**
 * Types that evaluates to `false` in JS.
 *
 * @category Common
 * @example
 * ```typescript
 * const falsyString: Falsy = "";
 * const falsyNegativeZero: Falsy = -0;
 * const falsyNegativeZeroBigInt: Falsy = -0n;
 * const falsyZero: Falsy = 0;
 * const falsyZeroBigInt: Falsy = 0n;
 * const falsyBoolean: Falsy = false;
 * const falsyUndefined: Falsy = undefined;
 * ```
 */
export type Falsy = EmptyString | -0 | -0n | 0 | 0n | false | undefined;
