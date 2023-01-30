import Head from 'next/head';
import { AccessibilityDoc } from '../../components/doc/accordion/accessibilitydoc';
import { BasicDoc } from '../../components/doc/accordion/basicdoc';
import { ControlledDoc } from '../../components/doc/accordion/controlleddoc';
import { DisabledDoc } from '../../components/doc/accordion/disableddoc';
import { ImportDoc } from '../../components/doc/accordion/importdoc';
import { MultipleDoc } from '../../components/doc/accordion/multipledoc';
import { StyleDoc } from '../../components/doc/accordion/styledoc';
import { TemplateDoc } from '../../components/doc/accordion/templatedoc';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';

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
            doc: [
                { name: 'Accordion', pathname: '/modules/accordion.html' },
                { name: 'AccordionTab', pathname: '/classes/accordion.AccordionTab.html' }
            ]
        }
    ];

    return (
        <div>
            <Head>
                <title>React Accordion Component</title>
                <meta name="description" content="Accordion groups a collection of contents in tabs." />
            </Head>
            <div className="doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <h1>Accordion</h1>
                        <p>Accordion groups a collection of contents in tabs.</p>
                    </div>
                    <DocSections docs={docs} />
                </div>
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default AccordionDemo;
