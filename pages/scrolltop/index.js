import React from 'react';
import { DocComponent } from '../../components/doc/common/doccomponent';
import { AccessibilityDoc } from '../../components/doc/scrolltop/accessibilitydoc';
import { BasicDoc } from '../../components/doc/scrolltop/basicdoc';
import { ElementDoc } from '../../components/doc/scrolltop/elementdoc';
import { ImportDoc } from '../../components/doc/scrolltop/importdoc';
import { StyleDoc } from '../../components/doc/scrolltop/styledoc';
import { Wireframe } from '../../components/doc/scrolltop/pt/wireframe';
import DocApiTable from '../../components/doc/common/docapitable';
import { PTDoc } from '../../components/doc/scrolltop/pt/ptdoc';

const ScrollTopDemo = () => {
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
            id: 'element',
            label: 'Element',
            component: ElementDoc
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
            id: 'pt.scrolltop.options',
            label: 'ScrollTop PT Options',
            component: DocApiTable
        },
        {
            id: 'pt.demo',
            label: 'Example',
            component: PTDoc
        }
    ];

    return (
        <DocComponent
            title="React ScrollTop Component"
            header="ScrollTop"
            description="ScrollTop gets displayed when it gets into viewport and used to navigate back to the top of the page."
            componentDocs={docs}
            apiDocs={['ScrollTop']}
            ptDocs={ptDocs}
        />
    );
};

export default ScrollTopDemo;
