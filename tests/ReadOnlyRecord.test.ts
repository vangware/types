import type { ReadOnlyRecord } from "../lib/ReadOnlyRecord.js";

const record: ReadOnlyRecord<"🟢", "🟢"> = { "🟢": "🟢" };

// @ts-expect-error Mutations not allowed
// eslint-disable-next-line functional/immutable-data, functional/no-expression-statements
record["🟢"] = "🟩";

// @ts-expect-error Mutations not allowed
// eslint-disable-next-line functional/immutable-data, functional/no-expression-statements
record.wrong = "🟩";

// @ts-expect-error Mutations not allowed
// eslint-disable-next-line functional/immutable-data, functional/no-expression-statements
delete record["🟢"];
