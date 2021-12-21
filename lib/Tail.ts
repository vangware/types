import type { HeadAndTail } from "./HeadAndTail";

/**
 * Last values of an array or string (omitting the first).
 *
 * @category Array
 * @category String
 * @example
 * ```typescript
 * const array = ["foo", "bar", "baz"];
 * const tail: Tail<typeof array> = ["bar", "baz"];
 * ```
 */
export type Tail<Input extends ArrayLike<unknown>> = HeadAndTail<Input>[1];
