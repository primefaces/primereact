import { useRef } from 'react';
import { useFormik } from 'formik';
import { DocSectionText } from '../../common/docsectiontext';
import { DocSectionCode } from '../../common/docsectioncode';
import { Button } from '../../../lib/button/Button';
import { Toast } from '../../../lib/toast/Toast';
import { ColorPicker } from '../../../lib/colorpicker/ColorPicker';

export function FormikDoc(props) {
    const toast = useRef(null);

    const show = (data) => {
        // TO DO: Add detail content to the toast.
        toast.current.show({ severity: 'success', summary: 'Submitted', detail: `#${data.color.toUpperCase()}` });
    };

    const formik = useFormik({
        initialValues: {
            color: ''
        },
        validate: (data) => {
            let errors = {};

            if (!data.color) {
                errors.color = 'Color is required.';
            }

            return errors;
        },
        onSubmit: (data) => {
            data.color && show(data);
            formik.resetForm();
        }
    });

    const isFormFieldValid = (name) => !!(formik.touched[name] && formik.errors[name]);

    const getFormErrorMessage = (name) => {
        return isFormFieldValid(name) ? <small className="p-error">{formik.errors[name]}</small> : <small className="p-error"> </small>;
    };

    const code = {
        basic: `
<form onSubmit={formik.handleSubmit} className="flex flex-column align-items-center justify-content-center">
    <Toast ref={toast} />
    <ColorPicker
        id="color"
        name="color"
        value={formik.values.color}
        onChange={(e) => {
            formik.setFieldValue('color', e.value);
        }}
    />
    {getFormErrorMessage('color')}
    <Button type="submit" label="Submit" className="mt-2" />
</form>
        `,
        javascript: `
import React, { useRef } from "react";
import { useFormik } from 'formik';
import { ColorPicker } from 'primereact/colorpicker';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

export default function FormikDoc() {
    const toast = useRef(null);

    const show = (data) => {
        // TO DO: Add detail content to the toast.
        toast.current.show({ severity: 'success', summary: 'Submitted', detail: \`#\${data.color.toUpperCase()}\` });
    };

    const formik = useFormik({
        initialValues: {
            color: 'ff4500'
        },
        validate: (data) => {
            let errors = {};

            if (!data.color) {
                errors.color = 'Color is required.';
            }

            return errors;
        },
        onSubmit: (data) => {
            data && show(data);
            formik.resetForm();
        }
    });

    const isFormFieldValid = (name) => !!(formik.touched[name] && formik.errors[name]);

    const getFormErrorMessage = (name) => {
        return isFormFieldValid(name) ? <small className="p-error">{formik.errors[name]}</small> : <small className="p-error"> </small>;
    };

    return (
        <div className="card flex flex-column align-items-center justify-content-center">
            <form onSubmit={formik.handleSubmit} className="flex flex-column align-items-center justify-content-center">
                <Toast ref={toast} />
                <ColorPicker
                    id="color"
                    name="color"
                    value={formik.values.color}
                    onChange={(e) => {
                        formik.setFieldValue('color', e.value);
                    }}
                />

                {getFormErrorMessage('color')}
                <Button type="submit" label="Submit" className="mt-2" />
            </form>
        </div>
    )
}
        `,
        typescript: `
import React, { useRef } from "react";
import { useFormik } from 'formik';
import { ColorPicker } from 'primereact/colorpicker';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

export default function FormikDoc() {
    const toast = useRef(null);

    const show = (data) => {
        // TO DO: Add detail content to the toast.
        toast.current.show({ severity: 'success', summary: 'Submitted', detail: \`#\${data.color.toUpperCase()}\` });
    };

    const formik = useFormik({
        initialValues: {
            color: 'ff4500'
        },
        validate: (data) => {
            let errors = {};

            if (!data.color) {
                errors.color = 'Color is required.';
            }

            return errors;
        },
        onSubmit: (data) => {
            data && show(data);
            formik.resetForm();
        }
    });

    const isFormFieldValid = (name) => !!(formik.touched[name] && formik.errors[name]);

    const getFormErrorMessage = (name) => {
        return isFormFieldValid(name) ? <small className="p-error">{formik.errors[name]}</small> : <small className="p-error"> </small>;
    };

    return (
        <div className="card flex flex-column align-items-center justify-content-center">
            <form onSubmit={formik.handleSubmit} className="flex flex-column align-items-center justify-content-center">
                <Toast ref={toast} />
                <ColorPicker
                    id="color"
                    name="color"
                    value={formik.values.color}
                    onChange={(e) => {
                        formik.setFieldValue('color', e.value);
                    }}
                />

                {getFormErrorMessage('color')}
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
                <form onSubmit={formik.handleSubmit} className="flex flex-column align-items-center justify-content-center">
                    <Toast ref={toast} />
                    <ColorPicker
                        id="color"
                        name="color"
                        value={formik.values.color}
                        onChange={(e) => {
                            formik.setFieldValue('color', e.value);
                        }}
                    />

                    {getFormErrorMessage('color')}
                    <Button type="submit" label="Submit" className="mt-2" />
                </form>
            </div>
            <DocSectionCode code={code} dependencies={{ formik: '^2.2.6' }} />
        </>
    );
}
