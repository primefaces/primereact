import { useRef } from 'react';
import { useFormik } from 'formik';
import { DocSectionText } from '../../common/docsectiontext';
import { DocSectionCode } from '../../common/docsectioncode';
import { Button } from '../../../lib/button/Button';
import { Toast } from '../../../lib/toast/Toast';
import { Dropdown } from '../../../lib/dropdown/Dropdown';

export function FormikDoc(props) {
    const toast = useRef(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    const show = (data) => {
        // TO DO: Add detail content to the toast.
        toast.current.show({ severity: 'success', summary: 'Submitted', detail: `${data.city.name}` });
    };

    const formik = useFormik({
        initialValues: {
            city: ''
        },
        validate: (data) => {
            let errors = {};

            if (!data.city) {
                errors.city = 'City is required.';
            }

            return errors;
        },
        onSubmit: (data) => {
            data.city && show(data);
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
    <Toast ref={toast} />
    <Dropdown id="city" name="city" value={formik.values.city} options={cities} optionLabel="name" placeholder="Select a City" onChange={(e) => {formik.setFieldValue('city', e.value) }}/>
        {getFormErrorMessage('city')}
        <Button type="submit" label="Submit" className="mt-2" />
</form>
        `,
        javascript: `
import React, { useRef } from "react";
import { useFormik } from 'formik';
import { Dropdown } from 'primereact/dropdown';
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

    const show = (data) => {
        // TO DO: Add detail content to the toast.
        toast.current.show({ severity: 'success', summary: 'Submitted', detail: \`\${data.city.name}\` });
    };

    const formik = useFormik({
        initialValues: {
            city: ''
        },
        validate: (data) => {
            let errors = {};

            if (!data.city) {
                errors.city = 'City is required.';
            }

            return errors;
        },
        onSubmit: (data) => {
            data.city && show(data);
            formik.resetForm();
        }
    });

    const isFormFieldValid = (name) => !!(formik.touched[name] && formik.errors[name]);

    const getFormErrorMessage = (name) => {""""
        return isFormFieldValid(name) ? <small className="p-error">{formik.errors[name]}</small> : <small className="p-error"> </small>;
    };
    
    return (
        <div className="card flex flex-column align-items-center justify-content-center">
            <form onSubmit={formik.handleSubmit} className="flex flex-column justify-content-center">
                <Toast ref={toast} />
                <Dropdown
                    id="city"
                    name="city"
                    value={formik.values.city}
                    options={cities}
                    optionLabel="name"
                    placeholder="Select a City"
                    onChange={(e) => {
                        formik.setFieldValue('city', e.value);
                    }}
                />
                {getFormErrorMessage('city')}
                <Button type="submit" label="Submit" className="mt-2" />
            </form>
        </div>
    )
}
        `,
        typescript: `
import React, { useRef } from "react";
import { useFormik } from 'formik';
import { Dropdown } from 'primereact/dropdown';
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

    const show = (data) => {
        // TO DO: Add detail content to the toast.
        toast.current.show({ severity: 'success', summary: 'Submitted', detail: \`\${data.city.name}\` });
    };

    const formik = useFormik({
        initialValues: {
            city: ''
        },
        validate: (data) => {
            let errors = {};

            if (!data.city) {
                errors.city = 'City is required.';
            }

            return errors;
        },
        onSubmit: (data) => {
            data.city && show(data);
            formik.resetForm();
        }
    });

    const isFormFieldValid = (name) => !!(formik.touched[name] && formik.errors[name]);

    const getFormErrorMessage = (name) => {
        return isFormFieldValid(name) ? <small className="p-error">{formik.errors[name]}</small> : <small className="p-error"> </small>;
    };
    
    return (
        <div className="card flex flex-column align-items-center justify-content-center">
            <form onSubmit={formik.handleSubmit} className="flex flex-column justify-content-center">
                <Toast ref={toast} />
                <Dropdown
                    id="city"
                    name="city"
                    value={formik.values.city}
                    options={cities}
                    optionLabel="name"
                    placeholder="Select a City"
                    onChange={(e) => {
                        formik.setFieldValue('city', e.value);
                    }}
                />
                {getFormErrorMessage('city')}
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
                {/* TO DO: Add demo content. */}
                <p></p>
            </DocSectionText>
            <div className="card flex flex-column align-items-center justify-content-center">
                <form onSubmit={formik.handleSubmit} className="flex flex-column justify-content-center">
                    <Toast ref={toast} />
                    <Dropdown
                        id="city"
                        name="city"
                        value={formik.values.city}
                        options={cities}
                        optionLabel="name"
                        placeholder="Select a City"
                        onChange={(e) => {
                            formik.setFieldValue('city', e.value);
                        }}
                    />
                    {getFormErrorMessage('city')}
                    <Button type="submit" label="Submit" className="mt-2" />
                </form>
            </div>
            <DocSectionCode code={code} dependencies={{ formik: '^2.2.6' }} />
        </>
    );
}
