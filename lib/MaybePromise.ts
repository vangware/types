/**
 * A value that might be coming from a `Promise`.
 *
 * @category Common
 * @example
 * ```typescript
 * type MaybeStringPromise = MaybePromise<string>;
 * const promisedValue: MaybeStringPromise = Promise.resolve("🟢");
 * const plainValue: MaybeStringPromise = "🟩";
 *
 * Promise.all([promisedValue, plainValue]).then(console.log); // ["🟢", "🟩"]
 * ```
 */
export type MaybePromise<Value> = Promise<Value> | Value;
