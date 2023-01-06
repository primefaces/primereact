import Head from 'next/head';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { DocActions } from '../../components/doc/common/docactions';
import { ImportDoc } from '../../components/doc/card/importdoc';
import { SimpleDoc } from '../../components/doc/card/simpledoc';
import { AdvancedDoc } from '../../components/doc/card/advanceddoc';
import { ApiDoc } from '../../components/doc/card/apidoc';

const CardDemo = () => {
    const docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc
        },
        {
            id: 'simple',
            label: 'Simple',
            component: SimpleDoc
        },
        {
            id: 'advanced',
            label: 'Advanced',
            component: AdvancedDoc
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
                    id: 'styling',
                    label: 'Styling'
                },
                {
                    id: 'accessibility',
                    label: 'Accessibility'
                }
            ]
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
                <DocActions github="card/index.js" />
            </div>

            <div className="content-section doc">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default CardDemo;
