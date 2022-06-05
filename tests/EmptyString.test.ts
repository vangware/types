import type { EmptyString } from "../lib/EmptyString.js";

export const emptyString: EmptyString = "";

// @ts-expect-error String should be empty
export const circle: EmptyString = "🟢" as const;

// @ts-expect-error String should be empty
export const space: EmptyString = " " as const;
