import Head from 'next/head';
import React from 'react';
import { DocActions } from '../../components/doc/common/docactions';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { AccessibilityDoc } from '../../components/doc/timeline/accessibilitydoc';
import { AlignmentDoc } from '../../components/doc/timeline/aligndoc';
import { ApiDoc } from '../../components/doc/timeline/apidoc';
import { CustomizedDoc } from '../../components/doc/timeline/customizeddoc';
import { HorizontalDoc } from '../../components/doc/timeline/horizontaldoc';
import { ImportDoc } from '../../components/doc/timeline/importdoc';
import { OppositeContentDoc } from '../../components/doc/timeline/oppositecontentdoc';
import { StyleDoc } from '../../components/doc/timeline/styledoc';

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
            component: ApiDoc
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

                <DocActions github="/timeline" />
            </div>

            <div className="content-section doc timeline-demo">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default TimelineDemo;
