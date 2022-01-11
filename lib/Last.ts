import type { InitialAndLast } from "./InitialAndLast";

/**
 * Last value of an array or string.
 *
 * @category Array
 * @category String
 * @example
 * ```typescript
 * const array = ["🟢", "🟩", "💚"];
 * const last: Last<typeof array> = "💚";
 * ```
 */
export type Last<Input extends ArrayLike<unknown>> = InitialAndLast<Input>[1];
