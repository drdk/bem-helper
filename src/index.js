/* @flow */

/*:: type Modifiers = { [key: string]: any }; */
/*:: type Classnames = Array<string>; */

function bem (...args/*:any*/) /*:string*/ {
	return argParser(false, ...args).join(" ");
}

function scoped (...args/*:any*/) /*:string*/ {
	return argParser(true, ...args).join(" ");
};

function single (...args/*:any*/) /*:string*/ {
	return argParser(true, ...args).pop();
};

function argParser (scoped/*:boolean*/, block/*:string*/, ...args/*:any*/) /*:Classnames*/ {
	return args.reduce(argReducer(scoped), [block]);
}

function argReducer (scoped/*:boolean*/) {

	return function (result/*:any*/, value/*:any*/) /*:Classnames*/ {
		if (typeof value === "object") {
			return modifers(result, value, "--");
		}

		var prefixed = concat(result, value, "__");

		return (scoped) ? prefixed : [value].concat(prefixed);
	}

}

function modifers(result/*:Classnames*/, value/*:Modifiers*/, delimiter/*:string*/) /*:Classnames*/ {
	return result.concat(
		modifierParser(value)
		.reduce(
			(subresult/*:Classnames*/, modifier/*:string*/) => subresult.concat(concat(result, modifier, delimiter)),
			[]
		)
	);
}

function modifierParser (modifiers/*:Modifiers*/) /*:Classnames*/ {
	return Object.keys(modifiers).map(
		(modifier/*:string*/) => [modifier, modifiers[modifier]]
	).reduce(
		modifierReducer,
		[]
	);
}

function modifierReducer (result/*:Classnames*/, [modifier/*:string*/, value/*:any*/]) /*:Classnames*/ {
	if (value !== false && value !== "" && value !== null && typeof value !== "undefined") {
		result.push(`${modifier}${(value !== true) ? `-${value}` : "" }`);
	}
	return result;
}

function concat (prefixes/*:Classnames*/, value/*:string*/, delimiter/*:string*/) /*:Classnames*/ {
	return prefixes.map(
		(prefix/*:string*/) => `${prefix}${delimiter}${value}`
	);
}

module.exports = bem;

module.exports.scoped = scoped;

module.exports.single = single;
