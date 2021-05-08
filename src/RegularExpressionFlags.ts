import type { EmptyString } from "./EmptyString";

/**
 * Possible combinations of regular expression flags (always unicode).
 *
 * @category RegExp
 */
export type RegularExpressionFlags = `${EmptyString | "g"}${EmptyString | "i"}${
	| EmptyString
	| "m"}${EmptyString | "s"}u`;
