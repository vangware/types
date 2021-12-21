import type { EntryKey } from "../lib/EntryKey";
import type { EntryOf } from "../lib/EntryOf";

const array = [0, 1, 2, 3];
const quadruple = [0, 1, 2, 3] as const;
const object = { foo: "bar" };
const constantObject = { foo: "bar" } as const;

type ArrayEntry = EntryOf<typeof array>;
type QuadrupleEntry = EntryOf<typeof quadruple>;
type ObjectEntry = EntryOf<typeof object>;
type ConstantObjectEntry = EntryOf<typeof constantObject>;

export const arrayEntryKey: EntryKey<ArrayEntry> = 0;

// @ts-expect-error Entry key of an array is of type number, not string.
export const arrayWrongKey: EntryKey<ArrayEntry> = "nope";

export const quadrupleEntryKey: EntryKey<QuadrupleEntry> = 0;

export const objectEntryKey: EntryKey<ObjectEntry> = "foo";

// @ts-expect-error Entry key must be one of the object properties.
export const objectWrongKey: EntryKey<ObjectEntry> = "baz";

// @ts-expect-error Entry key of an object is of type string, not number.
export const objectWrongKeyType: EntryKey<ObjectEntry> = 0;

export const constantObjectEntryKey: EntryKey<ConstantObjectEntry> = "foo";
