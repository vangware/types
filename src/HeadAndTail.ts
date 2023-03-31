import type { ArrayLike } from "./ArrayLike.js";
import type { EmptyArray } from "./EmptyArray.js";
import type { EmptyString } from "./EmptyString.js";
import type { Head } from "./Head.js";
import type { Maybe } from "./Maybe.js";
import type { Tail } from "./Tail.js";

/**
 * Get a couple with the head and tail types of an `ArrayLike`.
 *
 * @category Array
 * @category String
 * @remarks
 * Given a type argument (an `ArrayLike`), this returns a couple with the type
 * of the item in index `0` first, and the rest of the `ArrayLike` after.
 * @example
 * ```typescript
 * const array = ["🟢", "🟩", "💚"];
 * const headAndTail: HeadAndTail<typeof array> = ["🟢", ["🟩", "💚"]];
 * ```
 * @see {@link ArrayLike}
 * @see {@link EmptyArray}
 * @see {@link EmptyString}
 * @see {@link Head}
 * @see {@link Maybe}
 * @see {@link Tail}
 *
 * @template Input Input `ArrayLike`.
 */
export type HeadAndTail<Input extends ArrayLike> = Input extends readonly [
	infer HeadItem,
	...infer TailItems,
]
	? readonly [HeadItem, TailItems]
	: Input extends `${infer FirstCharacter}${infer RestOfString}`
	? readonly [FirstCharacter, RestOfString]
	: Input extends EmptyArray | EmptyString
	? readonly [undefined, Input]
	: readonly [Maybe<Input[number]>, Input];
