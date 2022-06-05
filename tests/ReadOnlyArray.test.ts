import type { ReadOnlyArray } from "../lib/ReadOnlyArray.js";

const array: ReadOnlyArray<string> = [];

// @ts-expect-error Mutations not allowed
// eslint-disable-next-line functional/no-expression-statement, functional/immutable-data
array[0] = "vangware";

// @ts-expect-error Mutations methods not allowed.
// eslint-disable-next-line @typescript-eslint/no-unsafe-call, ban/ban, functional/no-expression-statement
array.copyWithin(0, 1);

// @ts-expect-error Mutations methods not allowed.
// eslint-disable-next-line @typescript-eslint/no-unsafe-call, ban/ban, functional/no-expression-statement
array.fill("vangware");

// @ts-expect-error Mutations methods not allowed.
// eslint-disable-next-line @typescript-eslint/no-unsafe-call, ban/ban, functional/no-expression-statement
array.pop();

// @ts-expect-error Mutations methods not allowed.
// eslint-disable-next-line @typescript-eslint/no-unsafe-call, ban/ban, functional/no-expression-statement
array.push("vangware");

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
array.unshift("vangware");
