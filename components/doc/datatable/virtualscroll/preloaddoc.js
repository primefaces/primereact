import Link from 'next/link';
import React from 'react';
import { CarService } from '../../../../service/CarService';
import { Column } from '../../../lib/column/Column';
import { DataTable } from '../../../lib/datatable/DataTable';
import { DocSectionCode } from '../../common/docsectioncode';
import { DocSectionText } from '../../common/docsectiontext';

export function PreloadVirtualScrollDoc(props) {
    const cars = Array.from({ length: 100000 }).map((_, i) => CarService.generateCar(i + 1));

    const code = {
        basic: `
<DataTable value={cars} scrollable scrollHeight="400px" virtualScrollerOptions={{ itemSize: 46 }}>
    <Column field="id" header="Id" style={{ minWidth: '200px' }}></Column>
    <Column field="vin" header="Vin" style={{ minWidth: '200px' }}></Column>
    <Column field="year" header="Year" style={{ minWidth: '200px' }}></Column>
    <Column field="brand" header="Brand" style={{ minWidth: '200px' }}></Column>
    <Column field="color" header="Color" style={{ minWidth: '200px' }}></Column>
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
            <DataTable value={cars} scrollable scrollHeight="400px" virtualScrollerOptions={{ itemSize: 46 }}>
                <Column field="id" header="Id" style={{ minWidth: '200px' }}></Column>
                <Column field="vin" header="Vin" style={{ minWidth: '200px' }}></Column>
                <Column field="year" header="Year" style={{ minWidth: '200px' }}></Column>
                <Column field="brand" header="Brand" style={{ minWidth: '200px' }}></Column>
                <Column field="color" header="Color" style={{ minWidth: '200px' }}></Column>
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
            <DataTable value={cars} scrollable scrollHeight="400px" virtualScrollerOptions={{ itemSize: 46 }}>
                <Column field="id" header="Id" style={{ minWidth: '200px' }}></Column>
                <Column field="vin" header="Vin" style={{ minWidth: '200px' }}></Column>
                <Column field="year" header="Year" style={{ minWidth: '200px' }}></Column>
                <Column field="brand" header="Brand" style={{ minWidth: '200px' }}></Column>
                <Column field="color" header="Color" style={{ minWidth: '200px' }}></Column>
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
            <div className="card">
                <DataTable value={cars} scrollable scrollHeight="400px" virtualScrollerOptions={{ itemSize: 46 }}>
                    <Column field="id" header="Id" style={{ minWidth: '200px' }}></Column>
                    <Column field="vin" header="Vin" style={{ minWidth: '200px' }}></Column>
                    <Column field="year" header="Year" style={{ minWidth: '200px' }}></Column>
                    <Column field="brand" header="Brand" style={{ minWidth: '200px' }}></Column>
                    <Column field="color" header="Color" style={{ minWidth: '200px' }}></Column>
                </DataTable>
            </div>
            <DocSectionCode code={code} service={['CarService']} />
        </>
    );
}
