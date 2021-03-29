import React, { Component } from 'react';
import { DataTable } from '../../components/datatable/DataTable';
import { Column } from '../../components/column/Column';
import { ColumnGroup } from '../../components/columngroup/ColumnGroup';
import { Row } from '../../components/row/Row';
import { TabView } from '../../components/tabview/TabView';
import { useLiveEditorTabs }from '../liveeditor/LiveEditor';
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
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ColumnGroup } from 'primereact/columngroup';
import { Row } from 'primereact/row';

const DataTableColGroupDemo = () => {
    const sales = [
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

    const lastYearSaleBodyTemplate = (rowData) => {
        return \`\${rowData.lastYearSale}%\`;
    }

    const thisYearSaleBodyTemplate = (rowData) => {
        return \`\${rowData.thisYearSale}%\`;
    }

    const lastYearProfitBodyTemplate = (rowData) => {
        return \`\${formatCurrency(rowData.lastYearProfit)}\`;
    }

    const thisYearProfitBodyTemplate = (rowData) => {
        return \`\${formatCurrency(rowData.thisYearProfit)}\`;
    }

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
    }

    const lastYearTotal = () => {
        let total = 0;
        for(let sale of sales) {
            total += sale.lastYearProfit;
        }

        return formatCurrency(total);
    }

    const thisYearTotal = () => {
        let total = 0;
        for(let sale of sales) {
            total += sale.thisYearProfit;
        }

        return formatCurrency(total);
    }

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
                            <Column footer={lastYearTotal} />
                            <Column footer={thisYearTotal} />
                        </Row>
                        </ColumnGroup>;
    return (
        <div>
            <div className="card">
                <DataTable value={sales} headerColumnGroup={headerGroup} footerColumnGroup={footerGroup}>
                    <Column field="product" />
                    <Column field="lastYearSale" body={lastYearSaleBodyTemplate} />
                    <Column field="thisYearSale" body={thisYearSaleBodyTemplate} />
                    <Column field="lastYearProfit" body={lastYearProfitBodyTemplate} />
                    <Column field="thisYearProfit" body={thisYearProfitBodyTemplate} />
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
import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ColumnGroup } from 'primereact/columngroup';
import { Row } from 'primereact/row';

const DataTableColGroupDemo = () => {
    const sales = [
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

    const lastYearSaleBodyTemplate = (rowData) => {
        return \`\${rowData.lastYearSale}%\`;
    }

    const thisYearSaleBodyTemplate = (rowData) => {
        return \`\${rowData.thisYearSale}%\`;
    }

    const lastYearProfitBodyTemplate = (rowData) => {
        return \`\${formatCurrency(rowData.lastYearProfit)}\`;
    }

    const thisYearProfitBodyTemplate = (rowData) => {
        return \`\${formatCurrency(rowData.thisYearProfit)}\`;
    }

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
    }

    const lastYearTotal = () => {
        let total = 0;
        for(let sale of sales) {
            total += sale.lastYearProfit;
        }

        return formatCurrency(total);
    }

    const thisYearTotal = () => {
        let total = 0;
        for(let sale of sales) {
            total += sale.thisYearProfit;
        }

        return formatCurrency(total);
    }

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
                            <Column footer={lastYearTotal} />
                            <Column footer={thisYearTotal} />
                        </Row>
                        </ColumnGroup>;
    return (
        <div>
            <div className="card">
                <DataTable value={sales} headerColumnGroup={headerGroup} footerColumnGroup={footerGroup}>
                    <Column field="product" />
                    <Column field="lastYearSale" body={lastYearSaleBodyTemplate} />
                    <Column field="thisYearSale" body={thisYearSaleBodyTemplate} />
                    <Column field="lastYearProfit" body={lastYearProfitBodyTemplate} />
                    <Column field="thisYearProfit" body={thisYearProfitBodyTemplate} />
                </DataTable>
            </div>
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
                    {
                        useLiveEditorTabs({ name: 'DataTableColGroupDemo', sources: this.sources })
                    }
                </TabView>
            </div>
        )
    }
}
