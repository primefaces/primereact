import Head from 'next/head';
import { DocActions } from '../../components/doc/common/docactions';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { AccessibilityDoc } from '../../components/doc/scrollpanel/accessibilitydoc';
import { ApiDoc } from '../../components/doc/scrollpanel/apidoc';
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
            component: ApiDoc
        }
    ];

    return (
        <div>
            <Head>
                <title>React ScrollPanel Component</title>
                <meta name="description" content="ScrollPanel is a cross browser, lightweight and skinnable alternative to native browser scrollbar." />
            </Head>
            <div className="content-section introduction">
                <div>
                    <h1>ScrollPanel</h1>
                    <p>ScrollPanel is a cross browser, lightweight and skinnable alternative to native browser scrollbar.</p>
                </div>
                <DocActions github="/scrollpanel" />
            </div>

            <div className="content-section doc">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default ScrollPanelDemo;
