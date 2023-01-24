import { useFormik } from 'formik';
import { useRef } from 'react';
import { Button } from '../../../lib/button/Button';
import { Editor } from '../../../lib/editor/Editor';
import { Toast } from '../../../lib/toast/Toast';
import { DocSectionCode } from '../../common/docsectioncode';
import { DocSectionText } from '../../common/docsectiontext';

export function FormikDoc(props) {
    const toast = useRef(null);

    const show = () => {
        // TO DO: Add detail content to the toast.
        toast.current.show({ severity: 'success', summary: 'Submission Received', detail: 'The blog is uploaded' });
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

    const isFormFieldValid = (name) => !!(formik.touched[name] && formik.errors[name]);

    const getFormErrorMessage = (name) => {
        return isFormFieldValid(name) ? <small className="p-error">{formik.errors[name]}</small> : <small className="p-error"> </small>;
    };

    const code = {
        basic: `
<Toast ref={toast}></Toast>
<Editor id="blog" name="blog" value={formik.values.blog} headerTemplate={header} onTextChange={(e) => { formik.setFieldValue('blog', e.textValue) }} style={{ height: '320px' }}/>
<Button type="submit" label="Upload" />
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
        // TO DO: Add detail content to the toast.
        toast.current.show({ severity: 'success', summary: 'Submission Received', detail: 'The blog is uploaded' });
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

            if (!data.blog || data.blog === '\\n') {
                errors.blog = 'Content is required.';
            }

            return errors;
        },
        onSubmit: (data) => {
            data.blog && show();
            formik.resetForm();
        }
    });

    const isFormFieldValid = (name) => !!(formik.touched[name] && formik.errors[name]);

    const getFormErrorMessage = (name) => {
        return isFormFieldValid(name) ? <small className="p-error">{formik.errors[name]}</small> : <small className="p-error"> </small>;
    };

    return (
        <div className="card">
            <form onSubmit={formik.handleSubmit}>
                <Toast ref={toast} />

                <div>
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
                </div>
                <div className="mt-2 flex justify-content-end">
                    <Button type="submit" label="Upload" />
                </div>
            </form>
        </div>
    )
}
        `,
        typescript: `
import React, { useRef } from "react";
import { useFormik } from 'formik';
import { Editor } from 'primereact/editor';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

export default function FormikDoc() {
    const toast = useRef(null);

    const show = () => {
        // TO DO: Add detail content to the toast.
        toast.current.show({ severity: 'success', summary: 'Submission Received', detail: 'The blog is uploaded' });
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

            if (!data.blog || data.blog === '\\n') {
                errors.blog = 'Content is required.';
            }

            return errors;
        },
        onSubmit: (data) => {
            data.blog && show();
            formik.resetForm();
        }
    });

    const isFormFieldValid = (name) => !!(formik.touched[name] && formik.errors[name]);

    const getFormErrorMessage = (name) => {
        return isFormFieldValid(name) ? <small className="p-error">{formik.errors[name]}</small> : <small className="p-error"> </small>;
    };

    return (
        <div className="card">
            <form onSubmit={formik.handleSubmit}>
                <Toast ref={toast} />

                <div>
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
                </div>
                <div className="mt-2 flex justify-content-end">
                    <Button type="submit" label="Upload" />
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

                    <div>
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
                    </div>
                    <div className="mt-2 flex justify-content-end">
                        <Button type="submit" label="Upload" />
                    </div>
                </form>
            </div>
            <DocSectionCode code={code} dependencies={{ formik: '^2.2.6', quill: '1.3.7' }} />
        </>
    );
}
