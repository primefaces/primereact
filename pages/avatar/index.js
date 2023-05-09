import React from 'react';
import { AccessibilityDoc } from '../../components/doc/avatar/accessibilitydoc';
import { GroupDoc } from '../../components/doc/avatar/groupdoc';
import { IconDoc } from '../../components/doc/avatar/icondoc';
import { ImageDoc } from '../../components/doc/avatar/imagedoc';
import { ImportDoc } from '../../components/doc/avatar/importdoc';
import { LabelDoc } from '../../components/doc/avatar/labeldoc';
import { StyleDoc } from '../../components/doc/avatar/styledoc';
import { DocComponent } from '../../components/doc/common/doccomponent';
import { Wireframe } from '../../components/doc/avatar/pt/wireframe';
import DocApiTable from '../../components/doc/common/docapitable';
import { PTDoc } from '../../components/doc/avatar/pt/ptdoc';

const AvatarDemo = () => {
    const docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc
        },
        {
            id: 'label',
            label: 'Label',
            component: LabelDoc
        },
        {
            id: 'icon',
            label: 'Icon',
            component: IconDoc
        },
        {
            id: 'image',
            label: 'Image',
            component: ImageDoc
        },
        {
            id: 'group',
            label: 'Group',
            component: GroupDoc
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
            id: 'pt.avatar.options',
            label: 'Avatar PT Options',
            component: DocApiTable
        },
        {
            id: 'pt.avatargroup.options',
            label: 'AvatarGroup PT Options',
            component: DocApiTable
        },
        {
            id: 'pt.demo',
            label: 'Example',
            component: PTDoc
        }
    ];

    return <DocComponent title="React Avatar Component" header="Avatar" description="Avatar represents people using icons, labels and images." componentDocs={docs} apiDocs={['Avatar']} ptDocs={ptDocs} />;
};

export default AvatarDemo;
