import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Button } from '@/components/lib/button/Button';
import { Password } from '@/components/lib/password/Password';
import { Toast } from '@/components/lib/toast/Toast';
import { classNames } from '@/components/lib/utils/Utils';
import { useFormik } from 'formik';
import { useRef } from 'react';

export function FormikDoc(props) {
    const toast = useRef(null);

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: formik.values.value });
    };

    const formik = useFormik({
        initialValues: {
            value: ''
        },
        validate: (data) => {
            let errors = {};

            if (!data.value) {
                errors.value = 'Password is required.';
            }

            return errors;
        },
        onSubmit: (data) => {
            data && show();
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
<Password
    inputId="in_value"
    name="value"
    rows={5}
    cols={30}
    className={classNames({ 'p-invalid': isFormFieldInvalid('value') })}
    value={formik.values.value}
    feedback={false}
    onChange={(e) => {
        formik.setFieldValue('value', e.target.value);
    }}
/>
{getFormErrorMessage('value')}
<Button label="Submit" type="submit" icon="pi pi-check" />
`,
        javascript: `
import React, { useRef } from "react";
import { useFormik } from 'formik';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { classNames } from 'primereact/utils';
import { Toast } from 'primereact/toast';

export default function FormikDoc() {
    const toast = useRef(null);

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: formik.values.value });
    };

    const formik = useFormik({
        initialValues: {
            value: ''
        },
        validate: (data) => {
            let errors = {};

            if (!data.value) {
                errors.value = 'Password is required.';
            }

            return errors;
        },
        onSubmit: (data) => {
            data && show();
            formik.resetForm();
        }
    });

    const isFormFieldInvalid = (name) => !!(formik.touched[name] && formik.errors[name]);

    const getFormErrorMessage = (name) => {
        return isFormFieldInvalid(name) ? <small className="p-error">{formik.errors[name]}</small> : <small className="p-error">&nbsp;</small>;
    };

    return (
        <div className="card flex justify-content-center">
            <form onSubmit={formik.handleSubmit} className="flex flex-column gap-2">
            <label htmlFor="value">Password</label>
                <Toast ref={toast} />
                <Password
                    inputId="in_value"
                    name="value"
                    rows={5}
                    cols={30}
                    className={classNames({ 'p-invalid': isFormFieldInvalid('value') })}
                    value={formik.values.value}
                    feedback={false}
                    onChange={(e) => {
                        formik.setFieldValue('value', e.target.value);
                    }}
                />
                {getFormErrorMessage('value')}
                <Button label="Submit" type="submit" icon="pi pi-check" />
            </form>
        </div>
    )
}
        `,
        typescript: `
import React, { useRef } from "react";
import { useFormik } from 'formik';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { classNames } from 'primereact/utils';
import { Toast } from 'primereact/toast';


export default function FormikDoc() {
    const toast = useRef(null);

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: formik.values.value });
    };

    const formik = useFormik({
        initialValues: {
            value: ''
        },
        validate: (data) => {
            let errors = {};

            if (!data.value) {
                errors.value = 'Password is required.';
            }

            return errors;
        },
        onSubmit: (data) => {
            data && show();
            formik.resetForm();
        }
    });

    const isFormFieldInvalid = (name) => !!(formik.touched[name] && formik.errors[name]);

    const getFormErrorMessage = (name) => {
        return isFormFieldInvalid(name) ? <small className="p-error">{formik.errors[name]}</small> : <small className="p-error">&nbsp;</small>;
    };

    return (
        <div className="card flex justify-content-center">
            <form onSubmit={formik.handleSubmit} className="flex flex-column gap-2">
            <label htmlFor="value">Password</label>
                <Toast ref={toast} />
                <Password
                    inputId="in_value"
                    name="value"
                    rows={5}
                    cols={30}
                    className={classNames({ 'p-invalid': isFormFieldInvalid('value') })}
                    value={formik.values.value}
                    feedback={false}
                    onChange={(e) => {
                        formik.setFieldValue('value', e.target.value);
                    }}
                />
                {getFormErrorMessage('value')}
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
                    <label htmlFor="value">Password</label>
                    <Toast ref={toast} />
                    <Password
                        inputId="in_value"
                        name="value"
                        rows={5}
                        cols={30}
                        className={classNames({ 'p-invalid': isFormFieldInvalid('value') })}
                        value={formik.values.value}
                        feedback={false}
                        onChange={(e) => {
                            formik.setFieldValue('value', e.target.value);
                        }}
                    />
                    {getFormErrorMessage('value')}
                    <Button label="Submit" type="submit" icon="pi pi-check" />
                </form>
            </div>
            <DocSectionCode code={code} dependencies={{ formik: '^2.2.6' }} />
        </>
    );
}
