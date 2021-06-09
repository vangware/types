import type { Unary } from "../src";

type TestFunction = Unary<number, string>;

export const aFunction: TestFunction = input => `${input}`;

// @ts-expect-error Output should be `number`.
export const wrongFunction1: TestFunction = input => input;

// @ts-expect-error Unary only takes 1 argument.
// eslint-disable-next-line max-params
export const wrongFunction2: TestFunction = (inputA, inputB) =>
	// eslint-disable-next-line @typescript-eslint/restrict-template-expressions, @typescript-eslint/restrict-plus-operands
	`${inputA + inputB}`;
