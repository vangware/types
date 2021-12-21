/**
 * Read-only record.
 *
 * @category Object
 * @example
 * ```typescript
 * const record: ReadOnlyRecord<number> = {
 * 	foo: 1,
 * 	bar: 2,
 * };
 */
export type ReadOnlyRecord<
	Value = unknown,
	Key extends PropertyKey = PropertyKey,
> = Readonly<Record<Key, Value>>;
