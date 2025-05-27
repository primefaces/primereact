'use client';
import BasicDoc from './basic/doc';
import ContentDoc from './content/doc';
import ImportDoc from './import/doc';
import LoginDoc from './login/doc';
import TypeDoc from './type/doc';
import VerticalDoc from './vertical/doc';

const features = [
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
        id: 'type',
        label: 'Type',
        component: TypeDoc
    },
    {
        id: 'vertical',
        label: 'Vertical',
        component: VerticalDoc
    },
    {
        id: 'content',
        label: 'Content',
        component: ContentDoc
    },
    {
        id: 'login',
        label: 'Login',
        component: LoginDoc
    }
];

export default features;
