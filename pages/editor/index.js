import Head from 'next/head';
import React from 'react';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { AccessibilityDoc } from '../../components/doc/editor/accessibilitydoc';
import { BasicDoc } from '../../components/doc/editor/basicdoc';
import { FormikDoc } from '../../components/doc/editor/form/formikdoc';
import { HookFormDoc } from '../../components/doc/editor/form/hookformdoc';
import { ImportDoc } from '../../components/doc/editor/importdoc';
import { QuillDoc } from '../../components/doc/editor/quilldoc';
import { ReadOnlyDoc } from '../../components/doc/editor/readonlydoc';
import { StyleDoc } from '../../components/doc/editor/styledoc';
import { TemplateDoc } from '../../components/doc/editor/templatedoc';

const EditorDemo = () => {
    const docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc
        },
        {
            id: 'quill',
            label: 'Quill',
            component: QuillDoc
        },
        {
            id: 'basic',
            label: 'Basic',
            component: BasicDoc
        },
        {
            id: 'readOnly',
            label: 'ReadOnly',
            component: ReadOnlyDoc
        },
        {
            id: 'template',
            label: 'Template',
            component: TemplateDoc
        },
        {
            id: 'form',
            label: 'Form',
            description: 'Compatibility with popular React form libraries.',
            children: [
                {
                    id: 'formik',
                    label: 'Formik',
                    component: FormikDoc
                },
                {
                    id: 'hookform',
                    label: 'Hook Form',
                    component: HookFormDoc
                }
            ]
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
        },
        {
            id: 'api',
            label: 'API',
            doc: [{ name: 'Editor', pathname: '/modules/editor.html' }]
        }
    ];

    return (
        <div>
            <Head>
                <title>React Editor Component</title>
                <meta name="description" content="Editor is rich text editor component based on Quill." />
            </Head>
            <div className="doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <h1>Editor</h1>
                        <p>Editor is rich text editor component based on Quill.</p>
                    </div>
                    <DocSections docs={docs} />
                </div>
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default EditorDemo;
