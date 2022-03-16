import type { ReadOnlyRecord } from "./ReadOnlyRecord";

/**
 * Replaces the type of some keys in given Input.
 *
 * @category Common
 * @example
 * ```typescript
 * type User = { name: string; age: number };
 * type ReallyOldUser = ReplaceType<User, "age", bigint>;
 * ```
 */
export type ReplaceType<Input, Keys extends keyof Input, NewType> = Omit<
	Input,
	Keys
> &
	ReadOnlyRecord<NewType, Keys>;
