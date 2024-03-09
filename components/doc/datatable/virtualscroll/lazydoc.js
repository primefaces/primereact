import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Column } from '@/components/lib/column/Column';
import { DataTable } from '@/components/lib/datatable/DataTable';
import { Skeleton } from '@/components/lib/skeleton/Skeleton';
import { useState } from 'react';
import { CarService } from '../../../../service/CarService';
import DeferredDemo from '@/components/demo/DeferredDemo';

export function LazyVirtualScrollDoc(props) {
    const [virtualCars, setVirtualCars] = useState(Array.from({ length: 100000 }));
    const [lazyLoading, setLazyLoading] = useState(false);
    let loadLazyTimeout = null;

    let cars = null;

    const loadDemoData = () => {
        cars = Array.from({ length: 100000 }).map((_, i) => CarService.generateCar(i + 1));
    };

    const loadCarsLazy = (event) => {
        !lazyLoading && setLazyLoading(true);

        if (loadLazyTimeout) {
            clearTimeout(loadLazyTimeout);
        }

        //simulate remote connection with a timeout
        loadLazyTimeout = setTimeout(
            () => {
                let _virtualCars = [...virtualCars];
                let { first, last } = event;

                //load data of required page
                const loadedCars = cars.slice(first, last);

                //populate page of virtual cars
                Array.prototype.splice.apply(_virtualCars, [...[first, last - first], ...loadedCars]);

                setVirtualCars(_virtualCars);
                setLazyLoading(false);
            },
            Math.random() * 1000 + 250
        );
    };

    const loadingTemplate = (options) => {
        return (
            <div className="flex align-items-center" style={{ height: '17px', flexGrow: '1', overflow: 'hidden' }}>
                <Skeleton width={options.cellEven ? (options.field === 'year' ? '30%' : '40%') : '60%'} height="1rem" />
            </div>
        );
    };

    const code = {
        basic: `
<DataTable value={virtualCars} scrollable scrollHeight="400px"
    virtualScrollerOptions={{ lazy: true, onLazyLoad: loadCarsLazy, itemSize: 46, delay: 200, showLoader: true, loading: lazyLoading, loadingTemplate }}
    tableStyle={{ minWidth: '50rem' }}>
    <Column field="id" header="Id" style={{ width: '20%' }}></Column>
    <Column field="vin" header="Vin" style={{ width: '20%' }}></Column>
    <Column field="year" header="Year" style={{ width: '20%' }}></Column>
    <Column field="brand" header="Brand" style={{ width: '20%' }}></Column>
    <Column field="color" header="Color" style={{ width: '20%' }}></Column>
</DataTable>
        `,
        javascript: `
import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Skeleton } from 'primereact/skeleton';
import { CarService } from './service/CarService';

export default function LazyVirtualScrollDemo() {
    const cars = Array.from({ length: 100000 }).map((_, i) => CarService.generateCar(i + 1));
    const [virtualCars, setVirtualCars] = useState(Array.from({ length: 100000 }));
    const [lazyLoading, setLazyLoading] = useState(false);
    let loadLazyTimeout = null;

    const loadCarsLazy = (event) => {
        !lazyLoading && setLazyLoading(true);

        if (loadLazyTimeout) {
            clearTimeout(loadLazyTimeout);
        }

        //simulate remote connection with a timeout
        loadLazyTimeout = setTimeout(() => {
            let _virtualCars = [...virtualCars];
            let { first, last } = event;

            //load data of required page
            const loadedCars = cars.slice(first, last);

            //populate page of virtual cars
            Array.prototype.splice.apply(_virtualCars, [...[first, last - first], ...loadedCars]);

            setVirtualCars(_virtualCars);
            setLazyLoading(false);
        }, Math.random() * 1000 + 250);
    };

    const loadingTemplate = (options) => {
        return (
            <div className="flex align-items-center" style={{ height: '17px', flexGrow: '1', overflow: 'hidden' }}>
                <Skeleton width={options.cellEven ? (options.field === 'year' ? '30%' : '40%') : '60%'} height="1rem" />
            </div>
        );
    };

    return (
        <div className="card">
            <DataTable value={virtualCars} scrollable scrollHeight="400px"
                virtualScrollerOptions={{ lazy: true, onLazyLoad: loadCarsLazy, itemSize: 46, delay: 200, showLoader: true, loading: lazyLoading, loadingTemplate }}
                tableStyle={{ minWidth: '50rem' }}>
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
import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Skeleton } from 'primereact/skeleton';
import { VirtualScrollerLazyEvent, VirtualScrollerLoadingTemplateOptions } from 'primereact/virtualscroller';
import { CarService } from './service/CarService';

interface Car {
    id: number;
    vin: string;
    brand: string;
    color: string;
    year: number;
}

export default function LazyVirtualScrollDemo() {
    const cars: Car[] = Array.from({ length: 100000 }).map((_, i) => CarService.generateCar(i + 1));
    const [virtualCars, setVirtualCars] = useState<Car[]>(Array.from({ length: 100000 }));
    const [lazyLoading, setLazyLoading] = useState<boolean>(false);
    let loadLazyTimeout = null;

    const loadCarsLazy = (event: VirtualScrollerLazyEvent) => {
        !lazyLoading && setLazyLoading(true);

        if (loadLazyTimeout) {
            clearTimeout(loadLazyTimeout);
        }

        //simulate remote connection with a timeout
        loadLazyTimeout = setTimeout(() => {
            let _virtualCars = [...virtualCars];
            let { first, last } = event;

            //load data of required page
            const loadedCars = cars.slice(first, last);

            //populate page of virtual cars
            Array.prototype.splice.apply(_virtualCars, [...[first, last - first], ...loadedCars]);

            setVirtualCars(_virtualCars);
            setLazyLoading(false);
        }, Math.random() * 1000 + 250);
    };

    const loadingTemplate = (options: VirtualScrollerLoadingTemplateOptions) => {
        return (
            <div className="flex align-items-center" style={{ height: '17px', flexGrow: '1', overflow: 'hidden' }}>
                <Skeleton width={options.cellEven ? (options.field === 'year' ? '30%' : '40%') : '60%'} height="1rem" />
            </div>
        );
    };

    return (
        <div className="card">
            <DataTable value={virtualCars} scrollable scrollHeight="400px"
                virtualScrollerOptions={{ lazy: true, onLazyLoad: loadCarsLazy, itemSize: 46, delay: 200, showLoader: true, loading: lazyLoading, loadingTemplate }}
                tableStyle={{ minWidth: '50rem' }}>
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
                    When lazy loading is enabled via the <i>virtualScrollerOptions</i>, data is fetched on demand during scrolling instead of preload.
                </p>
                <p>
                    In sample below, an in-memory list and timeout is used to mimic fetching from a remote datasource. The <i>virtualCars</i> is an empty array that is populated on scroll.
                </p>
            </DocSectionText>
            <DeferredDemo onLoad={loadDemoData}>
                <div className="card">
                    <DataTable
                        value={virtualCars}
                        scrollable
                        scrollHeight="400px"
                        virtualScrollerOptions={{ lazy: true, onLazyLoad: loadCarsLazy, itemSize: 46, delay: 200, showLoader: true, loading: lazyLoading, loadingTemplate }}
                        tableStyle={{ minWidth: '50rem' }}
                    >
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
