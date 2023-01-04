import React, { useRef } from 'react';
import { useFormik } from 'formik';
import { DocSectionText } from '../../common/docsectiontext';
import { DocSectionCode } from '../../common/docsectioncode';
import { Button } from '../../../lib/button/Button';
import { Toast } from '../../../lib/toast/Toast';
import { RadioButton } from '../../../lib/radiobutton/RadioButton';
import { classNames } from '../../../lib/utils/Utils';

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
        toast.current.show({ severity: 'success', summary: 'Submission Received', detail: 'Thank you, we have received your submission.' });
    };

    const formik = useFormik({
        initialValues: {
            activeRadioButton: ''
        },
        validate: (data) => {
            let errors = {};

            if (!data.activeRadioButton) {
                errors.activeRadioButton = 'Option is required.';
            }

            return errors;
        },
        onSubmit: (data) => {
            data.activeRadioButton && show();
            formik.resetForm();
        }
    });

    const isFormFieldValid = (name) => !!(formik.touched[name] && formik.errors[name]);

    const getFormErrorMessage = (name) => {
        return isFormFieldValid(name) ? <small className="p-error ml-1">{formik.errors[name]}</small> : <small className="p-error"> </small>;
    };

    const code = {
        basic: `
<Toast ref={toast} />
<div className="flex">
    {radioBtns.map((btn, i) => {
        return (
            <div key={i} className="flex align-items-center mr-3">
                <RadioButton
                    {...btn}
                    checked={formik.values.activeRadioButton === btn.value}
                    onChange={(e) => {
                        formik.setFieldValue('activeRadioButton', e.value);
                    }}
                />
                <label htmlFor={btn.inputId} className="ml-1">
                    {btn.value}
                </label>
            </div>
        );
    })}
</div>
`,
        javascript: `
import React, { useRef } from "react";
import { useFormik } from 'formik';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { classNames } from 'primereact/utils';
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
        toast.current.show({ severity: 'success', summary: 'Submission Received', detail: 'Thank you, we have received your submission.' });
    };

    const formik = useFormik({
        initialValues: {
            activeRadioButton: ''
        },
        validate: (data) => {
            let errors = {};

            if (!data.activeRadioButton) {
                errors.activeRadioButton = 'Option is required.';
            }

            return errors;
        },
        onSubmit: (data) => {
            data.activeRadioButton && show();
            formik.resetForm();
        }
    });

    const isFormFieldValid = (name) => !!(formik.touched[name] && formik.errors[name]);

    const getFormErrorMessage = (name) => {
        return isFormFieldValid(name) ? <small className="p-error ml-1">{formik.errors[name]}</small> : <small className="p-error"> </small>;
    };

    return (
        <div className="card flex justify-content-center">
            <div className="flex flex-column">
                <form onSubmit={formik.handleSubmit} className="p-fluid justify-content-center">
                    <div className={classNames('mb-3', { 'p-error': formik.errors.activeRadioButton })}>Please choose your ingredient.</div>
                    <div className="flex flex-column gap-2">
                        <Toast ref={toast} />
                        <div className="flex">
                            {radioBtns.map((btn, i) => {
                                return (
                                    <div key={i} className="flex align-items-center mr-3">
                                        <RadioButton
                                            {...btn}
                                            checked={formik.values.activeRadioButton === btn.value}
                                            onChange={(e) => {
                                                formik.setFieldValue('activeRadioButton', e.value);
                                            }}
                                        />
                                        <label htmlFor={btn.inputId} className="ml-1">
                                            {btn.value}
                                        </label>
                                    </div>
                                );
                            })}
                        </div>
                        {getFormErrorMessage('activeRadioButton')}
                    </div>
                    <Button type="submit" label="Submit" className="mt-2" />
                </form>
            </div>
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
        toast.current.show({ severity: 'success', summary: 'Submission Received', detail: 'Thank you, we have received your submission.' });
    };

    const formik = useFormik({
        initialValues: {
            activeRadioButton: ''
        },
        validate: (data) => {
            let errors = {};

            if (!data.activeRadioButton) {
                errors.activeRadioButton = 'Option is required.';
            }

            return errors;
        },
        onSubmit: (data) => {
            data.activeRadioButton && show();
            formik.resetForm();
        }
    });

    const isFormFieldValid = (name) => !!(formik.touched[name] && formik.errors[name]);

    const getFormErrorMessage = (name) => {
        return isFormFieldValid(name) ? <small className="p-error ml-1">{formik.errors[name]}</small> : <small className="p-error"> </small>;
    };

    return (
        <div className="card flex justify-content-center">
            <div className="flex flex-column">
                <form onSubmit={formik.handleSubmit} className="p-fluid justify-content-center">
                    <div className={classNames('mb-3', { 'p-error': formik.errors.activeRadioButton })}>Please choose your ingredient.</div>
                    <div className="flex flex-column gap-2">
                        <Toast ref={toast} />
                        <div className="flex">
                            {radioBtns.map((btn, i) => {
                                return (
                                    <div key={i} className="flex align-items-center mr-3">
                                        <RadioButton
                                            {...btn}
                                            checked={formik.values.activeRadioButton === btn.value}
                                            onChange={(e) => {
                                                formik.setFieldValue('activeRadioButton', e.value);
                                            }}
                                        />
                                        <label htmlFor={btn.inputId} className="ml-1">
                                            {btn.value}
                                        </label>
                                    </div>
                                );
                            })}
                        </div>
                        {getFormErrorMessage('activeRadioButton')}
                    </div>
                    <Button type="submit" label="Submit" className="mt-2" />
                </form>
            </div>
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
            <div className="card flex justify-content-center">
                <div className="flex flex-column">
                    <form onSubmit={formik.handleSubmit} className="p-fluid justify-content-center">
                        <div className={classNames('mb-3', { 'p-error': formik.errors.activeRadioButton })}>Please choose your ingredient.</div>
                        <div className="flex flex-column gap-2">
                            <Toast ref={toast} />
                            <div className="flex">
                                {radioBtns.map((btn, i) => {
                                    return (
                                        <div key={i} className="flex align-items-center mr-3">
                                            <RadioButton
                                                {...btn}
                                                checked={formik.values.activeRadioButton === btn.value}
                                                onChange={(e) => {
                                                    formik.setFieldValue('activeRadioButton', e.value);
                                                }}
                                            />
                                            <label htmlFor={btn.inputId} className="ml-1">
                                                {btn.value}
                                            </label>
                                        </div>
                                    );
                                })}
                            </div>
                            {getFormErrorMessage('activeRadioButton')}
                        </div>
                        <Button type="submit" label="Submit" className="mt-2" />
                    </form>
                </div>
            </div>

            <DocSectionCode code={code} dependencies={{ formik: '^2.2.6' }} />
        </>
    );
}
