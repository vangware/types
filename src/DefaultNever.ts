import type { Monuple } from "./Monuple";

/**
 * Takes a value that could be never and turns it into the given `Default`.
 *
 * @category Common
 */
export type DefaultNever<Input, Default> = Monuple<Input> extends Monuple<never>
	? Default
	: Input;
