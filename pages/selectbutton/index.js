import Head from 'next/head';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { DocActions } from '../../components/doc/common/docactions';
import { ImportDoc } from '../../components/doc/selectbutton/importdoc';
import { BasicDoc } from '../../components/doc/selectbutton/basicdoc';
import { MultipleSelectionDoc } from '../../components/doc/selectbutton/multipleselectiondoc';
import { CustomContentDoc } from '../../components/doc/selectbutton/customcontentdoc';
import { ApiDoc } from '../../components/doc/selectbutton/apidoc';

const SelectButtonDemo = () => {
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
            id: 'multipleselectiondoc',
            label: 'Multiple Selection',
            component: MultipleSelectionDoc
        },
        {
            id: 'customcontentdoc',
            label: 'Custom Content',
            component: CustomContentDoc
        },
        {
            id: 'api',
            label: 'API',
            component: ApiDoc,
            children: [
                {
                    id: 'selectitem',
                    label: 'SelectItem API'
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
                    id: 'accessibility',
                    label: 'Accessibility'
                }
            ]
        }
    ];

    return (
        <div>
            <Head>
                <title>React SelectButton Component</title>
                <meta name="description" content="SelectButton is used to choose single or multiple items from a list using buttons." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>SelectButton</h1>
                    <p>SelectButton is used to choose single or multiple items from a list using buttons.</p>
                </div>

                <DocActions github="selectbutton/index.js" />
            </div>

            <div className="content-section doc">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default SelectButtonDemo;
