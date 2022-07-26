import type { Nullish } from "./Nullish.js";
import type { Numeric } from "./Numeric.js";

/**
 * Valid JavaScript primitives.
 *
 * @category Common
 * @example
 * ```typescript
 * const aBigInt: Primitive = 13n;
 * const aBoolean: Primitive = true;
 * const aNull: Primitive = null;
 * const aNumber: Primitive = 13;
 * const anUndefined: Primitive = undefined;
 * const aString: Primitive = "🟢";
 * const aSymbol: Primitive = Symbol("🟢");
 * ```
 */
export type Primitive = Nullish | Numeric | boolean | string | symbol;
