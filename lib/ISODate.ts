import type { ISODay } from "./ISODay.js";
import type { ISOMonth } from "./ISOMonth.js";

/**
 * String representing an ISO date.
 *
 * @category Date
 * @example
 * ```typescript
 * const date: ISODate = "2020-01-01T00:00:00.000Z";
 * ```
 */
export type ISODate =
	`${number}-${ISOMonth}-${ISODay}T${number}:${number}:${number}.${number}Z`;
