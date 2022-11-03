import React from 'react';
import Head from 'next/head';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { ImportDoc } from '../../components/doc/checkbox/importdoc';
import { GettingStartedDoc } from '../../components/doc/checkbox/gettingstarteddoc';
import { GroupDoc } from '../../components/doc/checkbox/groupdoc';
import { DisabledDoc } from '../../components/doc/checkbox/disableddoc';
import { ApiDoc } from '../../components/doc/checkbox/apidoc';

const CheckboxDemo = () => {
    const docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc
        },
        {
            id: 'gettingstarted',
            label: 'Getting Started',
            component: GettingStartedDoc
        },
        {
            id: 'group',
            label: 'Group',
            component: GroupDoc
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
                <title>React Checkbox Component</title>
                <meta name="description" content="Checkbox is an extension to standard checkbox element with skinning capabilities." />
            </Head>

            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>Checkbox</h1>
                    <p>Checkbox is an extension to standard checkbox element with skinning capabilities.</p>
                </div>
            </div>

            <div className="content-section doc">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default CheckboxDemo;
