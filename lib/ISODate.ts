import type { ISODayOfMonth } from "./ISODayOfMonth.js";
import type { ISOMonth } from "./ISOMonth.js";
import type { ISOYear } from "./ISOYear.js";

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
	`${ISOYear}-${ISOMonth}-${ISODayOfMonth}T${bigint}${bigint}:${bigint}${bigint}:${bigint}${bigint}.${bigint}${bigint}${bigint}Z`;
