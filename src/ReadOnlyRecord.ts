/**
 * Read-only record.
 *
 * @category Object
 */
export type ReadOnlyRecord<
	Value = unknown,
	Key extends PropertyKey = PropertyKey
> = Readonly<Record<Key, Value>>;
