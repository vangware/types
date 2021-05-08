import type { Head } from "../src";

const array = ["foo", "bar", "baz"];
const emptyArray = [] as const;
const triple = ["foo", "bar", "baz"] as const;
const string = "foobar";
const emptyString = "";
const looseString = "foobar" as string;

type ArrayHead = Head<typeof array>;
type EmptyArrayHead = Head<typeof emptyArray>;
type TripleHead = Head<typeof triple>;
type StringHead = Head<typeof string>;
type EmptyStringHead = Head<typeof emptyString>;
type LooseStringHead = Head<typeof looseString>;

export const arrayHead: ArrayHead = "foo";
export const emptyArrayHead: EmptyArrayHead = undefined;
export const tripleHead: TripleHead = "foo";
export const stringHead: StringHead = "f";
export const emptyStringHead: EmptyStringHead = undefined;
export const looseStringHead: LooseStringHead = "f";

// Doesn't throw error because the type is `string | undefined`.
export const arrayWrongHeadString: ArrayHead = "baz";

// Doesn't throw error because the type is `string | undefined`.
export const arrayWrongHead: ArrayHead = undefined;

// @ts-expect-error Expecting the head of the triple to be "foo".
export const tripleWrongHead: TripleHead = "baz";

// @ts-expect-error Expecting the head of the string to be "f".
export const stringWrongHead: StringHead = "b";
