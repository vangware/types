/**
 * Negates a type.
 *
 * @category Common
 * @example
 * ```typescript
 * type NotNumber<Type> = Not<number, Type>;
 * const notNumber: NotNumber<string | number> = "🟢";
 * ```
 */
export type Not<Negated, Type> = Type extends Negated ? never : Type;
