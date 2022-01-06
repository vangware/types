import type { ReadOnlyArray } from ".";

/**
 * Tag function for tagged templates.
 *
 * @category Function
 * @category String
 *
 * @example
 * ```typescript
 * const intParser: Tagger<number> = strings => parseInt(strings.join(""), 10);
 * intParser`100`; // 100
 * ```
 */
export type Tagger<
	Output = string,
	Expressions extends ReadOnlyArray = ReadOnlyArray,
> = (
	templateStringsArray: Readonly<TemplateStringsArray>,
	...expressions: Expressions
) => Output;
