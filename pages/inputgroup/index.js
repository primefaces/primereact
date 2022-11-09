import Head from 'next/head';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { DocActions } from '../../components/doc/common/docactions';
import { CheckboxDoc } from '../../components/doc/inputgroup/checkboxdoc';
import { ButtonDoc } from '../../components/doc/inputgroup/buttonsdoc';
import { MultipleDoc } from '../../components/doc/inputgroup/multipledoc';
import { AddonsDoc } from '../../components/doc/inputgroup/addonsdoc';
import { ApiDoc } from '../../components/doc/inputgroup/apidoc';

const InputGroupDemo = () => {
    const docs = [
        {
            id: 'addons',
            label: 'Addons',
            component: AddonsDoc
        },
        {
            id: 'multiple',
            label: 'Multiple Addons',
            component: MultipleDoc
        },
        {
            id: 'button',
            label: 'Button Addons',
            component: ButtonDoc
        },
        {
            id: 'checkbox',
            label: 'Checkbox and RadioButton',
            component: CheckboxDoc
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
                <title>React InputGroup Component</title>
                <meta name="description" content="Text, icon, buttons and other content can be grouped next to an input." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>InputGroup</h1>
                    <p>Text, icon, buttons and other content can be grouped next to an input.</p>
                </div>
                <DocActions github="inputgroup/index.js" />
            </div>

            <div className="content-section doc">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default InputGroupDemo;
