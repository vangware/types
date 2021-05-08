import type { EmptyRecord } from "../src";

export const emptyRecord: EmptyRecord = {} as const;

// @ts-expect-error Object should be empty
export const foobarRecord: EmptyRecord = { foo: "bar" } as const;

// @ts-expect-error Object should be empty
export const undefinedRecord: EmptyRecord = { foo: undefined } as const;
