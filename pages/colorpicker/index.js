import Head from 'next/head';
import { DocActions } from '../../components/doc/common/docactions';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { ApiDoc } from '../../components/doc/colorpicker/apidoc';
import { ImportDoc } from '../../components/doc/colorpicker/importdoc';
import { InlineDoc } from '../../components/doc/colorpicker/inlinedoc';
import { FormatDoc } from '../../components/doc/colorpicker/formatdoc';
import { OverlayDoc } from '../../components/doc/colorpicker/overlaydoc';

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
            id: 'api',
            label: 'API',
            component: ApiDoc
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
