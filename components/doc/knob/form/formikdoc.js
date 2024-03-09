import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Button } from '@/components/lib/button/Button';
import { Knob } from '@/components/lib/knob/Knob';
import { Toast } from '@/components/lib/toast/Toast';
import { useFormik } from 'formik';
import { useRef } from 'react';

export function FormikDoc(props) {
    const toast = useRef(null);

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: formik.values.item });
    };

    const formik = useFormik({
        initialValues: {
            item: '0'
        },
        validate: (data) => {
            let errors = {};

            if (data.item === '0') {
                errors.item = 'The value must be greater than zero.';
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
<Knob id="item" name="item" value={formik.values.item} onChange={(e) => { formik.setFieldValue('item', e.value) }} />
<Button type="submit" label="Submit" className="mt-2" />
        `,
        javascript: `
import React, { useRef } from "react";
import { useFormik } from 'formik';
import { Knob } from 'primereact/knob';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';


export default function FormikDoc() {
    const toast = useRef(null);

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: formik.values.item });
    };

    const formik = useFormik({
        initialValues: {
            item: '0'
        },
        validate: (data) => {
            let errors = {};

            if (data.item === '0') {
                errors.item = 'The value must be greater than zero.';
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
            <form onSubmit={formik.handleSubmit} className="flex flex-column align-items-center">
                <Toast ref={toast} />

                <Knob
                    id="item"
                    name="item"
                    value={formik.values.item}
                    onChange={(e) => {
                        formik.setFieldValue('item', e.value);
                    }}
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
import { Knob } from 'primereact/knob';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

export default function FormikDoc() {
    const toast = useRef(null);

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: formik.values.item });
    };

    const formik = useFormik({
        initialValues: {
            item: '0'
        },
        validate: (data) => {
            let errors = {};

            if (data.item === '0') {
                errors.item = 'The value must be greater than zero.';
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
            <form onSubmit={formik.handleSubmit} className="flex flex-column align-items-center">
                <Toast ref={toast} />

                <Knob
                    id="item"
                    name="item"
                    value={formik.values.item}
                    onChange={(e) => {
                        formik.setFieldValue('item', e.value);
                    }}
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
            <div className="card flex justify-content-center">
                <form onSubmit={formik.handleSubmit} className="flex flex-column align-items-center">
                    <Toast ref={toast} />

                    <Knob
                        id="item"
                        name="item"
                        value={formik.values.item}
                        onChange={(e) => {
                            formik.setFieldValue('item', e.value);
                        }}
                    />

                    {getFormErrorMessage('item')}
                    <Button type="submit" label="Submit" className="mt-2" />
                </form>
            </div>
            <DocSectionCode code={code} dependencies={{ formik: '^2.2.6' }} />
        </>
    );
}
