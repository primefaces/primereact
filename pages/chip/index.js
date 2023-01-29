import Head from 'next/head';
import React from 'react';
import { AccessibilityDoc } from '../../components/doc/chip/accessibilitydoc';
import { BasicDoc } from '../../components/doc/chip/basicdoc';
import { IconDoc } from '../../components/doc/chip/icondoc';
import { ImageDoc } from '../../components/doc/chip/imagedoc';
import { ImportDoc } from '../../components/doc/chip/importdoc';
import { StyleDoc } from '../../components/doc/chip/styledoc';
import { TemplateDoc } from '../../components/doc/chip/templatedoc';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';

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
            id: 'templatedoc',
            label: 'Template',
            component: TemplateDoc
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
            doc: [{ name: 'Chip', pathname: '/modules/chip.html' }]
        }
    ];

    return (
        <div>
            <Head>
                <title>React Chip Component</title>
                <meta name="description" content="Chip represents entities using icons, labels and images." />
            </Head>
            <div className="content-section doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <h1>Chip</h1>
                        <p>Chip represents entities using icons, labels and images.</p>
                    </div>
                    <DocSections docs={docs} />
                </div>
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default ChipDemo;
