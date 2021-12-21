import type { Tail } from "../lib/Tail";

const array = ["foo", "bar", "baz"];
const emptyArray = [] as const;
const triple = ["foo", "bar", "baz"] as const;
const string = "foobar";
const emptyString = "";
const looseString = "foobar" as string;

type ArrayTail = Tail<typeof array>;
type EmptyArrayTail = Tail<typeof emptyArray>;
type TripleTail = Tail<typeof triple>;
type StringTail = Tail<typeof string>;
type EmptyStringTail = Tail<typeof emptyString>;
type LooseStringTail = Tail<typeof looseString>;

export const arrayTail: ArrayTail = ["bar", "baz"];
export const emptyArrayTail: EmptyArrayTail = [];
export const tripleTail: TripleTail = ["bar", "baz"];
export const stringTail: StringTail = "oobar";
export const emptyStringTail: EmptyStringTail = "";
export const looseStringTail: LooseStringTail = "oobar";

// Doesn't throw error because the type is `string[]`.
export const arrayWrongTailValues: ArrayTail = ["foobar", "wrong"];

// Doesn't throw error when empty because the type is `string[]`.
export const arrayWrongTail: ArrayTail = [];

// @ts-expect-error Expecting the type to be `string[]`.
export const arrayWrongTailType: ArrayTail = [0, 1, 2];

// @ts-expect-error Expecting the tail of the triple to be ["bar", "baz"].
export const tripleEmptyTail: TripleTail = [];

// @ts-expect-error Expecting the tail of the triple to be ["bar", "baz"].
export const tripleWrongTail: TripleTail = ["foobar"];

// Doesn't throw because the type is `string`
export const looseStringWrongTail: LooseStringTail = "error";

// Doesn't throw error when empty because the type is `string`
export const looseStringUndefinedTail: LooseStringTail = "";
