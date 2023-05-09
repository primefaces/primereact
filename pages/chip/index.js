import React from 'react';
import { AccessibilityDoc } from '../../components/doc/chip/accessibilitydoc';
import { BasicDoc } from '../../components/doc/chip/basicdoc';
import { IconDoc } from '../../components/doc/chip/icondoc';
import { ImageDoc } from '../../components/doc/chip/imagedoc';
import { ImportDoc } from '../../components/doc/chip/importdoc';
import { StyleDoc } from '../../components/doc/chip/styledoc';
import { TemplateDoc } from '../../components/doc/chip/templatedoc';
import { DocComponent } from '../../components/doc/common/doccomponent';
import { Wireframe } from '../../components/doc/chip/pt/wireframe';
import DocApiTable from '../../components/doc/common/docapitable';
import { PTDoc } from '../../components/doc/chip/pt/ptdoc';

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
        }
    ];

    const ptDocs = [
        {
            id: 'pt.wireframe',
            label: 'Wireframe',
            component: Wireframe
        },
        {
            id: 'pt.chip.options',
            label: 'Chip PT Options',
            component: DocApiTable
        },
        {
            id: 'pt.demo',
            label: 'Example',
            component: PTDoc
        }
    ];

    return <DocComponent title="React Chip Component" header="Chip" description="Chip represents entities using icons, labels and images." componentDocs={docs} apiDocs={['Chip']} ptDocs={ptDocs} />;
};

export default ChipDemo;
