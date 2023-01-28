import Head from 'next/head';
import React from 'react';
import { DocActions } from '../../components/doc/common/docactions';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { AnimationDoc } from '../../components/doc/styleclass/animationdoc';
import { ImportDoc } from '../../components/doc/styleclass/importdoc';
import { ToggleClassDoc } from '../../components/doc/styleclass/toggleclassdoc';

const StyleClassDemo = () => {
    const docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc
        },
        {
            id: 'toggleclass',
            label: 'Toggle Class',
            component: ToggleClassDoc
        },
        {
            id: 'animations',
            label: 'Animation',
            component: AnimationDoc
        },
        {
            id: 'api',
            label: 'API',
            doc: [{ name: 'StyleClass', pathname: '/modules/styleclass.html' }]
        }
    ];

    return (
        <div>
            <Head>
                <title>React StyleClass Component</title>
                <meta name="description" content="StyleClass manages css classes declaratively to during enter/leave animations or just to toggle classes on an element." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>StyleClass</h1>
                    <p>StyleClass manages css classes declaratively to during enter/leave animations or just to toggle classes on an element.</p>
                </div>
                <DocActions github="/styleclass" />
            </div>
            <div className="content-section doc">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default StyleClassDemo;
