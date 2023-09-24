import React from 'react';
import DocApiTable from '../../components/doc/common/docapitable';
import { PTDoc } from '../../components/doc/picklist/pt/ptdoc';
import { Wireframe } from '../../components/doc/picklist/pt/wireframe';
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
    const ptDocs = [
        {
            id: 'pt.wireframe',
            label: 'Wireframe',
            component: Wireframe
        },
        {
            id: 'pt.picklist.options',
            label: 'PickList PT Options',
            component: DocApiTable
        },
        {
            id: 'pt.demo',
            label: 'Example',
            component: PTDoc
        }
    ];

    return <DocComponent title="React PickList Component" header="PickList" description="PickList is used to reorder items between different lists.." componentDocs={docs} apiDocs={['PickList']} ptDocs={ptDocs} />;
};

export default PickListDemo;
