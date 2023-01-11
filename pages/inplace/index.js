import Head from 'next/head';
import React from 'react';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { ApiDoc } from '../../components/doc/inplace/apidoc';
import { AccessibilityDoc } from '../../components/doc/inplace/accessibilitydoc';
import { StyleDoc } from '../../components/doc/inplace/styledoc';
import { ImportDoc } from '../../components/doc/inplace/importdoc';
import { BasicDoc } from '../../components/doc/inplace/basicdoc';
import { InputDoc } from '../../components/doc/inplace/inputdoc';
import { ImageDoc } from '../../components/doc/inplace/imagedoc';
import { LazyDoc } from '../../components/doc/inplace/lazydoc';
import { DocActions } from '../../components/doc/common/docactions';

const ChipDemo = () => {
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
            id: 'input',
            label: 'Input',
            component: InputDoc
        },
        {
            id: 'image',
            label: 'Image',
            component: ImageDoc
        },
        {
            id: 'lazy',
            label: 'Lazy',
            component: LazyDoc
        },
        {
            id: 'styling',
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
            component: ApiDoc,
            children: [
                {
                    id: 'properties',
                    label: 'Properties'
                },
                {
                    id: 'events',
                    label: 'Events'
                }
            ]
        }
    ];

    return (
        <div>
            <Head>
                <title>React Inplace Component</title>
                <meta name="description" content="Inplace provides an easy to do editing and display at the same time where clicking the output displays the actual content." />
            </Head>

            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>Inplace</h1>
                    <p>Inplace provides an easy to do editing and display at the same time where clicking the output displays the actual content.</p>
                </div>
                <DocActions github="inplace/index.js" />
            </div>

            <div className="content-section doc">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default ChipDemo;
