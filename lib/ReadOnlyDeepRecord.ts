import type { ReadOnlyDeep } from "./ReadOnlyDeep.js";

/**
 * Read-only deep record.
 *
 * @category Object
 * @example
 * ```typescript
 * const record: ReadOnlyDeepRecord<Array<number>> = {
 * 	"🟢": [1, 2, 3],
 * 	"🟩": [4, 5, 6],
 * };
 * record["🟢"][0] = 7; // Error
 */
export type ReadOnlyDeepRecord<Input> = {
	readonly [Property in keyof Input]: ReadOnlyDeep<Input[Property]>;
};
