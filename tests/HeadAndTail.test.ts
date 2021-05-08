import type { HeadAndTail } from "../src";

const array = ["foo", "bar", "baz"];
const emptyArray = [] as const;
const triple = ["foo", "bar", "baz"] as const;
const string = "foobar";
const emptyString = "";
const looseString = "foobar" as string;

type ArrayHeadAndTail = HeadAndTail<typeof array>;
type EmptyArrayHeadAndTail = HeadAndTail<typeof emptyArray>;
type TripleHeadAndTail = HeadAndTail<typeof triple>;
type StringHeadAndTail = HeadAndTail<typeof string>;
type EmptyStringHeadAndTail = HeadAndTail<typeof emptyString>;
type LooseStringHeadAndTail = HeadAndTail<typeof looseString>;

export const arrayHead: ArrayHeadAndTail[0] = "foo";
export const arrayTail: ArrayHeadAndTail[1] = ["bar", "baz"];
export const emptyArrayHead: EmptyArrayHeadAndTail[0] = undefined;
export const emptyArrayTail: EmptyArrayHeadAndTail[1] = [];
export const tripleHead: TripleHeadAndTail[0] = "foo";
export const tripleTail: TripleHeadAndTail[1] = ["bar", "baz"];
export const stringHead: StringHeadAndTail[0] = "f";
export const stringTail: StringHeadAndTail[1] = "oobar";
export const emptyStringHead: EmptyStringHeadAndTail[0] = undefined;
export const emptyStringTail: EmptyStringHeadAndTail[1] = "";
export const looseStringHead: LooseStringHeadAndTail[0] = "f";
export const looseStringTail: LooseStringHeadAndTail[1] = "oobar";

// Doesn't throw error because the type is `string | undefined`.
export const arrayWrongHeadString: ArrayHeadAndTail[0] = "baz";

// Doesn't throw error because the type is `string | undefined`.
export const arrayWrongHead: ArrayHeadAndTail[0] = undefined;

// Doesn't throw error because the type is `string[] | undefined`.
export const arrayWrongTailValues: ArrayHeadAndTail[1] = ["foobar", "wrong"];

// Doesn't throw error when empty because the type is `string[]`.
export const arrayWrongTail: ArrayHeadAndTail[1] = [];

// @ts-expect-error Expecting the type to be `string[] | undefined`.
export const arrayWrongTailType: ArrayHeadAndTail[1] = [0, 1, 2];

// @ts-expect-error Expecting the head of the triple to be "foo".
export const tripleWrongHead: TripleHeadAndTail[0] = "baz";

// @ts-expect-error Expecting the tail of the triple to be ["bar", "baz"].
export const tripleEmptyTail: TripleHeadAndTail[1] = [];

// @ts-expect-error Expecting the tail of the triple to be ["bar", "baz"].
export const tripleWrongTail: TripleHeadAndTail[1] = ["foobar"];

// Doesn't throw because the type is `string | undefined`
export const looseStringWrongHead: LooseStringHeadAndTail[0] = "nope";

// Doesn't throw because the type is `string | undefined`
export const looseStringWrongTail: LooseStringHeadAndTail[1] = "error";

// Doesn't throw because the type is `string | undefined`
export const looseStringUndefinedHead: LooseStringHeadAndTail[0] = undefined;

// Doesn't throw error when empty because the type is `string`
export const looseStringUndefinedTail: LooseStringHeadAndTail[1] = "";
