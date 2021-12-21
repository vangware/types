import type { ReadOnlyArray } from "../lib/ReadOnlyArray";

const array: ReadOnlyArray<string> = [];

// @ts-expect-error Mutations not allowed
// eslint-disable-next-line functional/no-expression-statement, functional/immutable-data
array[0] = "foobar";

// @ts-expect-error Mutations methods not allowed.
// eslint-disable-next-line @typescript-eslint/no-unsafe-call, ban/ban, functional/no-expression-statement
array.copyWithin(0, 1);

// @ts-expect-error Mutations methods not allowed.
// eslint-disable-next-line @typescript-eslint/no-unsafe-call, ban/ban, functional/no-expression-statement
array.fill("foobar");

// @ts-expect-error Mutations methods not allowed.
// eslint-disable-next-line @typescript-eslint/no-unsafe-call, ban/ban, functional/no-expression-statement
array.pop();

// @ts-expect-error Mutations methods not allowed.
// eslint-disable-next-line @typescript-eslint/no-unsafe-call, ban/ban, functional/no-expression-statement
array.push("foobar");

// @ts-expect-error Mutations methods not allowed.
// eslint-disable-next-line @typescript-eslint/no-unsafe-call, ban/ban, functional/no-expression-statement
array.reverse();

// @ts-expect-error Mutations methods not allowed.
// eslint-disable-next-line @typescript-eslint/no-unsafe-call, ban/ban, functional/no-expression-statement
array.shift();

// @ts-expect-error Mutations methods not allowed.
// eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/require-array-sort-compare, ban/ban, functional/no-expression-statement
array.sort();

// @ts-expect-error Mutations methods not allowed.
// eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/require-array-sort-compare, ban/ban, functional/no-expression-statement
array.splice(0, 1);

// @ts-expect-error Mutations methods not allowed.
// eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/require-array-sort-compare, ban/ban, functional/no-expression-statement
array.unshift("foobar");
