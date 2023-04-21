import React from 'react';
import { AccessibilityDoc } from '../../components/doc/avatar/accessibilitydoc';
import { GroupDoc } from '../../components/doc/avatar/groupdoc';
import { IconDoc } from '../../components/doc/avatar/icondoc';
import { ImageDoc } from '../../components/doc/avatar/imagedoc';
import { ImportDoc } from '../../components/doc/avatar/importdoc';
import { LabelDoc } from '../../components/doc/avatar/labeldoc';
import { StyleDoc } from '../../components/doc/avatar/styledoc';
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

    return <DocComponent title="React Avatar Component" header="Avatar" description="Avatar represents people using icons, labels and images." componentDocs={docs} apiDocs={['Avatar']} />;
};

export default AvatarDemo;
