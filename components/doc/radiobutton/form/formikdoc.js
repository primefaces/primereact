import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Button } from '@/components/lib/button/Button';
import { RadioButton } from '@/components/lib/radiobutton/RadioButton';
import { Toast } from '@/components/lib/toast/Toast';
import { useFormik } from 'formik';
import { useRef } from 'react';

export function FormikDoc(props) {
    const toast = useRef(null);

    const radioBtns = [
        {
            id: 'cheese',
            name: 'cheese',
            value: 'Cheese',
            inputId: 'f1'
        },
        {
            id: 'mushroom',
            name: 'mushroom',
            value: 'Mushroom',
            inputId: 'f2'
        },
        {
            id: 'pepper',
            name: 'pepper',
            value: 'Pepper',
            inputId: 'f3'
        },
        {
            id: 'onion',
            name: 'onion',
            value: 'Onion',
            inputId: 'f4'
        }
    ];

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: formik.values.item });
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
{radioBtns.map((btn, i) => {
    return (
        <div key={i} className="flex align-items-center mr-3">
        <RadioButton
            {...btn}
                checked={formik.values.item === btn.value}
                onChange={(e) => {
                    formik.setFieldValue('item', e.value);
                }}
                />
            <label htmlFor={btn.inputId} className="ml-1">
            {btn.value}
                </label>
            </div>
        );
})}
</div>
{getFormErrorMessage('item')}
<Button type="submit" label="Submit" />
`,
        javascript: `
import React, { useRef } from "react";
import { useFormik } from 'formik';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { RadioButton } from "primereact/radiobutton";

export default function FormikDoc() {
    const toast = useRef(null);

    const radioBtns = [
        {
            id: 'cheese',
            name: 'cheese',
            value: 'Cheese',
            inputId: 'f1'
        },
        {
            id: 'mushroom',
            name: 'mushroom',
            value: 'Mushroom',
            inputId: 'f2'
        },
        {
            id: 'pepper',
            name: 'pepper',
            value: 'Pepper',
            inputId: 'f3'
        },
        {
            id: 'onion',
            name: 'onion',
            value: 'Onion',
            inputId: 'f4'
        }
    ];

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: formik.values.item });
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
            <form onSubmit={formik.handleSubmit} className="flex flex-column gap-2">
                <div>Please choose your ingredient.</div>
                <div className="flex">
                    <Toast ref={toast} />
                    {radioBtns.map((btn, i) => {
                        return (
                            <div key={i} className="flex align-items-center mr-3">
                                <RadioButton
                                    {...btn}
                                    checked={formik.values.item === btn.value}
                                    onChange={(e) => {
                                        formik.setFieldValue('item', e.value);
                                    }}
                                />
                                <label htmlFor={btn.inputId} className="ml-1">
                                    {btn.value}
                                </label>
                            </div>
                        );
                    })}
                </div>
                {getFormErrorMessage('item')}
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
import { RadioButton } from "primereact/radiobutton";

export default function FormikDoc() {
    const toast = useRef(null);

    const radioBtns = [
        {
            id: 'cheese',
            name: 'cheese',
            value: 'Cheese',
            inputId: 'f1'
        },
        {
            id: 'mushroom',
            name: 'mushroom',
            value: 'Mushroom',
            inputId: 'f2'
        },
        {
            id: 'pepper',
            name: 'pepper',
            value: 'Pepper',
            inputId: 'f3'
        },
        {
            id: 'onion',
            name: 'onion',
            value: 'Onion',
            inputId: 'f4'
        }
    ];

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: formik.values.item });
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
            <form onSubmit={formik.handleSubmit} className="flex flex-column gap-2">
                <div>Please choose your ingredient.</div>
                <div className="flex">
                    <Toast ref={toast} />
                    {radioBtns.map((btn, i) => {
                        return (
                            <div key={i} className="flex align-items-center mr-3">
                                <RadioButton
                                    {...btn}
                                    checked={formik.values.item === btn.value}
                                    onChange={(e) => {
                                        formik.setFieldValue('item', e.value);
                                    }}
                                />
                                <label htmlFor={btn.inputId} className="ml-1">
                                    {btn.value}
                                </label>
                            </div>
                        );
                    })}
                </div>
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
                    <div>Please choose your ingredient.</div>
                    <div className="flex">
                        <Toast ref={toast} />
                        {radioBtns.map((btn, i) => {
                            return (
                                <div key={i} className="flex align-items-center mr-3">
                                    <RadioButton
                                        {...btn}
                                        checked={formik.values.item === btn.value}
                                        onChange={(e) => {
                                            formik.setFieldValue('item', e.value);
                                        }}
                                    />
                                    <label htmlFor={btn.inputId} className="ml-1">
                                        {btn.value}
                                    </label>
                                </div>
                            );
                        })}
                    </div>
                    {getFormErrorMessage('item')}
                    <Button type="submit" label="Submit" />
                </form>
            </div>
            <DocSectionCode code={code} dependencies={{ formik: '^2.2.6' }} />
        </>
    );
}
