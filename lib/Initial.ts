import type { InitialAndLast } from "./InitialAndLast.js";

/**
 * Initial values of an array or string (omitting the last).
 *
 * @category Array
 * @category String
 * @example
 * ```typescript
 * const array = ["🟢", "🟩", "💚"];
 * const initial: Initial<typeof array> = ["🟢", "🟩"];
 * ```
 */
export type Initial<Input extends ArrayLike<unknown>> =
	InitialAndLast<Input>[0];
