import type { Falsy } from "./Falsy.js";
import type { Not } from "./Not.js";

/**
 * Generic type to check if value is not {@link Falsy}.
 *
 * @category Common
 * @example
 * ```typescript
 * Truthy<"" | "truthy">; // "truthy"
 * ```
 */
export type Truthy<Actual = unknown> = Not<Falsy, Actual>;
