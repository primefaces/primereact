import React from 'react';
import { DocComponent } from '../../components/doc/common/doccomponent';
import { AccessibilityDoc } from '../../components/doc/picklist/accessibilitydoc';
import { ImportDoc } from '../../components/doc/picklist/importdoc';
import { PickListDoc } from '../../components/doc/picklist/picklistdoc';
import { StyleDoc } from '../../components/doc/picklist/styledoc';

const PickListDemo = () => {
    const docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc
        },
        {
            id: 'picklist',
            label: 'PickList',
            component: PickListDoc
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
