/**
 * Empty string.
 *
 * @category String
 * @remarks
 * This type is a string with no characters on it (length `0`). Trying to access
 * characters should return `undefined`, and several of its methods return another
 * {@link EmptyString}.
 * @example
 * ```typescript
 * const emptyString: EmptyString = "";
 * ```
 */
// eslint-disable-next-line @typescript-eslint/sort-type-union-intersection-members
export type EmptyString = "";
