import type { EmptyArray } from "./EmptyArray";
import type { EmptyString } from "./EmptyString";

/**
 * Get a couple with the head and tail of an array or string.
 *
 * @category Array
 * @category String
 * @example
 * ```typescript
 * const array = ["🟢", "🟩", "💚"];
 * const headAndTail: HeadAndTail<typeof array> = ["🟢", ["🟩", "💚"]];
 * ```
 */
export type HeadAndTail<Input extends ArrayLike<unknown>> =
	Input extends readonly [infer Head, ...infer Tail]
		? readonly [Head, Tail]
		: Input extends `${infer Head}${infer Tail}`
		? readonly [Head, Tail]
		: Input extends EmptyArray | EmptyString
		? readonly [undefined, Input]
		: readonly [Input[number] | undefined, Input];
