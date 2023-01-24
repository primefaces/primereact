import { useFormik } from 'formik';
import { useRef } from 'react';
import { Button } from '../../../lib/button/Button';
import { MultiStateCheckbox } from '../../../lib/multistatecheckbox/MultiStateCheckbox';
import { Toast } from '../../../lib/toast/Toast';
import { classNames } from '../../../lib/utils/Utils';
import { DocSectionCode } from '../../common/docsectioncode';
import { DocSectionText } from '../../common/docsectiontext';

export function FormikDoc(props) {
    const toast = useRef(null);

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Submission Received', detail: 'Thank you, we have received your submission.' });
    };

    const options = [
        { value: 'public', icon: 'pi pi-globe' },
        { value: 'protected', icon: 'pi pi-lock-open' },
        { value: 'private', icon: 'pi pi-lock' }
    ];

    const formik = useFormik({
        initialValues: {
            level: ''
        },
        validate: (data) => {
            let errors = {};

            if (!data.level) {
                errors.level = 'Level is required.';
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
<label htmlFor="level" className={classNames('mr-2', { 'p-error': formik.errors.level })}>Level</label>
<MultiStateCheckbox id="level" name="level" value={formik.values.level} onChange={(e) => { formik.setFieldValue('level', e.value) }} options={options} optionValue="value" className={classNames({ 'p-invalid': formik.errors.level })} />
{getFormErrorMessage('level')}
<Button label="Submit" type="submit" icon="pi pi-check" />
        `,
        javascript: `
import React, { useRef } from "react";
import { useFormik } from 'formik';
import { MultiStateCheckbox } from 'primereact/multistatecheckbox';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { classNames } from 'primereact/utils';


export default function FormikDoc() {
    const toast = useRef(null);

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Submission Received', detail: 'Thank you, we have received your submission.' });
    };

    const options = [
        { value: 'public', icon: 'pi pi-globe' },
        { value: 'protected', icon: 'pi pi-lock-open' },
        { value: 'private', icon: 'pi pi-lock' }
    ];

    const formik = useFormik({
        initialValues: {
            level: ''
        },
        validate: (data) => {
            let errors = {};

            if (!data.level) {
                errors.level = 'Level is required.';
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
            <form onSubmit={formik.handleSubmit} className="flex flex-column gap-2">
                <Toast ref={toast} />
                <label htmlFor="level" className={classNames('mr-2', { 'p-error': formik.errors.level })}>
                    Level
                </label>
                <MultiStateCheckbox
                    id="level"
                    name="level"
                    value={formik.values.level}
                    onChange={(e) => {
                        formik.setFieldValue('level', e.value);
                    }}
                    options={options}
                    optionValue="value"
                    className={classNames({ 'p-invalid': formik.errors.level })}
                />
                {getFormErrorMessage('level')}
                <Button label="Submit" type="submit" icon="pi pi-check" />
            </form>
        </div>
    )
}
        `,
        typescript: `
import React, { useRef } from "react";
import { useFormik } from 'formik';
import { MultiStateCheckbox } from 'primereact/multistatecheckbox';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { classNames } from 'primereact/utils';

export default function FormikDoc() {
    const toast = useRef<Toast | null>(null);

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Submission Received', detail: 'Thank you, we have received your submission.' });
    };

    const options = [
        { value: 'public', icon: 'pi pi-globe' },
        { value: 'protected', icon: 'pi pi-lock-open' },
        { value: 'private', icon: 'pi pi-lock' }
    ];

    const formik = useFormik({
        initialValues: {
            level: ''
        },
        validate: (data) => {
            let errors = {};

            if (!data.level) {
                errors.level = 'Level is required.';
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
            <form onSubmit={formik.handleSubmit} className="flex flex-column gap-2">
                <Toast ref={toast} />
                <label htmlFor="level" className={classNames('mr-2', { 'p-error': formik.errors.level })}>
                    Level
                </label>
                <MultiStateCheckbox
                    id="level"
                    name="level"
                    value={formik.values.level}
                    onChange={(e) => {
                        formik.setFieldValue('level', e.value);
                    }}
                    options={options}
                    optionValue="value"
                    className={classNames({ 'p-invalid': formik.errors.level })}
                />
                {getFormErrorMessage('level')}
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
                <form onSubmit={formik.handleSubmit} className="flex flex-column gap-2">
                    <Toast ref={toast} />
                    <label htmlFor="level" className={classNames('mr-2', { 'p-error': formik.errors.level })}>
                        Level
                    </label>
                    <MultiStateCheckbox
                        id="level"
                        name="level"
                        value={formik.values.level}
                        onChange={(e) => {
                            formik.setFieldValue('level', e.value);
                        }}
                        options={options}
                        optionValue="value"
                        className={classNames({ 'p-invalid': formik.errors.level })}
                    />
                    {getFormErrorMessage('level')}
                    <Button label="Submit" type="submit" icon="pi pi-check" />
                </form>
            </div>
            <DocSectionCode code={code} dependencies={{ formik: '^2.2.6' }} />
        </>
    );
}
