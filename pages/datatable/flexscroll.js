import React, { useState, useEffect, memo } from 'react';
import { DataTable } from '../../components/lib/datatable/DataTable';
import { Column } from '../../components/lib/column/Column';
import { TabView } from '../../components/lib/tabview/TabView';
import { useLiveEditorTabs } from '../../components/doc/common/liveeditor';
import { CustomerService } from '../../service/CustomerService';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';

const DataTableFlexScrollDemo = () => {

    const [customers, setCustomers] = useState([]);
    const customerService = new CustomerService();

    useEffect(() => {
        customerService.getCustomersLarge().then(data => setCustomers(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps


    return (
        <div>
            <Head>
                <title>React Table Component - FlexScroll</title>
                <meta name="description" content="FlexScroll can also be used for cases where scrollable viewport should be responsive with respect to the window size." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>DataTable <span>Flex Scroll</span></h1>
                    <p></p>
                </div>

                <DocActions github="datatable/flexscroll.js" />
            </div>

            <div className="content-section implementation">
                <div className="card" style={{ height: 'calc(100vh - 145px)' }}>
                    <DataTable value={customers} scrollable scrollHeight="flex">
                        <Column field="name" header="Name"></Column>
                        <Column field="country.name" header="Country"></Column>
                        <Column field="representative.name" header="Representative"></Column>
                        <Column field="status" header="Status"></Column>
                    </DataTable>
                </div>
            </div>

            <DataTableBasicDemoDoc></DataTableBasicDemoDoc>
        </div>
    );
}

export default DataTableFlexScrollDemo;
;
const DataTableBasicDemoDoc = memo(() => {

    const sources = {
        'class': {
            tabName: 'Class Source',
            content: `
import React, { Component } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { CustomerService } from '../service/CustomerService';

export class DataTableFlexScrollDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            customers: []
        };

        this.customerService = new CustomerService();
    }

    componentDidMount() {
        this.customerService.getCustomersLarge().then(data => this.setState({ customers: data }));
    }

    render() {
        return (
            <div>
                <div className="card" style={{ height: 'calc(100vh - 145px)' }}>
                    <DataTable value={this.state.customers} scrollable scrollHeight="flex">
                        <Column field="name" header="Name"></Column>
                        <Column field="country.name" header="Country"></Column>
                        <Column field="representative.name" header="Representative"></Column>
                        <Column field="status" header="Status"></Column>
                    </DataTable>
                </div>
            </div>
        );
    }
}
                `
        },
        'hooks': {
            tabName: 'Hooks Source',
            content: `
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { CustomerService } from '../service/CustomerService';

const DataTableFlexScrollDemo = () => {

    const [customers, setCustomers] = useState([]);
    const customerService = new CustomerService();

    useEffect(() => {
        customerService.getCustomersLarge().then(data => setCustomers(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <div className="card" style={{ height: 'calc(100vh - 145px)' }}>
                <DataTable value={customers} scrollable scrollHeight="flex">
                    <Column field="name" header="Name"></Column>
                    <Column field="country.name" header="Country"></Column>
                    <Column field="representative.name" header="Representative"></Column>
                    <Column field="status" header="Status"></Column>
                </DataTable>
            </div>
        </div>
    );
}
                `
        },
        'ts': {
            tabName: 'TS Source',
            content: `
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { CustomerService } from '../service/CustomerService';

const DataTableFlexScrollDemo = () => {

    const [customers, setCustomers] = useState([]);
    const customerService = new CustomerService();

    useEffect(() => {
        customerService.getCustomersLarge().then(data => setCustomers(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <div className="card" style={{ height: 'calc(100vh - 145px)' }}>
                <DataTable value={customers} scrollable scrollHeight="flex">
                    <Column field="name" header="Name"></Column>
                    <Column field="country.name" header="Country"></Column>
                    <Column field="representative.name" header="Representative"></Column>
                    <Column field="status" header="Status"></Column>
                </DataTable>
            </div>
        </div>
    );

}
                `
        },
        'browser': {
            tabName: 'Browser Source',
            imports: `
        <script src="./CustomerService.js"></script>

        <script src="https://unpkg.com/primereact/api/api.min.js"></script>
        <script src="https://unpkg.com/primereact/core/core.min.js"></script>
        <script src="https://unpkg.com/primereact/virtualscroller/virtualscroller.min.js"></script>
        <script src="https://unpkg.com/primereact/column/column.min.js"></script>
        <script src="https://unpkg.com/primereact/datatable/datatable.min.js"></script>`,
            content: `
const { useState, useEffect } = React;
const { DataTable } = primereact.datatable;
const { Column } = primereact.column;

const DataTableFlexScrollDemo = () => {

    const [customers, setCustomers] = useState([]);
    const customerService = new CustomerService();

    useEffect(() => {
        customerService.getCustomersLarge().then(data => setCustomers(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <div className="card" style={{ height: 'calc(100vh - 145px)' }}>
                <DataTable value={customers} scrollable scrollHeight="flex">
                    <Column field="name" header="Name"></Column>
                    <Column field="country.name" header="Country"></Column>
                    <Column field="representative.name" header="Representative"></Column>
                    <Column field="status" header="Status"></Column>
                </DataTable>
            </div>
        </div>
    );

}
                `
        }
    }

    return (
        <div className="content-section documentation" id="app-doc">
            <TabView>
                {
                    useLiveEditorTabs({ name: 'DataTableFlexScrollDemo', sources: sources, service: 'CustomerService', data: 'customers-large' })
                }
            </TabView>
        </div>
    )
})
