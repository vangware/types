import type { EmptyString } from "../lib/EmptyString";

export const emptyString: EmptyString = "";

// @ts-expect-error String should be empty
export const foobar: EmptyString = "foobar" as const;

// @ts-expect-error String should be empty
export const space: EmptyString = " " as const;
