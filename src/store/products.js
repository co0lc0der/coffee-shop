import { v4 as uuidv4 } from 'uuid';

const products = {
	state: {
		best: [
      {
        id: uuidv4(),
        image: 'coffee-1.jpg',
        title: 'Solimo Coffee Beans 2kg',
        price: 10.73,
      },
      {
        id: uuidv4(),
        image: 'coffee-2.jpg',
        title: 'Presto Coffee Beans 1kg',
        price: 15.99,
      },
      {
        id: uuidv4(),
        image: 'coffee-3.jpg',
        title: 'AROMISTICO Coffee 1kg',
        price: 6.99,
      },
    ],
    products: [
      {
        id: uuidv4(),
        image: 'good-1.jpg',
        title: 'Solimo Coffee Beans 2kg',
        country: 'Brazil',
        price: 10.73,
      },
      {
        id: uuidv4(),
        image: 'coffee-2.jpg',
        title: 'Presto Coffee Beans 1kg',
        country: 'Brazil',
        price: 15.99,
      },
      {
        id: uuidv4(),
        image: 'coffee-3.jpg',
        title: 'AROMISTICO Coffee 1kg',
        country: 'Brazil',
        price: 6.99,
      },
      {
        id: uuidv4(),
        image: 'coffee-1.jpg',
        title: 'Solimo Coffee Beans 3kg',
        country: 'Brazil',
        price: 16.73,
      },
      {
        id: uuidv4(),
        image: 'coffee-2.jpg',
        title: 'Presto Coffee Beans 2kg',
        country: 'Brazil',
        price: 12.99,
      },
      {
        id: uuidv4(),
        image: 'coffee-3.jpg',
        title: 'AROMISTICO Coffee 2kg',
        country: 'Brazil',
        price: 9.99,
      },
    ],
	},
	getters: {
		getBestProducts(state) {
			return state.best
		},
		getProducts(state) {
			return state.products
		}
	}
}

export default products
