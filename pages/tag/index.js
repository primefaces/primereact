import Head from 'next/head';
import React from 'react';
import { DocActions } from '../../components/doc/common/docactions';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { AccessibilityDoc } from '../../components/doc/tag/accessibilitydoc';
import { BasicDoc } from '../../components/doc/tag/basicdoc';
import { IconDoc } from '../../components/doc/tag/icondoc';
import { ImportDoc } from '../../components/doc/tag/importdoc';
import { PillDoc } from '../../components/doc/tag/pilldoc';
import { SeverityDoc } from '../../components/doc/tag/severitydoc';
import { StyleDoc } from '../../components/doc/tag/styledoc';
import { TemplateDoc } from '../../components/doc/tag/templatedoc';

const TerminalDemo = () => {
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
            id: 'pill',
            label: 'Pill',
            component: PillDoc
        },
        {
            id: 'icons',
            label: 'Icon',
            component: IconDoc
        },
        {
            id: 'template',
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
            doc: [{ name: 'Tag', pathname: '/modules/tag.html' }]
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
                <DocActions github="/tag" />
            </div>
            <div className="content-section doc">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default TerminalDemo;
