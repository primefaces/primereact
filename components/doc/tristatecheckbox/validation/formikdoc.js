import { useRef } from 'react';
import { useFormik } from 'formik';
import { DocSectionText } from '../../common/docsectiontext';
import { DocSectionCode } from '../../common/docsectioncode';
import { Button } from '../../../lib/button/Button';
import { Toast } from '../../../lib/toast/Toast';
import { TriStateCheckbox } from '../../../lib/tristatecheckbox/TriStateCheckbox';
import { classNames } from '../../../lib/utils/Utils';

export function FormikDoc(props) {
    const toast = useRef(null);

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Submission Received', detail: 'The form is successfully submitted.' });
    };

    const formik = useFormik({
        initialValues: {
            accept: null
        },
        validate: (data) => {
            let errors = {};

            if (!data.accept || data.accept === 'null') {
                errors.accept = 'Accept is required.';
            }

            return errors;
        },
        onSubmit: (data) => {
            data.accept && show();
            formik.resetForm();
        }
    });

    const isFormFieldValid = (name) => !!(formik.touched[name] && formik.errors[name]);

    const getFormErrorMessage = (name) => {
        return isFormFieldValid(name) ? <small className="p-error mb-1">{formik.errors[name]}</small> : <small className="p-error"> </small>;
    };

    const code = {
        basic: `
<Toast ref={toast} />
<TriStateCheckbox
    id="accept"
    name="accept"
    value={formik.values.accept}
    onChange={(e) => {
        formik.setFieldValue('accept', e.value);
    }}
    className={classNames({ 'p-invalid': formik.errors.accept })}
/>
<div className="my-2">* I've read and accept the terms & conditions.</div>
{getFormErrorMessage('accept')}
<Button type="submit" label="Submit" icon="pi pi-check" />
`,
        javascript: `
import React, { useRef } from "react";
import { useFormik } from 'formik';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { classNames } from 'primereact/utils';
import { TriStateCheckbox } from "primereact/tristatecheckbox";

export default function FormikDoc() {
        const toast = useRef(null);

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Submission Received', detail: 'The form is successfully submitted.' });
    };

    const formik = useFormik({
        initialValues: {
            accept: null
        },
        validate: (data) => {
            let errors = {};

            if (!data.accept || data.accept === 'null') {
                errors.accept = 'Accept is required.';
            }

            return errors;
        },
        onSubmit: (data) => {
            data.accept && show();
            formik.resetForm();
        }
    });

    const isFormFieldValid = (name) => !!(formik.touched[name] && formik.errors[name]);

    const getFormErrorMessage = (name) => {
        return isFormFieldValid(name) ? <small className="p-error mb-1">{formik.errors[name]}</small> : <small className="p-error"> </small>;
    };

    return (
        <div className="card flex flex-column align-items-center">
            <form onSubmit={formik.handleSubmit} className="flex flex-column align-items-start justify-content-center">
                <div className="flex flex-column align-items-start">
                    <Toast ref={toast} />
                    <TriStateCheckbox
                        id="accept"
                        name="accept"
                        value={formik.values.accept}
                        onChange={(e) => {
                            formik.setFieldValue('accept', e.value);
                        }}
                        className={classNames({ 'p-invalid': formik.errors.accept })}
                    />
                    <div className="my-2">* I've read and accept the terms & conditions.</div>
                </div>
                {getFormErrorMessage('accept')}
                <Button type="submit" label="Submit" icon="pi pi-check" />
            </form>
        </div>
    )
}
        `,
        typescript: `
import React, { useRef } from "react";
import { useFormik } from 'formik';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { classNames } from 'primereact/utils';
import { TriStateCheckbox } from "primereact/tristatecheckbox";

export default function FormikDoc() {
        const toast = useRef(null);

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Submission Received', detail: 'The form is successfully submitted.' });
    };

    const formik = useFormik({
        initialValues: {
            accept: null
        },
        validate: (data) => {
            let errors = {};

            if (!data.accept || data.accept === 'null') {
                errors.accept = 'Accept is required.';
            }

            return errors;
        },
        onSubmit: (data) => {
            data.accept && show();
            formik.resetForm();
        }
    });

    const isFormFieldValid = (name) => !!(formik.touched[name] && formik.errors[name]);

    const getFormErrorMessage = (name) => {
        return isFormFieldValid(name) ? <small className="p-error mb-1">{formik.errors[name]}</small> : <small className="p-error"> </small>;
    };

    return (
        <div className="card flex flex-column align-items-center">
            <form onSubmit={formik.handleSubmit} className="flex flex-column align-items-start justify-content-center">
                <div className="flex flex-column align-items-start">
                    <Toast ref={toast} />
                    <TriStateCheckbox
                        id="accept"
                        name="accept"
                        value={formik.values.accept}
                        onChange={(e) => {
                            formik.setFieldValue('accept', e.value);
                        }}
                        className={classNames({ 'p-invalid': formik.errors.accept })}
                    />
                    <div className="my-2">* I've read and accept the terms & conditions.</div>
                </div>
                {getFormErrorMessage('accept')}
                <Button type="submit" label="Submit" icon="pi pi-check" />
            </form>
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                {/* TO DO: Add demo content. */}
                <p></p>
            </DocSectionText>
            <div className="card flex flex-column align-items-center">
                <form onSubmit={formik.handleSubmit} className="flex flex-column align-items-start justify-content-center">
                    <div className="flex flex-column align-items-start">
                        <Toast ref={toast} />
                        <TriStateCheckbox
                            id="accept"
                            name="accept"
                            value={formik.values.accept}
                            onChange={(e) => {
                                formik.setFieldValue('accept', e.value);
                            }}
                            className={classNames({ 'p-invalid': formik.errors.accept })}
                        />
                        <div className="my-2">* I've read and accept the terms & conditions.</div>
                    </div>
                    {getFormErrorMessage('accept')}
                    <Button type="submit" label="Submit" icon="pi pi-check" />
                </form>
            </div>
            <DocSectionCode code={code} dependencies={{ formik: '^2.2.6' }} />
        </>
    );
}
