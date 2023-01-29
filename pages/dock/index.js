import Head from 'next/head';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { AccessibilityDoc } from '../../components/doc/dock/accessibilitydoc';
import { AdvancedDoc } from '../../components/doc/dock/advanceddoc';
import { BasicDoc } from '../../components/doc/dock/basicdoc';
import { ImportDoc } from '../../components/doc/dock/importdoc';
import { StyleDoc } from '../../components/doc/dock/styledoc';

const DockDemo = () => {
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
            id: 'advance',
            label: 'Advanced',
            component: AdvancedDoc
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
            doc: [{ name: 'Dock', pathname: '/modules/dock.html' }]
        }
    ];

    return (
        <div>
            <Head>
                <title>React Dock Component</title>
                <meta name="description" content="Dock is a navigation component consisting of menuitems." />
            </Head>
            <div className="content-section doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <h1>Dock</h1>
                        <p>Dock is a navigation component consisting of menuitems.</p>
                    </div>
                    <DocSections docs={docs} />
                </div>
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default DockDemo;
