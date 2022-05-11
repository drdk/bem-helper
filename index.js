function build(block, ...args) {
	return args.reduce(
		(result, value) => {
			if (typeof value === "object") {
				return appendModifers(result, value);
			}
			return append(result, `__${value}`);
		},
		[block]
	);
}

function appendModifers(result, modifiers) {
	return result.concat(
		Object.keys(modifiers).map(
			(modifier) => [modifier, modifiers[modifier]]
		).reduce(
			(subresult, [modifier, value]) => {
				if (isTruthy(value)) {
					subresult.push(`${modifier}${(value === true) ? "" : `-${value}` }`);
				}
				return subresult;
			},
			[]
		)
		.reduce(
			(subresult, modifier) => subresult.concat(append(result, `--${modifier}`)),
			[]
		)
	);
}

function isTruthy(value) {
	return (value !== false && value !== "" && value !== null && typeof value !== "undefined");
}

function append(classnames, suffix) {
	return classnames.map(
		(classname) => `${classname}${suffix}`
	);
}

/**
 * A function that creates all applicable combinations of classnames for an element scoped to a block in BEM-style format.
 * @param {string} block - The block element for the classname.
 * @param {...(string|object)} args - Any number of the following arguments are allowed:
 *   An element (string) - or a modifier (object); Keys are used for modifier names. Values determine whether to turn the modifier off (`false`, `""`, `null` or `undefined`) or on - either through `true` or a value which will be appended to the modifier name; `{modifier: true}` -> `"--modifier"`, `{modifier: "value"}` -> `"--modifier-value"`.
 * Should not follow a previous modifier argument.
 */
const bem = (...args) => build(...args).join(" ");

/**
 * A function that builds a BEM-style classname from a CSS modules styles object and `bem` parameters.
 * @param {object} styles - The CSS modules styles object.
 * @param {string} block - The block element for the classname.
 * @param {...(string|object)} args - See `args` param of `bem`.
 */
export const bemStyles = (styles, ...args) => build(...args).map((className) => styles[className]).join(" ");

export default bem;
