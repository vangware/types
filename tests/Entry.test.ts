import type { Entry } from "../lib/Entry";

type StringNumberEntry = Entry<string, number>;

export const foobarEntry: StringNumberEntry = ["foobar", 1];

// @ts-expect-error Number key (string expected)
export const wrongKeyEntry: StringNumberEntry = [0, 1];

// @ts-expect-error String value (string expected)
export const wrongValueEntry: StringNumberEntry = ["foobar", "baz"];
