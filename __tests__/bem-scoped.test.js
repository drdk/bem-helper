const bem = require("../lib/index");

describe("bem.scoped", () => {

	test("block", () => {
		expect(bem.scoped("block")).toBe("block");
	});

	test("block and element", () => {
		expect(bem.scoped("block", "element")).toBe("block__element");
	});

	test("block with modifier with a value of true", () => {
		expect(bem.scoped("block", {modifier: true})).toBe("block block--modifier");
	});

	test("block with modifier with a value of false", () => {
		expect(bem.scoped("block", {modifier: false})).toBe("block");
	});

	test("block with modifier with a value of null", () => {
		expect(bem.scoped("block", {modifier: null})).toBe("block");
	});

	test("block with modifier with a value of undefined", () => {
		var value;
		expect(bem.scoped("block", {modifier: value})).toBe("block");
	});

	test("block with modifier with a value of a string", () => {
		expect(bem.scoped("block", {modifier: "value"})).toBe("block block--modifier-value");
	});

	test("block with modifier with a value of an empty string", () => {
		expect(bem.scoped("block", {modifier: ""})).toBe("block");
	});

	test("block with modifier with a value of a number", () => {
		expect(bem.scoped("block", {modifier: 200})).toBe("block block--modifier-200");
	});

	test("block with modifier with a value of 0", () => {
		expect(bem.scoped("block", {modifier: 0})).toBe("block block--modifier-0");
	});

	test("block and element with modifier", () => {
		expect(bem.scoped("block", "element", {modifier: true})).toBe("block__element block__element--modifier");
	});

	test("block and element with multiple modifiers", () => {
		expect(bem.scoped("block", "element", {modifier1: true, modifier2: "value"})).toBe("block__element block__element--modifier1 block__element--modifier2-value");
	});

	test("block with modifier and element", () => {
		expect(bem.scoped("block", {modifier: true}, "element")).toBe("block__element block--modifier__element");
	});

	test("block with modifier and element with modifier", () => {
		expect(bem.scoped("block", {modifier: true}, "element", {modifier: true})).toBe("block__element block--modifier__element block__element--modifier block--modifier__element--modifier");
	});

});
