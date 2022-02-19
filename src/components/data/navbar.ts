import * as Types from '../model';

// TODO Import this from a plain JSON file.

export const navbar: Types.Navbar.NavbarData = {
	start: {
		kind: Types.Navbar.Kind.brand,
		alt: 'Fundación Nodo Ambiental',
		vector: '', // TODO
		page: '/#'
	},
	main: [
		{
			kind: Types.Navbar.Kind.inlink,
			page: 'services',
			label: 'Servicios'
		},
		{
			kind: Types.Navbar.Kind.dropdown,
			page: 'projects',
			label: 'Proyectos',
			children: [
				{
					kind: Types.Navbar.Kind.inlink,
					label: 'Pilas Usadas',
					page: 'projects/batteries'
				},
				{
					kind: Types.Navbar.Kind.inlink,
					page: 'projects/agroecological-gardens',
					label: 'Huertas Agroecológicas'
				},
				{
					kind: Types.Navbar.Kind.inlink,
					page: 'projects/all',
					label: 'Otros Proyectos'
				}
			]
		},
		{
			kind: Types.Navbar.Kind.dropdown,
			label: '¿Quiénes Somos?',
			children: [
				{
					kind: Types.Navbar.Kind.inlink,
					page: '/about/us/organization',
					label: 'Acerca de la Fundación'
				},
				{
					kind: Types.Navbar.Kind.inlink,
					page: '/about/us/team',
					label: 'Nuestro Equipo'
				},
				{
					kind: Types.Navbar.Kind.inlink,
					page: '/about/us/values',
					label: 'Nuestros Valores'
				},
				{
					kind: Types.Navbar.Kind.inlink,
					page: '/about/us/goals',
					label: 'Nuestros Objetivos'
				},
				{
					kind: Types.Navbar.Kind.inlink,
					page: '/about/fos',
					label: 'Filosofía Open Source'
				},
				{
					kind: Types.Navbar.Kind.inlink,
					page: '/about/working-here',
					label: 'Cómo Trabajamos'
				}
			]
		},
		{
			kind: Types.Navbar.Kind.dropdown,
			label: '¿Qué hacemos?',
			children: [
				{
					kind: Types.Navbar.Kind.inlink,
					page: '/made-here/production',
					label: 'Productos, Tecnología y Creaciones'
				},
				{
					kind: Types.Navbar.Kind.inlink,
					page: '/made-here/research',
					label: 'Investigación Independiente'
				},
				{
					kind: Types.Navbar.Kind.inlink,
					page: '/made-here/docs',
					label: 'Documentación Abierta y Material de Referencia'
				},
				{
					kind: Types.Navbar.Kind.inlink,
					page: '/made-here/knowledge-base',
					label: 'Base de Conocimientos'
				},
				{
					kind: Types.Navbar.Kind.inlink,
					page: '/about/projects',
					label: 'Cómo Diseñamos Nuestros Proyectos'
				}
			]
		},
		{
			kind: Types.Navbar.Kind.dropdown,
			label: 'Más',
			children: [
				{
					kind: Types.Navbar.Kind.outlink,
					href: new URL('mailto:contacto@nodoambiental.org'),
					label: 'Escríbenos'
				},
				{
					kind: Types.Navbar.Kind.outlink,
					href: new URL('mailto:consultas@nodoambiental.org'),
					label: 'Consúltanos'
				},
				{
					kind: Types.Navbar.Kind.inlink,
					page: '/blog',
					label: 'Nuestro Blog'
				},
				{
					kind: Types.Navbar.Kind.outlink,
					href: new URL('https://dev.nodoambiental.org'),
					label: 'Dev Blog'
				},
				{
					kind: Types.Navbar.Kind.outlink,
					href: new URL('https://github.com/nodoambiental'),
					label: 'GitHub',
					decoration: {
						icon: {
							set: 'fa-brands',
							name: 'github'
						},
						iconOnly: true
					}
				},
				{
					kind: Types.Navbar.Kind.outlink,
					href: new URL(''), // TODO
					label: 'FaceBook',
					decoration: {
						icon: {
							set: 'fa-brands',
							name: 'facebook'
						},
						iconOnly: true
					}
				},
				{
					kind: Types.Navbar.Kind.outlink,
					href: new URL(''), // TODO
					label: 'LinkedIn',
					decoration: {
						icon: {
							set: 'fa-brands',
							name: 'linkedin'
						},
						iconOnly: true
					}
				},
				{
					kind: Types.Navbar.Kind.outlink,
					href: new URL(''), // TODO
					label: 'Instagram',
					decoration: {
						icon: {
							set: 'fa-brands',
							name: 'instagram'
						},
						iconOnly: true
					}
				}
			]
		}
	],
	end: [
		{
			kind: Types.Navbar.Kind.search,
			placeholder: 'Buscar',
			label: 'Buscar'
		},
		{
			kind: Types.Navbar.Kind.button,
			label: 'Participá',
			href: 'join'
		},
		{
			kind: Types.Navbar.Kind.button,
			label: 'Doná',
			href: 'donations'
		}
	]
};
