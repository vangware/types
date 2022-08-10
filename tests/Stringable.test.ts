import type { Stringable } from "../lib/Stringable.js";

export const aString: Stringable = "Vangware";
export const aBoolean: Stringable = true;
// eslint-disable-next-line no-null/no-null
export const aNull: Stringable = null;
export const anUndefined: Stringable = undefined;
export const aNumber: Stringable = 1;
export const aBigInt: Stringable = 1n;

// @ts-expect-error Objects can have a `toString` but this type is more for stringable types.
export const anObject: Stringable = {};

// @ts-expect-error Objects can have a `toString` but this type is more for stringable types.
export const anObjectWithValidToString: Stringable = {
	toString: () => "Vangware",
};

// @ts-expect-error Return type for toString should be a `string`
export const anObjectWithInvalidToString: Stringable = { toString: () => 1 };
