import { useRef } from 'react';
import { useFormik } from 'formik';
import { DocSectionText } from '../../common/docsectiontext';
import { DocSectionCode } from '../../common/docsectioncode';
import { Button } from '../../../lib/button/Button';
import { Toast } from '../../../lib/toast/Toast';
import { Chips } from '../../../lib/chips/Chips';

export function FormikDoc(props) {
    const toast = useRef(null);

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Submission Received', detail: 'Thank you, we have received your submission.' });
    };

    const formik = useFormik({
        initialValues: {
            chipArray: []
        },
        validate: (data) => {
            let errors = {};

            if (!data.chipArray.length > 0) {
                errors.chipArray = 'At least 1 chip required.';
            }

            return errors;
        },
        onSubmit: (data) => {
            data.chipArray.length > 0 && show(data);
            formik.resetForm();
        }
    });

    const isFormFieldValid = (name) => !!(formik.touched[name] && formik.errors[name]);

    const getFormErrorMessage = (name) => {
        return isFormFieldValid(name) && <small className="p-error flex">{formik.errors[name]}</small>;
    };

    const code = {
        basic: `
<Toast ref={toast} />
<Chips id="chipArray" name="chipArray" value={ formik.values.chipArray } onChange={(e) => { formik.setFieldValue('chipArray', e.value) }}/>
<Button type="submit" label="Submit" className="mt-2 w-3" />
        `,
        javascript: `
import React, { useRef } from "react";
import { useFormik } from 'formik';
import { Chips } from 'primereact/chips';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

export default function FormikDoc() {
    const toast = useRef(null);
        
    const show = (data) => {
        toast.current.show({ severity: 'success', summary: 'Submission Received', detail: 'Thank you, we have received your submission.' });
    };

    const formik = useFormik({
        initialValues: {
            chipArray: []
        },
        validate: (data) => {
            let errors = {};

            if (!data.chipArray.length > 0) {
                errors.chipArray = 'At least 1 chip required.';
            }

            return errors;
        },
        onSubmit: (data) => {
            data.chipArray.length > 0 && show(data);
            formik.resetForm();
        }
    });

    const isFormFieldValid = (name) => !!(formik.touched[name] && formik.errors[name]);

    const getFormErrorMessage = (name) => {
        return isFormFieldValid(name) && <small className="p-error flex">{formik.errors[name]}</small>;
    };

    return (
        <div className="card">
            <form onSubmit={formik.handleSubmit} className="flex flex-column align-items-center">
                <Toast ref={toast} />
                <span>
                    <Chips
                        id="chipArray"
                        name="chipArray"
                        value={formik.values.chipArray}
                        onChange={(e) => {
                            formik.setFieldValue('chipArray', e.value);
                        }}
                    />
                </span>
                {getFormErrorMessage('chipArray')}
                <Button type="submit" label="Submit" className="mt-2 w-3" />
            </form>
        </div>
    )
}
        `,
        typescript: `
import React, { useRef } from "react";
import { useFormik } from 'formik';
import { Chips } from 'primereact/chips';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

export default function FormikDoc() {
    const toast = useRef(null);
        
    const show = (data) => {
        toast.current.show({ severity: 'success', summary: 'Submission Received', detail: 'Thank you, we have received your submission.' });
    };

    const formik = useFormik({
        initialValues: {
            chipArray: []
        },
        validate: (data) => {
            let errors = {};

            if (!data.chipArray.length > 0) {
                errors.chipArray = 'At least 1 chip required.';
            }

            return errors;
        },
        onSubmit: (data) => {
            data.chipArray.length > 0 && show(data);
            formik.resetForm();
        }
    });

    const isFormFieldValid = (name) => !!(formik.touched[name] && formik.errors[name]);

    const getFormErrorMessage = (name) => {
        return isFormFieldValid(name) && <small className="p-error flex">{formik.errors[name]}</small>;
    };

    return (
        <div className="card">
            <form onSubmit={formik.handleSubmit} className="flex flex-column align-items-center">
                <Toast ref={toast} />
                <span>
                    <Chips
                        id="chipArray"
                        name="chipArray"
                        value={formik.values.chipArray}
                        onChange={(e) => {
                            formik.setFieldValue('chipArray', e.value);
                        }}
                    />
                </span>
                {getFormErrorMessage('chipArray')}
                <Button type="submit" label="Submit" className="mt-2 w-3" />
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
                    <a href="https://formik.org/">Formik</a> is a popular library for handling forms in React. The field will be highlighted and receive focus on validation failure.
                </p>
            </DocSectionText>
            <div className="card">
                <form onSubmit={formik.handleSubmit} className="flex flex-column align-items-center">
                    <Toast ref={toast} />
                    <span>
                        <Chips
                            id="chipArray"
                            name="chipArray"
                            value={formik.values.chipArray}
                            onChange={(e) => {
                                formik.setFieldValue('chipArray', e.value);
                            }}
                        />
                        {getFormErrorMessage('chipArray')}
                    </span>
                    <Button type="submit" label="Submit" className="mt-2 w-3" />
                </form>
            </div>
            <DocSectionCode code={code} dependencies={{ formik: '^2.2.6' }} />
        </>
    );
}
