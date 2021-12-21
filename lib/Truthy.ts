import type { Falsy } from "./Falsy";

/**
 * Generic type to check if value is not {@link Falsy}.
 *
 * @category Common
 * @example
 * ```typescript
 * Truthy<"" | "truthy">; // "truthy"
 * ```
 */
export type Truthy<Actual = unknown> = Actual extends Falsy ? never : Actual;
