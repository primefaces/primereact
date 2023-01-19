import Head from 'next/head';
import React from 'react';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { ApiDoc } from '../../components/doc/progressbar/apidoc';
import { AccessibilityDoc } from '../../components/doc/progressbar/accessibilitydoc';
import { StyleDoc } from '../../components/doc/progressbar/styledoc';
import { ImportDoc } from '../../components/doc/progressbar/importdoc';
import { DynamicDoc } from '../../components/doc/progressbar/dynamicdoc';
import { BasicDoc } from '../../components/doc/progressbar/basicdoc';
import { TemplateDoc } from '../../components/doc/progressbar/templatedoc';
import { IndeterminateDoc } from '../../components/doc/progressbar/indeterminatedoc';
import { DocActions } from '../../components/doc/common/docactions';

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
            component: ApiDoc
        }
    ];

    return (
        <div>
            <Head>
                <title>React ProgressBar Component</title>
                <meta name="description" content="ProgressBar is a process status indicator." />
            </Head>

            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>ProgressBar</h1>
                    <p>ProgressBar is a process status indicator.</p>
                </div>
                <DocActions github="progressbar/index.js" />
            </div>

            <div className="content-section doc">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default ProgressBarDemo;
