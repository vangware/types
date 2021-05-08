import type { EmptyArray } from "./EmptyArray";
import type { EmptyRecord } from "./EmptyRecord";
import type { EmptyString } from "./EmptyString";
import type { ReadOnlyArray } from "./ReadOnlyArray";
import type { ReadOnlyRecord } from "./ReadOnlyRecord";

/**
 * Empty array, object or string.
 *
 * @category Array
 * @category Object
 * @category String
 */
export type Empty<Type extends ReadOnlyArray | ReadOnlyRecord | string> =
	Type extends ReadOnlyArray
		? EmptyArray
		: Type extends ReadOnlyRecord
		? EmptyRecord
		: Type extends string
		? EmptyString
		: never;
