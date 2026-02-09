export type Styles = Record<string, string>;

export type ModifierValue = boolean | string | number | null | undefined;

export type Modifiers = Record<string, ModifierValue>;

export type ClassNames = string[];

export type BoundBem = {
	(): string;
	(element: string): string;
	(modifiers: Modifiers): string;
	(element: string, modifiers: Modifiers): string;
};

declare module "@drdk/bem-helper" {
	function bemHelper(block: string, styles?: Styles): BoundBem;

	export default bemHelper;
}
