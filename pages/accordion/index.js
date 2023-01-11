import Head from 'next/head';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { DocActions } from '../../components/doc/common/docactions';
import { ImportDoc } from '../../components/doc/accordion/importdoc';
import { BasicDoc } from '../../components/doc/accordion/basicdoc';
import { MultipleDoc } from '../../components/doc/accordion/multipledoc';
import { ControlledDoc } from '../../components/doc/accordion/controlleddoc';
import { TemplateDoc } from '../../components/doc/accordion/templatedoc';
import { AccessibilityDoc } from '../../components/doc/accordion/accessibilitydoc';
import { ApiDoc } from '../../components/doc/accordion/apidoc';
import { AccessibilityDoc } from '../../components/doc/accordion/accessibilitydoc';
import { StyleDoc } from '../../components/doc/accordion/styledoc';

const AccordionDemo = () => {
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
            component: ApiDoc,
            children: [
                {
                    id: 'propertiesforaccordiontab',
                    label: 'Properties For AccordionTab'
                },
                {
                    id: 'properties',
                    label: 'Properties'
                },
                {
                    id: 'events',
                    label: 'Events'
                }
            ]
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
