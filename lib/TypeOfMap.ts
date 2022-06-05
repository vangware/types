import type { GenericFunction } from "./GenericFunction.js";
import type { ReadOnlyRecord } from "./ReadOnlyRecord.js";

/**
 * `typeof` type map.
 *
 * @category Common
 * @example
 * ```typescript
 * TypeOfMap["string"]; // `string`
 * TypeOfMap["boolean"]; // `boolean`
 * TypeOfMap["function"]; // `GenericFunction`
 * ```
 */
export type TypeOfMap = {
	readonly bigint: bigint;
	readonly boolean: boolean;
	readonly function: GenericFunction;
	readonly number: number;
	readonly object: ReadOnlyRecord;
	readonly string: string;
	readonly symbol: symbol;
	readonly undefined: undefined;
};
