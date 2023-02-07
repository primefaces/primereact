import React from 'react';
import { DocComponent } from '../../components/doc/common/doccomponent';
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
        }
    ];

    return <DocComponent title="React Tag Component" header="Tag" description="Tag component is used to categorize content." componentDocs={docs} apiDocs={[{ name: 'Tag', pathname: '/modules/tag.html' }]} />;
};

export default TerminalDemo;
