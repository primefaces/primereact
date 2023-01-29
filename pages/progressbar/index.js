import Head from 'next/head';
import React from 'react';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { AccessibilityDoc } from '../../components/doc/progressbar/accessibilitydoc';
import { BasicDoc } from '../../components/doc/progressbar/basicdoc';
import { DynamicDoc } from '../../components/doc/progressbar/dynamicdoc';
import { ImportDoc } from '../../components/doc/progressbar/importdoc';
import { IndeterminateDoc } from '../../components/doc/progressbar/indeterminatedoc';
import { StyleDoc } from '../../components/doc/progressbar/styledoc';
import { TemplateDoc } from '../../components/doc/progressbar/templatedoc';

const ProgressBarDemo = () => {
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
            id: 'dynamic',
            label: 'Dynamic',
            component: DynamicDoc
        },
        {
            id: 'template',
            label: 'Template',
            component: TemplateDoc
        },
        {
            id: 'indeterminate',
            label: 'Indeterminate',
            component: IndeterminateDoc
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
            doc: [{ name: 'ProgressBar', pathname: '/modules/progressbar.html' }]
        }
    ];

    return (
        <div>
            <Head>
                <title>React ProgressBar Component</title>
                <meta name="description" content="ProgressBar is a process status indicator." />
            </Head>
            <div className="content-section doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <h1>ProgressBar</h1>
                        <p>ProgressBar is a process status indicator.</p>
                    </div>
                    <DocSections docs={docs} />
                </div>
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default ProgressBarDemo;
