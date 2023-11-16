import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Button } from '@/components/lib/button/Button';
import { Checkbox } from '@/components/lib/checkbox/Checkbox';
import { Toast } from '@/components/lib/toast/Toast';
import { classNames } from '@/components/lib/utils/Utils';
import { useFormik } from 'formik';
import { useRef } from 'react';

export function FormikDoc(props) {
    const toast = useRef(null);

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: 'The form is successfully submitted.' });
    };

    const formik = useFormik({
        initialValues: {
            checked: false
        },
        validate: (data) => {
            let errors = {};

            if (!data.checked) {
                errors.checked = 'Accept is required.';
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
<Checkbox
    id="checked"
    name="checked"
    checked={formik.values.checked}
    className={classNames({ 'p-invalid': isFormFieldInvalid('checked') })}
    onChange={(e) => {
        formik.setFieldValue('checked', e.checked);
    }}
></Checkbox>
{getFormErrorMessage('checked')}
<Button type="submit" label="Submit" />
`,
        javascript: `
import React, { useRef } from "react";
import { useFormik } from 'formik';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { Checkbox } from "primereact/checkbox";
import { classNames } from 'primereact/utils';

export default function FormikDoc() {
    const toast = useRef(null);

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: 'The form is successfully submitted.' });
    };

    const formik = useFormik({
        initialValues: {
            checked: false
        },
        validate: (data) => {
            let errors = {};

            if (!data.checked) {
                errors.checked = 'Accept is required.';
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
            <form onSubmit={formik.handleSubmit} className="flex flex-column align-items-center gap-2">
                <div>I've read and accept the terms & conditions.</div>
                <Toast ref={toast} />
                <Checkbox
                    id="checked"
                    name="checked"
                    checked={formik.values.checked}
                    className={classNames({ 'p-invalid': isFormFieldInvalid('checked') })}
                    onChange={(e) => {
                        formik.setFieldValue('checked', e.checked);
                    }}
                ></Checkbox>
                {getFormErrorMessage('checked')}
                <Button type="submit" label="Submit" />
            </form>
        </div>
    )
}
        `,
        typescript: `
import React, { useRef } from "react";
import { useFormik } from 'formik';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { Checkbox } from "primereact/checkbox";
import { classNames } from 'primereact/utils';

export default function FormikDoc() {
    const toast = useRef(null);

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: 'The form is successfully submitted.' });
    };

    const formik = useFormik({
        initialValues: {
            checked: false
        },
        validate: (data) => {
            let errors = {};

            if (!data.checked) {
                errors.checked = 'Accept is required.';
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
            <form onSubmit={formik.handleSubmit} className="flex flex-column align-items-center gap-2">
                <div>I've read and accept the terms & conditions.</div>
                <Toast ref={toast} />
                <Checkbox
                    id="checked"
                    name="checked"
                    checked={formik.values.checked}
                    className={classNames({ 'p-invalid': isFormFieldInvalid('checked') })}
                    onChange={(e) => {
                        formik.setFieldValue('checked', e.checked);
                    }}
                ></Checkbox>
                {getFormErrorMessage('checked')}
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
                <form onSubmit={formik.handleSubmit} className="flex flex-column align-items-center gap-2">
                    <div>I've read and accept the terms & conditions.</div>
                    <Toast ref={toast} />
                    <Checkbox
                        id="checked"
                        name="checked"
                        checked={formik.values.checked}
                        className={classNames({ 'p-invalid': isFormFieldInvalid('checked') })}
                        onChange={(e) => {
                            formik.setFieldValue('checked', e.checked);
                        }}
                    ></Checkbox>
                    {getFormErrorMessage('checked')}
                    <Button type="submit" label="Submit" />
                </form>
            </div>
            <DocSectionCode code={code} dependencies={{ formik: '^2.2.6' }} />
        </>
    );
}
