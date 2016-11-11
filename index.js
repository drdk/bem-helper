function BEM (...args) {
	return argParser(...args).join(" ");
}

BEM.single = (...args) => argParser(...args).pop();

function argParser (block, ...args) {
	return args.reduce(argReducer, [block]);
}

function argReducer (result, value) {

	if (typeof value === "object") {
		return result.concat(
			modifierParser(value)
			.reduce(
				(subresult, modifier) => subresult.concat(prefix(result, modifier)),
				[]
			)
		);
	}

	return prefix(result, `__${value}`);

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
	if (value !== false) {
		result.push(`--${modifier}${(value !== true) ? `-${value}` : "" }`);
	}
	return result;
}

function prefix (prefixes, value) {
	return prefixes.map(
		(prefix) => `${prefix}${value}`
	);
}

module.exports = BEM;
