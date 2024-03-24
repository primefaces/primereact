import React from 'react';
import DocApiTable from '@/components/doc/common/docapitable';
import { DocComponent } from '@/components/doc/common/doccomponent';
import { ImportDoc } from '@/components/doc/iconfield/importdoc';
import { BasicDoc } from '@/components/doc/iconfield/basicdoc';
import { TemplateDoc } from '@/components/doc/iconfield/templatedoc';
import { AccessibilityDoc } from '@/components/doc/iconfield/accessibilitydoc';
import { Wireframe } from '@/components/doc/iconfield/pt/wireframe';
import { StyledDoc } from '@/components/doc/iconfield/theming/styleddoc';

const IconFieldDemo = () => {
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
            id: 'template',
            label: 'Template',
            component: TemplateDoc
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
            id: 'pt.iconfield.options',
            label: 'IconField PT Options',
            component: DocApiTable
        }
    ];

    const themingDocs = [
        {
            id: 'styled',
            label: 'Styled',
            component: StyledDoc
        }
    ];

    return (
        <DocComponent
            title="React Input Component"
            header="IconField"
            description="IconField is an extension to standard input element with theming and keyfiltering."
            componentDocs={docs}
            apiDocs={['IconField']}
            ptDocs={ptDocs}
            themingDocs={themingDocs}
        />
    );
};

export default IconFieldDemo;
