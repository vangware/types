import type { EmptyString } from "./EmptyString";

/**
 * Types that evaluates to `false` in JS.
 *
 * @category Common
 */
export type Falsy = EmptyString | -0 | -0n | 0 | 0n | false | undefined;
