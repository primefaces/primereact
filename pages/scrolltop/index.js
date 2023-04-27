import React from 'react';
import { DocComponent } from '../../components/doc/common/doccomponent';
import { AccessibilityDoc } from '../../components/doc/scrolltop/accessibilitydoc';
import { BasicDoc } from '../../components/doc/scrolltop/basicdoc';
import { ElementDoc } from '../../components/doc/scrolltop/elementdoc';
import { ImportDoc } from '../../components/doc/scrolltop/importdoc';
import { StyleDoc } from '../../components/doc/scrolltop/styledoc';

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

    return <DocComponent title="React ScrollTop Component" header="ScrollTop" description="ScrollTop gets displayed when it gets into viewport and used to navigate back to the top of the page." componentDocs={docs} apiDocs={['ScrollTop']} />;
};

export default ScrollTopDemo;
