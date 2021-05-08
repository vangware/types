import type { ISODay } from "./ISODay";
import type { ISOMonth } from "./ISOMonth";

/**
 * String representing an ISO date.
 *
 * @category Date
 */
export type ISODate =
	`${number}-${ISOMonth}-${ISODay}T${number}:${number}:${number}.${number}Z`;
