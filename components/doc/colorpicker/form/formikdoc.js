import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Button } from '@/components/lib/button/Button';
import { ColorPicker } from '@/components/lib/colorpicker/ColorPicker';
import { Toast } from '@/components/lib/toast/Toast';
import { classNames } from '@/components/lib/utils/Utils';
import { useFormik } from 'formik';
import { useRef } from 'react';

export function FormikDoc(props) {
    const toast = useRef(null);

    const show = (data) => {
        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: `#${data.color.toUpperCase()}` });
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

    const isFormFieldInvalid = (name) => !!(formik.touched[name] && formik.errors[name]);

    const getFormErrorMessage = (name) => {
        return isFormFieldInvalid(name) ? <small className="p-error">{formik.errors[name]}</small> : <small className="p-error">&nbsp;</small>;
    };

    const code = {
        basic: `
<Toast ref={toast} />
<ColorPicker
    id="color"
    name="color"
    value={formik.values.color}
    className={classNames({ 'p-invalid': isFormFieldInvalid('item') })}
    onChange={(e) => {
        formik.setFieldValue('color', e.value);
    }}
/>
{getFormErrorMessage('color')}
<Button type="submit" label="Submit" />
        `,
        javascript: `
import React, { useRef } from "react";
import { useFormik } from 'formik';
import { ColorPicker } from 'primereact/colorpicker';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { classNames } from 'primereact/utils';

export default function FormikDoc() {
    const toast = useRef(null);

    const show = (data) => {
        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: \`#\${data.color.toUpperCase()}\` });
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

    const isFormFieldInvalid = (name) => !!(formik.touched[name] && formik.errors[name]);

    const getFormErrorMessage = (name) => {
        return isFormFieldInvalid(name) ? <small className="p-error">{formik.errors[name]}</small> : <small className="p-error">&nbsp;</small>;
    };

    return (
        <div className="card flex justify-content-center">
            <form onSubmit={formik.handleSubmit} className="flex flex-column align-items-center gap-2">
                <Toast ref={toast} />
                <ColorPicker
                    id="color"
                    name="color"
                    value={formik.values.color}
                    className={classNames({ 'p-invalid': isFormFieldInvalid('item') })}
                    onChange={(e) => {
                        formik.setFieldValue('color', e.value);
                    }}
                />

                {getFormErrorMessage('color')}
                <Button type="submit" label="Submit" />
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
import { classNames } from 'primereact/utils';

export default function FormikDoc() {
    const toast = useRef(null);

    const show = (data) => {
        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: \`#\${data.color.toUpperCase()}\` });
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

    const isFormFieldInvalid = (name) => !!(formik.touched[name] && formik.errors[name]);

    const getFormErrorMessage = (name) => {
        return isFormFieldInvalid(name) ? <small className="p-error">{formik.errors[name]}</small> : <small className="p-error">&nbsp;</small>;
    };

    return (
        <div className="card flex justify-content-center">
            <form onSubmit={formik.handleSubmit} className="flex flex-column align-items-center gap-2">
                <Toast ref={toast} />
                <ColorPicker
                    id="color"
                    name="color"
                    value={formik.values.color}
                    className={classNames({ 'p-invalid': isFormFieldInvalid('item') })}
                    onChange={(e) => {
                        formik.setFieldValue('color', e.value);
                    }}
                />

                {getFormErrorMessage('color')}
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
            <div className="card flex justify-content-center ">
                <form onSubmit={formik.handleSubmit} className="flex flex-column align-items-center gap-2">
                    <Toast ref={toast} />
                    <ColorPicker
                        id="color"
                        name="color"
                        value={formik.values.color}
                        className={classNames({ 'p-invalid': isFormFieldInvalid('color') })}
                        onChange={(e) => {
                            formik.setFieldValue('color', e.value);
                        }}
                    />

                    {getFormErrorMessage('color')}
                    <Button type="submit" label="Submit" />
                </form>
            </div>
            <DocSectionCode code={code} dependencies={{ formik: '^2.2.6' }} />
        </>
    );
}
