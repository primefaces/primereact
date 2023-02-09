import React from 'react';
import { DocComponent } from '../../components/doc/common/doccomponent';
import { AccessibilityDoc } from '../../components/doc/picklist/accessibilitydoc';
import { BasicDoc } from '../../components/doc/picklist/basicdoc';
import { FilterDoc } from '../../components/doc/picklist/filterdoc';
import { ImportDoc } from '../../components/doc/picklist/importdoc';
import { StyleDoc } from '../../components/doc/picklist/styledoc';

const PickListDemo = () => {
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
            id: 'filter',
            label: 'Filter',
            component: FilterDoc
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

    return <DocComponent title="React PickList Component" header="PickList" description="PickList is used to reorder items between different lists.." componentDocs={docs} apiDocs={[{ name: 'PickList', pathname: '/modules/picklist.html' }]} />;
};

export default PickListDemo;
