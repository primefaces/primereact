import Head from 'next/head';
import React from 'react';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { ApiDoc } from '../../components/doc/chip/apidoc';
import { ImportDoc } from '../../components/doc/chip/importdoc';
import { BasicDoc } from '../../components/doc/chip/basicdoc';
import { IconDoc } from '../../components/doc/chip/icondoc';
import { ImageDoc } from '../../components/doc/chip/imagedoc';
import { StylingDoc } from '../../components/doc/chip/stylingdoc';
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
            id: 'icon',
            label: 'Icon',
            component: IconDoc
        },
        {
            id: 'image',
            label: 'Image',
            component: ImageDoc
        },
        {
            id: 'stylingdoc',
            label: 'Styling',
            component: StylingDoc
        },
        {
            id: 'api',
            label: 'API',
            component: ApiDoc,
            children: [
                {
                    id: 'templating',
                    label: 'Templating'
                },
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
                <title>React Chip Component</title>
                <meta name="description" content="Chip represents entities using icons, labels and images." />
            </Head>

            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>Chip</h1>
                    <p>Chip represents entities using icons, labels and images.</p>
                </div>
                <DocActions github="chip/index.js" />
            </div>

            <div className="content-section doc">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default ChipDemo;
