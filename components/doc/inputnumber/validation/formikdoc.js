import { useRef } from 'react';
import { useFormik } from 'formik';
import { DocSectionText } from '../../common/docsectiontext';
import { DocSectionCode } from '../../common/docsectioncode';
import { Button } from '../../../lib/button/Button';
import { Toast } from '../../../lib/toast/Toast';
import { InputNumber } from '../../../lib/inputnumber/InputNumber';
import { classNames } from '../../../lib/utils/Utils';

export function FormikDoc(props) {
    const toast = useRef(null);

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Submission Received', detail: 'Thank you, we have received your submission.' });
    };

    const formik = useFormik({
        initialValues: {
            year: null
        },
        validate: (data) => {
            let errors = {};
            let min = 1960;
            let max = 2050;

            if (!data.year) {
                errors.year = 'Year is required.';
            }

            if (data.year < 1960) {
                errors.year = `Year less than minimum allowed value of ${min}`;
            }

            if (data.year > 2050) {
                errors.year = `Year more than maximum allowed value of ${max}`;
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
        return isFormFieldValid(name) ? <small className="p-error">{formik.errors[name]}</small> : <small className="p-error"> </small>;
    };

    const code = {
        basic: `
<Toast ref={toast} />
<label htmlFor="year" className={classNames({ 'p-error': isFormFieldValid('year') })}>
    Year* (between 1960 and 2050)
</label>
<InputNumber
    id="year"
    name="year"
    value={formik.values.year}
    onValueChange={(e) => {
        formik.setFieldValue('year', e.value);
    }}
    useGrouping={false}
    inputClassName={classNames({ 'p-invalid': isFormFieldValid('year') })}
/>
{getFormErrorMessage('year')}
<Button label="Submit" type="submit" icon="pi pi-check" />
        `,
        javascript: `
import React, { useRef } from "react";
import { useFormik } from 'formik';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';
import { classNames } from 'primereact/utils';
import { Toast } from 'primereact/toast';


export default function FormikDoc() {
    const toast = useRef(null);

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Submission Received', detail: 'Thank you, we have received your submission.' });
    };

    const formik = useFormik({
        initialValues: {
            year: null
        },
        validate: (data) => {
            let errors = {};
            let min = 1960;
            let max = 2050;

            if (!data.year) {
                errors.year = 'Year is required.';
            }

            if (data.year < 1960) {
                errors.year = \`Year less than minimum allowed value of \${min}\`;
            }

            if (data.year > 2050) {
                errors.year = \`Year more than maximum allowed value of \${max}\`;
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
        return isFormFieldValid(name) ? <small className="p-error">{formik.errors[name]}</small> : <small className="p-error"> </small>;
    };

    return (
        <div className="card flex justify-content-center">
            <form onSubmit={formik.handleSubmit} className="flex flex-column gap-2">
                <Toast ref={toast} />
                <label htmlFor="year" className={classNames({ 'p-error': isFormFieldValid('year') })}>
                    Year* (between 1960 and 2050)
                </label>
                <InputNumber
                    id="year"
                    name="year"
                    value={formik.values.year}
                    onValueChange={(e) => {
                        formik.setFieldValue('year', e.value);
                    }}
                    useGrouping={false}
                    inputClassName={classNames({ 'p-invalid': isFormFieldValid('year') })}
                />

                {getFormErrorMessage('year')}
                <Button label="Submit" type="submit" icon="pi pi-check" />
            </form>
        </div>
    )
}
        `,
        typescript: `
import React, { useRef } from "react";
import { useFormik } from 'formik';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';
import { classNames } from 'primereact/utils';
import { Toast } from 'primereact/toast';

export default function FormikDoc() {
    const toast = useRef(null);

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Submission Received', detail: 'Thank you, we have received your submission.' });
    };

    const formik = useFormik({
        initialValues: {
            year: null
        },
        validate: (data) => {
            let errors = {};
            let min = 1960;
            let max = 2050;

            if (!data.year) {
                errors.year = 'Year is required.';
            }

            if (data.year < 1960) {
                errors.year = \`Year less than minimum allowed value of \${min}\`;
            }

            if (data.year > 2050) {
                errors.year = \`Year more than maximum allowed value of \${max}\`;
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
        return isFormFieldValid(name) ? <small className="p-error">{formik.errors[name]}</small> : <small className="p-error"> </small>;
    };

    return (
        <div className="card flex justify-content-center">
            <form onSubmit={formik.handleSubmit} className="flex flex-column gap-2">
                <Toast ref={toast} />
                <label htmlFor="year" className={classNames({ 'p-error': isFormFieldValid('year') })}>
                    Year* (between 1960 and 2050)
                </label>
                <InputNumber
                    id="year"
                    name="year"
                    value={formik.values.year}
                    onValueChange={(e) => {
                        formik.setFieldValue('year', e.value);
                    }}
                    useGrouping={false}
                    inputClassName={classNames({ 'p-invalid': isFormFieldValid('year') })}
                />

                {getFormErrorMessage('year')}
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
                {/* TO DO: Add demo content. */}
                <p></p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <form onSubmit={formik.handleSubmit} className="flex flex-column gap-2">
                    <Toast ref={toast} />
                    <label htmlFor="year" className={classNames({ 'p-error': isFormFieldValid('year') })}>
                        Year* (between 1960 and 2050)
                    </label>
                    <InputNumber
                        id="year"
                        name="year"
                        value={formik.values.year}
                        onValueChange={(e) => {
                            formik.setFieldValue('year', e.value);
                        }}
                        useGrouping={false}
                        inputClassName={classNames({ 'p-invalid': isFormFieldValid('year') })}
                    />

                    {getFormErrorMessage('year')}
                    <Button label="Submit" type="submit" icon="pi pi-check" />
                </form>
            </div>
            <DocSectionCode code={code} dependencies={{ formik: '^2.2.6' }} />
        </>
    );
}
