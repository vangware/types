import type { EmptyString } from "../src";

export const emptyString: EmptyString = "";

// @ts-expect-error String should be empty
export const foobar: EmptyString = "foobar" as const;

// @ts-expect-error String should be empty
export const space: EmptyString = " " as const;
