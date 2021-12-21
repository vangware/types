import type { ReadOnlyRecord } from "../lib/ReadOnlyRecord";

const record: ReadOnlyRecord<"foo", "foo"> = { foo: "foo" };

// @ts-expect-error Mutations not allowed
// eslint-disable-next-line functional/immutable-data, functional/no-expression-statement
record.foo = "bar";

// @ts-expect-error Mutations not allowed
// eslint-disable-next-line functional/immutable-data, functional/no-expression-statement
record.bar = "bar";

// @ts-expect-error Mutations not allowed
// eslint-disable-next-line functional/immutable-data, functional/no-expression-statement
delete record.foo;
