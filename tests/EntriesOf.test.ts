import type { EntriesOf } from "../src";

const array = [0, 1, 2, 3];
const quadruple = [0, 1, 2, 3] as const;
const object = { foo: "bar" };
const constantObject = { foo: "bar" } as const;

type ArrayEntries = EntriesOf<typeof array>;
type QuadrupleEntries = EntriesOf<typeof quadruple>;
type ObjectEntries = EntriesOf<typeof object>;
type ConstantObjectEntries = EntriesOf<typeof constantObject>;

type ArrayEntry = ArrayEntries[0];
type QuadrupleEntry = QuadrupleEntries[0];
type ObjectEntry = ObjectEntries[0];
type ConstantObjectEntry = ConstantObjectEntries[0];

export const arrayEntryKey: ArrayEntry[0] = 0;
export const arrayEntryValue: ArrayEntry[1] = array[0] as number;

// @ts-expect-error Array values can be undefined when they aren't tuples.
export const arrayNoAsEntryValue: ArrayEntry[1] = array[0];

// @ts-expect-error Entries are couples (2 is an invalid index).
export const arrayEntry3: ArrayEntry[2] = 0;

// @ts-expect-error Entry key of an array is of type number, not string.
export const arrayWrongKey: ArrayEntry[0] = "nope";

export const quadrupleEntryKey: QuadrupleEntry[0] = 0;
export const quadrupleEntryValue: QuadrupleEntry[1] = quadruple[3];

// @ts-expect-error Key of quadruple must be a valid index.
export const quadrupleEntryWrongKey: QuadrupleEntry[0] = 5;

export const objectEntryKey: ObjectEntry[0] = "foo";
export const objectEntryValue: ObjectEntry[1] = "bar";

// @ts-expect-error Entry key must be one of the object properties.
export const objectWrongKey: ObjectEntry[0] = "baz";

// @ts-expect-error Entry key of an object is of type string, not number.
export const objectWrongKeyType: ObjectEntry[0] = 0;

export const constantObjectEntryKey: ConstantObjectEntry[0] = "foo";
export const constantConstantObjectEntryValue: ConstantObjectEntry[1] = "bar";

// @ts-expect-error Entry value of constant object must be expected.
export const constantConstantObjectWrongValue: ConstantObjectEntry[1] = "baz";
