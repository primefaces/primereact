import { useRef } from 'react';
import { useFormik } from 'formik';
import { DocSectionText } from '../../common/docsectiontext';
import { DocSectionCode } from '../../common/docsectioncode';
import { Button } from '../../../lib/button/Button';
import { Toast } from '../../../lib/toast/Toast';
import { classNames } from '../../../lib/utils/Utils';
import { Password } from '../../../lib/password/Password';

export function FormikDoc(props) {
    const toast = useRef(null);

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Submission Received', detail: 'Thank you, we have received your submission.' });
    };

    const formik = useFormik({
        initialValues: {
            password: ''
        },
        validate: (data) => {
            let errors = {};

            if (!data.password) {
                errors.password = 'Password is required.';
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
    <label htmlFor="password" className={classNames({ 'p-error': isFormFieldValid('password') })}>
        Password
    </label>
    <Password
        id="password"
        name="password"
        rows={5}
        cols={30}
        className={classNames({ 'p-invalid': isFormFieldValid('password') })}
        value={formik.values.password}
        feedback={false}
        onChange={(e) => {
            formik.setFieldValue('password', e.target.value);
        }}
    />
`,
        javascript: `
import React, { useRef } from "react";
import { useFormik } from 'formik';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { classNames } from 'primereact/utils';
import { Toast } from 'primereact/toast';

export default function FormikDoc() {
    const toast = useRef(null);

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Submission Received', detail: 'Thank you, we have received your submission.' });
    };

    const formik = useFormik({
        initialValues: {
            password: ''
        },
        validate: (data) => {
            let errors = {};

            if (!data.password) {
                errors.password = 'Password is required.';
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
                        <label htmlFor="password" className={classNames({ 'p-error': isFormFieldValid('password') })}>
                            Password
                        </label>
                        <Password
                            id="password"
                            name="password"
                            rows={5}
                            cols={30}
                            className={classNames({ 'p-invalid': isFormFieldValid('password') })}
                            value={formik.values.password}
                            feedback={false}
                            onChange={(e) => {
                                formik.setFieldValue('password', e.target.value);
                            }}
                        />
                        {getFormErrorMessage('password')}
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
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { classNames } from 'primereact/utils';
import { Toast } from 'primereact/toast';


export default function FormikDoc() {
    const toast = useRef(null);

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Submission Received', detail: 'Thank you, we have received your submission.' });
    };

    const formik = useFormik({
        initialValues: {
            password: ''
        },
        validate: (data) => {
            let errors = {};

            if (!data.password) {
                errors.password = 'Password is required.';
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
                        <label htmlFor="password" className={classNames({ 'p-error': isFormFieldValid('password') })}>
                            Password
                        </label>
                        <Password
                            id="password"
                            name="password"
                            rows={5}
                            cols={30}
                            className={classNames({ 'p-invalid': isFormFieldValid('password') })}
                            value={formik.values.password}
                            feedback={false}
                            onChange={(e) => {
                                formik.setFieldValue('password', e.target.value);
                            }}
                        />
                        {getFormErrorMessage('password')}
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
                            <label htmlFor="password" className={classNames({ 'p-error': isFormFieldValid('password') })}>
                                Password
                            </label>
                            <Password
                                id="password"
                                name="password"
                                rows={5}
                                cols={30}
                                className={classNames({ 'p-invalid': isFormFieldValid('password') })}
                                value={formik.values.password}
                                feedback={false}
                                onChange={(e) => {
                                    formik.setFieldValue('password', e.target.value);
                                }}
                            />
                            {getFormErrorMessage('password')}
                        </div>
                    </div>
                    <Button label="Submit" type="submit" icon="pi pi-check mt-2" />
                </form>
            </div>
            <DocSectionCode code={code} dependencies={{ formik: '^2.2.6' }} />
        </>
    );
}
