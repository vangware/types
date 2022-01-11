/**
 * Entry couple `[key, value]`.
 *
 * @category Array
 * @category Object
 * @example
 * ```typescript
 * const entry: Entry<string, number> = ["🟢", 1];
 * ```
 */
export type Entry<Key = PropertyKey, Value = unknown> = readonly [
	key: Key,
	value: Value,
];
