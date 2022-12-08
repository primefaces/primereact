import Head from 'next/head';
import React from 'react';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { ApiDoc } from '../../components/doc/progressbar/apidoc';
import { ImportDoc } from '../../components/doc/progressbar/importdoc';
import { DynamicDoc } from '../../components/doc/progressbar/dynamicdoc';
import { StaticDoc } from '../../components/doc/progressbar/staticdoc';
import { CustomDisplayValueDoc } from '../../components/doc/progressbar/customdisplayvaluedoc';
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
            id: 'dynamic',
            label: 'Dynamic',
            component: DynamicDoc
        },
        {
            id: 'static',
            label: 'Static',
            component: StaticDoc
        },
        {
            id: 'customdisplayvalue',
            label: 'Custom display value',
            component: CustomDisplayValueDoc
        },
        {
            id: 'indeterminate',
            label: 'Indeterminate',
            component: IndeterminateDoc
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
