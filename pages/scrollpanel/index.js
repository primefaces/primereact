import Head from 'next/head';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { AccessibilityDoc } from '../../components/doc/scrollpanel/accessibilitydoc';
import { BasicDoc } from '../../components/doc/scrollpanel/basicdoc';
import { CustomDemo } from '../../components/doc/scrollpanel/customdoc';
import { ImportDoc } from '../../components/doc/scrollpanel/importdoc';
import { StyleDoc } from '../../components/doc/scrollpanel/styledoc';

const ScrollPanelDemo = () => {
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
            id: 'custom',
            label: 'Custom',
            component: CustomDemo
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
            doc: [{ name: 'ScrollPanel', pathname: '/modules/scrollpanel.html' }]
        }
    ];

    return (
        <div>
            <Head>
                <title>React ScrollPanel Component</title>
                <meta name="description" content="ScrollPanel is a cross browser, lightweight and skinnable alternative to native browser scrollbar." />
            </Head>
            <div className="content-section doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <h1>ScrollPanel</h1>
                        <p>ScrollPanel is a cross browser, lightweight and skinnable alternative to native browser scrollbar.</p>
                    </div>
                    <DocSections docs={docs} />
                </div>
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default ScrollPanelDemo;
