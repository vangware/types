import type { Empty } from "../lib/Empty.js";
import type { EmptyArray } from "../lib/EmptyArray.js";
import type { EmptyRecord } from "../lib/EmptyRecord.js";
import type { EmptyString } from "../lib/EmptyString.js";

export const emptyString: Empty<EmptyString> = "";
export const emptyArray: Empty<EmptyArray> = [] as const;
export const emptyRecord: Empty<EmptyRecord> = {} as const;

// @ts-expect-error Number is not a valid empty value
export const number: Empty<EmptyString> = 0;

// @ts-expect-error String should be empty
export const circle: Empty<EmptyString> = "🟢" as const;

// @ts-expect-error String should be empty
export const space: Empty<EmptyString> = " " as const;

// @ts-expect-error Array should be empty
export const numberArray: Empty<EmptyArray> = [0, 1, 2] as const;

// @ts-expect-error Array should be empty
export const undefinedArray: Empty<EmptyArray> = [undefined] as const;

// @ts-expect-error Object should be empty
export const record: Empty<EmptyRecord> = { "🟢": "🟩" } as const;

// @ts-expect-error Object should be empty
export const undefinedRecord: Empty<EmptyRecord> = { "🟢": undefined } as const;
