import type { ISODay } from "../lib/ISODay.js";

export const validDay01: ISODay = "01";
export const validDay15: ISODay = "15";
export const validDay31: ISODay = "31";

// @ts-expect-error Invalid month value (must be between 01 and 31).
export const invalidDayEmpty: ISODay = "";

// @ts-expect-error Invalid day value (must be between 01 and 31).
export const invalidDayValue: ISODay = "99";

// @ts-expect-error Invalid day value (must be string).
export const invalidDayNumber: ISODay = 1;
