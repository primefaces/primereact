import Head from 'next/head';
import React from 'react';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { ApiDoc } from '../../components/doc/badge/apidoc';
import { ImportDoc } from '../../components/doc/badge/importdoc';
import { NumbersDoc } from '../../components/doc/badge/numbersdoc';
import { ButtonDoc } from '../../components/doc/badge/buttondoc';
import { PositionedDoc } from '../../components/doc/badge/positioneddoc';
import { SizesDoc } from '../../components/doc/badge/sizesdoc';

const BadgeDemo = () => {
    const docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc
        },
        {
            id: 'numbers',
            label: 'Numbers',
            component: NumbersDoc
        },
        {
            id: 'sizes',
            label: 'Sizes',
            component: SizesDoc
        },
        {
            id: 'button',
            label: 'Button',
            component: ButtonDoc
        },
        {
            id: 'positioned',
            label: 'Positioned',
            component: PositionedDoc
        },
        {
            id: 'api',
            label: 'API',
            component: ApiDoc,
            children: [
                {
                    id: 'severities',
                    label: 'Severities'
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
                <title>React Badge Component</title>
                <meta name="description" content="Badge is a small status indicator for another element." />
            </Head>

            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>Badge</h1>
                    <p>Badge is a small status indicator for another element.</p>
                </div>
            </div>

            <div className="content-section doc">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default BadgeDemo;
