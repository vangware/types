import type { HeadAndTail } from "./HeadAndTail.js";

/**
 * Last values of an array or string (omitting the first).
 *
 * @category Array
 * @category String
 * @example
 * ```typescript
 * const array = ["🟢", "🟩", "💚"];
 * const tail: Tail<typeof array> = ["🟩", "💚"];
 * ```
 */
export type Tail<Input extends ArrayLike<unknown>> = HeadAndTail<Input>[1];
