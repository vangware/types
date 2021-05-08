import type { EmptyArray } from "../src";

export const emptyArray: EmptyArray = [] as const;

// @ts-expect-error Array should be empty
export const numberArray: EmptyArray = [0, 1, 2] as const;

// @ts-expect-error Array should be empty
export const undefinedArray: EmptyArray = [undefined] as const;
