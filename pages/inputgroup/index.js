import Head from 'next/head';
import { DocActions } from '../../components/doc/common/docactions';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { BasicDoc } from '../../components/doc/inputgroup/basicdoc';
import { ButtonDoc } from '../../components/doc/inputgroup/buttondoc';
import { CheckboxDoc } from '../../components/doc/inputgroup/checkboxdoc';
import { MultipleDoc } from '../../components/doc/inputgroup/multipledoc';

const InputGroupDemo = () => {
    const docs = [
        {
            id: 'basic',
            label: 'Basic',
            component: BasicDoc
        },
        {
            id: 'multiple',
            label: 'Multiple',
            component: MultipleDoc
        },
        {
            id: 'button',
            label: 'Button',
            component: ButtonDoc
        },
        {
            id: 'checkbox',
            label: 'Checkbox & RadioButton',
            component: CheckboxDoc
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
                <DocActions github="/inputgroup" />
            </div>

            <div className="content-section doc">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default InputGroupDemo;
