import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Column } from '@/components/lib/column/Column';
import { ColumnGroup } from '@/components/lib/columngroup/ColumnGroup';
import { Row } from '@/components/lib/row/Row';
import { TreeTable } from '@/components/lib/treetable/TreeTable';

export function ColumnGroupDoc(props) {
    const nodes = [
        {
            key: '0',
            data: { brand: 'Bliss', lastYearSale: '51%', thisYearSale: '40%', lastYearProfit: '$54,406.00', thisYearProfit: '$43,342' },
            children: [
                {
                    key: '0-0',
                    data: { brand: 'Product A', lastYearSale: '25%', thisYearSale: '20%', lastYearProfit: '$34,406.00', thisYearProfit: '$23,342' },
                    children: [
                        {
                            key: '0-0-0',
                            data: { brand: 'Product A-1', lastYearSale: '20%', thisYearSale: '10%', lastYearProfit: '$24,406.00', thisYearProfit: '$13,342' }
                        },
                        {
                            key: '0-0-1',
                            data: { brand: 'Product A-2', lastYearSale: '5%', thisYearSale: '10%', lastYearProfit: '$10,000.00', thisYearProfit: '$10,000' }
                        }
                    ]
                },
                {
                    key: '0-1',
                    data: { brand: 'Product B', lastYearSale: '26%', thisYearSale: '20%', lastYearProfit: '$24,000.00', thisYearProfit: '$23,000' }
                }
            ]
        },
        {
            key: '1',
            data: { brand: 'Fate', lastYearSale: '83%', thisYearSale: '96%', lastYearProfit: '$423,132', thisYearProfit: '$312,122' },
            children: [
                {
                    key: '1-0',
                    data: { brand: 'Product X', lastYearSale: '50%', thisYearSale: '40%', lastYearProfit: '$223,132', thisYearProfit: '$156,061' }
                },
                {
                    key: '1-1',
                    data: { brand: 'Product Y', lastYearSale: '33%', thisYearSale: '56%', lastYearProfit: '$200,000', thisYearProfit: '$156,061' }
                }
            ]
        },
        {
            key: '2',
            data: { brand: 'Ruby', lastYearSale: '38%', thisYearSale: '5%', lastYearProfit: '$12,321', thisYearProfit: '$8,500' },
            children: [
                {
                    key: '2-0',
                    data: { brand: 'Product M', lastYearSale: '18%', thisYearSale: '2%', lastYearProfit: '$10,300', thisYearProfit: '$5,500' }
                },
                {
                    key: '2-1',
                    data: { brand: 'Product N', lastYearSale: '20%', thisYearSale: '3%', lastYearProfit: '$2,021', thisYearProfit: '$3,000' }
                }
            ]
        },
        {
            key: '3',
            data: { brand: 'Sky', lastYearSale: '49%', thisYearSale: '22%', lastYearProfit: '$745,232', thisYearProfit: '$650,323' },
            children: [
                {
                    key: '3-0',
                    data: { brand: 'Product P', lastYearSale: '20%', thisYearSale: '16%', lastYearProfit: '$345,232', thisYearProfit: '$350,000' }
                },
                {
                    key: '3-1',
                    data: { brand: 'Product R', lastYearSale: '29%', thisYearSale: '6%', lastYearProfit: '$400,009', thisYearProfit: '$300,323' }
                }
            ]
        },
        {
            key: '4',
            data: { brand: 'Comfort', lastYearSale: '17%', thisYearSale: '79%', lastYearProfit: '$643,242', thisYearProfit: '500,332' },
            children: [
                {
                    key: '4-0',
                    data: { brand: 'Product S', lastYearSale: '10%', thisYearSale: '40%', lastYearProfit: '$243,242', thisYearProfit: '$100,000' }
                },
                {
                    key: '4-1',
                    data: { brand: 'Product T', lastYearSale: '7%', thisYearSale: '39%', lastYearProfit: '$400,00', thisYearProfit: '$400,332' }
                }
            ]
        },
        {
            key: '5',
            data: { brand: 'Merit', lastYearSale: '52%', thisYearSale: ' 65%', lastYearProfit: '$421,132', thisYearProfit: '$150,005' },
            children: [
                {
                    key: '5-0',
                    data: { brand: 'Product L', lastYearSale: '20%', thisYearSale: '40%', lastYearProfit: '$121,132', thisYearProfit: '$100,000' }
                },
                {
                    key: '5-1',
                    data: { brand: 'Product G', lastYearSale: '32%', thisYearSale: '25%', lastYearProfit: '$300,000', thisYearProfit: '$50,005' }
                }
            ]
        },
        {
            key: '6',
            data: { brand: 'Violet', lastYearSale: '82%', thisYearSale: '12%', lastYearProfit: '$131,211', thisYearProfit: '$100,214' },
            children: [
                {
                    key: '6-0',
                    data: { brand: 'Product SH1', lastYearSale: '30%', thisYearSale: '6%', lastYearProfit: '$101,211', thisYearProfit: '$30,214' }
                },
                {
                    key: '6-1',
                    data: { brand: 'Product SH2', lastYearSale: '52%', thisYearSale: '6%', lastYearProfit: '$30,000', thisYearProfit: '$70,000' }
                }
            ]
        },
        {
            key: '7',
            data: { brand: 'Dulce', lastYearSale: '44%', thisYearSale: '45%', lastYearProfit: '$66,442', thisYearProfit: '$53,322' },
            children: [
                {
                    key: '7-0',
                    data: { brand: 'Product PN1', lastYearSale: '22%', thisYearSale: '25%', lastYearProfit: '$33,221', thisYearProfit: '$20,000' }
                },
                {
                    key: '7-1',
                    data: { brand: 'Product PN2', lastYearSale: '22%', thisYearSale: '25%', lastYearProfit: '$33,221', thisYearProfit: '$33,322' }
                }
            ]
        },
        {
            key: '8',
            data: { brand: 'Solace', lastYearSale: '90%', thisYearSale: '56%', lastYearProfit: '$765,442', thisYearProfit: '$296,232' },
            children: [
                {
                    key: '8-0',
                    data: { brand: 'Product HT1', lastYearSale: '60%', thisYearSale: '36%', lastYearProfit: '$465,000', thisYearProfit: '$150,653' }
                },
                {
                    key: '8-1',
                    data: { brand: 'Product HT2', lastYearSale: '30%', thisYearSale: '20%', lastYearProfit: '$300,442', thisYearProfit: '$145,579' }
                }
            ]
        },
        {
            key: '9',
            data: { brand: 'Essence', lastYearSale: '75%', thisYearSale: '54%', lastYearProfit: '$21,212', thisYearProfit: '$12,533' },
            children: [
                {
                    key: '9-0',
                    data: { brand: 'Product TS1', lastYearSale: '50%', thisYearSale: '34%', lastYearProfit: '$11,000', thisYearProfit: '$8,562' }
                },
                {
                    key: '9-1',
                    data: { brand: 'Product TS2', lastYearSale: '25%', thisYearSale: '20%', lastYearProfit: '$11,212', thisYearProfit: '$3,971' }
                }
            ]
        }
    ];

    const headerGroup = (
        <ColumnGroup>
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
        </ColumnGroup>
    );

    const footerGroup = (
        <ColumnGroup>
            <Row>
                <Column footer="Totals:" colSpan={3} />
                <Column footer="$506,202" />
                <Column footer="$531,020" />
            </Row>
        </ColumnGroup>
    );

    const code = {
        basic: `
<TreeTable value={nodes} headerColumnGroup={headerGroup} footerColumnGroup={footerGroup} tableStyle={{ minWidth: '50rem' }}>
    <Column field="brand" expander />
    <Column field="lastYearSale" />
    <Column field="thisYearSale" />
    <Column field="lastYearProfit" />
    <Column field="thisYearProfit" />
</TreeTable>
        `,
        javascript: `
import React from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { ColumnGroup } from 'primereact/columngroup';
import { Row } from 'primereact/row';

export default function ColumnGroupDemo() {
    const nodes = [
        {
            key: '0',
            data: { brand: 'Bliss', lastYearSale: '51%', thisYearSale: '40%', lastYearProfit: '$54,406.00', thisYearProfit: '$43,342' },
            children: [
                {
                    key: '0-0',
                    data: { brand: 'Product A', lastYearSale: '25%', thisYearSale: '20%', lastYearProfit: '$34,406.00', thisYearProfit: '$23,342' },
                    children: [
                        {
                            key: '0-0-0',
                            data: { brand: 'Product A-1', lastYearSale: '20%', thisYearSale: '10%', lastYearProfit: '$24,406.00', thisYearProfit: '$13,342' },
                        },
                        {
                            key: '0-0-1',
                            data: { brand: 'Product A-2', lastYearSale: '5%', thisYearSale: '10%', lastYearProfit: '$10,000.00', thisYearProfit: '$10,000' },
                        }
                    ]
                },
                {
                    key: '0-1',
                    data: { brand: 'Product B', lastYearSale: '26%', thisYearSale: '20%', lastYearProfit: '$24,000.00', thisYearProfit: '$23,000' },
                }
            ]
        },
        {
            key: '1',
            data: { brand: 'Fate', lastYearSale: '83%', thisYearSale: '96%', lastYearProfit: '$423,132', thisYearProfit: '$312,122' },
            children: [
                {
                    key: '1-0',
                    data: { brand: 'Product X', lastYearSale: '50%', thisYearSale: '40%', lastYearProfit: '$223,132', thisYearProfit: '$156,061' },
                },
                {
                    key: '1-1',
                    data: { brand: 'Product Y', lastYearSale: '33%', thisYearSale: '56%', lastYearProfit: '$200,000', thisYearProfit: '$156,061' },
                }
            ]
        },
        {
            key: '2',
            data: { brand: 'Ruby', lastYearSale: '38%', thisYearSale: '5%', lastYearProfit: '$12,321', thisYearProfit: '$8,500' },
            children: [
                {
                    key: '2-0',
                    data: { brand: 'Product M', lastYearSale: '18%', thisYearSale: '2%', lastYearProfit: '$10,300', thisYearProfit: '$5,500' },
                },
                {
                    key: '2-1',
                    data: { brand: 'Product N', lastYearSale: '20%', thisYearSale: '3%', lastYearProfit: '$2,021', thisYearProfit: '$3,000' },
                }
            ]
        },
        {
            key: '3',
            data: { brand: 'Sky', lastYearSale: '49%', thisYearSale: '22%', lastYearProfit: '$745,232', thisYearProfit: '$650,323' },
            children: [
                {
                    key: '3-0',
                    data: { brand: 'Product P', lastYearSale: '20%', thisYearSale: '16%', lastYearProfit: '$345,232', thisYearProfit: '$350,000' },
                },
                {
                    key: '3-1',
                    data: { brand: 'Product R', lastYearSale: '29%', thisYearSale: '6%', lastYearProfit: '$400,009', thisYearProfit: '$300,323' },
                }
            ]
        },
        {
            key: '4',
            data: { brand: 'Comfort', lastYearSale: '17%', thisYearSale: '79%', lastYearProfit: '$643,242', thisYearProfit: '500,332' },
            children: [
                {
                    key: '4-0',
                    data: { brand: 'Product S', lastYearSale: '10%', thisYearSale: '40%', lastYearProfit: '$243,242', thisYearProfit: '$100,000' },
                },
                {
                    key: '4-1',
                    data: { brand: 'Product T', lastYearSale: '7%', thisYearSale: '39%', lastYearProfit: '$400,00', thisYearProfit: '$400,332' },
                }
            ]
        },
        {
            key: '5',
            data: { brand: 'Merit', lastYearSale: '52%', thisYearSale: ' 65%', lastYearProfit: '$421,132', thisYearProfit: '$150,005' },
            children: [
                {
                    key: '5-0',
                    data: { brand: 'Product L', lastYearSale: '20%', thisYearSale: '40%', lastYearProfit: '$121,132', thisYearProfit: '$100,000' },
                },
                {
                    key: '5-1',
                    data: { brand: 'Product G', lastYearSale: '32%', thisYearSale: '25%', lastYearProfit: '$300,000', thisYearProfit: '$50,005' },
                }
            ]
        },
        {
            key: '6',
            data: { brand: 'Violet', lastYearSale: '82%', thisYearSale: '12%', lastYearProfit: '$131,211', thisYearProfit: '$100,214' },
            children: [
                {
                    key: '6-0',
                    data: { brand: 'Product SH1', lastYearSale: '30%', thisYearSale: '6%', lastYearProfit: '$101,211', thisYearProfit: '$30,214' },
                },
                {
                    key: '6-1',
                    data: { brand: 'Product SH2', lastYearSale: '52%', thisYearSale: '6%', lastYearProfit: '$30,000', thisYearProfit: '$70,000' },
                }
            ]
        },
        {
            key: '7',
            data: { brand: 'Dulce', lastYearSale: '44%', thisYearSale: '45%', lastYearProfit: '$66,442', thisYearProfit: '$53,322' },
            children: [
                {
                    key: '7-0',
                    data: { brand: 'Product PN1', lastYearSale: '22%', thisYearSale: '25%', lastYearProfit: '$33,221', thisYearProfit: '$20,000' },
                },
                {
                    key: '7-1',
                    data: { brand: 'Product PN2', lastYearSale: '22%', thisYearSale: '25%', lastYearProfit: '$33,221', thisYearProfit: '$33,322' },
                }
            ]
        },
        {
            key: '8',
            data: { brand: 'Solace', lastYearSale: '90%', thisYearSale: '56%', lastYearProfit: '$765,442', thisYearProfit: '$296,232' },
            children: [
                {
                    key: '8-0',
                    data: { brand: 'Product HT1', lastYearSale: '60%', thisYearSale: '36%', lastYearProfit: '$465,000', thisYearProfit: '$150,653' },
                },
                {
                    key: '8-1',
                    data: { brand: 'Product HT2', lastYearSale: '30%', thisYearSale: '20%', lastYearProfit: '$300,442', thisYearProfit: '$145,579' },
                }
            ]
        },
        {
            key: '9',
            data: { brand: 'Essence', lastYearSale: '75%', thisYearSale: '54%', lastYearProfit: '$21,212', thisYearProfit: '$12,533' },
            children: [
                {
                    key: '9-0',
                    data: { brand: 'Product TS1', lastYearSale: '50%', thisYearSale: '34%', lastYearProfit: '$11,000', thisYearProfit: '$8,562' },
                },
                {
                    key: '9-1',
                    data: { brand: 'Product TS2', lastYearSale: '25%', thisYearSale: '20%', lastYearProfit: '$11,212', thisYearProfit: '$3,971' },
                }
            ]
        }
    ];

    const headerGroup = (
        <ColumnGroup>
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
        </ColumnGroup>
    );

    const footerGroup = (
        <ColumnGroup>
            <Row>
                <Column footer="Totals:" colSpan={3} />
                <Column footer="$506,202" />
                <Column footer="$531,020" />
            </Row>
        </ColumnGroup>
    );

    return (
        <div className="card">
            <TreeTable value={nodes} headerColumnGroup={headerGroup} footerColumnGroup={footerGroup} tableStyle={{ minWidth: '50rem' }}>
                <Column field="brand" expander />
                <Column field="lastYearSale" />
                <Column field="thisYearSale" />
                <Column field="lastYearProfit" />
                <Column field="thisYearProfit" />
            </TreeTable>
        </div>
    )
}
        `,
        typescript: `
import React from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { ColumnGroup } from 'primereact/columngroup';
import { Row } from 'primereact/row';
import { TreeNode } from 'primereact/treenode';

export default function ColGroupDemo() {
    const nodes: TreeNode[] = [
        {
            key: '0',
            data: { brand: 'Bliss', lastYearSale: '51%', thisYearSale: '40%', lastYearProfit: '$54,406.00', thisYearProfit: '$43,342' },
            children: [
                {
                    key: '0-0',
                    data: { brand: 'Product A', lastYearSale: '25%', thisYearSale: '20%', lastYearProfit: '$34,406.00', thisYearProfit: '$23,342' },
                    children: [
                        {
                            key: '0-0-0',
                            data: { brand: 'Product A-1', lastYearSale: '20%', thisYearSale: '10%', lastYearProfit: '$24,406.00', thisYearProfit: '$13,342' },
                        },
                        {
                            key: '0-0-1',
                            data: { brand: 'Product A-2', lastYearSale: '5%', thisYearSale: '10%', lastYearProfit: '$10,000.00', thisYearProfit: '$10,000' },
                        }
                    ]
                },
                {
                    key: '0-1',
                    data: { brand: 'Product B', lastYearSale: '26%', thisYearSale: '20%', lastYearProfit: '$24,000.00', thisYearProfit: '$23,000' },
                }
            ]
        },
        {
            key: '1',
            data: { brand: 'Fate', lastYearSale: '83%', thisYearSale: '96%', lastYearProfit: '$423,132', thisYearProfit: '$312,122' },
            children: [
                {
                    key: '1-0',
                    data: { brand: 'Product X', lastYearSale: '50%', thisYearSale: '40%', lastYearProfit: '$223,132', thisYearProfit: '$156,061' },
                },
                {
                    key: '1-1',
                    data: { brand: 'Product Y', lastYearSale: '33%', thisYearSale: '56%', lastYearProfit: '$200,000', thisYearProfit: '$156,061' },
                }
            ]
        },
        {
            key: '2',
            data: { brand: 'Ruby', lastYearSale: '38%', thisYearSale: '5%', lastYearProfit: '$12,321', thisYearProfit: '$8,500' },
            children: [
                {
                    key: '2-0',
                    data: { brand: 'Product M', lastYearSale: '18%', thisYearSale: '2%', lastYearProfit: '$10,300', thisYearProfit: '$5,500' },
                },
                {
                    key: '2-1',
                    data: { brand: 'Product N', lastYearSale: '20%', thisYearSale: '3%', lastYearProfit: '$2,021', thisYearProfit: '$3,000' },
                }
            ]
        },
        {
            key: '3',
            data: { brand: 'Sky', lastYearSale: '49%', thisYearSale: '22%', lastYearProfit: '$745,232', thisYearProfit: '$650,323' },
            children: [
                {
                    key: '3-0',
                    data: { brand: 'Product P', lastYearSale: '20%', thisYearSale: '16%', lastYearProfit: '$345,232', thisYearProfit: '$350,000' },
                },
                {
                    key: '3-1',
                    data: { brand: 'Product R', lastYearSale: '29%', thisYearSale: '6%', lastYearProfit: '$400,009', thisYearProfit: '$300,323' },
                }
            ]
        },
        {
            key: '4',
            data: { brand: 'Comfort', lastYearSale: '17%', thisYearSale: '79%', lastYearProfit: '$643,242', thisYearProfit: '500,332' },
            children: [
                {
                    key: '4-0',
                    data: { brand: 'Product S', lastYearSale: '10%', thisYearSale: '40%', lastYearProfit: '$243,242', thisYearProfit: '$100,000' },
                },
                {
                    key: '4-1',
                    data: { brand: 'Product T', lastYearSale: '7%', thisYearSale: '39%', lastYearProfit: '$400,00', thisYearProfit: '$400,332' },
                }
            ]
        },
        {
            key: '5',
            data: { brand: 'Merit', lastYearSale: '52%', thisYearSale: ' 65%', lastYearProfit: '$421,132', thisYearProfit: '$150,005' },
            children: [
                {
                    key: '5-0',
                    data: { brand: 'Product L', lastYearSale: '20%', thisYearSale: '40%', lastYearProfit: '$121,132', thisYearProfit: '$100,000' },
                },
                {
                    key: '5-1',
                    data: { brand: 'Product G', lastYearSale: '32%', thisYearSale: '25%', lastYearProfit: '$300,000', thisYearProfit: '$50,005' },
                }
            ]
        },
        {
            key: '6',
            data: { brand: 'Violet', lastYearSale: '82%', thisYearSale: '12%', lastYearProfit: '$131,211', thisYearProfit: '$100,214' },
            children: [
                {
                    key: '6-0',
                    data: { brand: 'Product SH1', lastYearSale: '30%', thisYearSale: '6%', lastYearProfit: '$101,211', thisYearProfit: '$30,214' },
                },
                {
                    key: '6-1',
                    data: { brand: 'Product SH2', lastYearSale: '52%', thisYearSale: '6%', lastYearProfit: '$30,000', thisYearProfit: '$70,000' },
                }
            ]
        },
        {
            key: '7',
            data: { brand: 'Dulce', lastYearSale: '44%', thisYearSale: '45%', lastYearProfit: '$66,442', thisYearProfit: '$53,322' },
            children: [
                {
                    key: '7-0',
                    data: { brand: 'Product PN1', lastYearSale: '22%', thisYearSale: '25%', lastYearProfit: '$33,221', thisYearProfit: '$20,000' },
                },
                {
                    key: '7-1',
                    data: { brand: 'Product PN2', lastYearSale: '22%', thisYearSale: '25%', lastYearProfit: '$33,221', thisYearProfit: '$33,322' },
                }
            ]
        },
        {
            key: '8',
            data: { brand: 'Solace', lastYearSale: '90%', thisYearSale: '56%', lastYearProfit: '$765,442', thisYearProfit: '$296,232' },
            children: [
                {
                    key: '8-0',
                    data: { brand: 'Product HT1', lastYearSale: '60%', thisYearSale: '36%', lastYearProfit: '$465,000', thisYearProfit: '$150,653' },
                },
                {
                    key: '8-1',
                    data: { brand: 'Product HT2', lastYearSale: '30%', thisYearSale: '20%', lastYearProfit: '$300,442', thisYearProfit: '$145,579' },
                }
            ]
        },
        {
            key: '9',
            data: { brand: 'Essence', lastYearSale: '75%', thisYearSale: '54%', lastYearProfit: '$21,212', thisYearProfit: '$12,533' },
            children: [
                {
                    key: '9-0',
                    data: { brand: 'Product TS1', lastYearSale: '50%', thisYearSale: '34%', lastYearProfit: '$11,000', thisYearProfit: '$8,562' },
                },
                {
                    key: '9-1',
                    data: { brand: 'Product TS2', lastYearSale: '25%', thisYearSale: '20%', lastYearProfit: '$11,212', thisYearProfit: '$3,971' },
                }
            ]
        }
    ];

    const headerGroup = (
        <ColumnGroup>
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
        </ColumnGroup>
    );

    const footerGroup = (
        <ColumnGroup>
            <Row>
                <Column footer="Totals:" colSpan={3} />
                <Column footer="$506,202" />
                <Column footer="$531,020" />
            </Row>
        </ColumnGroup>
    );

    return (
        <div className="card">
            <TreeTable value={nodes} headerColumnGroup={headerGroup} footerColumnGroup={footerGroup}>
                <Column field="brand" expander />
                <Column field="lastYearSale" />
                <Column field="thisYearSale" />
                <Column field="lastYearProfit" />
                <Column field="thisYearProfit" />
            </TreeTable>
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Columns can be grouped within a <i>Row</i> component and groups can be displayed at header and footer using <i>headerColumnGroup</i>, <i>footerColumnGroup</i> properties. Number of cells and rows to span are defined with the{' '}
                    <i>colSpan</i> and <i>rowSpan</i> properties of a Column.
                </p>
            </DocSectionText>
            <div className="card">
                <TreeTable value={nodes} headerColumnGroup={headerGroup} footerColumnGroup={footerGroup} tableStyle={{ minWidth: '50rem' }}>
                    <Column field="brand" expander />
                    <Column field="lastYearSale" />
                    <Column field="thisYearSale" />
                    <Column field="lastYearProfit" />
                    <Column field="thisYearProfit" />
                </TreeTable>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
