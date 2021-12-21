import type { Falsy } from "../lib/Falsy";

export const notTrue: Falsy = false;
export const zero: Falsy = 0;
export const bigZero: Falsy = BigInt(0) as 0n;
export const empty: Falsy = "";
export const notDefined: Falsy = undefined;

// @ts-expect-error Sadly there is not type for NaN, so it evaluates to `number`
export const notANumber: Falsy = NaN;

// This is the nasty fix for it...
export const notANumberFixed: Falsy = NaN as Falsy;

// @ts-expect-error True is not falsy.
export const notFalse: Falsy = true;

// @ts-expect-error Any number bigger than 0 is not falsy.
export const biggerThanZero: Falsy = 1;

// @ts-expect-error Any number lower than 0 is not falsy.
export const lowerThanZero: Falsy = -1;

// @ts-expect-error Any number bigger than 0 is not falsy (including Infinity).
export const infinity: Falsy = Infinity;

// @ts-expect-error Any number lower than 0 is not falsy (including -Infinity).
export const negativeInfinity: Falsy = -Infinity;

// @ts-expect-error Any number bigger than 0n is not falsy.
export const bigBiggerThanZero: Falsy = BigInt(1) as 1n;

// @ts-expect-error Any number lower than 0n is not falsy.
export const bigLowerThanZero: Falsy = BigInt(-1) as -1n;

// @ts-expect-error Any string with a length larger than 0 is not falsy.
export const string: Falsy = "foobar";

// @ts-expect-error An object is not falsy (even if is empty).
export const object: Falsy = {};

// @ts-expect-error An array is not falsy (even if is empty).
export const array: Falsy = [];
