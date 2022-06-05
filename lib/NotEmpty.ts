import type { Empty } from "./Empty.js";
import type { Not } from "./Not.js";
import type { ReadOnlyArray } from "./ReadOnlyArray.js";
import type { ReadOnlyRecord } from "./ReadOnlyRecord.js";

/**
 * Not empty array, object or string.
 *
 * @category Array
 * @category Object
 * @category String
 * @example
 * ```typescript
 * const notEmptyString: NotEmpty<string> = "🟢";
 * const notEmptyArray: NotEmpty<ReadOnlyArray> = ["🟢", "🟩"];
 * const notEmptyRecord: NotEmpty<ReadOnlyRecord> = { "🟢": "🟩" };
 * ```
 */
export type NotEmpty<Type extends ReadOnlyArray | ReadOnlyRecord | string> =
	Not<Empty<Type>, Type>;
