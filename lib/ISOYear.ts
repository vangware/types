/**
 * ISO year value (from `-271821` to `275760`).
 *
 * @category Date
 * @example
 * ```typescript
 * const year22: ISOYear = "2022";
 * const yearNegative: ISOYear = "-1000";
 * const yearBorn: ISOYear = "1989";
 * ```
 */
export type ISOYear = `${"-" | ""}${number}`;
