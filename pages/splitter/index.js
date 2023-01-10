import Head from 'next/head';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { DocActions } from '../../components/doc/common/docactions';
import { ImportDoc } from '../../components/doc/splitter/importdoc';
import { HorizontalDoc } from '../../components/doc/splitter/horizontaldoc';
import { VerticalDoc } from '../../components/doc/splitter/verticaldoc';
import { NestedDoc } from '../../components/doc/splitter/nesteddoc';
import { ApiDoc } from '../../components/doc/splitter/apidoc';
import { AccessibilityDoc } from '../../components/doc/splitter/accessibilitydoc';
import { StylingDoc } from '../../components/doc/splitter/stylingdoc';

const SplitterDemo = () => {
    const docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc
        },
        {
            id: 'horizontal',
            label: 'Horizontal',
            component: HorizontalDoc
        },
        {
            id: 'vertical',
            label: 'Vertical',
            component: VerticalDoc
        },
        {
            id: 'nested',
            label: 'Nested',
            component: NestedDoc
        },
        {
            id: 'styling',
            label: 'Styling',
            component: StylingDoc
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
                    id: 'properties',
                    label: 'Properties'
                },
                {
                    id: 'eventsofsplitter',
                    label: 'Events of Splitter'
                }
            ]
        }
    ];

    return (
        <div>
            <Head>
                <title>React Splitter Component</title>
                <meta name="description" content="Splitter is utilized to separate and resize panels." />
            </Head>
            <div className="content-section introduction">
                <div>
                    <h1>Splitter</h1>
                    <p>Splitter is utilized to separate and resize panels.</p>
                </div>
                <DocActions github="splitter/index.js" />
            </div>

            <div className="content-section doc">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default SplitterDemo;
