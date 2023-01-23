import { useRef } from 'react';
import { useFormik } from 'formik';
import { DocSectionText } from '../../common/docsectiontext';
import { DocSectionCode } from '../../common/docsectioncode';
import { Button } from '../../../lib/button/Button';
import { Toast } from '../../../lib/toast/Toast';
import { InputMask } from '../../../lib/inputmask/InputMask';

export function FormikDoc(props) {
    const toast = useRef(null);

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Saved', detail: 'Successfully submitted.' });
    };

    const formik = useFormik({
        initialValues: {
            value: ''
        },
        validate: (data) => {
            let errors = {};

            if (!data.value) {
                errors.value = 'Phone is required.';
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
        return isFormFieldValid(name) ? <small className="p-error my-1">{formik.errors[name]}</small> : <small className="p-error p-1"> </small>;
    };

    const code = {
        basic: `
<Toast ref={toast} />
<InputMask id="value" name="value" value={formik.values.value} onChange={(e) => {formik.setFieldValue('value', e.target.value); }} mask="99-999999" placeholder="99-999999" />
`,
        javascript: `
import React, { useRef } from "react";
import { useFormik } from 'formik';
import { InputMask } from "primereact/inputmask";
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

export default function FormikDoc() {
    const toast = useRef(null);

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Saved', detail: 'Successfully submitted.' });
    };

    const formik = useFormik({
        initialValues: {
            value: ''
        },
        validate: (data) => {
            let errors = {};

            if (!data.value) {
                errors.value = 'Phone is required.';
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
        return isFormFieldValid(name) ? <small className="p-error my-1">{formik.errors[name]}</small> : <small className="p-error p-1"> </small>;
    };

    return (
        <div className="card flex justify-content-center">
            <form onSubmit={formik.handleSubmit} className="p-fluid my-2 flex flex-column">
                <div className="flex flex-column align-items-center ">
                    <Toast ref={toast} />
                    <InputMask
                        id="value"
                        name="value"
                        value={formik.values.value}
                        onChange={(e) => {
                            formik.setFieldValue('value', e.target.value);
                        }}
                        mask="99-999999"
                        placeholder="99-999999"
                    />
                    {getFormErrorMessage('value')}
                </div>
                <Button type="submit" label="Submit" />
            </form>
        </div>
    )
}
        `,
        typescript: `
import React, { useRef } from "react";
import { useFormik } from 'formik';
import { InputMask } from "primereact/inputmask";
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

export default function FormikDoc() {
    const toast = useRef(null);

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Saved', detail: 'Successfully submitted.' });
    };

    const formik = useFormik({
        initialValues: {
            value: ''
        },
        validate: (data) => {
            let errors = {};

            if (!data.value) {
                errors.value = 'Phone is required.';
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
        return isFormFieldValid(name) ? <small className="p-error my-1">{formik.errors[name]}</small> : <small className="p-error p-1"> </small>;
    };

    return (
        <div className="card flex justify-content-center">
            <form onSubmit={formik.handleSubmit} className="p-fluid my-2 flex flex-column">
                <div className="flex flex-column align-items-center ">
                    <Toast ref={toast} />
                    <InputMask
                        id="value"
                        name="value"
                        value={formik.values.value}
                        onChange={(e) => {
                            formik.setFieldValue('value', e.target.value);
                        }}
                        mask="99-999999"
                        placeholder="99-999999"
                    />

                    {getFormErrorMessage('value')}
                </div>
                <Button type="submit" label="Submit" />
            </form>
        </div>
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
            <div className="card flex justify-content-center">
                <form onSubmit={formik.handleSubmit} className="p-fluid my-2 flex flex-column">
                    <div className="flex flex-column align-items-center ">
                        <Toast ref={toast} />
                        <InputMask
                            id="value"
                            name="value"
                            value={formik.values.value}
                            onChange={(e) => {
                                formik.setFieldValue('value', e.target.value);
                            }}
                            mask="99-999999"
                            placeholder="99-999999"
                        />

                        {getFormErrorMessage('value')}
                    </div>
                    <Button type="submit" label="Submit" />
                </form>
            </div>
            <DocSectionCode code={code} dependencies={{ formik: '^2.2.6' }} />
        </>
    );
}
