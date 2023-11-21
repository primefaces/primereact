import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Button } from '@/components/lib/button/Button';
import { SelectButton } from '@/components/lib/selectbutton/SelectButton';
import { Toast } from '@/components/lib/toast/Toast';
import { classNames } from '@/components/lib/utils/Utils';
import { useFormik } from 'formik';
import { useRef } from 'react';

export function FormikDoc(props) {
    const toast = useRef(null);
    const options = ['Off', 'On'];

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: formik.values.item });
    };

    const formik = useFormik({
        initialValues: {
            item: null
        },
        validate: (data) => {
            let errors = {};

            if (!data.item) {
                errors.item = 'Engine State is required.';
            }

            return errors;
        },
        onSubmit: (data) => {
            data && show();
            formik.resetForm();
        }
    });

    const isFormFieldInvalid = (name) => !!(formik.touched[name] && formik.errors[name]);

    const getFormErrorMessage = (name) => {
        return isFormFieldInvalid(name) ? <small className="p-error">{formik.errors[name]}</small> : <small className="p-error">&nbsp;</small>;
    };

    const code = {
        basic: `
<label htmlFor="item" className={classNames('flex justify-content-center', { 'p-error': formik.errors.item })}>
    Engine State
</label>
<SelectButton
    id="item"
    name="item"
    value={formik.values.item}
    options={options}
    onChange={(e) => {
        formik.setFieldValue('item', e.value);
    }}
    className={classNames('flex justify-content-center', { 'p-invalid': formik.errors.item })}
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
        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: formik.values.item });
    };

    const formik = useFormik({
        initialValues: {
            item: null
        },
        validate: (data) => {
            let errors = {};

            if (!data.item) {
                errors.item = 'Engine State is required.';
            }

            return errors;
        },
        onSubmit: (data) => {
            data && show();
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
                <label htmlFor="item" className={classNames('flex justify-content-center', { 'p-error': formik.errors.item })}>
                    Engine State
                </label>
                <SelectButton
                    id="item"
                    name="item"
                    value={formik.values.item}
                    options={options}
                    onChange={(e) => {
                        formik.setFieldValue('item', e.value);
                    }}
                    className={classNames('flex justify-content-center', { 'p-invalid': formik.errors.item })}
                />
                {getFormErrorMessage('item')}
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
        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: formik.values.item });
    };

    const formik = useFormik({
        initialValues: {
            item: null
        },
        validate: (data) => {
            let errors = {};

            if (!data.item) {
                errors.item = 'Engine State is required.';
            }

            return errors;
        },
        onSubmit: (data) => {
            data && show();
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
                <label htmlFor="item" className={classNames('flex justify-content-center', { 'p-error': formik.errors.item })}>
                    Engine State
                </label>
                <SelectButton
                    id="item"
                    name="item"
                    value={formik.values.item}
                    options={options}
                    onChange={(e) => {
                        formik.setFieldValue('item', e.value);
                    }}
                    className={classNames('flex justify-content-center', { 'p-invalid': formik.errors.item })}
                />
                {getFormErrorMessage('item')}
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
                <form onSubmit={formik.handleSubmit} className="flex flex-column align-items-center gap-2">
                    <Toast ref={toast} />
                    <label htmlFor="item" className={classNames('flex justify-content-center', { 'p-error': formik.errors.item })}>
                        Engine State
                    </label>
                    <SelectButton
                        id="item"
                        name="item"
                        value={formik.values.item}
                        options={options}
                        onChange={(e) => {
                            formik.setFieldValue('item', e.value);
                        }}
                        className={classNames('flex justify-content-center', { 'p-invalid': formik.errors.item })}
                    />
                    {getFormErrorMessage('item')}
                    <Button label="Submit" type="submit" icon="pi pi-check" />
                </form>
            </div>
            <DocSectionCode code={code} dependencies={{ formik: '^2.2.6' }} />
        </>
    );
}
