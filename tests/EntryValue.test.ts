import type { EntryOf } from "../lib/EntryOf";
import type { EntryValue } from "../lib/EntryValue";

const array = [0, 1, 2, 3];
const quadruple = [0, 1, 2, 3] as const;
const object = { foo: "bar" };
const constantObject = { foo: "bar" } as const;

type ArrayEntry = EntryOf<typeof array>;
type QuadrupleEntry = EntryOf<typeof quadruple>;
type ObjectEntry = EntryOf<typeof object>;
type ConstantObjectEntry = EntryOf<typeof constantObject>;

export const arrayEntryValue: EntryValue<ArrayEntry> = array[0] as number;

// @ts-expect-error Array values can be undefined when they aren't tuples.
export const arrayNoAsEntryValue: EntryValue<ArrayEntry> = array[0];

export const quadrupleEntryValue: EntryValue<QuadrupleEntry> = quadruple[3];

export const objectEntryValue: EntryValue<ObjectEntry> = "bar";

// @ts-expect-error Entry key of an object is of type string, not number.
export const objectWrongKeyType: ObjectEntry[0] = 0;

export const constantConstantObjectEntryValue: EntryValue<ConstantObjectEntry> =
	"bar";

// @ts-expect-error Entry value of constant object must be expected.
export const constantConstantObjectWrongValue: EntryValue<ConstantObjectEntry> =
	"baz";
