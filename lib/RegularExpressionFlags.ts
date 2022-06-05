import type { EmptyString } from "./EmptyString.js";

/**
 * Possible combinations of regular expression flags (always unicode).
 *
 * @category RegExp
 * @example
 * ```typescript
 * const flags1: RegularExpressionFlags = "u";
 * const flags2: RegularExpressionFlags = "gu";
 * const flags3: RegularExpressionFlags = "iu";
 * const flags4: RegularExpressionFlags = "giu";
 * ```
 */
export type RegularExpressionFlags = `${EmptyString | "g"}${EmptyString | "i"}${
	| EmptyString
	| "m"}${EmptyString | "s"}u`;
