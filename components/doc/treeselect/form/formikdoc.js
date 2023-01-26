import { useState, useEffect, useRef } from 'react';
import { useFormik } from 'formik';
import { NodeService } from '../../../../service/NodeService';
import { TreeSelect } from '../../../lib/treeselect/TreeSelect';
import { DocSectionText } from '../../common/docsectiontext';
import { DocSectionCode } from '../../common/docsectioncode';
import { Button } from '../../../lib/button/Button';
import { Toast } from '../../../lib/toast/Toast';
import { classNames } from '../../../lib/utils/Utils';

export function FormikDoc(props) {
    const toast = useRef(null);
    const [node, setNodes] = useState([]);

    useEffect(() => {
        NodeService.getTreeNodes().then((data) => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: 'The form is successfully submitted.' });
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
<TreeSelect
    id="item"
    name="item"
    value={formik.values.item}
    options={node}
    optionLabel="name"
    placeholder="Select Item"
    className={classNames({ 'p-invalid': isFormFieldInvalid('item') })}
    onChange={(e) => {
        formik.setFieldValue('item', e.value);
    }}
/>
{getFormErrorMessage('item')}
<Button type="submit" label="Submit" />
        `,
        javascript: `
import React, { useState, useEffect, useRef } from "react";
import { useFormik } from 'formik';
import { Button } from 'primereact/button';
import { TreeSelect } from "primereact/treeselect";
import { Toast } from 'primereact/toast';
import { NodeService } from './service/NodeService';

export default function FormikDoc() {
    const toast = useRef(null);
    const [node, setNodes] = useState([]);

    useEffect(() => {
        NodeService.getTreeNodes().then((data) => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: 'The form is successfully submitted.'});
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
            <form onSubmit={formik.handleSubmit} className="flex flex-column md:w-20rem w-full gap-2">
                <Toast ref={toast} />
                <TreeSelect
                    id="item"
                    name="item"
                    value={formik.values.item}
                    options={node}
                    optionLabel="name"
                    placeholder="Select Item"
                    className={classNames({ 'p-invalid': isFormFieldInvalid('item') })}
                    onChange={(e) => {
                        formik.setFieldValue('item', e.value);
                    }}
                />
                {getFormErrorMessage('item')}
                <Button type="submit" label="Submit" />
            </form>
        </div>
    )
}
        `,
        typescript: `
import React, { useState, useEffect, useRef } from "react";
import { useFormik } from 'formik';
import { Button } from 'primereact/button';
import { TreeSelect } from "primereact/treeselect";
import { Toast } from 'primereact/toast';
import { NodeService } from './service/NodeService';

export default function FormikDoc() {
    const toast = useRef(null);
    const [node, setNodes] = useState([]);

    useEffect(() => {
        NodeService.getTreeNodes().then((data) => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: 'The form is successfully submitted.'});
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
            <form onSubmit={formik.handleSubmit} className="flex flex-column md:w-20rem w-full gap-2">
                <Toast ref={toast} />
                <TreeSelect
                    id="item"
                    name="item"
                    value={formik.values.item}
                    options={node}
                    optionLabel="name"
                    placeholder="Select Item"
                    className={classNames({ 'p-invalid': isFormFieldInvalid('item') })}
                    onChange={(e) => {
                        formik.setFieldValue('item', e.value);
                    }}
                />
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
                <form onSubmit={formik.handleSubmit} className="flex flex-column md:w-20rem w-full gap-2">
                    <Toast ref={toast} />
                    <TreeSelect
                        id="item"
                        name="item"
                        value={formik.values.item}
                        options={node}
                        optionLabel="name"
                        placeholder="Select Item"
                        className={classNames({ 'p-invalid': isFormFieldInvalid('item') })}
                        onChange={(e) => {
                            formik.setFieldValue('item', e.value);
                        }}
                    />
                    {getFormErrorMessage('item')}
                    <Button type="submit" label="Submit" />
                </form>
            </div>
            <DocSectionCode code={code} service={['NodeService']} dependencies={{ formik: '^2.2.6' }} />
        </>
    );
}
