import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Button } from '@/components/lib/button/Button';
import { Toast } from '@/components/lib/toast/Toast';
import { TriStateCheckbox } from '@/components/lib/tristatecheckbox/TriStateCheckbox';
import { classNames } from '@/components/lib/utils/Utils';
import { useFormik } from 'formik';
import { useRef } from 'react';

export function FormikDoc(props) {
    const toast = useRef(null);

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: formik.values.item.toString() });
    };

    const formik = useFormik({
        initialValues: {
            item: null
        },
        validate: (data) => {
            let errors = {};

            if (!data.item || data.item === 'null') {
                errors.item = 'Value is required.';
            }

            return errors;
        },
        onSubmit: (data) => {
            data.item && show();
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
<TriStateCheckbox
    id="item"
    name="item"
    value={formik.values.item}
    onChange={(e) => {
        formik.setFieldValue('item', e.value);
    }}
    className={classNames({ 'p-invalid': formik.errors.item })}
/>
<div className="my-2">* I've read and accept the terms & conditions.</div>
{getFormErrorMessage('item')}
<Button type="submit" label="Submit" icon="pi pi-check" />
`,
        javascript: `
import React, { useRef } from "react";
import { useFormik } from 'formik';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { classNames } from 'primereact/utils';
import { TriStateCheckbox } from "primereact/tristatecheckbox";

export default function FormikDoc() {
    const toast = useRef(null);

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: formik.values.item.toString() });
    };

    const formik = useFormik({
        initialValues: {
            item: null
        },
        validate: (data) => {
            let errors = {};

            if (!data.item || data.item === 'null') {
                errors.item = 'Value is required.';
            }

            return errors;
        },
        onSubmit: (data) => {
            data.item && show();
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
                <Toast ref={toast} />
                <TriStateCheckbox
                    id="item"
                    name="item"
                    value={formik.values.item}
                    onChange={(e) => {
                        formik.setFieldValue('item', e.value);
                    }}
                    className={classNames({ 'p-invalid': formik.errors.item })}
                />
                <div>* I've read and accept the terms & conditions.</div>
                {getFormErrorMessage('item')}
                <Button type="submit" label="Submit" icon="pi pi-check" />
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
import { classNames } from 'primereact/utils';
import { TriStateCheckbox } from "primereact/tristatecheckbox";

export default function FormikDoc() {
    const toast = useRef(null);

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: formik.values.item.toString() });
    };

    const formik = useFormik({
        initialValues: {
            item: null
        },
        validate: (data) => {
            let errors = {};

            if (!data.item || data.item === 'null') {
                errors.item = 'Value is required.';
            }

            return errors;
        },
        onSubmit: (data) => {
            data.item && show();
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
                <Toast ref={toast} />
                <TriStateCheckbox
                    id="item"
                    name="item"
                    value={formik.values.item}
                    onChange={(e) => {
                        formik.setFieldValue('item', e.value);
                    }}
                    className={classNames({ 'p-invalid': formik.errors.item })}
                />
                <div>* I've read and accept the terms & conditions.</div>
                {getFormErrorMessage('item')}
                <Button type="submit" label="Submit" icon="pi pi-check" />
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
                    <Toast ref={toast} />
                    <TriStateCheckbox
                        id="item"
                        name="item"
                        value={formik.values.item}
                        onChange={(e) => {
                            formik.setFieldValue('item', e.value);
                        }}
                        className={classNames({ 'p-invalid': formik.errors.item })}
                    />
                    <div>* I've read and accept the terms & conditions.</div>
                    {getFormErrorMessage('item')}
                    <Button type="submit" label="Submit" icon="pi pi-check" />
                </form>
            </div>
            <DocSectionCode code={code} dependencies={{ formik: '^2.2.6' }} />
        </>
    );
}
