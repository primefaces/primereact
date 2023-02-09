import React from 'react';
import { DataTable } from '../../lib/datatable/DataTable';
import { Column } from '../../lib/column/Column';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';
import { ColumnGroup } from '../../lib/columngroup/ColumnGroup';
import { Row } from '../../lib/row/Row';

export function ColGroupDoc(props) {
    const sales = [
        { product: 'Bamboo Watch', lastYearSale: 51, thisYearSale: 40, lastYearProfit: 54406, thisYearProfit: 43342 },
        { product: 'Black Watch', lastYearSale: 83, thisYearSale: 9, lastYearProfit: 423132, thisYearProfit: 312122 },
        { product: 'Blue Band', lastYearSale: 38, thisYearSale: 5, lastYearProfit: 12321, thisYearProfit: 8500 },
        { product: 'Blue T-Shirt', lastYearSale: 49, thisYearSale: 22, lastYearProfit: 745232, thisYearProfit: 65323 },
        { product: 'Brown Purse', lastYearSale: 17, thisYearSale: 79, lastYearProfit: 643242, thisYearProfit: 500332 },
        { product: 'Chakra Bracelet', lastYearSale: 52, thisYearSale: 65, lastYearProfit: 421132, thisYearProfit: 150005 },
        { product: 'Galaxy Earrings', lastYearSale: 82, thisYearSale: 12, lastYearProfit: 131211, thisYearProfit: 100214 },
        { product: 'Game Controller', lastYearSale: 44, thisYearSale: 45, lastYearProfit: 66442, thisYearProfit: 53322 },
        { product: 'Gaming Set', lastYearSale: 90, thisYearSale: 56, lastYearProfit: 765442, thisYearProfit: 296232 },
        { product: 'Gold Phone Case', lastYearSale: 75, thisYearSale: 54, lastYearProfit: 21212, thisYearProfit: 12533 }
    ];

    const lastYearSaleBodyTemplate = (rowData) => {
        return `${rowData.lastYearSale}%`;
    };

    const thisYearSaleBodyTemplate = (rowData) => {
        return `${rowData.thisYearSale}%`;
    };

    const lastYearProfitBodyTemplate = (rowData) => {
        return `${formatCurrency(rowData.lastYearProfit)}`;
    };

    const thisYearProfitBodyTemplate = (rowData) => {
        return `${formatCurrency(rowData.thisYearProfit)}`;
    };

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    };

    const lastYearTotal = () => {
        let total = 0;

        for (let sale of sales) {
            total += sale.lastYearProfit;
        }

        return formatCurrency(total);
    };

    const thisYearTotal = () => {
        let total = 0;

        for (let sale of sales) {
            total += sale.thisYearProfit;
        }

        return formatCurrency(total);
    };

    let headerGroup = (
        <ColumnGroup>
            <Row>
                <Column header="Product" rowSpan={3} />
                <Column header="Sale Rate" colSpan={4} />
            </Row>
            <Row>
                <Column header="Sales" colSpan={2} />
                <Column header="Profits" colSpan={2} />
            </Row>
            <Row>
                <Column header="Last Year" sortable field="lastYearSale" />
                <Column header="This Year" sortable field="thisYearSale" />
                <Column header="Last Year" sortable field="lastYearProfit" />
                <Column header="This Year" sortable field="thisYearProfit" />
            </Row>
        </ColumnGroup>
    );

    let footerGroup = (
        <ColumnGroup>
            <Row>
                <Column footer="Totals:" colSpan={3} footerStyle={{ textAlign: 'right' }} />
                <Column footer={lastYearTotal} />
                <Column footer={thisYearTotal} />
            </Row>
        </ColumnGroup>
    );
    const code = {
        basic: `
<DataTable value={sales} headerColumnGroup={headerGroup} footerColumnGroup={footerGroup} responsiveLayout="scroll">
    <Column field="product" />
    <Column field="lastYearSale" body={lastYearSaleBodyTemplate} />
    <Column field="thisYearSale" body={thisYearSaleBodyTemplate} />
    <Column field="lastYearProfit" body={lastYearProfitBodyTemplate} />
    <Column field="thisYearProfit" body={thisYearProfitBodyTemplate} />
</DataTable>
        `,
        javascript: `
import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ColumnGroup } from 'primereact/columngroup';
import { Row } from 'primereact/row';

const ColGroupDoc = () => {
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
                <DataTable value={sales} headerColumnGroup={headerGroup} footerColumnGroup={footerGroup} responsiveLayout="scroll">
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
        `,
        typescript: `
import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ColumnGroup } from 'primereact/columngroup';
import { Row } from 'primereact/row';

const ColGroupDoc = () => {
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
                <DataTable value={sales} headerColumnGroup={headerGroup} footerColumnGroup={footerGroup} responsiveLayout="scroll">
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
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Columns can be grouped at header and footer using headerColumnGroup and footerColumnGroup components that both define an array of columns each having colspan and rowspan.</p>
            </DocSectionText>
            <div className="card">
                <DataTable value={sales} headerColumnGroup={headerGroup} footerColumnGroup={footerGroup} responsiveLayout="scroll">
                    <Column field="product" />
                    <Column field="lastYearSale" body={lastYearSaleBodyTemplate} />
                    <Column field="thisYearSale" body={thisYearSaleBodyTemplate} />
                    <Column field="lastYearProfit" body={lastYearProfitBodyTemplate} />
                    <Column field="thisYearProfit" body={thisYearProfitBodyTemplate} />
                </DataTable>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
