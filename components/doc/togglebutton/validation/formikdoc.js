import { useFormik } from 'formik';
import { useRef } from 'react';
import { Button } from '../../../lib/button/Button';
import { Toast } from '../../../lib/toast/Toast';
import { ToggleButton } from '../../../lib/togglebutton/ToggleButton';
import { classNames } from '../../../lib/utils/Utils';
import { DocSectionCode } from '../../common/docsectioncode';
import { DocSectionText } from '../../common/docsectiontext';

export function FormikDoc(props) {
    const toast = useRef(null);

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Submission Received', detail: 'Thank you, we have received your submission.' });
    };

    const formik = useFormik({
        initialValues: {
            checked: false
        },
        validate: (data) => {
            let errors = {};

            if (!data.checked) {
                errors.checked = 'Checked is required.';
            }

            return errors;
        },
        onSubmit: (data) => {
            data.checked && show();
            formik.resetForm();
        }
    });

    const isFormFieldValid = (name) => !!(formik.touched[name] && formik.errors[name]);

    const getFormErrorMessage = (name) => {
        return isFormFieldValid(name) ? <small className="p-error">{formik.errors[name]}</small> : <small className="p-error"> </small>;
    };

    const code = {
        basic: `
<ToggleButton
id="checked"
name="checked"
checked={formik.values.checked}
onChange={(e) => {
    formik.setFieldValue('checked', e.value);
}}
className={classNames({ 'p-invalid': formik.errors.checked })}
/>
{getFormErrorMessage('checked')}
<Button label="Submit" type="submit" icon="pi pi-check" />
        `,
        javascript: `
import React, { useRef } from "react";
import { useFormik } from 'formik';
import { ToggleButton } from 'primereact/togglebutton';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { classNames } from 'primereact/utils';


export default function FormikDoc() {
    const toast = useRef(null);

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Submission Received', detail: 'Thank you, we have received your submission.' });
    };

    const formik = useFormik({
        initialValues: {
            checked: false
        },
        validate: (data) => {
            let errors = {};

            if (!data.checked) {
                errors.checked = 'Checked is required.';
            }

            return errors;
        },
        onSubmit: (data) => {
            data.checked && show();
            formik.resetForm();
        }
    });

    const isFormFieldValid = (name) => !!(formik.touched[name] && formik.errors[name]);

    const getFormErrorMessage = (name) => {
        return isFormFieldValid(name) ? <small className="p-error">{formik.errors[name]}</small> : <small className="p-error"> </small>;
    };

    return (
        <div className="card flex justify-content-center">
            <form onSubmit={formik.handleSubmit} className="flex flex-column gap-2">
                <Toast ref={toast} />
                <ToggleButton
                    id="checked"
                    name="checked"
                    checked={formik.values.checked}
                    onChange={(e) => {
                        formik.setFieldValue('checked', e.value);
                    }}
                    className={classNames({ 'p-invalid': formik.errors.checked })}
                />
                {getFormErrorMessage('checked')}
                <Button label="Submit" type="submit" icon="pi pi-check" />
            </form>
        </div>
    )
}
        `,
        typescript: `
import React, { useRef } from "react";
import { useFormik } from 'formik';
import { ToggleButton } from 'primereact/togglebutton';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { classNames } from 'primereact/utils';

export default function FormikDoc() {
    const toast = useRef<Toast | null>(null);

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Submission Received', detail: 'Thank you, we have received your submission.' });
    };

    const formik = useFormik({
        initialValues: {
            checked: false
        },
        validate: (data) => {
            let errors = {};

            if (!data.checked) {
                errors.checked = 'Checked is required.';
            }

            return errors;
        },
        onSubmit: (data) => {
            data.checked && show();
            formik.resetForm();
        }
    });

    const isFormFieldValid = (name) => !!(formik.touched[name] && formik.errors[name]);

    const getFormErrorMessage = (name) => {
        return isFormFieldValid(name) ? <small className="p-error">{formik.errors[name]}</small> : <small className="p-error"> </small>;
    };

    return (
        <div className="card flex justify-content-center">
            <form onSubmit={formik.handleSubmit} className="flex flex-column gap-2">
                <Toast ref={toast} />
                <ToggleButton
                    id="checked"
                    name="checked"
                    checked={formik.values.checked}
                    onChange={(e) => {
                        formik.setFieldValue('checked', e.value);
                    }}
                    className={classNames({ 'p-invalid': formik.errors.checked })}
                />
                {getFormErrorMessage('checked')}
                <Button label="Submit" type="submit" icon="pi pi-check" />
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
            <div className="card flex justify-content-center">
                <form onSubmit={formik.handleSubmit} className="flex flex-column gap-2">
                    <Toast ref={toast} />
                    <ToggleButton
                        id="checked"
                        name="checked"
                        checked={formik.values.checked}
                        onChange={(e) => {
                            formik.setFieldValue('checked', e.value);
                        }}
                        className={classNames({ 'p-invalid': formik.errors.checked })}
                    />
                    {getFormErrorMessage('checked')}
                    <Button label="Submit" type="submit" icon="pi pi-check" />
                </form>
            </div>
            <DocSectionCode code={code} dependencies={{ formik: '^2.2.6' }} />
        </>
    );
}
