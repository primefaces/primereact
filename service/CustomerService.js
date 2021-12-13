import getConfig from 'next/config';

export class CustomerService {

    constructor() {
        this.contextPath = getConfig().publicRuntimeConfig.contextPath;
    }

    getCustomersSmall() {
        return fetch(this.contextPath + '/data/customers-small.json').then(res => res.json())
                .then(d => d.data);
    }

    getCustomersMedium() {
        return fetch(this.contextPath + '/data/customers-medium.json').then(res => res.json())
                .then(d => d.data);
    }

    getCustomersLarge() {
        return fetch(this.contextPath + '/data/customers-large.json').then(res => res.json())
                .then(d => d.data);
    }

    getCustomersXLarge() {
        return fetch(this.contextPath + '/data/customers-xlarge.json').then(res => res.json())
                .then(d => d.data);
    }

    getCustomers(params) {
        const queryParams = params ? Object.keys(params).map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k])).join('&') : '';
        return fetch('https://www.primefaces.org/data/customers?' + queryParams).then(res => res.json())
    }
}
