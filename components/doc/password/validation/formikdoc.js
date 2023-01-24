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
        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: formik.values.item });
    };

    const formik = useFormik({
        initialValues: {
            item: ''
        },
        validate: (data) => {
            let errors = {};

            if (!data.item) {
                errors.item = 'Password is required.';
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
<Toast ref={toast} />
    <label htmlFor="item" className={classNames({ 'p-error': isFormFieldInvalid('item') })}>
        Password
    </label>
    <Password
        id="item"
        name="item"
        rows={5}
        cols={30}
        className={classNames({ 'p-invalid': isFormFieldInvalid('item') })}
        value={formik.values.item}
        feedback={false}
        onChange={(e) => {
            formik.setFieldValue('item', e.target.value);
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
        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: formik.values.item });
    };

    const formik = useFormik({
        initialValues: {
            item: ''
        },
        validate: (data) => {
            let errors = {};

            if (!data.item) {
                errors.item = 'Password is required.';
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
            <form onSubmit={formik.handleSubmit} className="flex flex-column">
                <Toast ref={toast} />
                <div className="field">
                    <div className="flex flex-column">
                        <label htmlFor="item" className={classNames({ 'p-error': isFormFieldInvalid('item') })}>
                            Password
                        </label>
                        <Password
                            id="item"
                            name="item"
                            rows={5}
                            cols={30}
                            className={classNames({ 'p-invalid': isFormFieldInvalid('item') })}
                            value={formik.values.item}
                            feedback={false}
                            onChange={(e) => {
                                formik.setFieldValue('item', e.target.value);
                            }}
                        />
                        {getFormErrorMessage('item')}
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
        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: formik.values.item });
    };

    const formik = useFormik({
        initialValues: {
            item: ''
        },
        validate: (data) => {
            let errors = {};

            if (!data.item) {
                errors.item = 'Password is required.';
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
            <form onSubmit={formik.handleSubmit} className="flex flex-column">
                <Toast ref={toast} />
                <div className="field">
                    <div className="flex flex-column">
                        <label htmlFor="item" className={classNames({ 'p-error': isFormFieldInvalid('item') })}>
                            Password
                        </label>
                        <Password
                            id="item"
                            name="item"
                            rows={5}
                            cols={30}
                            className={classNames({ 'p-invalid': isFormFieldInvalid('item') })}
                            value={formik.values.item}
                            feedback={false}
                            onChange={(e) => {
                                formik.setFieldValue('item', e.target.value);
                            }}
                        />
                        {getFormErrorMessage('item')}
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
                            <label htmlFor="item" className={classNames({ 'p-error': isFormFieldInvalid('item') })}>
                                Password
                            </label>
                            <Password
                                id="item"
                                name="item"
                                rows={5}
                                cols={30}
                                className={classNames({ 'p-invalid': isFormFieldInvalid('item') })}
                                value={formik.values.item}
                                feedback={false}
                                onChange={(e) => {
                                    formik.setFieldValue('item', e.target.value);
                                }}
                            />
                            {getFormErrorMessage('item')}
                        </div>
                    </div>
                    <Button label="Submit" type="submit" icon="pi pi-check mt-2" />
                </form>
            </div>
            <DocSectionCode code={code} dependencies={{ formik: '^2.2.6' }} />
        </>
    );
}
