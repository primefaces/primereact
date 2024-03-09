import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Button } from '@/components/lib/button/Button';
import { Toast } from '@/components/lib/toast/Toast';
import { ToggleButton } from '@/components/lib/togglebutton/ToggleButton';
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
            item: false
        },
        validate: (data) => {
            let errors = {};

            if (!data.item) {
                errors.item = 'Checked is required.';
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
<ToggleButton id="item"
    name="item"
    checked={formik.values.item}
    onChange={(e) => {
        formik.setFieldValue('item', e.value);
    }}
    className={classNames('w-6rem', { 'p-invalid': formik.errors.item })}
/>
{getFormErrorMessage('item')}
<Button label="Submit" type="submit" icon="pi pi-check" />
        `,
        javascript: `
import React, { useRef } from "react";
import { useFormik } from 'formik';
import { ToggleButton } from 'primereact/togglebutton';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { classNames } from 'primereact/utils';


export default function FormikDoc() {
    const toast = useRef(null);

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: formik.values.item.toString() });
    };

    const formik = useFormik({
        initialValues: {
            item: false
        },
        validate: (data) => {
            let errors = {};

            if (!data.item) {
                errors.item = 'Checked is required.';
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
                <ToggleButton
                    id="item"
                    name="item"
                    checked={formik.values.item}
                    onChange={(e) => {
                        formik.setFieldValue('item', e.value);
                    }}
                    className={classNames('w-6rem', { 'p-invalid': formik.errors.item })}
                />
                {getFormErrorMessage('item')}
                <Button label="Submit" type="submit" icon="pi pi-check" className="p-button-outlined" />
            </form>
        </div>
    )
}
        `,
        typescript: `
import React, { useRef } from "react";
import { useFormik } from 'formik';
import { ToggleButton } from 'primereact/togglebutton';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { classNames } from 'primereact/utils';

export default function FormikDoc() {
    const toast = useRef<Toast | null>(null);

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: formik.values.item.toString() });
    };

    const formik = useFormik({
        initialValues: {
            item: false
        },
        validate: (data) => {
            let errors = {};

            if (!data.item) {
                errors.item = 'Checked is required.';
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
                <ToggleButton
                    id="item"
                    name="item"
                    checked={formik.values.item}
                    onChange={(e) => {
                        formik.setFieldValue('item', e.value);
                    }}
                    className={classNames('w-6rem', { 'p-invalid': formik.errors.item })}
                />
                {getFormErrorMessage('item')}
                <Button label="Submit" type="submit" icon="pi pi-check" className="p-button-outlined" />
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
                    <ToggleButton
                        id="item"
                        name="item"
                        checked={formik.values.item}
                        onChange={(e) => {
                            formik.setFieldValue('item', e.value);
                        }}
                        className={classNames('w-6rem', { 'p-invalid': formik.errors.item })}
                    />
                    {getFormErrorMessage('item')}
                    <Button label="Submit" type="submit" icon="pi pi-check" className="p-button-outlined" />
                </form>
            </div>
            <DocSectionCode code={code} dependencies={{ formik: '^2.2.6' }} />
        </>
    );
}
