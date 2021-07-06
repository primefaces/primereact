export default class ProductService {

    getProductsSmall() {
		return fetch('showcase/demo/data/products-small.json').then(res => res.json()).then(d => d.data);
	}

	getProducts() {
		return fetch('showcase/demo/data/products.json').then(res => res.json()).then(d => d.data);
    }

    getProductsWithOrdersSmall() {
		return fetch('showcase/demo/data/products-orders-small.json').then(res => res.json()).then(d => d.data);
	}
}
