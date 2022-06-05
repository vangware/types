import type { HeadAndTail } from "./HeadAndTail.js";

/**
 * Initial value of an array or string.
 *
 * @category Array
 * @category String
 * @example
 * ```typescript
 * const array = ["🟢", "🟩", "💚"];
 * const head: Head<typeof array> = "🟢";
 * ```
 */
export type Head<Input extends ArrayLike<unknown>> = HeadAndTail<Input>[0];
