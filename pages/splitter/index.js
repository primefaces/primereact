import Head from 'next/head';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { AccessibilityDoc } from '../../components/doc/splitter/accessibilitydoc';
import { HorizontalDoc } from '../../components/doc/splitter/horizontaldoc';
import { ImportDoc } from '../../components/doc/splitter/importdoc';
import { NestedDoc } from '../../components/doc/splitter/nesteddoc';
import { SizeDoc } from '../../components/doc/splitter/sizedoc';
import { StyleDoc } from '../../components/doc/splitter/styledoc';
import { VerticalDoc } from '../../components/doc/splitter/verticaldoc';

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
            id: 'size',
            label: 'Size',
            component: SizeDoc
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
                { name: 'Splitter', pathname: '/modules/splitter.html' },
                { name: 'SplitterPanel', pathname: '/classes/splitter.SplitterPanel.html' }
            ]
        }
    ];

    return (
        <div>
            <Head>
                <title>React Splitter Component</title>
                <meta name="description" content="Splitter is utilized to separate and resize panels." />
            </Head>
            <div className="content-section doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <h1>Splitter</h1>
                        <p>Splitter is utilized to separate and resize panels.</p>
                    </div>
                    <DocSections docs={docs} />
                </div>
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default SplitterDemo;
