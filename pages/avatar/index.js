import Head from 'next/head';
import React from 'react';
import { DocActions } from '../../components/doc/common/docactions';
import { ImportDoc } from '../../components/doc/avatar/importdoc';
import { LabelDoc } from '../../components/doc/avatar/labeldoc';
import { ApiDoc } from '../../components/doc/avatar/apidoc';
import { AccessibilityDoc } from '../../components/doc/avatar/accessibilitydoc';
import { IconDoc } from '../../components/doc/avatar/icondoc';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { ImageDoc } from '../../components/doc/avatar/imagedoc';
import { AvatarGroupDoc } from '../../components/doc/avatar/avatargroupdoc';
import { StylingAvatarGroupDoc } from '../../components/doc/avatar/stylingavatargroupdoc';
import { AccessibilityDoc } from '../../components/doc/avatar/accessibilitydoc';
import { StylingAvatarDoc } from '../../components/doc/avatar/stylingavatardoc';

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
            component: ApiDoc,
            children: [
                {
                    id: 'propertiesofavatar',
                    label: 'Properties of Avatar'
                },
                {
                    id: 'propertiesofavatargroup',
                    label: 'Properties of AvatarGroup'
                },
                {
                    id: 'events',
                    label: 'Events'
                }
            ]
        }
    ];

    return (
        <div>
            <Head>
                <title>React Avatar Component</title>
                <meta name="description" content="Avatar represents people using icons, labels and images." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>Avatar</h1>
                    <p>Avatar represents people using icons, labels and images.</p>
                </div>
                <DocActions github="avatar/index.js" />
            </div>
            <div className="content-section doc">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default AvatarDemo;
