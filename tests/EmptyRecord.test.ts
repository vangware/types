import type { EmptyRecord } from "../lib/EmptyRecord.js";

export const emptyRecord: EmptyRecord = {} as const;

// @ts-expect-error Object should be empty
export const circleRecord: EmptyRecord = { "🟢": "🟩" } as const;

// @ts-expect-error Object should be empty
export const undefinedRecord: EmptyRecord = { "🟢": undefined } as const;
