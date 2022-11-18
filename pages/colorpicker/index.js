import Head from 'next/head';
import { ApiDoc } from '../../components/doc/colorpicker/apidoc';
import { FormatDoc } from '../../components/doc/colorpicker/formatdoc';
import { ImportDoc } from '../../components/doc/colorpicker/importdoc';
import { InlineDoc } from '../../components/doc/colorpicker/inlinedoc';
import { OverlayDoc } from '../../components/doc/colorpicker/overlaydoc';
import { ValidationDoc } from '../../components/doc/colorpicker/validationdoc';
import { DocActions } from '../../components/doc/common/docactions';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';

const ColorPickerDemo = () => {
    const docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc
        },
        {
            id: 'inline',
            label: 'Inline',
            component: InlineDoc
        },
        {
            id: 'overlay',
            label: 'Overlay',
            component: OverlayDoc
        },
        {
            id: 'format',
            label: 'Format',
            component: FormatDoc
        },
        {
            id: 'validation',
            label: 'Validation',
            component: ValidationDoc
        },
        {
            id: 'api',
            label: 'API',
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
                <title>React ColorPicker Component</title>
                <meta name="description" content="ColorPicker is an input component to select a color." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>ColorPicker</h1>
                    <p>ColorPicker is an input component to select a color.</p>
                </div>
                <DocActions github="colorpicker/index.js" />
            </div>
            <div className="content-section doc">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default ColorPickerDemo;
