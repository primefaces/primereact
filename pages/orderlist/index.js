import Head from 'next/head';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { DocActions } from '../../components/doc/common/docactions';
import { ApiDoc } from '../../components/doc/orderlist/apidoc';
import { AccessibilityDoc } from '../../components/doc/orderlist/accessibilitydoc';
import { StyleDoc } from '../../components/doc/orderlist/styledoc';
import { ImportDoc } from '../../components/doc/orderlist/importdoc';
import { TemplateDoc } from '../../components/doc/orderlist/templatedoc';
import { BasicDoc } from '../../components/doc/orderlist/basicdoc';
import { FilterDoc } from '../../components/doc/orderlist/filterdoc';
import { DragDropDoc } from '../../components/doc/orderlist/dragdropdoc';

const OrderListDemo = () => {
    const docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc
        },
        {
            id: 'basic',
            label: 'Basic',
            component: BasicDoc
        },
        {
            id: 'filter',
            label: 'Filter',
            component: FilterDoc
        },
        {
            id: 'dragdrop',
            label: 'DragDrop',
            component: DragDropDoc
        },
        {
            id: 'template',
            label: 'Template',
            component: TemplateDoc
        },
        {
            id: 'style',
            label: 'Style',
            component: StyleDoc
        },
        {
            id: 'accessibility',
            label: 'Accessibility',
            component: AccessibilityDoc
        },
        {
            id: 'api',
            label: 'API',
            component: ApiDoc,
            children: [
                {
                    id: 'properties',
                    label: 'Properties'
                },
                {
                    id: 'events',
                    label: 'Styling'
                },
                {
                    id: 'methods',
                    label: 'Methods'
                }
            ]
        }
    ];

    return (
        <div>
            <Head>
                <title>React OrderList Component</title>
                <meta name="description" content="OrderList is used to sort a collection." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>OrderList</h1>
                    <p>OrderList is used to sort a collection.</p>
                </div>

                <DocActions github="orderlist/index.js" />
            </div>

            <div className="content-section implementation">
                <div className="content-section doc">
                    <DocSections docs={docs} />
                    <DocSectionNav docs={docs} />
                </div>
            </div>
        </div>
    );
};

export default OrderListDemo;
