// @ts-check

/**
 * @typedef {string} Classname
 * @typedef {object} Modifiers
 * @typedef {string | Modifiers} Parameter
 */

/**
 * A function that creates all applicable combinations of classnames for an element in BEM-style.
 * @param {string} block
 * @param  {Parameter[]} args
 * @returns {string}
 */
function bem (block, ...args) {
	return args.reduce(argReducer(false), [block]).join(" ");
}

/**
 * Same as `bem` - but it returns a fully scoped classname.
 * @param {string} block
 * @param  {Parameter[]} args
 * @returns {string}
 */
function scoped (block, ...args) {
	return args.reduce(argReducer(true), [block]).join(" ");
}

/**
 * Same as `bem` - but it only returns a single classname.
 * @param {string} block
 * @param  {Parameter[]} args
 * @returns {string}
 */
function single (block, ...args) {
	return args.reduce(argReducer(true), [block]).pop();
}

/**
 *
 * @param {Classname[]} prefixes
 * @param {string} value
 * @param {string} delimiter
 * @returns {Classname[]}
 */
function concat (prefixes, value, delimiter) {
	return prefixes.map(
		/**
		 * @param {string} prefix
		 * @returns {string}
		 */
		(prefix) => `${prefix}${delimiter}${value}`
	);
}

/**
 *
 * @param {boolean} scoped
 * @returns {function(string[], Parameter): Classname[]}
 */
function argReducer (scoped) {
	return function (result, value) {
		if (typeof value === "object") {
			return modifers(result, value, "--");
		}

		var prefixed = concat(result, value, "__");

		return (scoped) ? prefixed : [value].concat(prefixed);
	};

}

/**
 *
 * @param {Classname[]} result
 * @param {Modifiers} value
 * @param {string} delimiter
 * @returns {Classname[]}
 */
function modifers(result, value, delimiter) {
	return result.concat(
		modifierParser(value)
		.reduce(
			/**
			 * @param {Classname[]} subresult
			 * @param {string} modifier
			 * @returns {Classname[]}
			 */
			(subresult, modifier) => subresult.concat(concat(result, modifier, delimiter)),
			[]
		)
	);
}

/**
 *
 * @param {Classname[]} result
 * @param {[string, any]} modifier
 * @returns {Classname[]}
 */
function modifierReducer (result, [modifier, value]) {
	if (value !== false && value !== "" && value !== null && typeof value !== "undefined") {
		result.push(`${modifier}${(value !== true) ? `-${value}` : "" }`);
	}
	return result;
}

/**
 *
 * @param {Modifiers} modifiers
 * @returns {Classname[]}
 */
function modifierParser (modifiers) {
	return Object.keys(modifiers).map(
		/**
		 * @param {string} modifier
		 * @returns {[string, any]}
		 */
		(modifier) => [modifier, modifiers[modifier]]
	).reduce(
		modifierReducer,
		[]
	);
}

module.exports = bem;

module.exports.scoped = scoped;

module.exports.single = single;
