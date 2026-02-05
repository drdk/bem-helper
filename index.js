// @ts-check

/** @typedef {import("./types").Styles} Styles */
/** @typedef {import("./types").ClassNames} ClassNames */
/** @typedef {import("./types").Modifiers} Modifiers */
/** @typedef {import("./types").ModifierValue} ModifierValue */

/**
 * A helper function that returns a function to create BEM-style classnames, prebound with the parameters given.
 * CSS modules is supported via the `styles` param.
 * @param {string} block - The block element.
 * @param {Styles | undefined} [styles] - An optional CSS modules styles object.
 * @returns {import("./types").BoundBem}}
 */

export default function bemHelper(block, styles) {
	if (typeof block !== "string") {
		throw new Error("@drdk/bem-helper did not receive a valid `block` argument");
	}
	return bem.bind(undefined, styles, block);
}

/**
 * A function that returns BEM-style classnames.
 * @param {Styles | undefined} styles - Optional CSS modules styles object. Prebound by `bemHelper`.
 * @param {string} block - The block element for the classname. Prebound by `bemHelper`.
 * @param {string | Modifiers | undefined} [element] - The block element for the classname.
 * @param {Modifiers | undefined} [modifiers] - An optional modifier (object); Keys are used for modifier names. Values determine whether to turn the modifier off (`false`, `""`, `null` or `undefined`) or on - either through `true` or a value which will be appended to the modifier name; `{modifier: true}` -> `"--modifier"`, `{modifier: "value"}` -> `"--modifier-value"`.
 * @returns {string}
 */

function bem(styles, block, element, modifiers) {
	if (element && typeof element !== "string") {
		if (typeof element === "object") {
			modifiers = element;
		}
		element = undefined;
	}

	const rootClassName = element ? `${block}__${element}` : block;

	let classNames = modifiers
		? getClassNamesWithModifiers(rootClassName, modifiers)
		: [rootClassName];

	if (styles) {
		classNames = classNames.map((className) => styles[className]);
	}

	return classNames.join(" ");
}

/**
 * @param {ModifierValue} value
 * @returns {boolean}
 */

function isTruthy(value) {
	return (
		value !== false &&
		value !== "" &&
		value !== null &&
		typeof value !== "undefined"
	);
}

/**
 * @param {string} rootClassName
 * @param {Modifiers} modifiers
 * @returns {ClassNames}
 */

function getClassNamesWithModifiers(rootClassName, modifiers) {
	const result = [rootClassName];
	for (const [modifier, value] of Object.entries(modifiers)) {
		if (isTruthy(value)) {
			result.push(
				`${rootClassName}--${modifier}${value === true ? "" : `-${value}`}`
			);
		}
	}
	return result;
}
