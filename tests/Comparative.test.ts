import type { Comparative } from "../src/Comparative";

type NumberComparative = Comparative<number>;

export const comparative: NumberComparative = inputB => inputA =>
	inputA > inputB;

// @ts-expect-error Return type for Comparer should be `number`.
export const wrong: NumberComparative = inputB => inputA => inputA - inputB;
