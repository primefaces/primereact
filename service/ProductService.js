import getConfig from 'next/config';

const contextPath = getConfig().publicRuntimeConfig.contextPath;

export const ProductService = {
    getProductsMini() {
        return fetch(contextPath + '/data/products-mini.json')
            .then((res) => res.json())
            .then((d) => d.data);
    },

    getProductsSmall() {
        return fetch(contextPath + '/data/products-small.json')
            .then((res) => res.json())
            .then((d) => d.data);
    },

    getProducts() {
        return fetch(contextPath + '/data/products.json')
            .then((res) => res.json())
            .then((d) => d.data);
    },

    getProductsWithOrdersSmall() {
        return fetch(contextPath + '/data/products-orders-small.json')
            .then((res) => res.json())
            .then((d) => d.data);
    }
};
