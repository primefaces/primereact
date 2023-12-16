import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { AutoComplete } from '@/components/lib/autocomplete/AutoComplete';
import { Button } from '@/components/lib/button/Button';
import { Toast } from '@/components/lib/toast/Toast';
import { classNames } from '@/components/lib/utils/Utils';
import { useFormik } from 'formik';
import { useRef, useState } from 'react';

export function FormikDoc(props) {
    const toast = useRef(null);
    const [items, setItems] = useState([]);

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: formik.values.item });
    };

    const search = (event) => {
        setItems([...Array(10).keys()].map((item) => event.query + '-' + item));
    };

    const formik = useFormik({
        initialValues: {
            item: ''
        },
        validate: (data) => {
            let errors = {};

            if (!data.item) {
                errors.item = 'Value is required.';
            }

            return errors;
        },
        onSubmit: (data) => {
            data.item && show(data);
            formik.resetForm();
        }
    });

    const isFormFieldInvalid = (name) => !!(formik.touched[name] && formik.errors[name]);

    const getFormErrorMessage = (name) => {
        return isFormFieldInvalid(name) ? <small className="p-error">{formik.errors[name]}</small> : <small className="p-error">&nbsp;</small>;
    };

    const code = {
        basic: `
<form onSubmit={formik.handleSubmit} className="flex flex-column gap-2">
    <div className="mb-2">Value</div>
    <Toast ref={toast} />
    <AutoComplete
        id="item"
        name="item"
        value={formik.values.item}
        suggestions={items}
        completeMethod={search}
        onChange={(e) => {
            formik.setFieldValue('item', e.value);
        }}
    />
    {getFormErrorMessage('item')}
    <Button type="submit" label="Submit" className="mt-2" />
</form>
        `,
        javascript: `
import React, {useState, useRef } from "react";
import { useFormik } from 'formik';
import { Button } from 'primereact/button';
import { classNames } from 'primereact/utils';
import { AutoComplete } from "primereact/autocomplete";
import { Toast } from 'primereact/toast';

export default function FormikDoc() {
    const toast = useRef(null);
    const [items, setItems] = useState([]);

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: formik.values.item });
    };

    const search = (event) => {
        setItems([...Array(10).keys()].map((item) => event.query + '-' + item));
    };

    const formik = useFormik({
        initialValues: {
            item: ''
        },
        validate: (data) => {
            let errors = {};

            if (!data.item) {
                errors.item = 'Value is required.';
            }

            return errors;
        },
        onSubmit: (data) => {
            data.item && show(data);
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
                <label htmlFor="ac_item">Value</label>
                <Toast ref={toast} />
                <AutoComplete
                    inputId="ac_item"
                    name="item"
                    value={formik.values.item}
                    suggestions={items}
                    completeMethod={search}
                    className={classNames({ 'p-invalid': isFormFieldInvalid('item') })}
                    onChange={(e) => {
                        formik.setFieldValue('item', e.value);
                    }}
                />
                {getFormErrorMessage('item')}
                <Button type="submit" label="Submit" />
            </form>
        </div>
    )
}
        `,
        typescript: `
import React, {useState, useRef } from "react";
import { useFormik } from 'formik';
import { Button } from 'primereact/button';
import { classNames } from 'primereact/utils';
import { AutoComplete } from "primereact/autocomplete";
import { Toast } from 'primereact/toast';

export default function FormikDoc() {
    const toast = useRef(null);
    const [items, setItems] = useState([]);

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: formik.values.item });
    };

    const search = (event) => {
        setItems([...Array(10).keys()].map((item) => event.query + '-' + item));
    };

    const formik = useFormik({
        initialValues: {
            item: ''
        },
        validate: (data) => {
            let errors = {};

            if (!data.item) {
                errors.item = 'Value is required.';
            }

            return errors;
        },
        onSubmit: (data) => {
            data.item && show(data);
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
                <label htmlFor="ac_item">Value</label>
                <Toast ref={toast} />
                <AutoComplete
                    inputId="ac_item"
                    name="item"
                    value={formik.values.item}
                    suggestions={items}
                    completeMethod={search}
                    className={classNames({ 'p-invalid': isFormFieldInvalid('item') })}
                    onChange={(e) => {
                        formik.setFieldValue('item', e.value);
                    }}
                />
                {getFormErrorMessage('item')}
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
                    <label htmlFor="ac_item">Value</label>
                    <Toast ref={toast} />
                    <AutoComplete
                        inputId="ac_item"
                        name="item"
                        value={formik.values.item}
                        suggestions={items}
                        completeMethod={search}
                        className={classNames({ 'p-invalid': isFormFieldInvalid('item') })}
                        onChange={(e) => {
                            formik.setFieldValue('item', e.value);
                        }}
                    />
                    {getFormErrorMessage('item')}
                    <Button type="submit" label="Submit" />
                </form>
            </div>

            <DocSectionCode code={code} dependencies={{ formik: '^2.2.6' }} />
        </>
    );
}
