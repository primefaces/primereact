import Head from 'next/head';
import { AccessibilityDoc } from '../../components/doc/card/accessibilitydoc';
import { AdvancedDoc } from '../../components/doc/card/advanceddoc';
import { BasicDoc } from '../../components/doc/card/basicdoc';
import { ImportDoc } from '../../components/doc/card/importdoc';
import { StyleDoc } from '../../components/doc/card/styledoc';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';

const CardDemo = () => {
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
            id: 'advanced',
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
            doc: [{ name: 'Card', pathname: '/modules/card.html' }]
        }
    ];

    return (
        <div>
            <Head>
                <title>React Card Component</title>
                <meta name="description" content="Card is a flexible container component." />
            </Head>
            <div className="content-section doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <h1>Card</h1>
                        <p>Card is a flexible container component.</p>
                    </div>
                    <DocSections docs={docs} />
                </div>
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default CardDemo;
