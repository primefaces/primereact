import React from 'react';
import { AccessibilityDoc } from '../../components/doc/avatar/accessibilitydoc';
import { AvatarGroupDoc } from '../../components/doc/avatar/avatargroupdoc';
import { IconDoc } from '../../components/doc/avatar/icondoc';
import { ImageDoc } from '../../components/doc/avatar/imagedoc';
import { ImportDoc } from '../../components/doc/avatar/importdoc';
import { LabelDoc } from '../../components/doc/avatar/labeldoc';
import { StylingAvatarDoc } from '../../components/doc/avatar/stylingavatardoc';
import { StylingAvatarGroupDoc } from '../../components/doc/avatar/stylingavatargroupdoc';
import { DocComponent } from '../../components/doc/common/doccomponent';

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
            id: 'avatargroup',
            label: 'AvatarGroup',
            component: AvatarGroupDoc
        },
        {
            id: 'stylingofavatar',
            label: 'Styling of Avatar',
            component: StylingAvatarDoc
        },
        {
            id: 'stylingofavatargroup',
            label: 'Styling of Avatar Group',
            component: StylingAvatarGroupDoc
        },
        {
            id: 'accessibility',
            label: 'Accessibility',
            component: AccessibilityDoc
        }
    ];

    return <DocComponent title="React Avatar Component" header="Avatar" description="Avatar represents people using icons, labels and images." componentDocs={docs} apiDocs={[{ name: 'Avatar', pathname: '/modules/avatar.html' }]} />;
};

export default AvatarDemo;
