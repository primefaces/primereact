import { useState, useEffect } from 'react';
import { DataTable } from '../../../lib/datatable/DataTable';
import { Column } from '../../../lib/column/Column';
import { ProductService } from '../../../../service/ProductService';
import { DocSectionCode } from '../../common/docsectioncode';
import { DocSectionText } from '../../common/docsectiontext';

export function MultipleDoc(props) {
    const [products, setProducts] = useState([]);
    const [selectedProducts1, setSelectedProducts1] = useState(null);
    const [selectedProducts2, setSelectedProducts2] = useState(null);
    const [selectedProducts3, setSelectedProducts3] = useState(null);
    const [selectedProducts4, setSelectedProducts4] = useState(null);
    const [selectedProducts5, setSelectedProducts5] = useState(null);
    const [selectedProducts6, setSelectedProducts6] = useState(null);

    useEffect(() => {
        const productService = new ProductService();

        productService.getProductsSmall().then((data) => setProducts(data));
    }, []);

    const code = {
        basic: `
<h6>Row Selection with MetaKey</h6>
<DataTable value={products} selectionMode="multiple" selection={selectedProducts1} onSelectionChange={e => setSelectedProducts1(e.value)} dataKey="id" responsiveLayout="scroll">
    <Column field="code" header="Code"></Column>
    <Column field="name" header="Name"></Column>
    <Column field="category" header="Category"></Column>
    <Column field="quantity" header="Quantity"></Column>
</DataTable>

<h6>Row Selection without MetaKey</h6>
<DataTable value={products} selectionMode="multiple" metaKeySelection={false} selection={selectedProducts2} onSelectionChange={e => setSelectedProducts2(e.value)} dataKey="id" responsiveLayout="scroll">
    <Column field="code" header="Code"></Column>
    <Column field="name" header="Name"></Column>
    <Column field="category" header="Category"></Column>
    <Column field="quantity" header="Quantity"></Column>
</DataTable>

<h6>Row Selection with Drag Selection</h6>
<DataTable value={products} selectionMode="multiple" dragSelection selection={selectedProducts3} onSelectionChange={e => setSelectedProducts3(e.value)} dataKey="id" responsiveLayout="scroll">
    <Column field="code" header="Code"></Column>
    <Column field="name" header="Name"></Column>
    <Column field="category" header="Category"></Column>
    <Column field="quantity" header="Quantity"></Column>
</DataTable>

<h6>Cell Selection with MetaKey</h6>
<DataTable value={products} selectionMode="multiple" cellSelection selection={selectedProducts4} onSelectionChange={e => setSelectedProducts4(e.value)} dataKey="id" responsiveLayout="scroll">
    <Column field="code" header="Code"></Column>
    <Column field="name" header="Name"></Column>
    <Column field="category" header="Category"></Column>
    <Column field="quantity" header="Quantity"></Column>
</DataTable>

<h6>Cell Selection without MetaKey</h6>
<DataTable value={products} selectionMode="multiple" cellSelection metaKeySelection={false} selection={selectedProducts5} onSelectionChange={e => setSelectedProducts5(e.value)} dataKey="id" responsiveLayout="scroll">
    <Column field="code" header="Code"></Column>
    <Column field="name" header="Name"></Column>
    <Column field="category" header="Category"></Column>
    <Column field="quantity" header="Quantity"></Column>
</DataTable>

<h6>Cell Selection with Drag Selection</h6>
<DataTable value={products} selectionMode="multiple" cellSelection dragSelection selection={selectedProducts6} onSelectionChange={e => setSelectedProducts6(e.value)} dataKey="id" responsiveLayout="scroll">
    <Column field="code" header="Code"></Column>
    <Column field="name" header="Name"></Column>
    <Column field="category" header="Category"></Column>
    <Column field="quantity" header="Quantity"></Column>
</DataTable>
        `,
        javascript: `
import React, { useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from '../service/ProductService';
import './DataTableDemo.css';

const MultipleDoc = () => {

    const [products, setProducts] = useState([]);
    const [selectedProducts1, setSelectedProducts1] = useState(null);
    const [selectedProducts2, setSelectedProducts2] = useState(null);
    const [selectedProducts3, setSelectedProducts3] = useState(null);
    const [selectedProducts4, setSelectedProducts4] = useState(null);
    const [selectedProducts5, setSelectedProducts5] = useState(null);
    const [selectedProducts6, setSelectedProducts6] = useState(null);

    useEffect(() => {
        const productService = new ProductService();

        productService.getProductsSmall().then(data => setProducts(data));
    },[]);

    return (
        <div className="card datatable-selection-demo">
            <h6>Row Selection with MetaKey</h6>
            <DataTable value={products} selectionMode="multiple" selection={selectedProducts1} onSelectionChange={e => setSelectedProducts1(e.value)} dataKey="id" responsiveLayout="scroll">
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>

            <h6>Row Selection without MetaKey</h6>
            <DataTable value={products} selectionMode="multiple" metaKeySelection={false} selection={selectedProducts2} onSelectionChange={e => setSelectedProducts2(e.value)} dataKey="id" responsiveLayout="scroll">
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>

            <h6>Row Selection with Drag Selection</h6>
            <DataTable value={products} selectionMode="multiple" dragSelection selection={selectedProducts3} onSelectionChange={e => setSelectedProducts3(e.value)} dataKey="id" responsiveLayout="scroll">
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>

            <h6>Cell Selection with MetaKey</h6>
            <DataTable value={products} selectionMode="multiple" cellSelection selection={selectedProducts4} onSelectionChange={e => setSelectedProducts4(e.value)} dataKey="id" responsiveLayout="scroll">
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>

            <h6>Cell Selection without MetaKey</h6>
            <DataTable value={products} selectionMode="multiple" cellSelection metaKeySelection={false} selection={selectedProducts5} onSelectionChange={e => setSelectedProducts5(e.value)} dataKey="id" responsiveLayout="scroll">
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>

            <h6>Cell Selection with Drag Selection</h6>
            <DataTable value={products} selectionMode="multiple" cellSelection dragSelection selection={selectedProducts6} onSelectionChange={e => setSelectedProducts6(e.value)} dataKey="id" responsiveLayout="scroll">
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>
        </div>
    );
}
        `,
        typescript: `
import React, { useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from '../service/ProductService';
import './DataTableDemo.css';

const MultipleDoc = () => {

    const [products, setProducts] = useState([]);
    const [selectedProducts1, setSelectedProducts1] = useState(null);
    const [selectedProducts2, setSelectedProducts2] = useState(null);
    const [selectedProducts3, setSelectedProducts3] = useState(null);
    const [selectedProducts4, setSelectedProducts4] = useState(null);
    const [selectedProducts5, setSelectedProducts5] = useState(null);
    const [selectedProducts6, setSelectedProducts6] = useState(null);

    useEffect(() => {
        const productService = new ProductService();

        productService.getProductsSmall().then(data => setProducts(data));
    },[]);

    return (
        <div className="card datatable-selection-demo">
            <h6>Row Selection with MetaKey</h6>
            <DataTable value={products} selectionMode="multiple" selection={selectedProducts1} onSelectionChange={e => setSelectedProducts1(e.value)} dataKey="id" responsiveLayout="scroll">
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>

            <h6>Row Selection without MetaKey</h6>
            <DataTable value={products} selectionMode="multiple" metaKeySelection={false} selection={selectedProducts2} onSelectionChange={e => setSelectedProducts2(e.value)} dataKey="id" responsiveLayout="scroll">
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>

            <h6>Row Selection with Drag Selection</h6>
            <DataTable value={products} selectionMode="multiple" dragSelection selection={selectedProducts3} onSelectionChange={e => setSelectedProducts3(e.value)} dataKey="id" responsiveLayout="scroll">
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>

            <h6>Cell Selection with MetaKey</h6>
            <DataTable value={products} selectionMode="multiple" cellSelection selection={selectedProducts4} onSelectionChange={e => setSelectedProducts4(e.value)} dataKey="id" responsiveLayout="scroll">
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>

            <h6>Cell Selection without MetaKey</h6>
            <DataTable value={products} selectionMode="multiple" cellSelection metaKeySelection={false} selection={selectedProducts5} onSelectionChange={e => setSelectedProducts5(e.value)} dataKey="id" responsiveLayout="scroll">
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>

            <h6>Cell Selection with Drag Selection</h6>
            <DataTable value={products} selectionMode="multiple" cellSelection dragSelection selection={selectedProducts6} onSelectionChange={e => setSelectedProducts6(e.value)} dataKey="id" responsiveLayout="scroll">
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    In multiple mode, selection binding should be an array. For touch enabled devices, selection is managed by tapping and for other devices metakey or shiftkey are required. Setting metaKeySelection property as false enables multiple
                    selection without meta key. In addition, the rectangular selection can be dragged over the desired rows or cells thanks to the dragSelection property. In this way, a range of rows or cells can be selected.
                </p>{' '}
            </DocSectionText>
            <div className="card">
                <h6>Row Selection with MetaKey</h6>
                <DataTable value={products} selectionMode="multiple" selection={selectedProducts1} onSelectionChange={(e) => setSelectedProducts1(e.value)} dataKey="id" responsiveLayout="scroll">
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                </DataTable>

                <h6>Row Selection without MetaKey</h6>
                <DataTable value={products} selectionMode="multiple" metaKeySelection={false} selection={selectedProducts2} onSelectionChange={(e) => setSelectedProducts2(e.value)} dataKey="id" responsiveLayout="scroll">
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                </DataTable>

                <h6>Row Selection with Drag Selection</h6>
                <DataTable value={products} selectionMode="multiple" dragSelection selection={selectedProducts3} onSelectionChange={(e) => setSelectedProducts3(e.value)} dataKey="id" responsiveLayout="scroll">
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                </DataTable>

                <h6>Cell Selection with MetaKey</h6>
                <DataTable value={products} selectionMode="multiple" cellSelection selection={selectedProducts4} onSelectionChange={(e) => setSelectedProducts4(e.value)} dataKey="id" responsiveLayout="scroll">
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                </DataTable>

                <h6>Cell Selection without MetaKey</h6>
                <DataTable value={products} selectionMode="multiple" cellSelection metaKeySelection={false} selection={selectedProducts5} onSelectionChange={(e) => setSelectedProducts5(e.value)} dataKey="id" responsiveLayout="scroll">
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                </DataTable>

                <h6>Cell Selection with Drag Selection</h6>
                <DataTable value={products} selectionMode="multiple" cellSelection dragSelection selection={selectedProducts6} onSelectionChange={(e) => setSelectedProducts6(e.value)} dataKey="id" responsiveLayout="scroll">
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                </DataTable>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
