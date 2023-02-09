import React, { useState } from 'react';
import { DataTable } from '../../../lib/datatable/DataTable';
import { Column } from '../../../lib/column/Column';
import { DocSectionCode } from '../../common/docsectioncode';
import { DocSectionText } from '../../common/docsectiontext';
import { CarService } from '../../../../service/CarService';
import { Skeleton } from '../../../lib/skeleton/Skeleton';

export function LazyLoadingFromRemoteDataSourceDoc(props) {
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

    const code = {
        basic: `
<DataTable value={virtualCars} scrollable scrollHeight="400px" virtualScrollerOptions={{ lazy: true, onLazyLoad: loadCarsLazy, itemSize: 46, delay: 200, showLoader: true, loading: lazyLoading, loadingTemplate }}>
    <Column field="id" header="Id" style={{ minWidth: '200px' }}></Column>
    <Column field="vin" header="Vin" style={{ minWidth: '200px' }}></Column>
    <Column field="year" header="Year" style={{ minWidth: '200px' }}></Column>
    <Column field="brand" header="Brand" style={{ minWidth: '200px' }}></Column>
    <Column field="color" header="Color" style={{ minWidth: '200px' }}></Column>
</DataTable>
        `,
        javascript: `
import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Skeleton } from 'primereact/skeleton';
import { CarService } from './service/CarService';

const LazyLoadingFromRemoteDataSourceDoc = () => {
    
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
            <DataTable value={virtualCars} scrollable scrollHeight="400px" virtualScrollerOptions={{ lazy: true, onLazyLoad: loadCarsLazy, itemSize: 46, delay: 200, showLoader: true, loading: lazyLoading, loadingTemplate }}>
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
import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Skeleton } from 'primereact/skeleton';
import { CarService } from './service/CarService';

const LazyLoadingFromRemoteDataSourceDoc = () => {
    
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
            <DataTable value={virtualCars} scrollable scrollHeight="400px" virtualScrollerOptions={{ lazy: true, onLazyLoad: loadCarsLazy, itemSize: 46, delay: 200, showLoader: true, loading: lazyLoading, loadingTemplate }}>
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
/* CarService */

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
                <p>Lazy Loading from a Remote Datasource (100000 Rows) demo content.</p>
            </DocSectionText>
            <div className="card">
                <DataTable value={virtualCars} scrollable scrollHeight="400px" virtualScrollerOptions={{ lazy: true, onLazyLoad: loadCarsLazy, itemSize: 46, delay: 200, showLoader: true, loading: lazyLoading, loadingTemplate }}>
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
