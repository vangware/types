import type { ReadOnlyArray } from "./ReadOnlyArray";
import type { ReadOnlyRecord } from "./ReadOnlyRecord";

/**
 * `typeof` type map.
 *
 * @category Common
 * @example
 * ```typescript
 * TypeOfMap["string"]; // `string`
 * TypeOfMap["boolean"]; // `boolean`
 * TypeOfMap["function"]; // `(..._arguments: ReadOnlyArray<never>) => unknown`
 * ```
 */
export type TypeOfMap = {
	readonly bigint: bigint;
	readonly boolean: boolean;
	readonly function: (..._arguments: ReadOnlyArray<never>) => unknown;
	readonly number: number;
	readonly object: ReadOnlyRecord;
	readonly string: string;
	readonly symbol: symbol;
	readonly undefined: undefined;
};
