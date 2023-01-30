import Head from 'next/head';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { AccessibilityDoc } from '../../components/doc/overlaypanel/accessibilitydoc';
import { BasicDoc } from '../../components/doc/overlaypanel/basicdoc';
import { DataTableDoc } from '../../components/doc/overlaypanel/datatabledoc';
import { ImportDoc } from '../../components/doc/overlaypanel/importdoc';
import { StyleDoc } from '../../components/doc/overlaypanel/styledoc';

const OverlayPanelDemo = () => {
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
            id: 'dataTable',
            label: 'DataTable',
            component: DataTableDoc
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
            doc: [{ name: 'OverlayPanel', pathname: '/modules/overlaypanel.html' }]
        }
    ];

    return (
        <div>
            <Head>
                <title>React Popover Component</title>
                <meta name="description" content="OverlayPanel, also known as Popover, is a container component that can overlay other components on page." />
            </Head>
            <div className="doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <h1>OverlayPanel</h1>
                        <p>OverlayPanel, also known as Popover, is a container component that can overlay other components on page.</p>
                    </div>
                    <DocSections docs={docs} />
                </div>
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default OverlayPanelDemo;
