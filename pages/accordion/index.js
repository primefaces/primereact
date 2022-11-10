import Head from 'next/head';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { DocActions } from '../../components/doc/common/docactions';
import { ImportDoc } from '../../components/doc/accordion/importdoc';
import { DefaultDoc } from '../../components/doc/accordion/defaultdoc';
import { MultipleDoc } from '../../components/doc/accordion/multipledoc';
import { ProgrammaticDoc } from '../../components/doc/accordion/programmaticdoc';
import { CustomHeaderDoc } from '../../components/doc/accordion/customheadersdoc';
import { ApiDoc } from '../../components/doc/accordion/apidoc';

const AccordionDemo = () => {
    const docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc
        },
        {
            id: 'default',
            label: 'Default',
            component: DefaultDoc
        },
        {
            id: 'multiple',
            label: 'Multiple',
            component: MultipleDoc
        },
        {
            id: 'programmatic',
            label: 'Programmatic',
            component: ProgrammaticDoc
        },
        {
            id: 'customheader',
            label: 'Custom Header',
            component: CustomHeaderDoc
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
            <div className="content-section doc accordion-demo">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default AccordionDemo;
