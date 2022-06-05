import type { Single } from "./Single.js";

/**
 * Takes a value that could be `never`, and if it is `never` it goes to the
 * `Fallback` value.
 *
 * @category Common
 * @example
 * ```typescript
 * const value: never = (undefined as never);
 * NeverFallback<typeof value, number>; // Will be number
 * ```
 */
export type NeverFallback<MaybeNever, Fallback> =
	Single<MaybeNever> extends Single<never> ? Fallback : MaybeNever;
