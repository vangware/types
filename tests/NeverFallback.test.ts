import type { NeverFallback } from "../lib/NeverFallback.js";

export const value: never = undefined as never;

export type NumberFallback = NeverFallback<typeof value, number>;

export const numberFallback: NumberFallback = 1;
