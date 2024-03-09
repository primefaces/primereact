import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Button } from '@/components/lib/button/Button';
import { Chips } from '@/components/lib/chips/Chips';
import { Toast } from '@/components/lib/toast/Toast';
import { classNames } from '@/components/lib/utils/Utils';
import { useFormik } from 'formik';
import { useRef } from 'react';

export function FormikDoc(props) {
    const toast = useRef(null);

    const show = (data) => {
        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: `${data.chipArray}` });
    };

    const formik = useFormik({
        initialValues: {
            chipArray: []
        },
        validate: (data) => {
            let errors = {};

            if (!data.chipArray.length > 0) {
                errors.chipArray = 'At least one chip is required.';
            }

            return errors;
        },
        onSubmit: (data) => {
            data.chipArray.length > 0 && show(data);
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
<Chips
    inputId="c_chipArray"
    name="chipArray"
    value={formik.values.chipArray}
    className={classNames({ 'p-invalid': isFormFieldInvalid('chipArray') })}
    onChange={(e) => {
        formik.setFieldValue('chipArray', e.value);
    }}
    pt={{
        input: { autoComplete: 'off' }
    }}
/>
{getFormErrorMessage('chipArray')}
<Button type="submit" label="Submit" className='w-7rem' />
        `,
        javascript: `
import React, { useRef } from "react";
import { useFormik } from 'formik';
import { Chips } from 'primereact/chips';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { classNames } from 'primereact/utils';

export default function FormikDoc() {
    const toast = useRef(null);

    const show = (data) => {
        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: \`\${data.chipArray}\` });
    };

    const formik = useFormik({
        initialValues: {
            chipArray: []
        },
        validate: (data) => {
            let errors = {};

            if (!data.chipArray.length > 0) {
                errors.chipArray = 'At least one chip is required.';
            }

            return errors;
        },
        onSubmit: (data) => {
            data.chipArray.length > 0 && show(data);
            formik.resetForm();
        }
    });

    const isFormFieldInvalid = (name) => !!(formik.touched[name] && formik.errors[name]);

    const getFormErrorMessage = (name) => {
        return isFormFieldInvalid(name) ? <small className="p-error">{formik.errors[name]}</small> : <small className="p-error">&nbsp;</small>;
    };

    return (
        <div className="card p-fluid justify-content-center">
            <form onSubmit={formik.handleSubmit} className="flex flex-column gap-2">
                <Toast ref={toast} />
                <Chips
                    inputId="c_chipArray"
                    name="chipArray"
                    value={formik.values.chipArray}
                    className={classNames({ 'p-invalid': isFormFieldInvalid('chipArray') })}
                    onChange={(e) => {
                        formik.setFieldValue('chipArray', e.value);
                    }}
                    pt={{
                        input: { autoComplete: 'off' }
                    }}
                />
                {getFormErrorMessage('chipArray')}
                <Button type="submit" label="Submit" className='w-7rem' />
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
import { classNames } from 'primereact/utils';

export default function FormikDoc() {
    const toast = useRef(null);

    const show = (data) => {
        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: \`\${data.chipArray}\` });
    };

    const formik = useFormik({
        initialValues: {
            chipArray: []
        },
        validate: (data) => {
            let errors = {};

            if (!data.chipArray.length > 0) {
                errors.chipArray = 'At least one chip is required.';
            }

            return errors;
        },
        onSubmit: (data) => {
            data.chipArray.length > 0 && show(data);
            formik.resetForm();
        }
    });

    const isFormFieldInvalid = (name) => !!(formik.touched[name] && formik.errors[name]);

    const getFormErrorMessage = (name) => {
        return isFormFieldInvalid(name) ? <small className="p-error">{formik.errors[name]}</small> : <small className="p-error">&nbsp;</small>;
    };

    return (
        <div className="card p-fluid justify-content-center">
            <form onSubmit={formik.handleSubmit} className="flex flex-column gap-2">
                <Toast ref={toast} />
                <Chips
                    inputId="c_chipArray"
                    name="chipArray"
                    value={formik.values.chipArray}
                    className={classNames({ 'p-invalid': isFormFieldInvalid('chipArray') })}
                    onChange={(e) => {
                        formik.setFieldValue('chipArray', e.value);
                    }}
                    pt={{
                        input: { autoComplete: 'off' }
                    }}
                />
                {getFormErrorMessage('chipArray')}
                <Button type="submit" label="Submit" className='w-7rem' />
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
            <div className="card p-fluid justify-content-center">
                <form onSubmit={formik.handleSubmit} className="flex flex-column gap-2">
                    <Toast ref={toast} />
                    <Chips
                        inputId="c_chipArray"
                        name="chipArray"
                        value={formik.values.chipArray}
                        className={classNames({ 'p-invalid': isFormFieldInvalid('chipArray') })}
                        onChange={(e) => {
                            formik.setFieldValue('chipArray', e.value);
                        }}
                        pt={{
                            input: { autoComplete: 'off' }
                        }}
                    />
                    {getFormErrorMessage('chipArray')}
                    <Button type="submit" label="Submit" className="w-7rem" />
                </form>
            </div>
            <DocSectionCode code={code} dependencies={{ formik: '^2.2.6' }} />
        </>
    );
}
