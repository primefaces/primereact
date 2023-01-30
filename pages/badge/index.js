import Head from 'next/head';
import React from 'react';
import { AccessibilityDoc } from '../../components/doc/badge/accessibilitydoc';
import { BasicDoc } from '../../components/doc/badge/basicdoc';
import { ButtonDoc } from '../../components/doc/badge/buttondoc';
import { ImportDoc } from '../../components/doc/badge/importdoc';
import { PositionDoc } from '../../components/doc/badge/positiondoc';
import { SeverityDoc } from '../../components/doc/badge/severitydoc';
import { SizeDoc } from '../../components/doc/badge/sizedoc';
import { StyleDoc } from '../../components/doc/badge/styledoc';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';

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
            doc: [{ name: 'Badge', pathname: '/modules/badge.html' }]
        }
    ];

    return (
        <div>
            <Head>
                <title>React Badge Component</title>
                <meta name="description" content="Badge is a small status indicator for another element." />
            </Head>
            <div className="doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <h1>Badge</h1>
                        <p>Badge is a small status indicator for another element.</p>
                    </div>
                    <DocSections docs={docs} />
                </div>
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default BadgeDemo;
