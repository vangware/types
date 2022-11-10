import type { KeyOfArray } from "../lib/KeyOfArray.js";
import type { ReadOnlyArray } from "../lib/ReadOnlyArray.js";

type KeyOfTriple = KeyOfArray<readonly [1, 2, 3]>;
type KeyOfNumberArray = KeyOfArray<ReadOnlyArray<number>>;

export const lengthConst: KeyOfTriple = 2;

export const lengthUnknown: KeyOfNumberArray = 10;

// @ts-expect-error The key has to be in the defined tuple
export const wrongLengthConst: KeyOfTriple = 3;

// @ts-expect-error The key has to be a number
export const wrongLengthUnknown: KeyOfNumberArray = "🟢";
