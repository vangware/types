import type { Predicate } from "../lib/Predicate";

export const simplePredicate: Predicate<number> = input => input % 2 === 0;
export const complexPredicate: Predicate<number | string, string> = (
	input: number | string,
): input is string => typeof input === "string";

// @ts-expect-error Output should be a boolean
export const wrongPredicate: Predicate<number> = input => input;

export const wrongComplexPredicate: Predicate<number | string> = (
	input,
	// @ts-expect-error Output should be a boolean
): input is string => input;
