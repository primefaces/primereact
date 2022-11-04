import React, { useState } from 'react';
import Head from 'next/head';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { ImportDoc } from '../../components/doc/editor/importdoc';
import { QuillDoc } from '../../components/doc/editor/quilldoc';
import { BasicDoc } from '../../components/doc/editor/basicdoc';
import { TemplateDoc } from '../../components/doc/editor/templatedoc';
import { ApiDoc } from '../../components/doc/editor/apidoc';

const EditorDemo = () => {
    const docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc
        },
        {
            id: 'quill',
            label: 'QuillJS',
            component: QuillDoc
        },
        {
            id: 'basic',
            label: 'Basic',
            component: BasicDoc
        },
        {
            id: 'template',
            label: 'Template',
            component: TemplateDoc
        },
        {
            id: 'api',
            label: 'API',
            component: ApiDoc
        }
    ];
   
    return (
        <div>
            <Head>
                <title>React Editor Component</title>
                <meta name="description" content="Editor is rich text editor component based on Quill." />
            </Head>

            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>Editor</h1>
                    <p>Editor is rich text editor component based on Quill.</p>
                </div>
            </div>

            <div className="content-section doc">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default EditorDemo;
