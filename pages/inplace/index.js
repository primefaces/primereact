import Head from 'next/head';
import React from 'react';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { ApiDoc } from '../../components/doc/inplace/apidoc';
import { InputDemo } from '../../components/doc/inplace/inputdoc';
import { ImageDemo } from '../../components/doc/inplace/imagedoc';
import { LazyDemo } from '../../components/doc/inplace/lazydoc';

const ChipDemo = () => {
    const docs = [
        {
            id: 'basic',
            label: 'Basic',
            component: InputDemo
        },
        {
            id: 'image',
            label: 'Image',
            component: ImageDemo
        },
        {
            id: 'lazy',
            label: 'Lazy',
            component: LazyDemo
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
                <title>React Inplace Component</title>
                <meta name="description" content="Inplace provides an easy to do editing and display at the same time where clicking the output displays the actual content." />
            </Head>

            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>Inplace</h1>
                    <p>Inplace provides an easy to do editing and display at the same time where clicking the output displays the actual content.</p>
                </div>
            </div>

            <div className="content-section doc">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default ChipDemo;
