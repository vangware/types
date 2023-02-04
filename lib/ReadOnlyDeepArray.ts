import type { ReadOnlyArray } from "./ReadOnlyArray.js";
import type { ReadOnlyDeep } from "./ReadOnlyDeep.js";

/**
 * Read-only deep array.
 *
 * @category Array
 * @example
 * ```typescript
 * const array: ReadOnlyDeepArray<{ "🟢": number }> = [{ "🟢": 1}, { "🟢": 2 }];
 * array[0]["🟢"] = 3; // Error
 * ```
 */
// We have to use `interface` here because of a TyeScript limitation with `type` recursion.
// eslint-disable-next-line @typescript-eslint/consistent-type-definitions, @typescript-eslint/no-empty-interface
export interface ReadOnlyDeepArray<Item>
	extends ReadOnlyArray<ReadOnlyDeep<Item>> {}
