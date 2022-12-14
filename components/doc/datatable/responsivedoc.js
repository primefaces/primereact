import React, { useState, useEffect } from 'react';
import { DataTable } from '../../lib/datatable/DataTable';
import { Column } from '../../lib/column/Column';
import { ProductService } from '../../../service/ProductService';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';
import { Rating } from '../../lib/rating/Rating';
import { RadioButton } from '../../lib/radiobutton/RadioButton';

export function ResponsiveDoc(props) {
    const [products, setProducts] = useState([]);

    const [selectedOptionValue, setSelectedOptionValue] = useState('scroll');

    const code = {
        basic: `
<DataTable value={products} responsiveLayout="${selectedOptionValue}">
    <Column field="code" header="Code" />
    <Column field="name" header="Name" />
    <Column field="category" header="Category" />
    <Column field="quantity" header="Quantity" />
    <Column field="inventoryStatus" header="Status" body={statusTemplate} />
    <Column field="rating" header="Rating" body={ratingTemplate} />
</DataTable>
        `,
        javascript: `
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Rating } from 'primereact/rating';
import { ProductService } from '../service/ProductService';

const ScrollDoc = () => {
    const [products, setProducts] = useState([]);
    const productService = new ProductService();

    useEffect(() => {
        productService.getProductsSmall().then(data => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const statusTemplate = (rowData) => {
        return <span className={\`product-badge status-\${(rowData.inventoryStatus ? rowData.inventoryStatus.toLowerCase() : '')}\`}>{rowData.inventoryStatus}</span>;
    }

    const ratingTemplate = (rowData) => {
        return <Rating value={rowData.rating} readOnly cancel={false} />
    }

    return (
        <div className="card">
            <DataTable value={products} responsiveLayout="${selectedOptionValue}">
                <Column field="code" header="Code" />
                <Column field="name" header="Name" />
                <Column field="category" header="Category" />
                <Column field="quantity" header="Quantity" />
                <Column field="inventoryStatus" header="Status" body={statusTemplate} />
                <Column field="rating" header="Rating" body={ratingTemplate} />
            </DataTable>
        </div>
    );
}
        `,
        typescript: `
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Rating } from 'primereact/rating';
import { ProductService } from '../service/ProductService';

const ScrollDoc = () => {
    const [products, setProducts] = useState([]);
    const productService = new ProductService();

    useEffect(() => {
        productService.getProductsSmall().then(data => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const statusTemplate = (rowData) => {
        return <span className={\`product-badge status-\${(rowData.inventoryStatus ? rowData.inventoryStatus.toLowerCase() : '')}\`}>{rowData.inventoryStatus}</span>;
    }

    const ratingTemplate = (rowData) => {
        return <Rating value={rowData.rating} readOnly cancel={false} />
    }

    return (
        <div className="card">
            <DataTable value={products} responsiveLayout="${selectedOptionValue}">
                <Column field="code" header="Code" />
                <Column field="name" header="Name" />
                <Column field="category" header="Category" />
                <Column field="quantity" header="Quantity" />
                <Column field="inventoryStatus" header="Status" body={statusTemplate} />
                <Column field="rating" header="Rating" body={ratingTemplate} />
            </DataTable>
        </div>
    );
}
        `
    };

    const productService = new ProductService();

    const statusTemplate = (rowData) => {
        return <span className={`product-badge status-${rowData.inventoryStatus ? rowData.inventoryStatus.toLowerCase() : ''}`}>{rowData.inventoryStatus}</span>;
    };

    const ratingTemplate = (rowData) => {
        return <Rating value={rowData.rating} readOnly cancel={false} />;
    };

    const onRadioButtonChange = (option) => {
        setSelectedOptionValue(option.value);
    };

    useEffect(() => {
        productService.getProductsSmall().then((data) => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const demoOptions = [
        {
            label: 'Scroll',
            value: 'scroll'
        },
        {
            label: 'Stack',
            value: 'stack'
        }
    ];

    return (
        <>
            <DocSectionText {...props}>
                <p>DataTable responsive layout can be achieved in two ways; first approach is displaying a horizontal scrollbar for smaller screens and second one is defining a breakpoint to display the cells of a row as stacked.</p>
            </DocSectionText>
            <div className="card mt-3 flex flex-column justify-content-center">
                <div className="flex flex-row justify-content-center align-items-center flex-wrap">
                    <div className="card flex flex-wrap justify-content-center align-items-center w-full gap-3">
                        {demoOptions.map((option) => {
                            const { value, label } = option;

                            return (
                                <div className="mr-4" key={label}>
                                    <RadioButton value={label} onChange={() => onRadioButtonChange(option)} checked={selectedOptionValue === value} />
                                    <label htmlFor={label} className="ml-2">
                                        {label} Responsive Layout
                                    </label>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <DataTable value={products} responsiveLayout={selectedOptionValue}>
                    <Column field="code" header="Code" />
                    <Column field="name" header="Name" />
                    <Column field="category" header="Category" />
                    <Column field="quantity" header="Quantity" />
                    <Column field="inventoryStatus" header="Status" body={statusTemplate} />
                    <Column field="rating" header="Rating" body={ratingTemplate} />
                </DataTable>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
