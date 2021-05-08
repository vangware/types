import type { DefaultNever } from "./DefaultNever";
import type { ReadOnlyArray } from "./ReadOnlyArray";
import type { ReadOnlyRecord } from "./ReadOnlyRecord";

/**
 * Generic key for either object or array.
 *
 * @category Array
 * @category Object
 */
export type KeyOf<Input extends ReadOnlyArray | ReadOnlyRecord> =
	Input extends ReadOnlyArray
		? DefaultNever<
				Exclude<Partial<Input>["length"], Input["length"]>,
				number
		  >
		: keyof Input extends Exclude<PropertyKey, symbol>
		? `${keyof Input}`
		: never;
