import type { GenericFunction } from "./GenericFunction.js";
import type { NonPrimitive } from "./NonPrimitive.js";

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
	readonly null: null;
	readonly number: number;
	readonly object: NonPrimitive;
	readonly string: string;
	readonly symbol: symbol;
	readonly undefined: undefined;
};
