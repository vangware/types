import type { Primitive } from "./Primitive.js";

/**
 * Values that can be stringified (all primitives excluding symbol). Should be
 * used with string types.
 *
 * @category Common
 * @example
 * ```typescript
 * let value: Stringable = "hello";
 * value = 1;
 * value = true;
 * value = Symbol("hello"); // Error!
 * value = { toString: () => "hello" }; // Error!
 * ```
 */
export type Stringable = Exclude<Primitive, symbol>;
