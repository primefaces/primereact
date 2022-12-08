import Head from 'next/head';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { DocActions } from '../../components/doc/common/docactions';
import { ImportDoc } from '../../components/doc/fieldset/importdoc';
import { ApiDoc } from '../../components/doc/fieldset/apidoc';
import { RegularDoc } from '../../components/doc/fieldset/regulardoc';
import { ToggleableDoc } from '../../components/doc/fieldset/toggleabledoc';

const FieldsetDemo = () => {
    const docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc
        },
        {
            id: 'regular',
            label: 'Regular',
            component: RegularDoc
        },
        {
            id: 'toggleable',
            label: 'Toggleable',
            component: ToggleableDoc
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
                    label: 'Events'
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
                <title>React Fieldset Component</title>
                <meta name="description" content="Fieldset is a grouping component with a content toggle feature." />
            </Head>
            <div className="content-section introduction">
                <div>
                    <h1>Fieldset</h1>
                    <p>Fieldset is a grouping component with a content toggle feature.</p>
                </div>
                <DocActions github="fieldset/index.js" />
            </div>

            <div className="content-section doc">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default FieldsetDemo;
