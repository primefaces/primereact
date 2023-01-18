import React, { useState, useRef } from 'react';
import { useFormik } from 'formik';
import { AutoComplete } from '../../../lib/autocomplete/AutoComplete';
import { Button } from '../../../lib/button/Button';
import { Toast } from '../../../lib/toast/Toast';
import { DocSectionCode } from '../../common/docsectioncode';
import { DocSectionText } from '../../common/docsectiontext';

export function FormikDoc(props) {
    const toast = useRef(null);
    const [items, setItems] = useState([]);

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Submission Received', detail: 'Thank you, we have received your submission.' });
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
                errors.item = 'Item is required.';
            }

            return errors;
        },
        onSubmit: (data) => {
            data.item && show(data);
            formik.resetForm();
        }
    });

    const isFormFieldValid = (name) => !!(formik.touched[name] && formik.errors[name]);

    const getFormErrorMessage = (name) => {
        return isFormFieldValid(name) ? <small className="p-error">{formik.errors[name]}</small> : <small className="p-error"> </small>;
    };

    const code = {
        basic: `
<form onSubmit={formik.handleSubmit} className="flex flex-column justify-content-center">
    <div className="mb-2">Value</div>
    <Toast ref={toast} />
    <AutoComplete
        id="item"
        name="item"
        value={formik.values.item}
        optionLabel="name"
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
        toast.current.show({ severity: 'success', summary: 'Submission Received', detail: 'Thank you, we have received your submission.' });
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
                errors.item = 'Item is required.';
            }

            return errors;
        },
        onSubmit: (data) => {
            data.item && show(data);
            formik.resetForm();
        }
    });

    const isFormFieldValid = (name) => !!(formik.touched[name] && formik.errors[name]);

    const getFormErrorMessage = (name) => {
        return isFormFieldValid(name) ? <small className="p-error">{formik.errors[name]}</small> : <small className="p-error"> </small>;
    };


    return (
        <div className="card flex flex-column align-items-center">
            <form onSubmit={formik.handleSubmit} className="flex flex-column justify-content-center">
                <div className="mb-2">Value</div>
                <Toast ref={toast} />
                <AutoComplete
                    id="item"
                    name="item"
                    value={formik.values.item}
                    optionLabel="name"
                    suggestions={items}
                    completeMethod={search}
                    onChange={(e) => {
                        formik.setFieldValue('item', e.value);
                    }}
                />
                {getFormErrorMessage('item')}
                <Button type="submit" label="Submit" className="mt-2" />
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
        toast.current.show({ severity: 'success', summary: 'Submission Received', detail: 'Thank you, we have received your submission.' });
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
                errors.item = 'Item is required.';
            }

            return errors;
        },
        onSubmit: (data) => {
            data.item && show(data);
            formik.resetForm();
        }
    });

    const isFormFieldValid = (name) => !!(formik.touched[name] && formik.errors[name]);

    const getFormErrorMessage = (name) => {
        return isFormFieldValid(name) ? <small className="p-error">{formik.errors[name]}</small> : <small className="p-error"> </small>;
    };


    return (
        <div className="card flex flex-column align-items-center">
            <form onSubmit={formik.handleSubmit} className="flex flex-column justify-content-center">
                <div className="mb-2">Value</div>
                <Toast ref={toast} />
                <AutoComplete
                    id="item"
                    name="item"
                    value={formik.values.item}
                    optionLabel="name"
                    suggestions={items}
                    completeMethod={search}
                    onChange={(e) => {
                        formik.setFieldValue('item', e.value);
                    }}
                />
                {getFormErrorMessage('item')}
                <Button type="submit" label="Submit" className="mt-2" />
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
                    <a href="https://formik.org/">Formik</a> is a popular React library for form validation. The field will be highlighted on validation failure.
                </p>
            </DocSectionText>
            <div className="card flex flex-column align-items-center">
                <form onSubmit={formik.handleSubmit} className="flex flex-column justify-content-center">
                    <div className="mb-2">Value</div>
                    <Toast ref={toast} />
                    <AutoComplete
                        id="item"
                        name="item"
                        value={formik.values.item}
                        optionLabel="name"
                        suggestions={items}
                        completeMethod={search}
                        onChange={(e) => {
                            formik.setFieldValue('item', e.value);
                        }}
                    />
                    {getFormErrorMessage('item')}
                    <Button type="submit" label="Submit" className="mt-2" />
                </form>
            </div>

            <DocSectionCode code={code} dependencies={{ formik: '^2.2.6' }} />
        </>
    );
}
