import React, { useState, useEffect } from 'react';
import { render } from '@testing-library/react';
import { OrderList } from './OrderList';
import ProductService from '../../showcase/service/ProductService';


const OrderListTestComponent = () => {

    const [products, setProducts] = useState([]);
    const productService = new ProductService();

    useEffect(() => {
        productService.getProductsSmall().then(data => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return <OrderList value={products} header="List of Products" listStyle={{ height: 'auto' }} dataKey="id"
        onChange={(e) => setProducts(e.value)}></OrderList>
}

describe('OrderList Component', () => {
    test('should display the OrderList', () => {
        const { container } = render(<OrderListTestComponent />);
        const orderListElement = container.firstChild;

        expect(container).toBeInTheDocument();
        expect(orderListElement).toBeInTheDocument();
        expect(orderListElement).toHaveClass('p-orderlist p-component')
    })
})