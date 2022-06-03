import { v4 as uuidv4 } from 'uuid';

const links = {
	state: {
		header: {
			id: uuidv4(),
			link: '/',
			icon: 'Logo.svg'
		},
		footer: {
			id: uuidv4(),
			link: '/',
			icon: 'Logo_black.svg'
		},
		other: [
			{
				id: uuidv4(),
				link: '/our-coffee',
				text: 'Our coffee',
			},
			{
				id: uuidv4(),
				link: '/goods-page',
				text: 'For your pleasure',
			},
			{
				id: uuidv4(),
				link: '/contacts',
				text: 'Contact us',
			},
		]
	},
	getters: {
		getHeaderLinks(state) {
			return {
				header: state.header,
				other: state.other,
			}
		},
		getFooterLinks(state) {
			return {
				footer: state.footer,
				other: state.other,
			}
		}
	}
}

export default links
