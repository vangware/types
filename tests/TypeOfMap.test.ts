import type { TypeOfMap } from "../src";

export const ok: TypeOfMap = {
	bigint: BigInt(0),
	boolean: true,
	function: input => input,
	number: 0,
	object: {},
	string: "foobar",
	symbol: Symbol("foobar"),
	undefined
};

export const wrong: TypeOfMap = {
	// @ts-expect-error `"bigint"` should be a `bigint`.
	bigint: 0,
	// @ts-expect-error `"boolean"` should be a `boolean`.
	boolean: undefined,
	// @ts-expect-error `"function"` should be an actual `function`.
	// eslint-disable-next-line @typescript-eslint/no-extraneous-class, functional/no-class
	function: class {},
	// @ts-expect-error `"number"` should be a `number`.
	number: BigInt(0),
	// @ts-expect-error `"object"` should be an `object`
	object: [],
	// @ts-expect-error `"string"` should be a `string`
	string: new Date(),
	// @ts-expect-error `"symbol"` should be a `symbol`
	symbol: "知る",
	// @ts-expect-error `"undefined"` should be `undefined`
	undefined: "defined!"
};
