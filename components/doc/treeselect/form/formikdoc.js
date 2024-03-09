import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Button } from '@/components/lib/button/Button';
import { Toast } from '@/components/lib/toast/Toast';
import { TreeSelect } from '@/components/lib/treeselect/TreeSelect';
import { classNames } from '@/components/lib/utils/Utils';
import { useFormik } from 'formik';
import { useEffect, useRef, useState } from 'react';
import { NodeService } from '../../../../service/NodeService';

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
    placeholder="Select Item"
    className={classNames('w-full md:w-20rem', { 'p-invalid': isFormFieldInvalid('item') })}
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
            <form onSubmit={formik.handleSubmit} className="flex flex-column align-items-center gap-2">
                <Toast ref={toast} />
                <TreeSelect
                    id="item"
                    name="item"
                    value={formik.values.item}
                    options={node}
                    placeholder="Select Item"
                    className={classNames('w-full md:w-20rem', { 'p-invalid': isFormFieldInvalid('item') })}
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
import { TreeSelect, TreeSelectChangeEvent } from "primereact/treeselect";
import { TreeNode } from 'primereact/treenode';
import { Toast } from 'primereact/toast';
import { NodeService } from './service/NodeService';

export default function FormikDoc() {
    const toast = useRef(null);
    const [node, setNodes] = useState<TreeNode[] | null>([]);

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
            <form onSubmit={formik.handleSubmit} className="flex flex-column align-items-center gap-2">
                <Toast ref={toast} />
                <TreeSelect
                    id="item"
                    name="item"
                    value={formik.values.item}
                    options={node}
                    placeholder="Select Item"
                    className={classNames('w-full md:w-20rem', { 'p-invalid': isFormFieldInvalid('item') })}
                    onChange={(e: TreeSelectChangeEvent) => {
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
                <form onSubmit={formik.handleSubmit} className="flex flex-column align-items-center gap-2">
                    <Toast ref={toast} />
                    <TreeSelect
                        id="item"
                        name="item"
                        value={formik.values.item}
                        options={node}
                        placeholder="Select Item"
                        className={classNames('w-full md:w-20rem', { 'p-invalid': isFormFieldInvalid('item') })}
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
