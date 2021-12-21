import type { Initial } from "../lib/Initial";

const array = ["foo", "bar", "baz"];
const emptyArray = [] as const;
const triple = ["foo", "bar", "baz"] as const;
const string = "foobar";
const emptyString = "";
const looseString = "foobar" as string;

type ArrayInitial = Initial<typeof array>;
type EmptyArrayInitial = Initial<typeof emptyArray>;
type TripleInitial = Initial<typeof triple>;
type StringInitial = Initial<typeof string>;
type EmptyStringInitial = Initial<typeof emptyString>;
type LooseStringInitial = Initial<typeof looseString>;

export const arrayInitial: ArrayInitial = ["foo", "bar"];
export const emptyArrayInitial: EmptyArrayInitial = [];
export const tripleInitial: TripleInitial = ["foo", "bar"];
export const stringInitial: StringInitial = "fooba";
export const emptyStringInitial: EmptyStringInitial = "";
export const looseStringInitial: LooseStringInitial = "fooba";

// Doesn't throw error because the type is `string[]`.
export const arrayWrongInitialString: ArrayInitial = ["baz"];

// Doesn't throw error because the type is `string[]`.
export const arrayWrongInitial: ArrayInitial = [];

// @ts-expect-error Expecting the initial of the triple to be ["foo", "bar"].
export const tripleWrongInitial: TripleInitial = ["baz"];

// @ts-expect-error Expecting the initial of the string to be "fooba".
export const stringWrongInitial: StringInitial = "wrong";
