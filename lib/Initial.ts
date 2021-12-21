import type { InitialAndLast } from "./InitialAndLast";

/**
 * Initial values of an array or string (omitting the last).
 *
 * @category Array
 * @category String
 * @example
 * ```typescript
 * const array = ["foo", "bar", "baz"];
 * const initial: Initial<typeof array> = ["foo", "bar"];
 * ```
 */
export type Initial<Input extends ArrayLike<unknown>> =
	InitialAndLast<Input>[0];
