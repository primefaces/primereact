import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Button } from '@/components/lib/button/Button';
import { Calendar } from '@/components/lib/calendar/Calendar';
import { Toast } from '@/components/lib/toast/Toast';
import { classNames } from '@/components/lib/utils/Utils';
import { useFormik } from 'formik';
import { useRef } from 'react';

export function FormikDoc(props) {
    const toast = useRef(null);

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: formik.values.date.toLocaleDateString() });
    };

    const formik = useFormik({
        initialValues: {
            date: ''
        },
        validate: (data) => {
            let errors = {};

            if (!data.date) {
                errors.date = 'Date is required.';
            }

            return errors;
        },
        onSubmit: (data) => {
            if (!formik.errors.date) {
                data && show(data);
                formik.resetForm();
            }
        }
    });

    const isFormFieldInvalid = (name) => !!(formik.touched[name] && formik.errors[name]);

    const getFormErrorMessage = (name) => {
        return isFormFieldInvalid(name) ? <small className="p-error">{formik.errors[name]}</small> : <small className="p-error">&nbsp;</small>;
    };

    const code = {
        basic: `
<form onSubmit={formik.handleSubmit} className="flex flex-column gap-2">
    <label htmlFor="cal_date">Date</label>
    <Toast ref={toast} />
    <Calendar
        inputId="cal_date"
        name="date"
        value={formik.values.date}
        className={classNames({ 'p-invalid': isFormFieldInvalid('date') })}
        onChange={(e) => {
            formik.setFieldValue('date', e.target.value);
        }}
    />
    {getFormErrorMessage('date')}
    <Button type="submit" label="Submit" />
</form>
        `,
        javascript: `
import React, {useRef} from 'react';
import { useFormik } from 'formik';
import { Calendar } from "primereact/calendar";
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { classNames } from 'primereact/utils';

export default function FormikDoc() {
    const toast = useRef(null);

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: formik.values.date.toLocaleDateString() });
    };

    const formik = useFormik({
        initialValues: {
            date: ''
        },
        validate: (data) => {
            let errors = {};

            if (!data.date) {
                errors.date = 'Date is required.';
            }

            return errors;
        },
        onSubmit: (data) => {
            if (!formik.errors.date) {
                data && show(data);
                formik.resetForm();
            }
        }
    });

    const isFormFieldInvalid = (name) => !!(formik.touched[name] && formik.errors[name]);

    const getFormErrorMessage = (name) => {
        return isFormFieldInvalid(name) ? <small className="p-error">{formik.errors[name]}</small> : <small className="p-error">&nbsp;</small>;
    };

    return (
        <div className="card flex justify-content-center">
            <form onSubmit={formik.handleSubmit} className="flex flex-column gap-2">
                <label htmlFor="cal_date">Date</label>
                <Toast ref={toast} />
                <Calendar
                    inputId="cal_date"
                    name="date"
                    value={formik.values.date}
                    className={classNames({ 'p-invalid': isFormFieldInvalid('date') })}
                    onChange={(e) => {
                        formik.setFieldValue('date', e.target.value);
                    }}
                />
                {getFormErrorMessage('date')}
                <Button type="submit" label="Submit" />
            </form>
        </div>
    )
}
        `,
        typescript: `
import React, {useRef} from 'react';
import { useFormik } from 'formik';
import { Calendar } from "primereact/calendar";
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { classNames } from 'primereact/utils';

export default function FormikDoc() {
    const toast = useRef(null);

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: formik.values.date.toLocaleDateString() });
    };

    const formik = useFormik({
        initialValues: {
            date: ''
        },
        validate: (data) => {
            let errors = {};

            if (!data.date) {
                errors.date = 'Date is required.';
            }

            return errors;
        },
        onSubmit: (data) => {
            if (!formik.errors.date) {
                data && show(data);
                formik.resetForm();
            }
        }
    });

    const isFormFieldInvalid = (name) => !!(formik.touched[name] && formik.errors[name]);

    const getFormErrorMessage = (name) => {
        return isFormFieldInvalid(name) ? <small className="p-error">{formik.errors[name]}</small> : <small className="p-error">&nbsp;</small>;
    };

    return (
        <div className="card flex justify-content-center">
            <form onSubmit={formik.handleSubmit} className="flex flex-column gap-2">
                <label htmlFor="cal_date">Date</label>
                <Toast ref={toast} />
                <Calendar
                    inputId="cal_date"
                    name="date"
                    value={formik.values.date}
                    className={classNames({ 'p-invalid': isFormFieldInvalid('date') })}
                    onChange={(e) => {
                        formik.setFieldValue('date', e.target.value);
                    }}
                />
                {getFormErrorMessage('date')}
                <Button type="submit" label="Submit" />
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
                    <label htmlFor="cal_date">Date</label>
                    <Toast ref={toast} />
                    <Calendar
                        inputId="cal_date"
                        name="date"
                        value={formik.values.date}
                        className={classNames({ 'p-invalid': isFormFieldInvalid('date') })}
                        onChange={(e) => {
                            formik.setFieldValue('date', e.target.value);
                        }}
                    />
                    {getFormErrorMessage('date')}
                    <Button type="submit" label="Submit" />
                </form>
            </div>
            <DocSectionCode code={code} dependencies={{ formik: '^2.1.4' }} />
        </>
    );
}
