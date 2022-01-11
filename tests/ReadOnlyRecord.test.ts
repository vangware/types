import type { ReadOnlyRecord } from "../lib/ReadOnlyRecord";

const record: ReadOnlyRecord<"🟢", "🟢"> = { "🟢": "🟢" };

// @ts-expect-error Mutations not allowed
// eslint-disable-next-line functional/immutable-data, functional/no-expression-statement
record["🟢"] = "🟩";

// @ts-expect-error Mutations not allowed
// eslint-disable-next-line functional/immutable-data, functional/no-expression-statement
record.wrong = "🟩";

// @ts-expect-error Mutations not allowed
// eslint-disable-next-line functional/immutable-data, functional/no-expression-statement
delete record["🟢"];
