/**
 * Valid JavaScript primitives (excluding `null`).
 *
 * @category Common
 * @example
 * ```typescript
 * const aBigInt: Primitive = 1n;
 * const aBoolean: Primitive = true;
 * const aNumber: Primitive = 1;
 * const aString: Primitive = "foo";
 * const aSymbol: Primitive = Symbol("foo");
 * const anUndefined: Primitive = undefined;
 * ```
 */
export type Primitive = bigint | boolean | number | string | symbol | undefined;
