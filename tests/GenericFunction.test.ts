import type { ReadOnlyArray } from "../lib";
import type { GenericFunction } from "../lib/GenericFunction";

export const simpleGenericFunction: GenericFunction = input => input % 2 === 0;
export const complexGenericFunction: GenericFunction<
	readonly [input: number | string],
	boolean
> = (input): input is string => typeof input === "string";

export const callbackFunction = <Arguments extends ReadOnlyArray, Output>(
	callback: GenericFunction<Arguments, Output>,
) => callback;

callbackFunction((input: number) => input % 2 === 0);

export const wrongGenericFunction: GenericFunction<
	readonly [input: string],
	number
	// @ts-expect-error Output should be same be number
> = input => input;
