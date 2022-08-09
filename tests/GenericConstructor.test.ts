/* eslint-disable max-classes-per-file */
import type { GenericConstructor } from "../lib/GenericConstructor.js";
import type { ReadOnlyArray } from "../lib/ReadOnlyArray.js";

// eslint-disable-next-line functional/no-class
class UselessClass {
	private readonly inputIsString: boolean;
	// eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
	constructor(input: number | string) {
		// eslint-disable-next-line functional/no-this-expression
		this.inputIsString = typeof input === "string";
	}
	// eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
	get isString() {
		// eslint-disable-next-line functional/no-this-expression
		return this.inputIsString;
	}
}

// eslint-disable-next-line functional/no-class, @typescript-eslint/no-extraneous-class
export const simpleGenericConstructor: GenericConstructor = class {
	// eslint-disable-next-line @typescript-eslint/no-useless-constructor, @typescript-eslint/explicit-member-accessibility, @typescript-eslint/no-empty-function
	constructor() {}
};

export const complexGenericConstructor: GenericConstructor<
	readonly [input: number | string],
	UselessClass
	// eslint-disable-next-line functional/no-class, @typescript-eslint/no-extraneous-class
> = UselessClass;

export const callbackFunction = <
	Arguments extends ReadOnlyArray = ReadOnlyArray<never>,
>(
	constructor: GenericConstructor<Arguments, UselessClass>,
	...constructorArguments: Arguments
) => new constructor(...constructorArguments);

// eslint-disable-next-line functional/no-expression-statement
callbackFunction(UselessClass, "hello world");

// @ts-expect-error Function isn't a constructor
export const functionAsConstructor: GenericConstructor<
	readonly [input: string],
	UselessClass
> = (input: number) => input;

// @ts-expect-error Constructor is expected to take a boolean, not a string | number.
export const wrongArguments: GenericConstructor<
	readonly [input: boolean],
	UselessClass
> = UselessClass;
