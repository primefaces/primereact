'use client';
import BasicDoc from './basic/doc';
import ButtonDoc from './button/doc';
import ImportDoc from './import/doc';
import OverlayDoc from './overlay/doc';
import SeverityDoc from './severity/doc';
import SizeDoc from './size/doc';

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
        id: 'severity',
        label: 'Severity',
        component: SeverityDoc
    },
    {
        id: 'size',
        label: 'Size',
        component: SizeDoc
    },
    {
        id: 'overlay',
        label: 'Overlay',
        component: OverlayDoc
    },
    {
        id: 'button',
        label: 'Button',
        component: ButtonDoc
    }
];

export default features;
