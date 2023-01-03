import Head from 'next/head';
import React from 'react';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { ApiDoc } from '../../components/doc/badge/apidoc';
import { ImportDoc } from '../../components/doc/badge/importdoc';
import { BasicDoc } from '../../components/doc/badge/basicdoc';
import { SeverityDoc } from '../../components/doc/badge/severitydoc';
import { ButtonDoc } from '../../components/doc/badge/buttondoc';
import { PositionDoc } from '../../components/doc/badge/positiondoc';
import { SizeDoc } from '../../components/doc/badge/sizedoc';
import { DocActions } from '../../components/doc/common/docactions';

const BadgeDemo = () => {
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
            id: 'severity',
            label: 'Severity',
            component: SeverityDoc
        },
        {
            id: 'size',
            label: 'Size',
            component: SizeDoc
        },
        {
            id: 'positioned',
            label: 'Position',
            component: PositionDoc
        },
        {
            id: 'button',
            label: 'Button',
            component: ButtonDoc
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
                <DocActions github="badge/index.js" />
            </div>

            <div className="content-section doc">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default BadgeDemo;
