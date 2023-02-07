import Head from 'next/head';
import React from 'react';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { AccessibilityDoc } from '../../components/doc/timeline/accessibilitydoc';
import { AlignmentDoc } from '../../components/doc/timeline/alignmentdoc';
import { BasicDoc } from '../../components/doc/timeline/basicdoc';
import { HorizontalDoc } from '../../components/doc/timeline/horizontaldoc';
import { ImportDoc } from '../../components/doc/timeline/importdoc';
import { OppositeDoc } from '../../components/doc/timeline/oppositedoc';
import { StyleDoc } from '../../components/doc/timeline/styledoc';
import { TemplateDoc } from '../../components/doc/timeline/templatedoc';

const TimelineDemo = () => {
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
            id: 'alignment',
            label: 'Alignment',
            component: AlignmentDoc
        },
        {
            id: 'opposite',
            label: 'Opposite',
            component: OppositeDoc
        },
        {
            id: 'template',
            label: 'Template',
            component: TemplateDoc
        },
        {
            id: 'horizontal',
            label: 'Horizontal',
            component: HorizontalDoc
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
            doc: [{ name: 'Timeline', pathname: '/modules/timeline.html' }]
        }
    ];

    return (
        <div>
            <Head>
                <title>React Timeline Component</title>
                <meta name="description" content="Timeline visualizes a series of chained events." />
            </Head>
            <div className="doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <h1>Timeline</h1>
                        <p>Timeline visualizes a series of chained events.</p>
                    </div>
                    <DocSections docs={docs} />
                </div>
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default TimelineDemo;
