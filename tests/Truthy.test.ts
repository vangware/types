import type { EmptyString, Truthy } from "../src";

type SomeNumbers = -0 | -0n | 0 | 0n | 1;
type FooBarOrNothing = EmptyString | "foobar";
type Maybe = "yes" | undefined;

export const booleanTrue: Truthy<boolean> = true;
export const number1: Truthy<SomeNumbers> = 1;
export const foobar: Truthy<FooBarOrNothing> = "foobar";
export const maybeYes: Truthy<Maybe> = "yes";

// @ts-expect-error `false` is Falsy.
export const booleanFalse: Truthy<boolean> = false;

// @ts-expect-error `0` is Falsy.
export const numberNegative0: Truthy<SomeNumbers> = -0;

// @ts-expect-error `0n` is Falsy.
export const numberNegative0n: Truthy<SomeNumbers> = -0n;

// @ts-expect-error `0` is Falsy.
export const number0: Truthy<SomeNumbers> = 0;

// @ts-expect-error `0n` is Falsy.
export const number0n: Truthy<SomeNumbers> = 0n;

// @ts-expect-error `""` is Falsy.
export const nothing: Truthy<FooBarOrNothing> = "";

// @ts-expect-error `undefined` is Falsy.
export const maybeNope: Truthy<Maybe> = undefined;
