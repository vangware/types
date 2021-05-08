import type { InitAndLast } from "./InitAndLast";

/**
 * Initial values of an array or string (omitting the last).
 *
 * @category Array
 * @category String
 */
export type Init<Input extends ArrayLike<unknown>> = InitAndLast<Input>[0];
