import Head from 'next/head';
import { DocActions } from '../../components/doc/common/docactions';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { ApiDoc } from '../../components/doc/tristatecheckbox/apidoc';
import { BasicDoc } from '../../components/doc/tristatecheckbox/basicdoc';
import { DisabledDoc } from '../../components/doc/tristatecheckbox/disableddoc';
import { ImportDoc } from '../../components/doc/tristatecheckbox/importdoc';
import { ValidationDoc } from '../../components/doc/tristatecheckbox/validationdoc';

const TriStateCheckboxDemo = () => {
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
            id: 'validation',
            label: 'Validation',
            component: ValidationDoc
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
                <title>React TriStateCheckbox Component</title>
                <meta name="description" content="TriStateCheckbox is used to select either true, false or null as the value." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>TriStateCheckbox</h1>
                    <p>TriStateCheckbox is used to select either "true", "false" or "null" as the value.</p>
                </div>

                <DocActions github="tristatecheckbox/index.js" />
            </div>
            <div className="content-section doc">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default TriStateCheckboxDemo;
