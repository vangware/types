import type { NonPrimitive } from "../lib/NonPrimitive.js";

export const object: NonPrimitive = {};
export const array: NonPrimitive = [];
export const idFunction: NonPrimitive = <Input>(input: Input) => input;

// @ts-expect-error String is a primitive.
export const stringEmpty: NonPrimitive = "";

// @ts-expect-error String is a primitive.
export const stringNotEmpty: NonPrimitive = "vangware";

// @ts-expect-error Number is a primitive.
export const number: NonPrimitive = 0;

// @ts-expect-error Number is a primitive.
export const negativeNumber: NonPrimitive = -1;

// @ts-expect-error Number is a primitive.
export const infinity: NonPrimitive = Infinity;

// @ts-expect-error Number is a primitive.
export const notANumber: NonPrimitive = NaN;

// @ts-expect-error Number is a primitive.
export const float: NonPrimitive = 0.5;

// @ts-expect-error Number is a primitive.
export const expression: NonPrimitive = 1 + 1;

// @ts-expect-error BigInt is a primitive.
export const bigInt: NonPrimitive = BigInt(0);

// @ts-expect-error Boolean is a primitive.
export const yup: NonPrimitive = true;

// @ts-expect-error Boolean is a primitive.
export const nope: NonPrimitive = false;

// @ts-expect-error Boolean is a primitive.
export const comparison: NonPrimitive = 1 * 1 === 1;

// @ts-expect-error Symbol is a primitive.
export const symbol: NonPrimitive = Symbol("vangware");

// @ts-expect-error Undefined is a primitive.
export const notDefined: NonPrimitive = undefined;

// @ts-expect-error Undefined is a primitive.
export const voidZero: NonPrimitive = void 0;

// @ts-expect-error Null is a primitive.
// eslint-disable-next-line no-null/no-null
export const nullValue: NonPrimitive = null;
