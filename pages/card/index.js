import Head from 'next/head';
import { AccessibilityDoc } from '../../components/doc/card/accessibilitydoc';
import { AdvancedDoc } from '../../components/doc/card/advanceddoc';
import { BasicDoc } from '../../components/doc/card/basicdoc';
import { ImportDoc } from '../../components/doc/card/importdoc';
import { StyleDoc } from '../../components/doc/card/styledoc';
import { DocActions } from '../../components/doc/common/docactions';
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
            <div className="content-section introduction">
                <div>
                    <h1>Card</h1>
                    <p>Card is a flexible container component.</p>
                </div>
                <DocActions github="/card" />
            </div>

            <div className="content-section doc">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default CardDemo;
