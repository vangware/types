import type { EmptyArray } from "./EmptyArray";
import type { EmptyString } from "./EmptyString";

/**
 * Get a couple with the initial and last values of an array or string.
 *
 * @category Array
 * @category String
 * @example
 * ```typescript
 * const array = ["🟢", "🟩", "💚"];
 * const initialAndLast: InitialAndLast<typeof array> = [["🟢", "🟩"], "💚"];
 * ```
 */
export type InitialAndLast<Input extends ArrayLike<unknown>> =
	Input extends readonly [...infer Initial, infer Last]
		? readonly [Initial, Last]
		: Input extends EmptyArray | EmptyString
		? readonly [Input, undefined]
		: Input extends `${infer Initial}${infer Rest}`
		? readonly [
				`${Rest extends EmptyString
					? EmptyString
					: Initial}${InitialAndLast<Rest>[0]}`,
				`${Rest extends EmptyString
					? Initial
					: InitialAndLast<Rest>[1]}`,
		  ]
		: readonly [Input, Input[number] | undefined];
