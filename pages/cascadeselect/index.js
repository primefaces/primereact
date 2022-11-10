import React from 'react';
import Head from 'next/head';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { DocActions } from '../../components/doc/common/docactions';
import { ImportDoc } from '../../components/doc/cascadeselect/importdoc';
import { ApiDoc } from '../../components/doc/cascadeselect/apidoc';
import { BasicDoc } from '../../components/doc/cascadeselect/basicdoc';
import { TemplatingDoc } from '../../components/doc/cascadeselect/templatingdoc';

const CascadeSelectDemo = () => {
    const docs = [
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
            id: 'templating',
            label: 'Templating',
            component: TemplatingDoc
        },
        {
            id: 'Api',
            label: 'API',
            component: ApiDoc
        }
    ];

    return (
        <div>
            <Head>
                <title>React CascadeSelect Component</title>
                <meta name="description" content="CascadeSelect is a form component to select a value from a nested structure of options." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>CascadeSelect</h1>
                    <p>CascadeSelect is a form component to select a value from a nested structure of options.</p>
                </div>
                <DocActions github="cascadeselect/index.js" />
            </div>
            <div className="content-section doc">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default CascadeSelectDemo;
