const bem = require("../index");

describe("bem.single", () => {

	test("block", () => {
		expect(bem.single("block")).toBe("block");
	});

	test("block and element", () => {
		expect(bem.single("block", "element")).toBe("block__element");
	});

	test("block with modifier with a value of true", () => {
		expect(bem.single("block", {modifier: true})).toBe("block--modifier");
	});

	test("block with modifier with a value of false", () => {
		expect(bem.single("block", {modifier: false})).toBe("block");
	});

	test("block with modifier with a value of null", () => {
		expect(bem.single("block", {modifier: null})).toBe("block");
	});

	test("block with modifier with a value of undefined", () => {
		var value;
		expect(bem.single("block", {modifier: value})).toBe("block");
	});

	test("block with modifier with a value of a string", () => {
		expect(bem.single("block", {modifier: "value"})).toBe("block--modifier-value");
	});

	test("block with modifier with a value of an empty string", () => {
		expect(bem.single("block", {modifier: ""})).toBe("block");
	});

	test("block with modifier with a value of a number", () => {
		expect(bem.single("block", {modifier: 200})).toBe("block--modifier-200");
	});

	test("block with modifier with a value of 0", () => {
		expect(bem.single("block", {modifier: 0})).toBe("block--modifier-0");
	});

	test("block and element with modifier", () => {
		expect(bem.single("block", "element", {modifier: true})).toBe("block__element--modifier");
	});

	test("block with modifier and element", () => {
		expect(bem.single("block", {modifier: true}, "element")).toBe("block--modifier__element");
	});

	test("block with modifier and element with modifier", () => {
		expect(bem.single("block", {modifier: true}, "element", {modifier: true})).toBe("block--modifier__element--modifier");
	});

});
