/**
 * Valid JavaScript primitives (excluding `null`).
 *
 * @category Common
 * @example
 * ```typescript
 * const aBigInt: Primitive = 13n;
 * const aBoolean: Primitive = true;
 * const aNumber: Primitive = 13;
 * const aString: Primitive = "🟢";
 * const aSymbol: Primitive = Symbol("🟢");
 * const anUndefined: Primitive = undefined;
 * ```
 */
export type Primitive = bigint | boolean | number | string | symbol | undefined;
