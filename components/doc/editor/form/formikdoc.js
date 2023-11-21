import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Button } from '@/components/lib/button/Button';
import { Editor } from '@/components/lib/editor/Editor';
import { Toast } from '@/components/lib/toast/Toast';
import { useFormik } from 'formik';
import { useRef } from 'react';

export function FormikDoc(props) {
    const toast = useRef(null);

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Blog Submitted', detail: 'The blog is uploaded' });
    };

    const renderHeader = () => {
        return (
            <span className="ql-formats">
                <button className="ql-bold" aria-label="Bold"></button>
                <button className="ql-italic" aria-label="Italic"></button>
                <button className="ql-underline" aria-label="Underline"></button>
            </span>
        );
    };

    const header = renderHeader();

    const formik = useFormik({
        initialValues: {
            blog: ''
        },
        validate: (data) => {
            let errors = {};

            if (!data.blog || data.blog === '\n') {
                errors.blog = 'Content is required.';
            }

            return errors;
        },
        onSubmit: (data) => {
            data.blog && show();
            formik.resetForm();
        }
    });

    const isFormFieldInvalid = (name) => !!(formik.touched[name] && formik.errors[name]);

    const getFormErrorMessage = (name) => {
        return isFormFieldInvalid(name) ? <small className="p-error">{formik.errors[name]}</small> : <small className="p-error">&nbsp;</small>;
    };

    const code = {
        basic: `
<Toast ref={toast} />
<Editor
    id="blog"
    name="blog"
    value={formik.values.blog}
    headerTemplate={header}
    onTextChange={(e) => {
        formik.setFieldValue('blog', e.textValue);
    }}
    style={{ height: '320px' }}
/>
{getFormErrorMessage('blog')}
<Button type="submit" label="Save" />
        `,
        javascript: `
import React, { useRef } from "react";
import { useFormik } from 'formik';
import { Editor } from 'primereact/editor';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

export default function FormikDoc() {
    const toast = useRef(null);

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Blog Submitted', detail: 'The blog is uploaded' });
    };

    const renderHeader = () => {
        return (
            <span className="ql-formats">
                <button className="ql-bold" aria-label="Bold"></button>
                <button className="ql-italic" aria-label="Italic"></button>
                <button className="ql-underline" aria-label="Underline"></button>
            </span>
        );
    };

    const header = renderHeader();

    const formik = useFormik({
        initialValues: {
            blog: ''
        },
        validate: (data) => {
            let errors = {};

            if (!data.blog || data.blog === \`n\`) {
                
                errors.blog = 'Content is required.';
            }

            return errors;
        },
        onSubmit: (data) => {
            data.blog && show();
            formik.resetForm();
        }
    });

    const isFormFieldInvalid = (name) => !!(formik.touched[name] && formik.errors[name]);

    const getFormErrorMessage = (name) => {
        return isFormFieldInvalid(name) ? <small className="p-error">{formik.errors[name]}</small> : <small className="p-error">&nbsp;</small>;
    };

    return (
        <div className="card">
            <form onSubmit={formik.handleSubmit}>
                <Toast ref={toast} />
                <Editor
                    id="blog"
                    name="blog"
                    value={formik.values.blog}
                    headerTemplate={header}
                    onTextChange={(e) => {
                        formik.setFieldValue('blog', e.textValue);
                    }}
                    style={{ height: '320px' }}
                />
                <div className="flex flex-wrap justify-content-between align-items-center gap-3 mt-3">
                    {getFormErrorMessage('blog')}
                    <Button type="submit" label="Save" />
                </div>
            </form>
        </div>
    )
}
        `,
        typescript: `
import React, { useRef } from "react";
import { useFormik } from 'formik';
import { Editor, EditorTextChangeEvent } from 'primereact/editor';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

export default function FormikDoc() {
    const toast = useRef(null);

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Blog Submitted', detail: 'The blog is uploaded' });
    };

    const renderHeader = () => {
        return (
            <span className="ql-formats">
                <button className="ql-bold" aria-label="Bold"></button>
                <button className="ql-italic" aria-label="Italic"></button>
                <button className="ql-underline" aria-label="Underline"></button>
            </span>
        );
    };

    const header = renderHeader();

    const formik = useFormik({
        initialValues: {
            blog: ''
        },
        validate: (data) => {
            let errors = {};

            if (!data.blog || data.blog === \`n\`) {
                
                errors.blog = 'Content is required.';
            }

            return errors;
        },
        onSubmit: (data) => {
            data.blog && show();
            formik.resetForm();
        }
    });

    const isFormFieldInvalid = (name) => !!(formik.touched[name] && formik.errors[name]);

    const getFormErrorMessage = (name) => {
        return isFormFieldInvalid(name) ? <small className="p-error">{formik.errors[name]}</small> : <small className="p-error">&nbsp;</small>;
    };

    return (
        <div className="card">
            <form onSubmit={formik.handleSubmit}>
                <Toast ref={toast} />
                <Editor
                    id="blog"
                    name="blog"
                    value={formik.values.blog}
                    headerTemplate={header}
                    onTextChange={(e: EditorTextChangeEvent) => {
                        formik.setFieldValue('blog', e.textValue);
                    }}
                    style={{ height: '320px' }}
                />
                <div className="flex flex-wrap justify-content-between align-items-center gap-3 mt-3">
                    {getFormErrorMessage('blog')}
                    <Button type="submit" label="Save" />
                </div>
            </form>
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    <a href="https://formik.org/">Formik</a> is a popular library for handling forms in React.
                </p>
            </DocSectionText>
            <div className="card">
                <form onSubmit={formik.handleSubmit}>
                    <Toast ref={toast} />
                    <Editor
                        id="blog"
                        name="blog"
                        value={formik.values.blog}
                        headerTemplate={header}
                        onTextChange={(e) => {
                            formik.setFieldValue('blog', e.textValue);
                        }}
                        style={{ height: '320px' }}
                    />
                    <div className="flex flex-wrap justify-content-between align-items-center gap-3 mt-3">
                        {getFormErrorMessage('blog')}
                        <Button type="submit" label="Save" />
                    </div>
                </form>
            </div>
            <DocSectionCode code={code} dependencies={{ formik: '^2.2.6', quill: '1.3.7' }} />
        </>
    );
}
