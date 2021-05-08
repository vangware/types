import type { HeadAndTail } from "./HeadAndTail";

/**
 * Initial value of an array or string.
 *
 * @category Array
 * @category String
 */
export type Head<Input extends ArrayLike<unknown>> = HeadAndTail<Input>[0];
