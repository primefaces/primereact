import Head from 'next/head';
import { DocActions } from '../../components/doc/common/docactions';
import { DocSections } from '../../components/doc/common/docsections';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { BasicDemo } from '../../components/doc/togglebutton/basicdoc';
import { CustomizedDoc } from '../../components/doc/togglebutton/customizeddoc';
import { ApiDoc } from '../../components/doc/togglebutton/apidoc';
import { ImportDoc } from '../../components/doc/togglebutton/importdoc';

const ToggleButtonDemo = () => {
    const docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc
        },
        {
            id: 'basic',
            label: 'Basic',
            component: BasicDemo
        },
        {
            id: 'customized',
            label: 'Customized',
            component: CustomizedDoc
        },
        {
            id: 'api',
            label: 'API',
            type: 'api',
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
                <title>React ToggleButton Component</title>
                <meta name="description" content="ToggleButton is used to select a boolean value using a button." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>ToggleButton</h1>
                    <p>ToggleButton is used to select a boolean value using a button.</p>
                </div>

                <DocActions github="togglebutton/index.js" />
            </div>

            <div className="content-section doc">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default ToggleButtonDemo;
