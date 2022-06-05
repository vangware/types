import type { Empty } from "../lib/Empty.js";
import type { EmptyArray } from "../lib/EmptyArray.js";
import type { EmptyRecord } from "../lib/EmptyRecord.js";
import type { EmptyString } from "../lib/EmptyString.js";
import type { Not } from "../lib/Not.js";
import type { ReadOnlyArray } from "../lib/ReadOnlyArray.js";
import type { ReadOnlyRecord } from "../lib/ReadOnlyRecord.js";

export type NotEmpty<Type extends ReadOnlyArray | ReadOnlyRecord | string> =
	Not<Empty<Type>, Type>;

export const circle: NotEmpty<EmptyString | "🟢"> = "🟢" as const;

// @ts-expect-error `EmptyString` is `Empty`
export const notEmptyString: NotEmpty<EmptyString> = "";

// @ts-expect-error `EmptyArray` is `Empty`
export const notEmptyArray: NotEmpty<EmptyArray> = [] as const;

// @ts-expect-error `EmptyRecord` is `Empty`
export const notEmptyRecord: NotEmpty<EmptyRecord> = {} as const;

type NotNumber<Type> = Not<number, Type>;

export const notNumber: NotNumber<number | string> = "🟢";

// @ts-expect-error `number` should not be a `number`
export const number: NotNumber<number | string> = 0;
