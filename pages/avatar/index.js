import Head from 'next/head';
import React from 'react';
import { AccessibilityDoc } from '../../components/doc/avatar/accessibilitydoc';
import { AvatarGroupDoc } from '../../components/doc/avatar/avatargroupdoc';
import { IconDoc } from '../../components/doc/avatar/icondoc';
import { ImageDoc } from '../../components/doc/avatar/imagedoc';
import { ImportDoc } from '../../components/doc/avatar/importdoc';
import { LabelDoc } from '../../components/doc/avatar/labeldoc';
import { StylingAvatarDoc } from '../../components/doc/avatar/stylingavatardoc';
import { StylingAvatarGroupDoc } from '../../components/doc/avatar/stylingavatargroupdoc';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';

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
        },
        {
            id: 'api',
            label: 'API',
            doc: [{ name: 'Avatar', pathname: '/modules/avatar.html' }]
        }
    ];

    return (
        <div>
            <Head>
                <title>React Avatar Component</title>
                <meta name="description" content="Avatar represents people using icons, labels and images." />
            </Head>
            <div className="doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <h1>Avatar</h1>
                        <p>Avatar represents people using icons, labels and images.</p>
                    </div>
                    <DocSections docs={docs} />
                </div>
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default AvatarDemo;
