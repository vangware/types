import type { Init } from "../src";

const array = ["foo", "bar", "baz"];
const emptyArray = [] as const;
const triple = ["foo", "bar", "baz"] as const;
const string = "foobar";
const emptyString = "";
const looseString = "foobar" as string;

type ArrayInit = Init<typeof array>;
type EmptyArrayInit = Init<typeof emptyArray>;
type TripleInit = Init<typeof triple>;
type StringInit = Init<typeof string>;
type EmptyStringInit = Init<typeof emptyString>;
type LooseStringInit = Init<typeof looseString>;

export const arrayInit: ArrayInit = ["foo", "bar"];
export const emptyArrayInit: EmptyArrayInit = [];
export const tripleInit: TripleInit = ["foo", "bar"];
export const stringInit: StringInit = "fooba";
export const emptyStringInit: EmptyStringInit = "";
export const looseStringInit: LooseStringInit = "fooba";

// Doesn't throw error because the type is `string[]`.
export const arrayWrongInitString: ArrayInit = ["baz"];

// Doesn't throw error because the type is `string[]`.
export const arrayWrongInit: ArrayInit = [];

// @ts-expect-error Expecting the Init of the triple to be ["foo", "bar"].
export const tripleWrongInit: TripleInit = ["baz"];

// @ts-expect-error Expecting the Init of the string to be "fooba".
export const stringWrongInit: StringInit = "wrong";
