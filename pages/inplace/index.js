import Head from 'next/head';
import React from 'react';
import { DocActions } from '../../components/doc/common/docactions';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { AccessibilityDoc } from '../../components/doc/inplace/accessibilitydoc';
import { ApiDoc } from '../../components/doc/inplace/apidoc';
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
            component: ApiDoc
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
                <DocActions github="/inplace" />
            </div>

            <div className="content-section doc">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default ChipDemo;
