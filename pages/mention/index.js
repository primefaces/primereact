import Head from 'next/head';
import { DocActions } from '../../components/doc/common/docactions';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { ApiDoc } from '../../components/doc/mention/apidoc';
import { ImportDoc } from '../../components/doc/mention/importdoc';
import { BasicDoc } from '../../components/doc/mention/basicdoc';
import { MultipleDoc } from '../../components/doc/mention/multipledoc';
import { AutoDoc } from '../../components/doc/mention/autodoc';

const MentionDemo = () => {
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
            id: 'auto',
            label: 'Auto Resize',
            component: AutoDoc
        },
        {
            id: 'multiple',
            label: 'Multiple Trigger',
            component: MultipleDoc
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
                <title>React Mention Component</title>
                <meta name="description" content="Mention component is used to refer someone or something." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>Mention</h1>
                    <p>Mention component is used to refer someone or something.</p>
                </div>

                <DocActions github="mention/index.js" />
            </div>

            <div className="content-section doc multiselect-demo">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default MentionDemo;
