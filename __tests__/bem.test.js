import bem from "../index.js";

describe("bem", () => {

	test("block", () => {
		expect(bem("block")).toBe("block");
	});

	test("block and element", () => {
		expect(bem("block", "element")).toBe("block__element");
	});

	test("block with modifier with a value of true", () => {
		expect(bem("block", {modifier: true})).toBe("block block--modifier");
	});

	test("block with modifier with a value of false", () => {
		expect(bem("block", {modifier: false})).toBe("block");
	});

	test("block with modifier with a value of null", () => {
		expect(bem("block", {modifier: null})).toBe("block");
	});

	test("block with modifier with a value of undefined", () => {
		var value;
		expect(bem("block", {modifier: value})).toBe("block");
	});

	test("block with modifier with a value of a string", () => {
		expect(bem("block", {modifier: "value"})).toBe("block block--modifier-value");
	});

	test("block with modifier with a value of an empty string", () => {
		expect(bem("block", {modifier: ""})).toBe("block");
	});

	test("block with modifier with a value of a number", () => {
		expect(bem("block", {modifier: 200})).toBe("block block--modifier-200");
	});

	test("block with modifier with a value of 0", () => {
		expect(bem("block", {modifier: 0})).toBe("block block--modifier-0");
	});

	test("block and element with modifier", () => {
		expect(bem("block", "element", {modifier: true})).toBe("block__element block__element--modifier");
	});

	test("block and element with multiple modifiers", () => {
		expect(bem("block", "element", {modifier1: true, modifier2: "value"})).toBe("block__element block__element--modifier1 block__element--modifier2-value");
	});

	test("block with modifier and element", () => {
		expect(bem("block", {modifier: true}, "element")).toBe("block__element block--modifier__element");
	});

	test("block with modifier and element with modifier", () => {
		expect(bem("block", {modifier: true}, "element", {modifier: true})).toBe("block__element block--modifier__element block__element--modifier block--modifier__element--modifier");
	});

});
