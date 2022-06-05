import type { RegularExpressionFlags } from "./RegularExpressionFlags.js";

/**
 * String representing a regular expression.
 *
 * @category RegExp
 * @example
 * ```typescript
 * const regex: RegularExpression = "/^[a-z]+$/u";
 * ```
 */
export type RegularExpression = `/${string}/${RegularExpressionFlags}`;
