import Head from 'next/head';
import { DocActions } from '../../components/doc/common/docactions';
import { DocSections } from '../../components/doc/common/docsections';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { BasicDoc } from '../../components/doc/multistatecheckbox/basicdoc';
import { DisabledDoc } from '../../components/doc/multistatecheckbox/disableddoc';
import { ImportDoc } from '../../components/doc/multistatecheckbox/importdoc';
import { ApiDoc } from '../../components/doc/multistatecheckbox/apidoc';

const MultiStateCheckboxDemo = () => {
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
            id: 'disabled',
            label: 'Disabled',
            component: DisabledDoc
        },
        {
            id: 'api',
            label: 'API',
            type: 'api',
            component: ApiDoc,
            children: [
                {
                    id: 'option',
                    label: 'Option'
                },
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
                <title>React MultiStateCheckbox Component</title>
                <meta name="description" content="MultiStateCheckbox is used to select a state from given multiple states." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>MultiStateCheckbox</h1>
                    <p>MultiStateCheckbox is used to select a state from given multiple states.</p>
                </div>

                <DocActions github="multistatecheckbox/index.js" />
            </div>

            <div className="content-section doc">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default MultiStateCheckboxDemo;
