import type { ISODate } from "../lib/ISODate";

export const validDate: ISODate = "1989-10-13T10:15:13.123Z";

// @ts-expect-error Invalid month value (must be between 01 and 12).
export const invalidMonthDate: ISODate = "1989-99-13T10:15:13.123Z";

// @ts-expect-error Invalid day value (must be between 01 and 31).
export const invalidDayDate: ISODate = "1989-10-99T10:15:13.123Z";

// @ts-expect-error Invalid string.
export const invalidStringDate: ISODate = "❌";

// @ts-expect-error Invalid empty string.
export const invalidEmptyDate: ISODate = "";
