import { Formik, Form, Field } from 'formik';
import React from 'react';
import { Calendar } from '../../../lib/calendar/Calendar';
import { Button } from '../../../lib/button/Button';
import { classNames } from '../../../lib/utils/Utils';
import { DocSectionCode } from '../../common/docsectioncode';
import { DocSectionText } from '../../common/docsectiontext';

export function FormikDoc(props) {
    const code = {
        basic: `
<Form className="p-fluid">
    <div className="field">
        <Field
            name="birthdate"
            validate={(value) => {
                if (!value) {
                    return 'Birth Date is required.';
                }
            }}
        >
            {({ field, form, meta }) => (
                <>
                    <label htmlFor={field.name} className={classNames({ 'p-error': errors.birthdate })}>
                        Birth Date
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
                                            return 'Birth Date is required.';
                                        }
                                    }}
                                >
                                    {({ field, form, meta }) => (
                                        <>
                                            <label htmlFor={field.name} className={classNames({ 'p-error': errors.birthdate })}>
                                                Birth Date
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
                                            return 'Birth Date is required.';
                                        }
                                    }}
                                >
                                    {({ field, form, meta }) => (
                                        <>
                                            <label htmlFor={field.name} className={classNames({ 'p-error': errors.birthdate })}>
                                                Birth Date
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
                                                return 'Birth Date is required.';
                                            }
                                        }}
                                    >
                                        {({ field, form, meta }) => (
                                            <>
                                                <label htmlFor={field.name} className={classNames({ 'p-error': errors.birthdate })}>
                                                    Birth Date
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
            <DocSectionCode code={code} dependencies={{ formik: '^2.1.4' }} />
        </>
    );
}
