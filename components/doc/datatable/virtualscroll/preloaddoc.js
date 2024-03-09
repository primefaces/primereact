import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Column } from '@/components/lib/column/Column';
import { DataTable } from '@/components/lib/datatable/DataTable';
import Link from 'next/link';
import { CarService } from '../../../../service/CarService';
import DeferredDemo from '@/components/demo/DeferredDemo';
import { useState } from 'react';

export function PreloadVirtualScrollDoc(props) {
    const [cars, setCars] = useState([]);

    const loadDemoData = () => {
        setCars(Array.from({ length: 100000 }).map((_, i) => CarService.generateCar(i + 1)));
    };

    const code = {
        basic: `
<DataTable value={cars} scrollable scrollHeight="400px" virtualScrollerOptions={{ itemSize: 46 }} tableStyle={{ minWidth: '50rem' }}>
    <Column field="id" header="Id" style={{ width: '20%' }}></Column>
    <Column field="vin" header="Vin" style={{ width: '20%' }}></Column>
    <Column field="year" header="Year" style={{ width: '20%' }}></Column>
    <Column field="brand" header="Brand" style={{ width: '20%' }}></Column>
    <Column field="color" header="Color" style={{ width: '20%' }}></Column>
</DataTable>
        `,
        javascript: `
import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { CarService } from './service/CarService';

export default function PreloadVirtualScrollDemo() {
    const cars = Array.from({ length: 100000 }).map((_, i) => CarService.generateCar(i + 1));

    return (
        <div className="card">
            <DataTable value={cars} scrollable scrollHeight="400px" virtualScrollerOptions={{ itemSize: 46 }} tableStyle={{ minWidth: '50rem' }}>
                <Column field="id" header="Id" style={{ width: '20%' }}></Column>
                <Column field="vin" header="Vin" style={{ width: '20%' }}></Column>
                <Column field="year" header="Year" style={{ width: '20%' }}></Column>
                <Column field="brand" header="Brand" style={{ width: '20%' }}></Column>
                <Column field="color" header="Color" style={{ width: '20%' }}></Column>
            </DataTable>
        </div>
    );
}
        `,
        typescript: `
import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { CarService } from './service/CarService';

interface Car {
    id: number;
    vin: string;
    brand: string;
    color: string;
    year: number;
}

export default function PreloadVirtualScrollDemo() {
    const cars: Car[] = Array.from({ length: 100000 }).map((_, i) => CarService.generateCar(i + 1));

    return (
        <div className="card">
            <DataTable value={cars} scrollable scrollHeight="400px" virtualScrollerOptions={{ itemSize: 46 }} tableStyle={{ minWidth: '50rem' }}>
                <Column field="id" header="Id" style={{ width: '20%' }}></Column>
                <Column field="vin" header="Vin" style={{ width: '20%' }}></Column>
                <Column field="year" header="Year" style={{ width: '20%' }}></Column>
                <Column field="brand" header="Brand" style={{ width: '20%' }}></Column>
                <Column field="color" header="Color" style={{ width: '20%' }}></Column>
            </DataTable>
        </div>
    );
}
        `,
        data: `
{
    id: 1
    vin: tvACo,
    brand: Norma,
    color: Black,
    year: 2002
}
`
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Virtual Scrolling is an efficient way to render large amount data. Usage is similar to regular scrolling with the addition of <i>virtualScrollerOptions</i> property to define a fixed <i>itemSize</i>. Internally,{' '}
                    <Link href="/virtualscroller">VirtualScroller</Link> component is utilized so refer to the API of VirtualScroller for more information about the available options.
                </p>
                <p>
                    In this example, <strong>100000</strong> preloaded records are rendered by the Table.
                </p>
            </DocSectionText>
            <DeferredDemo onLoad={loadDemoData}>
                <div className="card">
                    <DataTable value={cars} scrollable scrollHeight="400px" virtualScrollerOptions={{ itemSize: 46 }} tableStyle={{ minWidth: '50rem' }}>
                        <Column field="id" header="Id" style={{ width: '20%' }}></Column>
                        <Column field="vin" header="Vin" style={{ width: '20%' }}></Column>
                        <Column field="year" header="Year" style={{ width: '20%' }}></Column>
                        <Column field="brand" header="Brand" style={{ width: '20%' }}></Column>
                        <Column field="color" header="Color" style={{ width: '20%' }}></Column>
                    </DataTable>
                </div>
            </DeferredDemo>
            <DocSectionCode code={code} service={['CarService']} />
        </>
    );
}
