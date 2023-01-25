import Head from 'next/head';
import { DocActions } from '../../components/doc/common/docactions';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { AccessibilityDoc } from '../../components/doc/orderlist/accessibilitydoc';
import { BasicDoc } from '../../components/doc/orderlist/basicdoc';
import { DragDropDoc } from '../../components/doc/orderlist/dragdropdoc';
import { FilterDoc } from '../../components/doc/orderlist/filterdoc';
import { ImportDoc } from '../../components/doc/orderlist/importdoc';
import { StyleDoc } from '../../components/doc/orderlist/styledoc';
import { TemplateDoc } from '../../components/doc/orderlist/templatedoc';

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
            doc: [{ name: 'OrderList', pathname: '/modules/orderlist.html' }]
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

                <DocActions github="/orderlist" />
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
