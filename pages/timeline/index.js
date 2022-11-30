import Head from 'next/head';
import React from 'react';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { DocActions } from '../../components/doc/common/docactions';
import { ApiDoc } from '../../components/doc/timeline/apidoc';
import { HorizontalDoc } from '../../components/doc/timeline/horizontaldoc';
import { AlignmentDoc } from '../../components/doc/timeline/aligndoc';
import { OppositeContentDoc } from '../../components/doc/timeline/oppositecontentdoc';
import { CustomizedDoc } from '../../components/doc/timeline/customizeddoc';
import { ImportDoc } from '../../components/doc/timeline/importdoc';

const TimelineDemo = () => {
    const docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc
        },
        {
            id: 'alignment',
            label: 'Alignment',
            component: AlignmentDoc
        },
        {
            id: 'oppositecontent',
            label: 'Opposite Content',
            component: OppositeContentDoc
        },
        {
            id: 'customized',
            label: 'Customized',
            component: CustomizedDoc
        },
        {
            id: 'horizontal',
            label: 'Horizontal',
            component: HorizontalDoc
        },
        {
            id: 'apidoc',
            label: 'API',
            component: ApiDoc,
            children: [
                {
                    id: 'properties',
                    label: 'Properties'
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
                <title>React Timeline Component</title>
                <meta name="description" content="Timeline visualizes a series of chained events." />
            </Head>

            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>Timeline</h1>
                    <p>Timeline visualizes a series of chained events.</p>
                </div>

                <DocActions github="timeline/index.js" />
            </div>

            <div className="content-section doc timeline-demo">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default TimelineDemo;
