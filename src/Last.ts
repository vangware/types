import type { InitAndLast } from "./InitAndLast";

/**
 * Last value of an array or string.
 *
 * @category Array
 * @category String
 */
export type Last<Input extends ArrayLike<unknown>> = InitAndLast<Input>[1];
