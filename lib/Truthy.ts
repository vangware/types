import type { Falsy } from "./Falsy";
import type { Not } from "./Not";

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
