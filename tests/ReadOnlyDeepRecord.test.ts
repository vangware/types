import type { ReadOnlyDeepRecord } from "../lib/ReadOnlyDeepRecord.js";

const record: ReadOnlyDeepRecord<Record<"🟢", ["🟢"]>> = { "🟢": ["🟢"] };

// @ts-expect-error Mutations not allowed
// eslint-disable-next-line functional/immutable-data, functional/no-expression-statements
record["🟢"] = "🟩";

// @ts-expect-error Mutations not allowed
// eslint-disable-next-line functional/immutable-data, functional/no-expression-statements
record["🟢"][0] = "🟩";

// @ts-expect-error Mutations methods not allowed.
// eslint-disable-next-line @typescript-eslint/no-unsafe-call, functional/no-expression-statements
record["🟢"][0].pop();

// @ts-expect-error Mutations not allowed
// eslint-disable-next-line functional/immutable-data, functional/no-expression-statements
record.wrong = "🟩";

// @ts-expect-error Mutations not allowed
// eslint-disable-next-line functional/immutable-data, functional/no-expression-statements
delete record["🟢"];
