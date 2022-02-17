import type { ReadOnlyArray } from "../lib";
import type { MaybePromise } from "../lib/MaybePromise";

export type MaybeStringPromise = MaybePromise<string>;

export const promisedValue: MaybeStringPromise = Promise.resolve("🟢");
export const plainValue: MaybeStringPromise = "🟩";

// @ts-expect-error Type has to match (and this isn't a `string`).
export const wrongPromise: MaybeStringPromise = Promise.resolve(13);

// @ts-expect-error Type has to match (and this isn't a `string`).
export const wrongPlain: MaybeStringPromise = 13;

export const testValueFunction = (maybePromise: MaybeStringPromise) =>
	Promise.resolve(maybePromise)
		// `value` is a `string` as expected.
		.then(value => value.charAt(0))
		// eslint-disable-next-line no-console
		.catch(console.error);

export const testArrayFunction = (
	promiseArray: ReadOnlyArray<MaybeStringPromise>,
) =>
	Promise.all(promiseArray)
		// `item` is a `string` as expected.
		.then(plainArray => plainArray.map(item => item.charAt(0)))
		// eslint-disable-next-line no-console
		.catch(console.error);
