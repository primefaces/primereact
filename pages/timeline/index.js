import React from 'react';
import DocApiTable from '../../components/doc/common/docapitable';
import { PTDoc } from '../../components/doc/timeline/pt/ptdoc';
import { Wireframe } from '../../components/doc/timeline/pt/wireframe';
import { DocComponent } from '../../components/doc/common/doccomponent';
import { AccessibilityDoc } from '../../components/doc/timeline/accessibilitydoc';
import { AlignmentDoc } from '../../components/doc/timeline/alignmentdoc';
import { BasicDoc } from '../../components/doc/timeline/basicdoc';
import { HorizontalDoc } from '../../components/doc/timeline/horizontaldoc';
import { ImportDoc } from '../../components/doc/timeline/importdoc';
import { OppositeDoc } from '../../components/doc/timeline/oppositedoc';
import { StyleDoc } from '../../components/doc/timeline/styledoc';
import { TemplateDoc } from '../../components/doc/timeline/templatedoc';

const TimelineDemo = () => {
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
            id: 'alignment',
            label: 'Alignment',
            component: AlignmentDoc
        },
        {
            id: 'opposite',
            label: 'Opposite',
            component: OppositeDoc
        },
        {
            id: 'template',
            label: 'Template',
            component: TemplateDoc
        },
        {
            id: 'horizontal',
            label: 'Horizontal',
            component: HorizontalDoc
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
    const ptDocs = [
        {
            id: 'pt.wireframe',
            label: 'Wireframe',
            component: Wireframe
        },
        {
            id: 'pt.timeline.options',
            label: 'Timeline PT Options',
            component: DocApiTable
        },
        {
            id: 'pt.demo',
            label: 'Example',
            component: PTDoc
        }
    ];

    return <DocComponent title="React Timeline Component" header="Timeline" description="Timeline visualizes a series of chained events." componentDocs={docs} apiDocs={['Timeline']} ptDocs={ptDocs} />;
};

export default TimelineDemo;
