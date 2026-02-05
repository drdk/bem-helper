import bh from "../index.js";

describe("bem helper", () => {
	describe("should fail", () => {
		test("without block", () => {
			expect(() => bh()).toThrowError(
				"@dr/bem-helper did not receive a valid `block` argument"
			);
		});
	});

	describe("without styles", () => {
		const bem = bh("block");

		test("block", () => {
			expect(bem()).toBe("block");
		});

		test("block and element", () => {
			expect(bem("element")).toBe("block__element");
		});

		test("block with modifier with a value of true", () => {
			expect(bem({ modifier: true })).toBe("block block--modifier");
		});

		test("block with modifier with a value of false", () => {
			expect(bem({ modifier: false })).toBe("block");
		});

		test("block with modifier with a value of null", () => {
			expect(bem({ modifier: null })).toBe("block");
		});

		test("block with modifier with a value of undefined", () => {
			var value;
			expect(bem({ modifier: value })).toBe("block");
		});

		test("block with modifier with a value of a string", () => {
			expect(bem({ modifier: "value" })).toBe("block block--modifier-value");
		});

		test("block with modifier with a value of an empty string", () => {
			expect(bem({ modifier: "" })).toBe("block");
		});

		test("block with modifier with a value of a number", () => {
			expect(bem({ modifier: 200 })).toBe("block block--modifier-200");
		});

		test("block with modifier with a value of 0", () => {
			expect(bem({ modifier: 0 })).toBe("block block--modifier-0");
		});

		test("block and element with modifier", () => {
			expect(bem("element", { modifier: true })).toBe(
				"block__element block__element--modifier"
			);
		});

		test("block and element with multiple modifiers", () => {
			expect(bem("element", { modifier1: true, modifier2: "value" })).toBe(
				"block__element block__element--modifier1 block__element--modifier2-value"
			);
		});
	});

	describe("with styles", () => {
		const styles = {
			block: "block__f874i",
			"block--modifier": "block--modifier__c7ks7",
			"block--modifier-value": "block--modifier-value__c7ks7",
			"block--modifier-200": "block--modifier-200__yb06j",
			"block--modifier-0": "block--modifier-0__al9hd",
			"block--modifier1": "block--modifier1__32004",
			"block--modifier2-value": "block--modifier2-value__onvyn",
			block__element: "block__element__hxvxn",
			"block__element--modifier": "block__element--modifier__nb3t8",
			"block__element--modifier1": "block__element--modifier1__33ebz",
			"block__element--modifier2-value":
				"block__element--modifier2-value__sw43g"
		};

		const bem = bh("block", styles);

		test("block", () => {
			expect(bem()).toBe("block__f874i");
		});

		test("block and element", () => {
			expect(bem("element")).toBe("block__element__hxvxn");
		});

		test("block with modifier with a value of true", () => {
			expect(bem({ modifier: true })).toBe(
				"block__f874i block--modifier__c7ks7"
			);
		});

		test("block with modifier with a value of false", () => {
			expect(bem({ modifier: false })).toBe("block__f874i");
		});

		test("block with modifier with a value of null", () => {
			expect(bem({ modifier: null })).toBe("block__f874i");
		});

		test("block with modifier with a value of undefined", () => {
			var value;
			expect(bem({ modifier: value })).toBe("block__f874i");
		});

		test("block with modifier with a value of a string", () => {
			expect(bem({ modifier: "value" })).toBe(
				"block__f874i block--modifier-value__c7ks7"
			);
		});

		test("block with modifier with a value of an empty string", () => {
			expect(bem({ modifier: "" })).toBe("block__f874i");
		});

		test("block with modifier with a value of a number", () => {
			expect(bem({ modifier: 200 })).toBe(
				"block__f874i block--modifier-200__yb06j"
			);
		});

		test("block with modifier with a value of 0", () => {
			expect(bem({ modifier: 0 })).toBe(
				"block__f874i block--modifier-0__al9hd"
			);
		});

		test("block with multiple modifiers", () => {
			expect(bem({ modifier1: true, modifier2: "value" })).toBe(
				"block__f874i block--modifier1__32004 block--modifier2-value__onvyn"
			);
		});

		test("block and element with modifier", () => {
			expect(bem("element", { modifier: true })).toBe(
				"block__element__hxvxn block__element--modifier__nb3t8"
			);
		});

		test("block and element with multiple modifiers", () => {
			expect(bem("element", { modifier1: true, modifier2: "value" })).toBe(
				"block__element__hxvxn block__element--modifier1__33ebz block__element--modifier2-value__sw43g"
			);
		});
	});
});
