/**
 * Entry couple `[key, value]`.
 *
 * @category Array
 * @category Object
 */
export type Entry<Key = PropertyKey, Value = unknown> = readonly [
	key: Key,
	value: Value,
];
