import type { InitialAndLast } from "../lib/InitialAndLast";

const array = ["foo", "bar", "baz"];
const emptyArray = [] as const;
const triple = ["foo", "bar", "baz"] as const;
const string = "foobar";
const emptyString = "";
const looseString = "foobar" as string;

type ArrayInitialAndLast = InitialAndLast<typeof array>;
type EmptyArrayInitialAndLast = InitialAndLast<typeof emptyArray>;
type TripleInitialAndLast = InitialAndLast<typeof triple>;
type StringInitialAndLast = InitialAndLast<typeof string>;
type EmptyStringInitialAndLast = InitialAndLast<typeof emptyString>;
type LooseStringInitialAndLast = InitialAndLast<typeof looseString>;

export const arrayInit: ArrayInitialAndLast[0] = ["foo", "bar"];
export const arrayLast: ArrayInitialAndLast[1] = "baz";
export const emptyArrayInit: EmptyArrayInitialAndLast[0] = [];
export const emptyArrayLast: EmptyArrayInitialAndLast[1] = undefined;
export const tripleInit: TripleInitialAndLast[0] = ["foo", "bar"];
export const tripleLast: TripleInitialAndLast[1] = "baz";
export const stringInit: StringInitialAndLast[0] = "fooba";
export const stringLast: StringInitialAndLast[1] = "r";
export const emptyStringInit: EmptyStringInitialAndLast[0] = "";
export const emptyStringLast: EmptyStringInitialAndLast[1] = undefined;
export const looseStringInit: LooseStringInitialAndLast[0] = "fooba";
export const looseStringLast: LooseStringInitialAndLast[1] = "r";

// Doesn't throw error because the type is `string[]`.
export const arrayWrongInitString: ArrayInitialAndLast[0] = ["baz"];

// Doesn't throw error because the type is `string[]`.
export const arrayWrongInit: ArrayInitialAndLast[0] = [];

// Doesn't throw error because the type is `string | undefined`.
export const arrayWrongLastValues: ArrayInitialAndLast[1] = "wrong";

// Doesn't throw error when empty because the type is `string | undefined`.
export const arrayWrongLast: ArrayInitialAndLast[1] = undefined;

// @ts-expect-error Expecting the type to be `string | undefined`.
export const arrayWrongLastType: ArrayInitialAndLast[1] = 1;

// @ts-expect-error Expecting the init of the triple to be ["foo", "bar"].
export const tripleWrongInit: TripleInitialAndLast[0] = ["baz"];

// @ts-expect-error Expecting the last of the triple to be "baz".
export const tripleEmptyLast: TripleInitialAndLast[1] = "";

// @ts-expect-error Expecting the last of the triple to be "baz".
export const tripleWrongLast: TripleInitialAndLast[1] = "foo";

// Doesn't throw because the type is `string`
export const looseStringWrongInit: LooseStringInitialAndLast[0] = "nope";

// Doesn't throw because the type is `string`
export const looseStringUndefinedLast: LooseStringInitialAndLast[1] = undefined;

// Doesn't throw error when empty because the type is `string`
export const looseStringWrongLast: LooseStringInitialAndLast[1] = "";
