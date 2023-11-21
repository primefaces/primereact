import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Button } from '@/components/lib/button/Button';
import { Toast } from '@/components/lib/toast/Toast';
import { TreeSelect } from '@/components/lib/treeselect/TreeSelect';
import { classNames } from '@/components/lib/utils/Utils';
import { useEffect, useRef, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { NodeService } from '../../../../service/NodeService';

export function HookFormDoc(props) {
    const [nodes, setNodes] = useState(null);
    const defaultValues = { value: null };
    const form = useForm({ defaultValues });
    const errors = form.formState.errors;
    const toast = useRef(null);

    useEffect(() => {
        NodeService.getTreeNodes().then((data) => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: 'The form is successfully submitted.' });
    };

    const onSubmit = (data) => {
        data.value && show();

        form.reset();
    };

    const getFormErrorMessage = (name) => {
        return errors[name] ? <small className="p-error">{errors[name].message}</small> : <small className="p-error">&nbsp;</small>;
    };

    const code = {
        basic: `
<Toast ref={toast} />
<Controller
    name="value"
    control={form.control}
    rules={{ required: 'Value is required.' }}
    render={({ field, fieldState }) => (
        <>
            <TreeSelect id={field.name} value={field.value} onChange={field.onChange} inputRef={field.ref} options={nodes} placeholder="Select Item" className={classNames('w-full md:w-20rem', { 'p-invalid': fieldState.error })} />
            {getFormErrorMessage(field.name)}
        </>
    )}
/>
<Button label="Submit" type="submit" icon="pi pi-check" />
        `,
        javascript: `
import React, { useEffect, useState, useRef } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button } from 'primereact/button';
import { classNames } from 'primereact/utils';
import { TreeSelect } from "primereact/treeselect";
import { Toast } from 'primereact/toast';
import { NodeService } from './service/NodeService';

export default function HookFormDoc() {
    const [nodes, setNodes] = useState(null);
    const defaultValues = { value: null };
    const form = useForm({ defaultValues });
    const errors = form.formState.errors;
    const toast = useRef(null);

    useEffect(() => {
        NodeService.getTreeNodes().then((data) => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: 'The form is successfully submitted.' });
    };

    const onSubmit = (data) => {
        data.value && show();

        form.reset();
    };

    const getFormErrorMessage = (name) => {
        return errors[name] ? <small className="p-error">{errors[name].message}</small> : <small className="p-error">&nbsp;</small>;
    };

    return (
        <div className="card flex justify-content-center">
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-column align-items-center gap-2">
                <Toast ref={toast} />
                <Controller
                    name="value"
                    control={form.control}
                    rules={{ required: 'Value is required.' }}
                    render={({ field, fieldState }) => (
                        <>
                            <TreeSelect id={field.name} value={field.value} onChange={field.onChange} inputRef={field.ref} options={nodes} placeholder="Select Item" className={classNames('w-full md:w-20rem', { 'p-invalid': fieldState.error })} />
                            {getFormErrorMessage(field.name)}
                        </>
                    )}
                />
                <Button label="Submit" type="submit" icon="pi pi-check" />
            </form>
        </div>
    )
}
        `,
        typescript: `
import React, { useEffect, useState, useRef } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button } from 'primereact/button';
import { classNames } from 'primereact/utils';
import { TreeSelect } from "primereact/treeselect";
import { TreeNode } from 'primereact/treenode';
import { Toast } from 'primereact/toast';
import { NodeService } from './service/NodeService';

export default function HookFormDoc() {
    const [node, setNodes] = useState<TreeNode[] | null>([]);
    const defaultValues = { value: null };
    const form = useForm({ defaultValues });
    const errors = form.formState.errors;
    const toast = useRef(null);

    useEffect(() => {
        NodeService.getTreeNodes().then((data) => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: 'The form is successfully submitted.' });
    };

    const onSubmit = (data) => {
        data.value && show();

        form.reset();
    };

    const getFormErrorMessage = (name) => {
        return errors[name] ? <small className="p-error">{errors[name].message}</small> : <small className="p-error">&nbsp;</small>;
    };

    return (
        <div className="card flex justify-content-center">
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-column align-items-center gap-2">
                <Toast ref={toast} />
                <Controller
                    name="value"
                    control={form.control}
                    rules={{ required: 'Value is required.' }}
                    render={({ field, fieldState }) => (
                        <>
                            <TreeSelect id={field.name} value={field.value} onChange={field.onChange} inputRef={field.ref} options={nodes} placeholder="Select Item" className={classNames('w-full md:w-20rem', { 'p-invalid': fieldState.error })} />
                            {getFormErrorMessage(field.name)}
                        </>
                    )}
                />
                <Button label="Submit" type="submit" icon="pi pi-check" />
            </form>
        </div>
    )
}
        `,
        data: `
/* NodeService */
{
    key: '0',
    label: 'Documents',
    data: 'Documents Folder',
    icon: 'pi pi-fw pi-inbox',
    children: [
        {
            key: '0-0',
            label: 'Work',
            data: 'Work Folder',
            icon: 'pi pi-fw pi-cog',
            children: [
                { key: '0-0-0', label: 'Expenses.doc', icon: 'pi pi-fw pi-file', data: 'Expenses Document' },
                { key: '0-0-1', label: 'Resume.doc', icon: 'pi pi-fw pi-file', data: 'Resume Document' }
            ]
        },
        {
            key: '0-1',
            label: 'Home',
            data: 'Home Folder',
            icon: 'pi pi-fw pi-home',
            children: [{ key: '0-1-0', label: 'Invoices.txt', icon: 'pi pi-fw pi-file', data: 'Invoices for this month' }]
        }
    ]
},
...
`
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    <a href="https://react-hook-form.com/">React Hook Form</a> is another popular React library to handle forms.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-column align-items-center gap-2">
                    <Toast ref={toast} />
                    <Controller
                        name="value"
                        control={form.control}
                        rules={{ required: 'Value is required.' }}
                        render={({ field, fieldState }) => (
                            <>
                                <TreeSelect id={field.name} value={field.value} onChange={field.onChange} inputRef={field.ref} options={nodes} placeholder="Select Item" className={classNames('w-full md:w-20rem', { 'p-invalid': fieldState.error })} />
                                {getFormErrorMessage(field.name)}
                            </>
                        )}
                    />
                    <Button label="Submit" type="submit" icon="pi pi-check" />
                </form>
            </div>
            <DocSectionCode code={code} service={['NodeService']} dependencies={{ 'react-hook-form': '^7.39.4' }} />
        </>
    );
}
