import Head from 'next/head';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { DocActions } from '../../components/doc/common/docactions';
import { ImportDoc } from '../../components/doc/steps/importdoc';
import { BasicDoc } from '../../components/doc/steps/basicdoc';
import { InteractiveDoc } from '../../components/doc/steps/interactivedoc';
import { ApiDoc } from '../../components/doc/steps/apidoc';
import { AccessibilityDoc } from '../../components/doc/steps/accessibilitydoc';
import { StyleDoc } from '../../components/doc/steps/styledoc';

const StepsDemo = () => {
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
            id: 'interactive',
            label: 'Interactive',
            component: InteractiveDoc
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
                <title>React Stepper Component</title>
                <meta name="description" content="Steps also known as Stepper, is an indicator for the steps in a workflow. Layout of steps component is optimized for responsive design." />
            </Head>
            <div className="content-section introduction">
                <div>
                    <h1>Steps</h1>
                    <p>Steps also known as Stepper, is an indicator for the steps in a workflow. Layout of steps component is optimized for responsive design.</p>
                </div>
                <DocActions github="steps/index.js" />
            </div>

            <div className="content-section doc steps-demo">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default StepsDemo;
