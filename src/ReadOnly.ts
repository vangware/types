/**
 * Read-only deep any `Input`.
 *
 * @category Array
 * @category Object
 * @remarks
 * This type makes any `Input` read-only recursively, including nested objects
 * and arrays, Sets, Maps, and functions.
 * @example
 * ```typescript
 * const record: ReadOnly<Record<string, Array<number>>> = {
 * 	"🟢": [1, 2, 3],
 * 	"🟩": [4, 5, 6],
 * };
 * record["🟢"][0] = 7; // Error
 * ```
 *
 * @template Input The type to make read-only.
 */
export type ReadOnly<Input> =
	// Maps
	Input extends Map<infer Key, infer Value>
		? ReadonlyMap<ReadOnly<Key>, ReadOnly<Value>>
		: // Sets
		Input extends Set<infer Item>
		? ReadonlySet<ReadOnly<Item>>
		: // Tuples
		Input extends [infer First, ...infer Rest]
		? Rest extends Array<never>
			? readonly [ReadOnly<First>]
			: readonly [ReadOnly<First>, ...ReadOnly<Rest>]
		: // Arrays
		Input extends Array<infer Item>
		? ReadonlyArray<ReadOnly<Item>>
		: // Functions
		Input extends Function
		? Input
		: // Objects
		Input extends object
		? {
				/**
				 * The original description of this property might get lost when
				 * {@link ReadOnly} is applied to an object type.
				 */
				readonly [Property in keyof Input]: ReadOnly<Input[Property]>;
		  }
		: // Primitives
		  Input;
