import type { EmptyArray } from "../lib/EmptyArray";
import type { EmptyRecord } from "../lib/EmptyRecord";
import type { EmptyString } from "../lib/EmptyString";
import type { Not } from "../lib/Not";
import type { NotEmpty } from "../lib/NotEmpty";

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
