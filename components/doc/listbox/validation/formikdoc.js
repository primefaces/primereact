import { useFormik } from 'formik';
import { useRef } from 'react';
import { Button } from '../../../lib/button/Button';
import { ListBox } from '../../../lib/listbox/ListBox';
import { Toast } from '../../../lib/toast/Toast';
import { DocSectionCode } from '../../common/docsectioncode';
import { DocSectionText } from '../../common/docsectiontext';

export function FormikDoc(props) {
    const toast = useRef(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: formik.values.item.name });
    };

    const formik = useFormik({
        initialValues: {
            item: ''
        },
        validate: (data) => {
            let errors = {};

            if (!data.item) {
                errors.item = 'City is required.';
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
<Toast ref={toast} />
<ListBox
    id="item"
    name="item"
    value={formik.values.item}
    options={cities}
    optionLabel="name"
    placeholder="Select a City"
    onChange={(e) => {
        formik.setFieldValue('item', e.value);
    }}
    style={{ width: '15rem' }}
/>
        `,
        javascript: `
import React, { useRef } from "react";
import { useFormik } from 'formik';
import { ListBox } from 'primereact/listbox';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

export default function FormikDoc() {
    const toast = useRef(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: formik.values.item.name });
    };

    const formik = useFormik({
        initialValues: {
            item: ''
        },
        validate: (data) => {
            let errors = {};

            if (!data.item) {
                errors.item = 'City is required.';
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
        <div className="card flex flex-column align-items-center justify-content-center">
            <form onSubmit={formik.handleSubmit} className="flex flex-column justify-content-center">
                <Toast ref={toast} />
                <ListBox
                    id="item"
                    name="item"
                    value={formik.values.item}
                    options={cities}
                    optionLabel="name"
                    placeholder="Select a City"
                    onChange={(e) => {
                        formik.setFieldValue('item', e.value);
                    }}
                    style={{ width: '15rem' }}
                />
                {getFormErrorMessage('item')}
                <Button type="submit" label="Submit" className="mt-2" />
            </form>
        </div>
    )
}
        `,
        typescript: `
import React, { useRef } from "react";
import { useFormik } from 'formik';
import { ListBox } from 'primereact/listbox';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

export default function FormikDoc() {
    const toast = useRef(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: formik.values.item.name });
    };

    const formik = useFormik({
        initialValues: {
            item: ''
        },
        validate: (data) => {
            let errors = {};

            if (!data.item) {
                errors.item = 'City is required.';
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
        <div className="card flex flex-column align-items-center justify-content-center">
            <form onSubmit={formik.handleSubmit} className="flex flex-column justify-content-center" >
                <Toast ref={toast} />
                <ListBox
                    id="item"
                    name="item"
                    value={formik.values.item}
                    options={cities}
                    optionLabel="name"
                    placeholder="Select a City"
                    onChange={(e) => {
                        formik.setFieldValue('item', e.value);
                    }}
                    style={{ width: '15rem' }}
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
                    <a href="https://formik.org/">Formik</a> is a popular library for handling forms in React.
                </p>
            </DocSectionText>
            <div className="card flex flex-column align-items-center justify-content-center">
                <form onSubmit={formik.handleSubmit} className="flex flex-column justify-content-center">
                    <Toast ref={toast} />
                    <ListBox
                        id="item"
                        name="item"
                        value={formik.values.item}
                        options={cities}
                        optionLabel="name"
                        placeholder="Select a City"
                        onChange={(e) => {
                            formik.setFieldValue('item', e.value);
                        }}
                        style={{ width: '15rem' }}
                    />
                    {getFormErrorMessage('item')}
                    <Button type="submit" label="Submit" className="mt-2" />
                </form>
            </div>
            <DocSectionCode code={code} dependencies={{ formik: '^2.2.6' }} />
        </>
    );
}
