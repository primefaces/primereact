import React, { useState } from 'react';
import Head from 'next/head';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { ImportDoc } from '../../components/doc/radiobutton/importdoc';
import { GroupDoc } from '../../components/doc/radiobutton/groupdoc';
import { DynamicDoc } from '../../components/doc/radiobutton/dynamicdoc';
import { DisabledDoc } from '../../components/doc/radiobutton/disableddoc';
import { ApiDoc } from '../../components/doc/checkbox/apidoc';

const RadioButtonDemo = () => {
    const docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc
        },
        {
            id: 'group',
            label: 'Group',
            component: GroupDoc
        },
        {
            id: 'dynamic',
            label: 'Dynamic',
            component: DynamicDoc
        },
        {
            id: 'disabled',
            label: 'Disabled',
            component: DisabledDoc
        },
        {
            id: 'apidoc',
            label: 'API',
            component: ApiDoc
        }
    ];

    return (
        <div>
            <Head>
                <title>React RadioButton Component</title>
                <meta name="description" content="RadioButton is an extension to standard radio button element with theming." />
            </Head>

            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>RadioButton</h1>
                    <p>RadioButton is an extension to standard radio button element with theming.</p>
                </div>
            </div>

            <div className="content-section doc">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default RadioButtonDemo;
