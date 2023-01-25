import Head from 'next/head';
import { AccessibilityDoc } from '../../components/doc/accordion/accessibilitydoc';
import { ApiDoc } from '../../components/doc/accordion/apidoc';
import { BasicDoc } from '../../components/doc/accordion/basicdoc';
import { ControlledDoc } from '../../components/doc/accordion/controlleddoc';
import { DisabledDoc } from '../../components/doc/accordion/disableddoc';
import { ImportDoc } from '../../components/doc/accordion/importdoc';
import { MultipleDoc } from '../../components/doc/accordion/multipledoc';
import { StyleDoc } from '../../components/doc/accordion/styledoc';
import { TemplateDoc } from '../../components/doc/accordion/templatedoc';
import { DocActions } from '../../components/doc/common/docactions';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';

const AccordionDemo = () => {
    console.log('Test');

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
            id: 'multiple',
            label: 'Multiple',
            component: MultipleDoc
        },
        {
            id: 'disabled',
            label: 'Disabled',
            component: DisabledDoc
        },
        {
            id: 'controlled',
            label: 'Controlled',
            component: ControlledDoc
        },
        {
            id: 'template',
            label: 'Template',
            component: TemplateDoc
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
                <title>React Accordion Component</title>
                <meta name="description" content="Accordion groups a collection of contents in tabs." />
            </Head>
            <div className="content-section introduction">
                <div>
                    <h1>Accordion</h1>
                    <p>Accordion groups a collection of contents in tabs.</p>
                </div>
                <DocActions github="accordion/index.js" />
            </div>
            <div className="content-section doc ">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default AccordionDemo;
