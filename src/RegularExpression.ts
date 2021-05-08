import type { RegularExpressionFlags } from "./RegularExpressionFlags";

/**
 * String representing a regular expression.
 *
 * @category RegExp
 */
export type RegularExpression = `/${string}/${RegularExpressionFlags}`;
