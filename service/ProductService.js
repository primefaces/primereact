import getConfig from 'next/config';

export class ProductService {
    constructor() {
        this.contextPath = getConfig().publicRuntimeConfig.contextPath;
    }

    getProductsMini() {
        return fetch(this.contextPath + '/data/products-mini.json')
            .then((res) => res.json())
            .then((d) => d.data);
    }

    getProductsSmall() {
        return fetch(this.contextPath + '/data/products-small.json')
            .then((res) => res.json())
            .then((d) => d.data);
    }

    getProducts() {
        return fetch(this.contextPath + '/data/products.json')
            .then((res) => res.json())
            .then((d) => d.data);
    }

    getProductsWithOrdersSmall() {
        return fetch(this.contextPath + '/data/products-orders-small.json')
            .then((res) => res.json())
            .then((d) => d.data);
    }
}
