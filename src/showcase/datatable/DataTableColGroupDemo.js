import React, { Component } from 'react';
import { DataTable } from '../../components/datatable/DataTable';
import { Column } from '../../components/column/Column';
import { ColumnGroup } from '../../components/columngroup/ColumnGroup';
import { Row } from '../../components/row/Row';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { LiveEditor } from '../liveeditor/LiveEditor';
import { AppInlineHeader } from '../../AppInlineHeader';

export class DataTableColGroupDemo extends Component {

    constructor(props) {
        super(props);

        this.sales = [
            {product: 'Bamboo Watch', lastYearSale: 51, thisYearSale: 40, lastYearProfit: 54406, thisYearProfit: 43342},
            {product: 'Black Watch', lastYearSale: 83, thisYearSale: 9, lastYearProfit: 423132, thisYearProfit: 312122},
            {product: 'Blue Band', lastYearSale: 38, thisYearSale: 5, lastYearProfit: 12321, thisYearProfit: 8500},
            {product: 'Blue T-Shirt', lastYearSale: 49, thisYearSale: 22, lastYearProfit: 745232, thisYearProfit: 65323},
            {product: 'Brown Purse', lastYearSale: 17, thisYearSale: 79, lastYearProfit: 643242, thisYearProfit: 500332},
            {product: 'Chakra Bracelet', lastYearSale: 52, thisYearSale:  65, lastYearProfit: 421132, thisYearProfit: 150005},
            {product: 'Galaxy Earrings', lastYearSale: 82, thisYearSale: 12, lastYearProfit: 131211, thisYearProfit: 100214},
            {product: 'Game Controller', lastYearSale: 44, thisYearSale: 45, lastYearProfit: 66442, thisYearProfit: 53322},
            {product: 'Gaming Set', lastYearSale: 90, thisYearSale: 56, lastYearProfit: 765442, thisYearProfit: 296232},
            {product: 'Gold Phone Case', lastYearSale: 75, thisYearSale: 54, lastYearProfit: 21212, thisYearProfit: 12533}
        ];

        this.lastYearTotal = this.lastYearTotal.bind(this);
        this.thisYearTotal = this.thisYearTotal.bind(this);
        this.lastYearSaleBodyTemplate = this.lastYearSaleBodyTemplate.bind(this);
        this.thisYearSaleBodyTemplate = this.thisYearSaleBodyTemplate.bind(this);
        this.lastYearProfitBodyTemplate = this.lastYearProfitBodyTemplate.bind(this);
        this.thisYearProfitBodyTemplate = this.thisYearProfitBodyTemplate.bind(this);
    }

    lastYearSaleBodyTemplate(rowData) {
        return `${rowData.lastYearSale}%`;
    }

    thisYearSaleBodyTemplate(rowData) {
        return `${rowData.thisYearSale}%`;
    }

    lastYearProfitBodyTemplate(rowData) {
        return `${this.formatCurrency(rowData.lastYearProfit)}`;
    }

    thisYearProfitBodyTemplate(rowData) {
        return `${this.formatCurrency(rowData.thisYearProfit)}`;
    }

    formatCurrency(value) {
        return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
    }

    lastYearTotal() {
        let total = 0;
        for(let sale of this.sales) {
            total += sale.lastYearProfit;
        }

        return this.formatCurrency(total);
    }

    thisYearTotal() {
        let total = 0;
        for(let sale of this.sales) {
            total += sale.thisYearProfit;
        }

        return this.formatCurrency(total);
    }

    render() {
        let headerGroup = <ColumnGroup>
                            <Row>
                                <Column header="Product" rowSpan={3} />
                                <Column header="Sale Rate" colSpan={4} />
                            </Row>
                            <Row>
                                <Column header="Sales" colSpan={2} />
                                <Column header="Profits" colSpan={2} />
                            </Row>
                            <Row>
                                <Column header="Last Year" sortable field="lastYearSale"/>
                                <Column header="This Year" sortable field="thisYearSale"/>
                                <Column header="Last Year" sortable field="lastYearProfit"/>
                                <Column header="This Year" sortable field="thisYearProfit"/>
                            </Row>
                        </ColumnGroup>;

       let footerGroup = <ColumnGroup>
                            <Row>
                                <Column footer="Totals:" colSpan={3} footerStyle={{textAlign: 'right'}}/>
                                <Column footer={this.lastYearTotal} />
                                <Column footer={this.thisYearTotal} />
                            </Row>
                         </ColumnGroup>;
        return (
            <div>
                <div className="content-section introduction">
                    <AppInlineHeader changelogText="dataTable">
                        <h1>DataTable <span>ColumnGroup</span></h1>
                        <p>Columns can be grouped at header and footer using headerColumnGroup and footerColumnGroup components that both define an array of columns each having colspan and rowspan.</p>
                    </AppInlineHeader>
                </div>

                <div className="content-section implementation">
                    <div className="card">
                        <DataTable value={this.sales} headerColumnGroup={headerGroup} footerColumnGroup={footerGroup}>
                            <Column field="product" />
                            <Column field="lastYearSale" body={this.lastYearSaleBodyTemplate} />
                            <Column field="thisYearSale" body={this.thisYearSaleBodyTemplate} />
                            <Column field="lastYearProfit" body={this.lastYearProfitBodyTemplate} />
                            <Column field="thisYearProfit" body={this.thisYearProfitBodyTemplate} />
                        </DataTable>
                    </div>
                </div>

                <DataTableColGroupDemoDoc></DataTableColGroupDemoDoc>
            </div>
        );
    }
}

export class DataTableColGroupDemoDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'class': {
                tabName: 'Class Source',
                content: `
import React, { Component } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ColumnGroup } from 'primereact/columngroup';
import { Row } from 'primereact/row';

export class DataTableColGroupDemo extends Component {

    constructor(props) {
        super(props);

        this.sales = [
            {product: 'Bamboo Watch', lastYearSale: 51, thisYearSale: 40, lastYearProfit: 54406, thisYearProfit: 43342},
            {product: 'Black Watch', lastYearSale: 83, thisYearSale: 9, lastYearProfit: 423132, thisYearProfit: 312122},
            {product: 'Blue Band', lastYearSale: 38, thisYearSale: 5, lastYearProfit: 12321, thisYearProfit: 8500},
            {product: 'Blue T-Shirt', lastYearSale: 49, thisYearSale: 22, lastYearProfit: 745232, thisYearProfit: 65323},
            {product: 'Brown Purse', lastYearSale: 17, thisYearSale: 79, lastYearProfit: 643242, thisYearProfit: 500332},
            {product: 'Chakra Bracelet', lastYearSale: 52, thisYearSale:  65, lastYearProfit: 421132, thisYearProfit: 150005},
            {product: 'Galaxy Earrings', lastYearSale: 82, thisYearSale: 12, lastYearProfit: 131211, thisYearProfit: 100214},
            {product: 'Game Controller', lastYearSale: 44, thisYearSale: 45, lastYearProfit: 66442, thisYearProfit: 53322},
            {product: 'Gaming Set', lastYearSale: 90, thisYearSale: 56, lastYearProfit: 765442, thisYearProfit: 296232},
            {product: 'Gold Phone Case', lastYearSale: 75, thisYearSale: 54, lastYearProfit: 21212, thisYearProfit: 12533}
        ];

        this.lastYearTotal = this.lastYearTotal.bind(this);
        this.thisYearTotal = this.thisYearTotal.bind(this);
        this.lastYearSaleBodyTemplate = this.lastYearSaleBodyTemplate.bind(this);
        this.thisYearSaleBodyTemplate = this.thisYearSaleBodyTemplate.bind(this);
        this.lastYearProfitBodyTemplate = this.lastYearProfitBodyTemplate.bind(this);
        this.thisYearProfitBodyTemplate = this.thisYearProfitBodyTemplate.bind(this);
    }

    lastYearSaleBodyTemplate(rowData) {
        return \`\${rowData.lastYearSale}%\`;
    }

    thisYearSaleBodyTemplate(rowData) {
        return \`\${rowData.thisYearSale}%\`;
    }

    lastYearProfitBodyTemplate(rowData) {
        return \`\${this.formatCurrency(rowData.lastYearProfit)}\`;
    }

    thisYearProfitBodyTemplate(rowData) {
        return \`\${this.formatCurrency(rowData.thisYearProfit)}\`;
    }

    formatCurrency(value) {
        return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
    }

    lastYearTotal() {
        let total = 0;
        for(let sale of this.sales) {
            total += sale.lastYearProfit;
        }

        return this.formatCurrency(total);
    }

    thisYearTotal() {
        let total = 0;
        for(let sale of this.sales) {
            total += sale.thisYearProfit;
        }

        return this.formatCurrency(total);
    }

    render() {
        let headerGroup = <ColumnGroup>
                            <Row>
                                <Column header="Product" rowSpan={3} />
                                <Column header="Sale Rate" colSpan={4} />
                            </Row>
                            <Row>
                                <Column header="Sales" colSpan={2} />
                                <Column header="Profits" colSpan={2} />
                            </Row>
                            <Row>
                                <Column header="Last Year" sortable field="lastYearSale"/>
                                <Column header="This Year" sortable field="thisYearSale"/>
                                <Column header="Last Year" sortable field="lastYearProfit"/>
                                <Column header="This Year" sortable field="thisYearProfit"/>
                            </Row>
                        </ColumnGroup>;

        let footerGroup = <ColumnGroup>
                            <Row>
                                <Column footer="Totals:" colSpan={3} footerStyle={{textAlign: 'right'}}/>
                                <Column footer={this.lastYearTotal} />
                                <Column footer={this.thisYearTotal} />
                            </Row>
                            </ColumnGroup>;
        return (
            <div>
                <div className="card">
                    <DataTable value={this.sales} headerColumnGroup={headerGroup} footerColumnGroup={footerGroup}>
                        <Column field="product" />
                        <Column field="lastYearSale" body={this.lastYearSaleBodyTemplate} />
                        <Column field="thisYearSale" body={this.thisYearSaleBodyTemplate} />
                        <Column field="lastYearProfit" body={this.lastYearProfitBodyTemplate} />
                        <Column field="thisYearProfit" body={this.thisYearProfitBodyTemplate} />
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
import React from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {ColumnGroup} from 'primereact/columngroup';
import {Row} from 'primereact/row';

const DataTableColGroupDemo = () => {

    const sales = [
        {brand: 'Apple', lastYearSale: '51%', thisYearSale: '40%', lastYearProfit: '$54,406.00', thisYearProfit: '$43,342'},
        {brand: 'Samsung', lastYearSale: '83%', thisYearSale: '96%', lastYearProfit: '$423,132', thisYearProfit: '$312,122'},
        {brand: 'Microsoft', lastYearSale: '38%', thisYearSale: '5%', lastYearProfit: '$12,321', thisYearProfit: '$8,500'},
        {brand: 'Philips', lastYearSale: '49%', thisYearSale: '22%', lastYearProfit: '$745,232', thisYearProfit: '$650,323,'},
        {brand: 'Song', lastYearSale: '17%', thisYearSale: '79%', lastYearProfit: '$643,242', thisYearProfit: '500,332'},
        {brand: 'LG', lastYearSale: '52%', thisYearSale: ' 65%', lastYearProfit: '$421,132', thisYearProfit: '$150,005'},
        {brand: 'Sharp', lastYearSale: '82%', thisYearSale: '12%', lastYearProfit: '$131,211', thisYearProfit: '$100,214'},
        {brand: 'Panasonic', lastYearSale: '44%', thisYearSale: '45%', lastYearProfit: '$66,442', thisYearProfit: '$53,322'},
        {brand: 'HTC', lastYearSale: '90%', thisYearSale: '56%', lastYearProfit: '$765,442', thisYearProfit: '$296,232'},
        {brand: 'Toshiba', lastYearSale: '75%', thisYearSale: '54%', lastYearProfit: '$21,212', thisYearProfit: '$12,533'}
    ];

    let headerGroup = <ColumnGroup>
                        <Row>
                            <Column header="Brand" rowSpan={3} />
                            <Column header="Sale Rate" colSpan={4} />
                        </Row>
                        <Row>
                            <Column header="Sales" colSpan={2} />
                            <Column header="Profits" colSpan={2} />
                        </Row>
                        <Row>
                            <Column header="Last Year" />
                            <Column header="This Year" />
                            <Column header="Last Year" />
                            <Column header="This Year" />
                        </Row>
                    </ColumnGroup>;

    let footerGroup = <ColumnGroup>
                        <Row>
                            <Column footer="Totals:" colSpan={3} />
                            <Column footer="$506,202" />
                            <Column footer="$531,020" />
                        </Row>
                        </ColumnGroup>;
    return (
        <div>
            <DataTable value={sales} headerColumnGroup={headerGroup} footerColumnGroup={footerGroup}>
                <Column field="brand" />
                <Column field="lastYearSale" />
                <Column field="thisYearSale" />
                <Column field="lastYearProfit" />
                <Column field="thisYearProfit" />
            </DataTable>
        </div>
    );
}
                `
            },
            'ts': {
                tabName: 'TS Source',
                content: `
import React from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {ColumnGroup} from 'primereact/columngroup';
import {Row} from 'primereact/row';

const DataTableColGroupDemo = () => {

    const sales = [
        {brand: 'Apple', lastYearSale: '51%', thisYearSale: '40%', lastYearProfit: '$54,406.00', thisYearProfit: '$43,342'},
        {brand: 'Samsung', lastYearSale: '83%', thisYearSale: '96%', lastYearProfit: '$423,132', thisYearProfit: '$312,122'},
        {brand: 'Microsoft', lastYearSale: '38%', thisYearSale: '5%', lastYearProfit: '$12,321', thisYearProfit: '$8,500'},
        {brand: 'Philips', lastYearSale: '49%', thisYearSale: '22%', lastYearProfit: '$745,232', thisYearProfit: '$650,323,'},
        {brand: 'Song', lastYearSale: '17%', thisYearSale: '79%', lastYearProfit: '$643,242', thisYearProfit: '500,332'},
        {brand: 'LG', lastYearSale: '52%', thisYearSale: ' 65%', lastYearProfit: '$421,132', thisYearProfit: '$150,005'},
        {brand: 'Sharp', lastYearSale: '82%', thisYearSale: '12%', lastYearProfit: '$131,211', thisYearProfit: '$100,214'},
        {brand: 'Panasonic', lastYearSale: '44%', thisYearSale: '45%', lastYearProfit: '$66,442', thisYearProfit: '$53,322'},
        {brand: 'HTC', lastYearSale: '90%', thisYearSale: '56%', lastYearProfit: '$765,442', thisYearProfit: '$296,232'},
        {brand: 'Toshiba', lastYearSale: '75%', thisYearSale: '54%', lastYearProfit: '$21,212', thisYearProfit: '$12,533'}
    ];

    let headerGroup = <ColumnGroup>
                        <Row>
                            <Column header="Brand" rowSpan={3} />
                            <Column header="Sale Rate" colSpan={4} />
                        </Row>
                        <Row>
                            <Column header="Sales" colSpan={2} />
                            <Column header="Profits" colSpan={2} />
                        </Row>
                        <Row>
                            <Column header="Last Year" />
                            <Column header="This Year" />
                            <Column header="Last Year" />
                            <Column header="This Year" />
                        </Row>
                    </ColumnGroup>;

    let footerGroup = <ColumnGroup>
                        <Row>
                            <Column footer="Totals:" colSpan={3} />
                            <Column footer="$506,202" />
                            <Column footer="$531,020" />
                        </Row>
                        </ColumnGroup>;
    return (
        <div>
            <DataTable value={sales} headerColumnGroup={headerGroup} footerColumnGroup={footerGroup}>
                <Column field="brand" />
                <Column field="lastYearSale" />
                <Column field="thisYearSale" />
                <Column field="lastYearProfit" />
                <Column field="thisYearProfit" />
            </DataTable>
        </div>
    );
}
                `
            }
        }
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <div className="content-section documentation">
                <TabView>
                    <TabPanel header="Source">
                        <LiveEditor name="DataTableColGroupDemo" sources={this.sources} />
                    </TabPanel>
                </TabView>
            </div>
        )
    }
}
