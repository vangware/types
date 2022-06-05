import type { KeyOf } from "../lib/KeyOf.js";

const array = [0, 1, 2, 3];
const quadruple = [0, 1, 2, 3] as const;
const object = { "🟢": "🟩" };
const constantObject = { "🟢": "🟩" } as const;

type ArrayKey = KeyOf<typeof array>;
type QuadrupleKey = KeyOf<typeof quadruple>;
type ObjectKey = KeyOf<typeof object>;
type ConstantObjectKey = KeyOf<typeof constantObject>;

export const arrayKey: ArrayKey = 0;

// @ts-expect-error Key of an array is of type number, not string.
export const arrayWrongKey: ArrayKey = "❌";

export const quadrupleKey: QuadrupleKey = 0;
export const objectKey: ObjectKey = "🟢";

// @ts-expect-error Key of quadruple must be a valid index.
export const quadrupleWrongKey: QuadrupleKey = 5;

// @ts-expect-error  key must be one of the object properties.
export const objectWrongKey: ObjectKey = "💚";

// @ts-expect-error  key of an object is of type string, not number.
export const objectWrongKeyType: ObjectKey = 0;

export const constantObjectKey: ConstantObjectKey = "🟢";
