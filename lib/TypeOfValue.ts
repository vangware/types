import type { TypeOfMap } from "./TypeOfMap";

/**
 * Possible type values returned by `typeof`.
 *
 * @category Common
 * @example
 * ```typescript
 * const typeString: TyeOfValue = "string";
 * const typeBoolean: TyeOfValue = "boolean";
 * const typeFunction: TyeOfValue = "function";
 * ```
 */
export type TypeOfValue = keyof TypeOfMap;
