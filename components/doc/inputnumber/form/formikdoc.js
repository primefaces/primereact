import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Button } from '@/components/lib/button/Button';
import { InputNumber } from '@/components/lib/inputnumber/InputNumber';
import { Toast } from '@/components/lib/toast/Toast';
import { classNames } from '@/components/lib/utils/Utils';
import { useFormik } from 'formik';
import { useRef } from 'react';

export function FormikDoc(props) {
    const toast = useRef(null);

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: formik.values.year });
    };

    const formik = useFormik({
        initialValues: {
            year: null
        },
        validate: (data) => {
            let errors = {};

            if (!data.year) {
                errors.year = 'Year is required.';
            }

            if (data.year < 1960) {
                errors.year = `Enter a valid year.`;
            }

            if (data.year > 2050) {
                errors.year = `Enter a valid year.`;
            }

            return errors;
        },
        onSubmit: (data) => {
            data && show(data);
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
<InputNumber
    inputId="in_year"
    name="year"
    value={formik.values.year}
    onValueChange={(e) => {
        formik.setFieldValue('year', e.value);
    }}
    useGrouping={false}
    inputClassName={classNames({ 'p-invalid': isFormFieldInvalid('year') })}
    pt={{
        input: {
            root: { autoComplete: 'off' }
        }
    }}
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
        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: formik.values.year });
    };

    const formik = useFormik({
        initialValues: {
            year: null
        },
        validate: (data) => {
            let errors = {};

            if (!data.year) {
                errors.year = 'Year is required.';
            }

            if (data.year < 1960) {
                errors.year = \`Enter a valid year.\`;
            }

            if (data.year > 2050) {
                errors.year = \`Enter a valid year.\`;
            }

            return errors;
        },
        onSubmit: (data) => {
            data && show(data);
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
                <label htmlFor="year">Enter a year between 1960-2050.</label>
                <Toast ref={toast} />
                <InputNumber
                    inputId="in_year"
                    name="year"
                    value={formik.values.year}
                    onValueChange={(e) => {
                        formik.setFieldValue('year', e.value);
                    }}
                    useGrouping={false}
                    inputClassName={classNames({ 'p-invalid': isFormFieldInvalid('year') })}
                    pt={{
                        input: {
                            root: { autoComplete: 'off' }
                        }
                    }}
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
        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: formik.values.year });
    };

    const formik = useFormik({
        initialValues: {
            year: null
        },
        validate: (data) => {
            let errors = {};

            if (!data.year) {
                errors.year = 'Year is required.';
            }

            if (data.year < 1960) {
                errors.year = \`Enter a valid year.\`;
            }

            if (data.year > 2050) {
                errors.year = \`Enter a valid year.\`;
            }

            return errors;
        },
        onSubmit: (data) => {
            data && show(data);
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
                <label htmlFor="year">Enter a year between 1960-2050.</label>
                <Toast ref={toast} />
                <InputNumber
                    inputId="in_year"
                    name="year"
                    value={formik.values.year}
                    onValueChange={(e) => {
                        formik.setFieldValue('year', e.value);
                    }}
                    useGrouping={false}
                    inputClassName={classNames({ 'p-invalid': isFormFieldInvalid('year') })}
                    pt={{
                        input: {
                            root: { autoComplete: 'off' }
                        }
                    }}
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
                <p>
                    <a href="https://formik.org/">Formik</a> is a popular library for handling forms in React.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <form onSubmit={formik.handleSubmit} className="flex flex-column gap-2">
                    <label htmlFor="year">Enter a year between 1960-2050.</label>
                    <Toast ref={toast} />
                    <InputNumber
                        inputId="in_year"
                        name="year"
                        value={formik.values.year}
                        onValueChange={(e) => {
                            formik.setFieldValue('year', e.value);
                        }}
                        useGrouping={false}
                        inputClassName={classNames({ 'p-invalid': isFormFieldInvalid('year') })}
                        pt={{
                            input: {
                                root: { autoComplete: 'off' }
                            }
                        }}
                    />
                    {getFormErrorMessage('year')}
                    <Button label="Submit" type="submit" icon="pi pi-check" />
                </form>
            </div>
            <DocSectionCode code={code} dependencies={{ formik: '^2.2.6' }} />
        </>
    );
}
