import type { HeadAndTail } from "./HeadAndTail";

/**
 * Last values of an array or string (omitting the first).
 *
 * @category Array
 * @category String
 */
export type Tail<Input extends ArrayLike<unknown>> = HeadAndTail<Input>[1];
