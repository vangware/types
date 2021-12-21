/**
 * Tuple of length 1 (AKA Monuple).
 *
 * @category Common
 * @example
 * ```typescript
 * const single: Single<number> = [1];
 * ```
 */
export type Single<Type> = readonly [Type];
