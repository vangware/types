import type { Entries } from "../lib/Entries";

type StringNumberEntries = Entries<string, number>;

export const emptyEntries: StringNumberEntries = [];
export const circleEntries: StringNumberEntries = [["🟢", 1]];

// @ts-expect-error Number key (string expected)
export const wrongKeyEntries: StringNumberEntries = [[0, 1]];

// @ts-expect-error String value (string expected)
export const wrongValueEntries: StringNumberEntries = [["🟢", "🟩"]];
