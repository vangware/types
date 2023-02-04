import type { ReadOnlyDeepArray } from "./ReadOnlyDeepArray.js";
import type { ReadOnlyDeepRecord } from "./ReadOnlyDeepRecord.js";

/**
 * Read-only deep any `Input`.
 *
 * @category Object
 * @example
 * ```typescript
 * const record: ReadOnlyDeep<Record<string, Array<number>>> = {
 * 	"🟢": [1, 2, 3],
 * 	"🟩": [4, 5, 6],
 * };
 * record["🟢"][0] = 7; // Error
 */
export type ReadOnlyDeep<Input> = Input extends Array<infer Item>
	? ReadOnlyDeepArray<Item>
	: // eslint-disable-next-line @typescript-eslint/ban-types
	Input extends Function
	? Input
	: // eslint-disable-next-line @typescript-eslint/ban-types
	Input extends object
	? ReadOnlyDeepRecord<Input>
	: Input;
