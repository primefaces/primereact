import { useRef } from 'react';
import { useFormik } from 'formik';
import React from 'react';
import { Calendar } from '../../../lib/calendar/Calendar';
import { Button } from '../../../lib/button/Button';
import { DocSectionCode } from '../../common/docsectioncode';
import { DocSectionText } from '../../common/docsectiontext';
import { Toast } from '../../../lib/toast/Toast';

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
                errors.value = 'Date is required.';
            }

            return errors;
        },
        onSubmit: (data) => {
            if (!formik.errors.value) {
                data && show(data);
                formik.resetForm();
            }
        }
    });

    const isFormFieldValid = (name) => !!(formik.touched[name] && formik.errors[name]);

    const getFormErrorMessage = (name) => {
        return isFormFieldValid(name) ? <small style={{ color: 'red', margin: '2px' }}>{formik.errors[name]}</small> : <small className="p-error p-1"> </small>;
    };

    const code = {
        basic: `
<Form className="p-fluid">
    <div className="field">
        <Field
            name="birthdate"
            validate={(value) => {
                if (!value) {
                    return 'Date is required.';
                }
            }}
        >
            {({ field, form, meta }) => (
                <>
                    <label htmlFor={field.name} className={classNames({ 'p-error': errors.birthdate })}>
                        Date
                    </label>
                    <Calendar id={field.name} value={field.value} inputRef={field.ref} onChange={field.onChange} dateFormat="dd/mm/yy" className={classNames({ 'p-invalid': meta.error })} />
                    {meta.error && meta.touched && <small className="p-error">{meta.error}</small>}
                </>
            )}
        </Field>
    </div>
    <Button label="Submit" type="submit" icon="pi pi-check" disabled={isSubmitting} />
</Form>
        `,
        javascript: `
import React from 'react';
import { Formik, Form, Field } from 'formik';
import { Calendar } from "primereact/calendar";
import { Button } from 'primereact/button';
import { classNames } from 'primereact/utils';

export default function FormikDoc() {

    return (
        <div className="card flex justify-content-center">
            <div className="flex flex-column gap-2">
                <Formik
                    initialValues={{ birthdate: null }}
                    onSubmit={(values, { setSubmitting }) => {
                        setSubmitting(false);
                    }}
                >
                    {({ isSubmitting, errors }) => (
                        <Form className="p-fluid">
                            <div className="field">
                                <Field
                                    name="birthdate"
                                    validate={(value) => {
                                        if (!value) {
                                            return 'Date is required.';
                                        }
                                    }}
                                >
                                    {({ field, form, meta }) => (
                                        <>
                                            <label htmlFor={field.name} className={classNames({ 'p-error': errors.birthdate })}>
                                                Date
                                            </label>
                                            <Calendar id={field.name} value={field.value} inputRef={field.ref} onChange={field.onChange} dateFormat="dd/mm/yy" className={classNames({ 'p-invalid': meta.error })} />
                                            {meta.error && meta.touched && <small className="p-error">{meta.error}</small>}
                                        </>
                                    )}
                                </Field>
                            </div>
                            <Button label="Submit" type="submit" icon="pi pi-check" disabled={isSubmitting} />
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}
        `,
        typescript: `
import React from 'react';
import { Formik, Form, Field } from 'formik';
import { Calendar } from "primereact/calendar";
import { Button } from 'primereact/button';
import { classNames } from 'primereact/utils';

export default function FormikDoc() {

    return (
        <div className="card flex justify-content-center">
            <div className="flex flex-column gap-2">
                <Formik
                    initialValues={{ birthdate: null }}
                    onSubmit={(values, { setSubmitting }) => {
                        setSubmitting(false);
                    }}
                >
                    {({ isSubmitting, errors }) => (
                        <Form className="p-fluid">
                            <div className="field">
                                <Field
                                    name="birthdate"
                                    validate={(value) => {
                                        if (!value) {
                                            return 'Date is required.';
                                        }
                                    }}
                                >
                                    {({ field, form, meta }) => (
                                        <>
                                            <label htmlFor={field.name} className={classNames({ 'p-error': errors.birthdate })}>
                                                Date
                                            </label>
                                            <Calendar id={field.name} value={field.value} inputRef={field.ref} onChange={field.onChange} dateFormat="dd/mm/yy" className={classNames({ 'p-invalid': meta.error })} />
                                            {meta.error && meta.touched && <small className="p-error">{meta.error}</small>}
                                        </>
                                    )}
                                </Field>
                            </div>
                            <Button label="Submit" type="submit" icon="pi pi-check" disabled={isSubmitting} />
                        </Form>
                    )}
                </Formik>
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
                    <a href="https://formik.org/">Formik</a> is a popular library for handling forms in React. The field will be highlighted and receive focus on validation failure.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center ">
                <form onSubmit={formik.handleSubmit} className="p-fluid flex flex-column align-items-start my-2">
                    <span className="mb-2">Date</span>
                    <div className="flex flex-column align-items-center">
                        <Toast ref={toast} />
                        <Calendar
                            id="date"
                            name="date"
                            value={formik.values.value}
                            onChange={(e) => {
                                formik.setFieldValue('value', e.target.value);
                            }}
                        />
                    </div>
                    {getFormErrorMessage('value')}
                    <Button type="submit" label="Submit" className="mt-1" />
                </form>
            </div>
            <DocSectionCode code={code} dependencies={{ formik: '^2.1.4' }} />
        </>
    );
}
