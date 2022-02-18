export const navbar = {
	components: {
		element: 'btn btn-ghost btn-sm rounded-btn',
		button: {
			common: 'btn btn-primary btn-sm rounded-btn',
			donation: 'btn btn-accent btn-sm rounded-btn'
		},
		dropdown: 'dropdown dropdown-hover',
		svg: {
			regular: 'inline-block w-6 h-6 stroke-current',
			error: 'inline-block w-6 h-6 stroke-current text-error',
			viewbox: '0 0 24 24'
		}
	},
	containers: {
		start: 'flex-none px-2 mx-2'
	},
	body: 'navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box'
};
