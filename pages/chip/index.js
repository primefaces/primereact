import React from 'react';
import { AccessibilityDoc } from '../../components/doc/chip/accessibilitydoc';
import { BasicDoc } from '../../components/doc/chip/basicdoc';
import { IconDoc } from '../../components/doc/chip/icondoc';
import { ImageDoc } from '../../components/doc/chip/imagedoc';
import { ImportDoc } from '../../components/doc/chip/importdoc';
import { StyleDoc } from '../../components/doc/chip/styledoc';
import { TemplateDoc } from '../../components/doc/chip/templatedoc';
import { DocComponent } from '../../components/doc/common/doccomponent';

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

    return <DocComponent title="React Chip Component" header="Chip" description="Chip represents entities using icons, labels and images." componentDocs={docs} apiDocs={[{ name: 'Chip', pathname: '/modules/chip.html' }]} />;
};

export default ChipDemo;
