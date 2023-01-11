import { useState, useEffect, useRef } from 'react';
import { useFormik } from 'formik';
import { NodeService } from '../../../../service/NodeService';
import { TreeSelect } from '../../../lib/treeselect/TreeSelect';
import { DocSectionText } from '../../common/docsectiontext';
import { DocSectionCode } from '../../common/docsectioncode';
import { Button } from '../../../lib/button/Button';
import { Toast } from '../../../lib/toast/Toast';

export function FormikDoc(props) {
    const toast = useRef(null);
    const [node, setNodes] = useState([]);

    useEffect(() => {
        NodeService.getTreeNodes().then((data) => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Submission Received', detail: 'Thank you, we have received your submission.' });
    };

    const formik = useFormik({
        initialValues: {
            node: ''
        },
        validate: (data) => {
            let errors = {};

            if (!data.node) {
                errors.node = 'Item is required.';
            }

            return errors;
        },
        onSubmit: (data) => {
            data.node && show();
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
<TreeSelect
    id="node"
    name="node"
    value={formik.values.node}
    options={node}
    optionLabel="name"
    placeholder="Select Item"
    onChange={(e) => {
        formik.setFieldValue('node', e.value);
    }}
/>
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
        toast.current.show({ severity: 'success', summary: 'Submission Received', detail: 'Thank you, we have received your submission.' });
    };

    const formik = useFormik({
        initialValues: {
            node: ''
        },
        validate: (data) => {
            let errors = {};

            if (!data.node) {
                errors.node = 'Item is required.';
            }

            return errors;
        },
        onSubmit: (data) => {
            data.node && show();
            formik.resetForm();
        }
    });

    const isFormFieldValid = (name) => !!(formik.touched[name] && formik.errors[name]);

    const getFormErrorMessage = (name) => {
        return isFormFieldValid(name) ? <small className="p-error">{formik.errors[name]}</small> : <small className="p-error"> </small>;
    };
    
    return (
        <div className="card flex flex-column align-items-center justify-content-center">
            <form onSubmit={formik.handleSubmit} className="flex flex-column justify-content-center md:w-20rem w-full">
                <Toast ref={toast} />
                <TreeSelect
                    id="node"
                    name="node"
                    value={formik.values.node}
                    options={node}
                    optionLabel="name"
                    placeholder="Select Item"
                    onChange={(e) => {
                        formik.setFieldValue('node', e.value);
                    }}
                />
                {getFormErrorMessage('node')}
                <Button type="submit" label="Submit" className="mt-2" />
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
        toast.current.show({ severity: 'success', summary: 'Submission Received', detail: 'Thank you, we have received your submission.' });
    };

    const formik = useFormik({
        initialValues: {
            node: ''
        },
        validate: (data) => {
            let errors = {};

            if (!data.node) {
                errors.node = 'Item is required.';
            }

            return errors;
        },
        onSubmit: (data) => {
            data.node && show();
            formik.resetForm();
        }
    });

    const isFormFieldValid = (name) => !!(formik.touched[name] && formik.errors[name]);

    const getFormErrorMessage = (name) => {
        return isFormFieldValid(name) ? <small className="p-error">{formik.errors[name]}</small> : <small className="p-error"> </small>;
    };
    
    return (
        <div className="card flex flex-column align-items-center justify-content-center">
            <form onSubmit={formik.handleSubmit} className="flex flex-column justify-content-center md:w-20rem w-full">
                <Toast ref={toast} />
                <TreeSelect
                    id="node"
                    name="node"
                    value={formik.values.node}
                    options={node}
                    optionLabel="name"
                    placeholder="Select Item"
                    onChange={(e) => {
                        formik.setFieldValue('node', e.value);
                    }}
                />
                {getFormErrorMessage('node')}
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
                <form onSubmit={formik.handleSubmit} className="flex flex-column justify-content-center md:w-20rem w-full">
                    <Toast ref={toast} />
                    <TreeSelect
                        id="node"
                        name="node"
                        value={formik.values.node}
                        options={node}
                        optionLabel="name"
                        placeholder="Select Item"
                        onChange={(e) => {
                            formik.setFieldValue('node', e.value);
                        }}
                    />
                    {getFormErrorMessage('node')}
                    <Button type="submit" label="Submit" className="mt-2" />
                </form>
            </div>
            <DocSectionCode code={code} service={['NodeService']} dependencies={{ formik: '^2.2.6' }} />
        </>
    );
}
