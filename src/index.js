const bem = (...args) => argParser(false, ...args).join(" ");

bem.single = (...args) => argParser(true, ...args).pop();

bem.scoped = (...args) => argParser(true, ...args).join(" ");

module.exports = bem;

function argParser (scoped, block, ...args) {
	return args.reduce(argReducer(scoped), [block]);
}

function argReducer (scoped) {

	return function (result, value) {
		if (typeof value === "object") {
			return modifers(result, value);
		}

		var prefixed = prefix(result, `__${value}`);

		return (scoped) ? prefixed : [value].concat(prefixed);
	}

}

function modifers(result, value) {
	return result.concat(
		modifierParser(value)
		.reduce(
			(subresult, modifier) => subresult.concat(prefix(result, modifier)),
			[]
		)
	);
}

function modifierParser (modifiers) {
	return Object.keys(modifiers).map(
		(modifier) => [modifier, modifiers[modifier]]
	).reduce(
		modifierReducer,
		[]
	);
}

function modifierReducer (result, [modifier, value]) {
	if (value !== false && value !== "" && value !== null && typeof value !== "undefined") {
		result.push(`--${modifier}${(value !== true) ? `-${value}` : "" }`);
	}
	return result;
}

function prefix (prefixes, value) {
	return prefixes.map(
		(prefix) => `${prefix}${value}`
	);
}
