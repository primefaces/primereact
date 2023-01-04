import { useRef } from 'react';
import { useFormik } from 'formik';
import { DocSectionText } from '../../common/docsectiontext';
import { DocSectionCode } from '../../common/docsectioncode';
import { Button } from '../../../lib/button/Button';
import { Toast } from '../../../lib/toast/Toast';
import { InputTextarea } from '../../../lib/inputtextarea/InputTextarea';
import { classNames } from '../../../lib/utils/Utils';

export function FormikDoc(props) {
    const toast = useRef(null);

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Submission Received', detail: 'Thank you, we have received your submission.' });
    };

    const formik = useFormik({
        initialValues: {
            description: ''
        },
        validate: (data) => {
            let errors = {};

            if (!data.description) {
                errors.description = 'Description is required.';
            }

            return errors;
        },
        onSubmit: (data) => {
            data && show();
            formik.resetForm();
        }
    });

    const isFormFieldValid = (name) => !!(formik.touched[name] && formik.errors[name]);

    const getFormErrorMessage = (name) => {
        return isFormFieldValid(name) ? <small className="p-error">{formik.errors[name]}</small> : <small className="p-error"> </small>;
    };

    const code = {
        basic: `
<Toast ref={toast} />
<label htmlFor="description" className={classNames({ 'p-error': isFormFieldValid('description') })}>
    Description*
</label>
<InputTextarea
    id="description"
    name="description"
    rows={5}
    cols={30}
    className={classNames({ 'p-invalid': isFormFieldValid('description') })}
    value={formik.values.description}
    onChange={(e) => {
        formik.setFieldValue('description', e.target.value);
    }}
/>
<Button label="Submit" type="submit" icon="pi pi-check mt-2" />
        `,
        javascript: `
import React, { useRef } from "react";
import { useFormik } from 'formik';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import { classNames } from 'primereact/utils';
import { Toast } from 'primereact/toast';


export default function FormikDoc() {
    const toast = useRef(null);
        
    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Submission Received', detail: "Thank you, we have received your submission." });
    };

    const formik = useFormik({
        initialValues: {
            description: ''
        },
        validate: (data) => {
            let errors = {};

            if (!data.description) {
                errors.description = 'Description is required.';
            }

            return errors;
        },
        onSubmit: (data) => {
            data && show();
            formik.resetForm();
        }
    });

    const isFormFieldValid = (name) => !!(formik.touched[name] && formik.errors[name]);

    const getFormErrorMessage = (name) => {
        return isFormFieldValid(name) ? <small className="p-error">{formik.errors[name]}</small> : <small className="p-error"> </small>;
    };

    return (
        <div className="card flex justify-content-center">
            <form onSubmit={formik.handleSubmit} className="flex flex-column">
                <Toast ref={toast} />
                <div className="field">
                    <div className="flex flex-column">
                        <label htmlFor="description" className={classNames({ 'p-error': isFormFieldValid('description') })}>
                            Description*
                        </label>
                        <InputTextarea
                            id="description"
                            name="description"
                            rows={5}
                            cols={30}
                            className={classNames({ 'p-invalid': isFormFieldValid('description') })}
                            value={formik.values.description}
                            onChange={(e) => {
                                formik.setFieldValue('description', e.target.value);
                            }}
                        />
                        {getFormErrorMessage('description')}
                    </div>
                </div>
                <Button label="Submit" type="submit" icon="pi pi-check mt-2" />
            </form>
        </div>
    )
}
        `,
        typescript: `
import React, { useRef } from "react";
import { useFormik } from 'formik';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import { classNames } from 'primereact/utils';
import { Toast } from 'primereact/toast';

export default function FormikDoc() {
    const toast = useRef<any>(null);
        
    const show = ():void => {
        toast.current.show({ severity: 'success', summary: 'Submission Received', detail: "Thank you, we have received your submission." });
    };

    const formik = useFormik({
        initialValues: {
            description: ''
        },
        validate: (data) => {
            let errors = {};

            if (!data.description) {
                errors.description = 'Description is required.';
            }

            return errors;
        },
        onSubmit: (data) => {
            data && show();
            formik.resetForm();
        }
    });

    const isFormFieldValid = (name) => !!(formik.touched[name] && formik.errors[name]);

    const getFormErrorMessage = (name) => {
        return isFormFieldValid(name) ? <small className="p-error">{formik.errors[name]}</small> : <small className="p-error"> </small>;
    };

    return (
        <div className="card flex justify-content-center">
            <form onSubmit={formik.handleSubmit} className="flex flex-column">
                <Toast ref={toast} />
                <div className="field">
                    <div className="flex flex-column">
                        <label htmlFor="description" className={classNames({ 'p-error': isFormFieldValid('description') })}>
                            Description*
                        </label>
                        <InputTextarea
                            id="description"
                            name="description"
                            rows={5}
                            cols={30}
                            className={classNames({ 'p-invalid': isFormFieldValid('description') })}
                            value={formik.values.description}
                            onChange={(e) => {
                                formik.setFieldValue('description', e.target.value);
                            }}
                        />
                        {getFormErrorMessage('description')}
                    </div>
                </div>
                <Button label="Submit" type="submit" icon="pi pi-check mt-2" />
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
            <div className="card flex justify-content-center">
                <form onSubmit={formik.handleSubmit} className="flex flex-column">
                    <Toast ref={toast} />
                    <div className="field">
                        <div className="flex flex-column">
                            <label htmlFor="description" className={classNames({ 'p-error': isFormFieldValid('description') })}>
                                Description*
                            </label>
                            <InputTextarea
                                id="description"
                                name="description"
                                rows={5}
                                cols={30}
                                className={classNames({ 'p-invalid': isFormFieldValid('description') })}
                                value={formik.values.description}
                                onChange={(e) => {
                                    formik.setFieldValue('description', e.target.value);
                                }}
                            />
                            {getFormErrorMessage('description')}
                        </div>
                    </div>
                    <Button label="Submit" type="submit" icon="pi pi-check mt-2" />
                </form>
            </div>
            <DocSectionCode code={code} dependencies={{ formik: '^2.2.6' }} />
        </>
    );
}
