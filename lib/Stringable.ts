import type { Primitive } from "./Primitive.js";
import type { ReadOnlyArray } from "./ReadOnlyArray.js";
import type { ReadOnlyRecord } from "./ReadOnlyRecord.js";

/**
 * Values that can be stringified (all primitives excluding symbol, and all
 * objects with the `toString` method).
 *
 * @category Common
 * @example
 * ```typescript
 * let value: Stringable = "hello";
 * value = 1;
 * value = true;
 * value = Symbol("hello"); // Error!
 * value = { toString: () => "hello" }; // Works
 * ```
 */
export type Stringable =
	| Exclude<Primitive, symbol>
	| ReadOnlyRecord<
			(..._arguments: ReadOnlyArray<never>) => string,
			"toString"
	  >;
