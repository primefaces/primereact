import React from 'react';
import { DocComponent } from '../../components/doc/common/doccomponent';
import { AccessibilityDoc } from '../../components/doc/skeleton/accessibilitydoc';
import { CardDoc } from '../../components/doc/skeleton/carddoc';
import { DataTableDoc } from '../../components/doc/skeleton/datatabledoc';
import { ImportDoc } from '../../components/doc/skeleton/importdoc';
import { ListDoc } from '../../components/doc/skeleton/listdoc';
import { ShapesDoc } from '../../components/doc/skeleton/shapesdoc';
import { StyleDoc } from '../../components/doc/skeleton/styledoc';
import DocApiTable from '../../components/doc/common/docapitable';
import { Wireframe } from '../../components/doc/skeleton/pt/wireframe';
import { PTDoc } from '../../components/doc/skeleton/pt/ptdoc';

const SkeletonDemo = () => {
    const docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc
        },
        {
            id: 'shapes',
            label: 'Shapes',
            component: ShapesDoc
        },
        {
            id: 'card',
            label: 'Card',
            component: CardDoc
        },
        {
            id: 'list',
            label: 'List',
            component: ListDoc
        },
        {
            id: 'datatable',
            label: 'DataTable',
            component: DataTableDoc
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
            id: 'pt.skeleton.options',
            label: 'Skeleton PT Options',
            component: DocApiTable
        },
        {
            id: 'pt.demo',
            label: 'Example',
            component: PTDoc
        }
    ];

    return <DocComponent title="React Skeleton Component" header="Skeleton" description="Skeleton is a placeholder to display instead of the actual content." componentDocs={docs} apiDocs={['Skeleton']} ptDocs={ptDocs} />;
};

export default SkeletonDemo;
