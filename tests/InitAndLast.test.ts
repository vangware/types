import type { InitAndLast } from "../src";

const array = ["foo", "bar", "baz"];
const emptyArray = [] as const;
const triple = ["foo", "bar", "baz"] as const;
const string = "foobar";
const emptyString = "";
const looseString = "foobar" as string;

type ArrayInitAndLast = InitAndLast<typeof array>;
type EmptyArrayInitAndLast = InitAndLast<typeof emptyArray>;
type TripleInitAndLast = InitAndLast<typeof triple>;
type StringInitAndLast = InitAndLast<typeof string>;
type EmptyStringInitAndLast = InitAndLast<typeof emptyString>;
type LooseStringInitAndLast = InitAndLast<typeof looseString>;

export const arrayInit: ArrayInitAndLast[0] = ["foo", "bar"];
export const arrayLast: ArrayInitAndLast[1] = "baz";
export const emptyArrayInit: EmptyArrayInitAndLast[0] = [];
export const emptyArrayLast: EmptyArrayInitAndLast[1] = undefined;
export const tripleInit: TripleInitAndLast[0] = ["foo", "bar"];
export const tripleLast: TripleInitAndLast[1] = "baz";
export const stringInit: StringInitAndLast[0] = "fooba";
export const stringLast: StringInitAndLast[1] = "r";
export const emptyStringInit: EmptyStringInitAndLast[0] = "";
export const emptyStringLast: EmptyStringInitAndLast[1] = undefined;
export const looseStringInit: LooseStringInitAndLast[0] = "fooba";
export const looseStringLast: LooseStringInitAndLast[1] = "r";

// Doesn't throw error because the type is `string[]`.
export const arrayWrongInitString: ArrayInitAndLast[0] = ["baz"];

// Doesn't throw error because the type is `string[]`.
export const arrayWrongInit: ArrayInitAndLast[0] = [];

// Doesn't throw error because the type is `string | undefined`.
export const arrayWrongLastValues: ArrayInitAndLast[1] = "wrong";

// Doesn't throw error when empty because the type is `string | undefined`.
export const arrayWrongLast: ArrayInitAndLast[1] = undefined;

// @ts-expect-error Expecting the type to be `string | undefined`.
export const arrayWrongLastType: ArrayInitAndLast[1] = 1;

// @ts-expect-error Expecting the init of the triple to be ["foo", "bar"].
export const tripleWrongInit: TripleInitAndLast[0] = ["baz"];

// @ts-expect-error Expecting the last of the triple to be "baz".
export const tripleEmptyLast: TripleInitAndLast[1] = "";

// @ts-expect-error Expecting the last of the triple to be "baz".
export const tripleWrongLast: TripleInitAndLast[1] = "foo";

// Doesn't throw because the type is `string`
export const looseStringWrongInit: LooseStringInitAndLast[0] = "nope";

// Doesn't throw because the type is `string`
export const looseStringUndefinedLast: LooseStringInitAndLast[1] = undefined;

// Doesn't throw error when empty because the type is `string`
export const looseStringWrongLast: LooseStringInitAndLast[1] = "";
