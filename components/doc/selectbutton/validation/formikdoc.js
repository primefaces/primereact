import { useRef } from 'react';
import { useFormik } from 'formik';
import { DocSectionText } from '../../common/docsectiontext';
import { DocSectionCode } from '../../common/docsectioncode';
import { Button } from '../../../lib/button/Button';
import { Toast } from '../../../lib/toast/Toast';
import { SelectButton } from '../../../lib/selectbutton/SelectButton';
import { classNames } from '../../../lib/utils/Utils';

export function FormikDoc(props) {
    const toast = useRef(null);
    const options = ['Off', 'On'];

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Submission Received', detail: 'Thank you, we have received your submission.' });
    };

    const formik = useFormik({
        initialValues: {
            engine: null
        },
        validate: (data) => {
            let errors = {};

            if (!data.engine) {
                errors.engine = 'Engine State is required.';
            }

            return errors;
        },
        onSubmit: (data) => {
            data && show();
            formik.resetForm();
        }
    });

    const isFormFieldValid = (name) => !!(formik.touched[name] && formik.errors[name]);

    const getFormErrorMessage = (name) => {
        return isFormFieldValid(name) ? <small className="p-error">{formik.errors[name]}</small> : <small className="p-error"> </small>;
    };

    const code = {
        basic: `
<label htmlFor="engine" className={classNames('flex justify-content-center', { 'p-error': formik.errors.engine })}>
    Engine State
</label>
<SelectButton
    id="engine"
    name="engine"
    value={formik.values.engine}
    options={options}
    onChange={(e) => {
        formik.setFieldValue('engine', e.value);
    }}
    className={classNames('flex justify-content-center', { 'p-invalid': formik.errors.engine })}
/>
<Button label="Submit" type="submit" icon="pi pi-check" />
        `,
        javascript: `
import React, { useRef } from "react";
import { useFormik } from 'formik';
import { SelectButton } from 'primereact/selectbutton';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { classNames } from 'primereact/utils';


export default function FormikDoc() {
    const toast = useRef(null);
    const options = ['Off', 'On'];

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Submission Received', detail: 'Thank you, we have received your submission.' });
    };

    const formik = useFormik({
        initialValues: {
            engine: null
        },
        validate: (data) => {
            let errors = {};

            if (!data.engine) {
                errors.engine = 'Engine State is required.';
            }

            return errors;
        },
        onSubmit: (data) => {
            data && show();
            formik.resetForm();
        }
    });

    const isFormFieldValid = (name) => !!(formik.touched[name] && formik.errors[name]);

    const getFormErrorMessage = (name) => {
        return isFormFieldValid(name) && <small className="p-error">{formik.errors[name]}</small>;
    };

    return (
        <div className="card flex justify-content-center">
            <form onSubmit={formik.handleSubmit} className="flex flex-column align-items-center gap-2">
                <Toast ref={toast} />
                <label htmlFor="engine" className={classNames('flex justify-content-center', { 'p-error': formik.errors.engine })}>
                    Engine State
                </label>
                <SelectButton
                    id="engine"
                    name="engine"
                    value={formik.values.engine}
                    options={options}
                    onChange={(e) => {
                        formik.setFieldValue('engine', e.value);
                    }}
                    className={classNames('flex justify-content-center', { 'p-invalid': formik.errors.engine })}
                />
                {getFormErrorMessage('engine')}
                <Button label="Submit" type="submit" icon="pi pi-check" />
            </form>
        </div>
    )
}
        `,
        typescript: `
import React, { useRef } from "react";
import { useFormik } from 'formik';
import { SelectButton } from 'primereact/selectbutton';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { classNames } from 'primereact/utils';

export default function FormikDoc() {
    const toast = useRef(null);
    const options = ['Off', 'On'];

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Submission Received', detail: 'Thank you, we have received your submission.' });
    };

    const formik = useFormik({
        initialValues: {
            engine: null
        },
        validate: (data) => {
            let errors = {};

            if (!data.engine) {
                errors.engine = 'Engine State is required.';
            }

            return errors;
        },
        onSubmit: (data) => {
            data && show();
            formik.resetForm();
        }
    });

    const isFormFieldValid = (name) => !!(formik.touched[name] && formik.errors[name]);

    const getFormErrorMessage = (name) => {
        return isFormFieldValid(name) && <small className="p-error">{formik.errors[name]}</small>;
    };

    return (
        <div className="card flex justify-content-center">
            <form onSubmit={formik.handleSubmit} className="flex flex-column align-items-center gap-2">
                <Toast ref={toast} />
                <label htmlFor="engine" className={classNames('flex justify-content-center', { 'p-error': formik.errors.engine })}>
                    Engine State
                </label>
                <SelectButton
                    id="engine"
                    name="engine"
                    value={formik.values.engine}
                    options={options}
                    onChange={(e) => {
                        formik.setFieldValue('engine', e.value);
                    }}
                    className={classNames('flex justify-content-center', { 'p-invalid': formik.errors.engine })}
                />
                {getFormErrorMessage('engine')}
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
                    <a href="https://formik.org/">Formik</a> is a popular library for handling forms in React. The field will be highlighted and receive focus on validation failure.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <form onSubmit={formik.handleSubmit} className="flex flex-column align-items-center gap-2">
                    <Toast ref={toast} />
                    <label htmlFor="engine" className={classNames('flex justify-content-center', { 'p-error': formik.errors.engine })}>
                        Engine State
                    </label>
                    <SelectButton
                        id="engine"
                        name="engine"
                        value={formik.values.engine}
                        options={options}
                        onChange={(e) => {
                            formik.setFieldValue('engine', e.value);
                        }}
                        className={classNames('flex justify-content-center', { 'p-invalid': formik.errors.engine })}
                    />
                    {getFormErrorMessage('engine')}
                    <Button label="Submit" type="submit" icon="pi pi-check" />
                </form>
            </div>
            <DocSectionCode code={code} dependencies={{ formik: '^2.2.6' }} />
        </>
    );
}
