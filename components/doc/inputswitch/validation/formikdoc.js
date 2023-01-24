import { useFormik } from 'formik';
import { useRef } from 'react';
import { Button } from '../../../lib/button/Button';
import { InputSwitch } from '../../../lib/inputswitch/InputSwitch';
import { Toast } from '../../../lib/toast/Toast';
import { DocSectionCode } from '../../common/docsectioncode';
import { DocSectionText } from '../../common/docsectiontext';

export function FormikDoc(props) {
    const toast = useRef(null);

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Submission Received', detail: 'The form is successfully submitted.' });
    };

    const formik = useFormik({
        initialValues: {
            value: false
        },
        validate: (data) => {
            let errors = {};

            if (!data.value) {
                errors.value = 'Accept is required.';
            }

            return errors;
        },
        onSubmit: (data) => {
            data && show(data);
            formik.resetForm();
        }
    });

    const isFormFieldValid = (name) => !!(formik.touched[name] && formik.errors[name]);

    const getFormErrorMessage = (name) => {
        return isFormFieldValid(name) ? <small className="p-error ml-1">{formik.errors[name]}</small> : <small className="p-error"> </small>;
    };

    const code = {
        basic: `
<Toast ref={toast} />
<InputSwitch id="value" name="value" checked={formik.values.value} onChange={(e) => {formik.setFieldValue('value', e.value)}}/>
`,
        javascript: `
import React, { useRef } from "react";
import { useFormik } from 'formik';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { InputSwitch } from "primereact/inputswitch";

export default function FormikDoc() {
    const toast = useRef(null);

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Submission Received', detail: 'The form is successfully submitted.' });
    };

    const formik = useFormik({
        initialValues: {
            value: false
        },
        validate: (data) => {
            let errors = {};

            if (!data.value) {
                errors.value = 'Accept is required.';
            }

            return errors;
        },
        onSubmit: (data) => {
            data && show(data);
            formik.resetForm();
        }
    });

    const isFormFieldValid = (name) => !!(formik.touched[name] && formik.errors[name]);

    const getFormErrorMessage = (name) => {
        return isFormFieldValid(name) ? <small className="p-error ml-1">{formik.errors[name]}</small> : <small className="p-error"> </small>;
    };

    return (
        <div className="card flex justify-content-center">
            <div className="flex flex-column">
                <form onSubmit={formik.handleSubmit} className="p-fluid justify-content-center">
                    <div className="mb-2">I've read and accept the terms & conditions.</div>
                    <div className="flex align-items-center ">
                        <Toast ref={toast} />
                        <InputSwitch
                            id="value"
                            name="value"
                            checked={formik.values.value}
                            onChange={(e) => {
                                formik.setFieldValue('value', e.value);
                            }}
                        />
                        {getFormErrorMessage('value')}
                    </div>
                    <Button type="submit" label="Submit" className="mt-2" />
                </form>
            </div>
        </div>
    )
}
        `,
        typescript: `
import React, { useRef } from "react";
import { useFormik } from 'formik';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { InputSwitch } from "primereact/inputswitch";

export default function FormikDoc() {
    const toast = useRef(null);

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Submission Received', detail: 'The form is successfully submitted.' });
    };

    const formik = useFormik({
        initialValues: {
            value: false
        },
        validate: (data) => {
            let errors = {};

            if (!data.value) {
                errors.value = 'Accept is required.';
            }

            return errors;
        },
        onSubmit: (data) => {
            data && show(data);
            formik.resetForm();
        }
    });

    const isFormFieldValid = (name) => !!(formik.touched[name] && formik.errors[name]);

    const getFormErrorMessage = (name) => {
        return isFormFieldValid(name) ? <small className="p-error ml-1">{formik.errors[name]}</small> : <small className="p-error"> </small>;
    };

    return (
        <div className="card flex justify-content-center">
            <div className="flex flex-column">
                <form onSubmit={formik.handleSubmit} className="p-fluid justify-content-center">
                    <div className="mb-2">I've read and accept the terms & conditions.</div>
                    <div className="flex align-items-center ">
                        <Toast ref={toast} />
                        <InputSwitch
                            id="value"
                            name="value"
                            checked={formik.values.value}
                            onChange={(e) => {
                                formik.setFieldValue('value', e.value);
                            }}
                        />
                        {getFormErrorMessage('value')}
                    </div>
                    <Button type="submit" label="Submit" className="mt-2" />
                </form>
            </div>
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
            <div className="card flex justify-content-center">
                <div className="flex flex-column">
                    <form onSubmit={formik.handleSubmit} className="p-fluid justify-content-center">
                        <div className="mb-2">I've read and accept the terms & conditions.</div>
                        <div className="flex align-items-center ">
                            <Toast ref={toast} />
                            <InputSwitch
                                id="value"
                                name="value"
                                checked={formik.values.value}
                                onChange={(e) => {
                                    formik.setFieldValue('value', e.value);
                                }}
                            />
                            {getFormErrorMessage('value')}
                        </div>
                        <Button type="submit" label="Submit" className="mt-2" />
                    </form>
                </div>
            </div>
            <DocSectionCode code={code} dependencies={{ formik: '^2.2.6' }} />
        </>
    );
}
