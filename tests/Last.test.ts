import type { Last } from "../src";

const array = ["foo", "bar", "baz"];
const emptyArray = [] as const;
const triple = ["foo", "bar", "baz"] as const;
const string = "foobar";
const emptyString = "";
const looseString = "foobar" as string;

type ArrayLast = Last<typeof array>;
type EmptyArrayLast = Last<typeof emptyArray>;
type TripleLast = Last<typeof triple>;
type StringLast = Last<typeof string>;
type EmptyStringLast = Last<typeof emptyString>;
type LooseStringLast = Last<typeof looseString>;

export const arrayLast: ArrayLast = "baz";
export const emptyArrayLast: EmptyArrayLast = undefined;
export const tripleLast: TripleLast = "baz";
export const stringLast: StringLast = "r";
export const emptyStringLast: EmptyStringLast = undefined;
export const looseStringLast: LooseStringLast = "r";

// Doesn't throw error because the type is `string | undefined`.
export const arrayWrongLastValues: ArrayLast = "wrong";

// Doesn't throw error when empty because the type is `string | undefined`.
export const arrayWrongLast: ArrayLast = undefined;

// @ts-expect-error Expecting the type to be `string | undefined`.
export const arrayWrongLastType: ArrayLast = 1;

// @ts-expect-error Expecting the last of the triple to be "baz".
export const tripleEmptyLast: TripleLast = "";

// @ts-expect-error Expecting the last of the triple to be "baz".
export const tripleWrongLast: TripleLast = "foo";

// Doesn't throw because the type is `string`

// Doesn't throw because the type is `string`
export const looseStringUndefinedLast: LooseStringLast = undefined;

// Doesn't throw error when empty because the type is `string`
export const looseStringWrongLast: LooseStringLast = "";
