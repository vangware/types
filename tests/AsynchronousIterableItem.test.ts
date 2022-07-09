import type { AsynchronousIterable } from "../lib/AsynchronousIterable.js";
import type { AsynchronousIterableItem } from "../lib/AsynchronousIterableItem.js";

type NumberIterable = AsynchronousIterable<number>;

export const array: NumberIterable = [1, 2, 3];
export const arrayItem: AsynchronousIterableItem<typeof array> = 1;

export const object: NumberIterable = {
	*[Symbol.iterator]() {
		yield 1;
	},
};
export const objectItem: AsynchronousIterableItem<typeof object> = 1;

export const iterableFunction: NumberIterable = (function* () {
	yield 1;
})();
export const iterableFunctionItem: AsynchronousIterableItem<
	typeof iterableFunction
> = 1;

export const asyncObject: NumberIterable = {
	async *[Symbol.asyncIterator]() {
		yield await Promise.resolve(1);
	},
};
export const asyncObjectItem: AsynchronousIterableItem<typeof asyncObject> = 1;

export const asyncIterableFunction: NumberIterable = (async function* () {
	yield await Promise.resolve(1);
})();
export const asyncIterableFunctionItem: AsynchronousIterableItem<
	typeof asyncIterableFunction
> = 1;

// @ts-expect-error Iterable item should be of number type
export const wrongArrayItem: AsynchronousIterableItem<typeof array> = "1";
