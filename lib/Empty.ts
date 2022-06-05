import type { EmptyArray } from "./EmptyArray.js";
import type { EmptyRecord } from "./EmptyRecord.js";
import type { EmptyString } from "./EmptyString.js";
import type { ReadOnlyArray } from "./ReadOnlyArray.js";
import type { ReadOnlyRecord } from "./ReadOnlyRecord.js";

/**
 * Empty array, object or string.
 *
 * @category Array
 * @category Object
 * @category String
 * @example
 * ```typescript
 * const emptyString: Empty<string> = "";
 * const emptyArray: Empty<ReadOnlyArray> = [];
 * const emptyRecord: Empty<ReadOnlyRecord> = {};
 * ```
 */
export type Empty<
	ArrayRecordOrString extends ReadOnlyArray | ReadOnlyRecord | string,
> = ArrayRecordOrString extends ReadOnlyArray
	? EmptyArray
	: ArrayRecordOrString extends ReadOnlyRecord
	? EmptyRecord
	: ArrayRecordOrString extends string
	? EmptyString
	: never;
