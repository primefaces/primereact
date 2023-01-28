import Head from 'next/head';
import { DocActions } from '../../components/doc/common/docactions';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { AccessibilityDoc } from '../../components/doc/fieldset/accessibilitydoc';
import { BasicDoc } from '../../components/doc/fieldset/basicdoc';
import { ImportDoc } from '../../components/doc/fieldset/importdoc';
import { StyleDoc } from '../../components/doc/fieldset/styledoc';
import { TemplateDoc } from '../../components/doc/fieldset/templatedoc';
import { ToggleableDoc } from '../../components/doc/fieldset/toggleabledoc';

const FieldsetDemo = () => {
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
            id: 'toggleable',
            label: 'Toggleable',
            component: ToggleableDoc
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
            doc: [{ name: 'Fieldset', pathname: '/modules/fieldset.html' }]
        }
    ];

    return (
        <div>
            <Head>
                <title>React Fieldset Component</title>
                <meta name="description" content="Fieldset is a grouping component with a content toggle feature." />
            </Head>
            <div className="content-section introduction">
                <div>
                    <h1>Fieldset</h1>
                    <p>Fieldset is a grouping component with a content toggle feature.</p>
                </div>
                <DocActions github="/fieldset" />
            </div>

            <div className="content-section doc">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default FieldsetDemo;
