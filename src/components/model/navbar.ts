export enum Kind {
	brand = 'BRAND',
	dropdown = 'DROPDOWN',
	inlink = 'INLINK',
	outlink = 'OUTLINK',
	search = 'SEARCH',
	button = 'BUTTON'
}

interface BaseItem {
	kind: Kind;
	label: string;
}

interface Decoration {
	iconOnly: boolean;
	icon: {
		set: string;
		name: string;
	};
	customClass: string;
}

export interface Inlink extends BaseItem {
	kind: Kind.inlink;
	page: string;
	decoration?: Partial<Decoration>;
}

export interface Brand extends Omit<BaseItem, 'label'> {
	kind: Kind.brand;
	page: '/#';
	alt: string;
	vector: string;
	decoration?: Omit<Partial<Decoration>, 'icon' | 'iconOnly'>;
}

export interface Outlink extends BaseItem {
	kind: Kind.outlink;
	href: URL;
	decoration?: Partial<Decoration>;
}

interface ButtonDecoration extends Partial<Decoration> {
	color?: string;
}

export interface Button extends BaseItem {
	kind: Kind.button;
	href: string | URL;
	decoration?: ButtonDecoration;
}

export interface Dropdown extends Omit<Inlink, 'kind' | 'page'> {
	kind: Kind.dropdown;
	page?: string;
	children: (Inlink | Outlink)[];
	decoration?: Partial<Decoration>;
}

export interface Search extends BaseItem {
	kind: Kind.search;
	placeholder: string;
	decoration?: Omit<Partial<Decoration>, 'iconOnly'>;
}

export type NavStart = Brand;
export type NavMain = Inlink | Outlink | Dropdown;
export type NavEnd = Inlink | Outlink | Button | Search;

export interface NavbarData {
	start: NavStart;
	main: readonly NavMain[];
	end: readonly NavEnd[];
}
