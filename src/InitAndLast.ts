import type { EmptyArray } from "./EmptyArray";
import type { EmptyString } from "./EmptyString";

/**
 * Get a couple with the initial and last values of an array or string.
 *
 * @category Array
 * @category String
 */
export type InitAndLast<Input extends ArrayLike<unknown>> =
	Input extends readonly [...infer Init, infer Last]
		? readonly [Init, Last]
		: Input extends EmptyArray | EmptyString
		? readonly [Input, undefined]
		: Input extends `${infer Init}${infer Rest}`
		? readonly [
				`${Rest extends EmptyString
					? EmptyString
					: Init}${InitAndLast<Rest>[0]}`,
				`${Rest extends EmptyString ? Init : InitAndLast<Rest>[1]}`
		  ]
		: readonly [Input, Input[number] | undefined];
