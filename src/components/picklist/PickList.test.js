import React, { useState, useEffect } from 'react';
import { render } from '@testing-library/react';
import { PickList } from './PickList'
import ProductService from '../../showcase/service/ProductService';

const PickListTestComponent = () => {
    const [source, setSource] = useState([]);
    const [target, setTarget] = useState([]);
    const productService = new ProductService();

    useEffect(() => {
        productService.getProductsSmall().then(data => setSource(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onChange = (event) => {
        setSource(event.source);
        setTarget(event.target);
    }

    const itemTemplate = (item) => {
        return (
            <div className="product-item">
                <div className="image-container">
                    <img src={`showcase/demo/images/product/${item.image}`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={item.name} />
                </div>
                <div className="product-list-detail">
                    <h5 className="p-mb-2">{item.name}</h5>
                    <i className="pi pi-tag product-category-icon"></i>
                    <span className="product-category">{item.category}</span>
                </div>
                <div className="product-list-action">
                    <h6 className="p-mb-2">${item.price}</h6>
                    <span className={`product-badge status-${item.inventoryStatus.toLowerCase()}`}>{item.inventoryStatus}</span>
                </div>
            </div>
        );
    }

    return (
        <PickList source={source} target={target} itemTemplate={itemTemplate}
            sourceHeader="Available" targetHeader="Selected"
            sourceStyle={{ height: '342px' }} targetStyle={{ height: '342px' }}
            onChange={onChange}></PickList>
    );
}

describe('PickList Component', () => {
    test('should display the PickList', () => {
        const { container } = render(<PickListTestComponent />);
        const pickListElement = container.firstChild;

        expect(container).toBeInTheDocument();
        expect(pickListElement).toBeInTheDocument();
        expect(pickListElement).toHaveClass('p-picklist p-component')
    })
})