import Head from 'next/head';
import React from 'react';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { AccessibilityDoc } from '../../components/doc/inplace/accessibilitydoc';
import { BasicDoc } from '../../components/doc/inplace/basicdoc';
import { ImageDoc } from '../../components/doc/inplace/imagedoc';
import { ImportDoc } from '../../components/doc/inplace/importdoc';
import { InputDoc } from '../../components/doc/inplace/inputdoc';
import { LazyDoc } from '../../components/doc/inplace/lazydoc';
import { StyleDoc } from '../../components/doc/inplace/styledoc';

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
                { name: 'Inplace', pathname: '/modules/inplace.html' },
                { name: 'InplaceDisplay', pathname: '/classes/inplace.InplaceDisplay.html' },
                { name: 'InplaceContent', pathname: '/classes/inplace.InplaceContent.html' }
            ]
        }
    ];

    return (
        <div>
            <Head>
                <title>React Inplace Component</title>
                <meta name="description" content="Inplace provides an easy to do editing and display at the same time where clicking the output displays the actual content." />
            </Head>
            <div className="content-section doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <h1>Inplace</h1>
                        <p>Inplace provides an easy to do editing and display at the same time where clicking the output displays the actual content.</p>
                    </div>
                    <DocSections docs={docs} />
                </div>
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default ChipDemo;
