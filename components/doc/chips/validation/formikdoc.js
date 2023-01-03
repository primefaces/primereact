import { useRef } from 'react';
import { useFormik } from 'formik';
import { DocSectionText } from '../../common/docsectiontext';
import { DocSectionCode } from '../../common/docsectioncode';
import { Button } from '../../../lib/button/Button';
import { Toast } from '../../../lib/toast/Toast';
import { Chips } from '../../../lib/chips/Chips';

export function FormikDoc(props) {
    const toast = useRef(null);

    const show = (data) => {
        // TO DO: Add detail content to the toast.
        toast.current.show({ severity: 'success', summary: 'Submitted', detail: `${data.chipArray}` });
    };

    const formik = useFormik({
        initialValues: {
            chipArray: []
        },
        validate: (data) => {
            let errors = {};

            if (!data.chipArray.length > 0) {
                errors.chipArray = 'At least 1 chip required.';
            }

            return errors;
        },
        onSubmit: (data) => {
            data.chipArray.length > 0 && show(data);
            formik.resetForm();
        }
    });

    const isFormFieldValid = (name) => !!(formik.touched[name] && formik.errors[name]);

    const getFormErrorMessage = (name) => {
        return isFormFieldValid(name) ? <small className="p-error">{formik.errors[name]}</small> : <small className="p-error p-1"> </small>;
    };

    const code = {
        basic: `
<Toast ref={toast} />
<Chips id="chipArray" name="chipArray" value={ formik.values.chipArray } onChange={(e) => { formik.setFieldValue('chipArray', e.value) }}/>
<Button type="submit" label="Submit" className="mt-2" />
        `,
        javascript: `
import React, { useRef } from "react";
import { useFormik } from 'formik';
import { Chips } from 'primereact/chips';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

export default function FormikDoc() {
    const toast = useRef(null);
        
    const show = (data) => {
        toast.current.show({ severity: 'success', summary: 'Submitted', detail: \`\${data.chipArray}\` });
    };

    const formik = useFormik({
        initialValues: {
            chipArray: []
        },
        validate: (data) => {
            let errors = {};

            if (!data.chipArray.length > 0) {
                errors.chipArray = 'At least 1 chip required.';
            }

            return errors;
        },
        onSubmit: (data) => {
            data.chipArray.length > 0 && show(data);
            formik.resetForm();
        }
    });

    const isFormFieldValid = (name) => !!(formik.touched[name] && formik.errors[name]);

    const getFormErrorMessage = (name) => {
        return isFormFieldValid(name) ? <small className="p-error">{formik.errors[name]}</small> : <small className="p-error"> </small>;
    };

    return (
        <div className="card flex justify-content-center">
            <form onSubmit={formik.handleSubmit} className="p-fluid">
                <Toast ref={toast} />
                <Chips
                    id="chipArray"
                    name="chipArray"
                    value={formik.values.chipArray}
                    onChange={(e) => {
                        formik.setFieldValue('chipArray', e.value);
                    }}
                />
                {getFormErrorMessage('chipArray')}
                <Button type="submit" label="Submit" className="mt-2" />
            </form>
        </div>
    )
}
        `,
        typescript: `
import React, { useRef } from "react";
import { useFormik } from 'formik';
import { Chips } from 'primereact/chips';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

export default function FormikDoc() {
    const toast = useRef(null);
        
    const show = (data) => {
        toast.current.show({ severity: 'success', summary: 'Submitted', detail: \`\${data.chipArray}\` });
    };

    const formik = useFormik({
        initialValues: {
            chipArray: []
        },
        validate: (data) => {
            let errors = {};

            if (!data.chipArray.length > 0) {
                errors.chipArray = 'At least 1 chip required.';
            }

            return errors;
        },
        onSubmit: (data) => {
            data.chipArray.length > 0 && show(data);
            formik.resetForm();
        }
    });

    const isFormFieldValid = (name) => !!(formik.touched[name] && formik.errors[name]);

    const getFormErrorMessage = (name) => {
        return isFormFieldValid(name) ? <small className="p-error">{formik.errors[name]}</small> : <small className="p-error"> </small>;
    };

    return (
        <div className="card flex justify-content-center">
            <form onSubmit={formik.handleSubmit} className="p-fluid">
                <Toast ref={toast} />
                <Chips
                    id="chipArray"
                    name="chipArray"
                    value={formik.values.chipArray}
                    onChange={(e) => {
                        formik.setFieldValue('chipArray', e.value);
                    }}
                />
                {getFormErrorMessage('chipArray')}
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
            <div className="card flex justify-content-center">
                <form onSubmit={formik.handleSubmit} className="p-fluid">
                    <Toast ref={toast} />
                    <Chips
                        id="chipArray"
                        name="chipArray"
                        value={formik.values.chipArray}
                        onChange={(e) => {
                            formik.setFieldValue('chipArray', e.value);
                        }}
                    />
                    {getFormErrorMessage('chipArray')}
                    <Button type="submit" label="Submit" className="mt-2" />
                </form>
            </div>
            <DocSectionCode code={code} dependencies={{ formik: '^2.2.6' }} />
        </>
    );
}
