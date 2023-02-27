import React from 'react';
import { DocComponent } from '../../components/doc/common/doccomponent';
import { AccessibilityDoc } from '../../components/doc/inplace/accessibilitydoc';
import { BasicDoc } from '../../components/doc/inplace/basicdoc';
import { ImageDoc } from '../../components/doc/inplace/imagedoc';
import { ImportDoc } from '../../components/doc/inplace/importdoc';
import { InputDoc } from '../../components/doc/inplace/inputdoc';
import { LazyDoc } from '../../components/doc/inplace/lazydoc';
import { StyleDoc } from '../../components/doc/inplace/styledoc';

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
            id: 'input',
            label: 'Input',
            component: InputDoc
        },
        {
            id: 'image',
            label: 'Image',
            component: ImageDoc
        },
        {
            id: 'lazy',
            label: 'Lazy',
            component: LazyDoc
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

    return (
        <DocComponent
            title="React Inplace Component"
            header="Inplace"
            description="Inplace provides an easy to do editing and display at the same time where clicking the output displays the actual content."
            componentDocs={docs}
            apiDocs={['Inplace', 'InplaceDisplay', 'InplaceContent']}
        />
    );
};

export default ChipDemo;
