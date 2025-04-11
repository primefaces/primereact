'use client';
import CardDoc from './card/doc';
import ImportDoc from './import/doc';
import ListDoc from './list/doc';
import ShapesDoc from './shapes/doc';

const features = [
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
    }
    // {
    //     id: 'dataTable',
    //     label: 'DataTable',
    //     component: DataTableDoc
    // }
];

export default features;
