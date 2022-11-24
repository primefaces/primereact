import Head from 'next/head';
import React from 'react';
import { DocActions } from '../../components/doc/common/docactions';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { ApiDoc } from '../../components/doc/tag/apidoc';
import { ImportDoc } from '../../components/doc/tag/importdoc';
import { TagsDoc } from '../../components/doc/tag/tagsdoc';
import { PillsDoc } from '../../components/doc/tag/pillsdoc';
import { IconsDoc } from '../../components/doc/tag/iconsdoc';

const TerminalDemo = () => {
    const docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc
        },
        {
            id: 'tags',
            label: 'Tags',
            component: TagsDoc
        },
        {
            id: 'pills',
            label: 'Pills',
            component: PillsDoc
        },
        {
            id: 'icons',
            label: 'Icons',
            component: IconsDoc
        },
        {
            id: 'apidoc',
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
                <title>React Tag Component</title>
                <meta name="description" content="Tag component is used to categorize content." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>Tag</h1>
                    <p>Tag component is used to categorize content.</p>
                </div>
                <DocActions github="avatar/index.js" />
            </div>
            <div className="content-section doc">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default TerminalDemo;
