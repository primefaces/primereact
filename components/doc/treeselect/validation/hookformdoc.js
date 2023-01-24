import { useEffect, useState, useRef } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { NodeService } from '../../../../service/NodeService';
import { Button } from '../../../lib/button/Button';
import { TreeSelect } from '../../../lib/treeselect/TreeSelect';
import { Toast } from '../../../lib/toast/Toast';
import { classNames } from '../../../lib/utils/Utils';
import { DocSectionCode } from '../../common/docsectioncode';
import { DocSectionText } from '../../common/docsectiontext';

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
        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: form.getValues('value') });
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
            <label htmlFor={field.name} className={classNames('mr-2', { 'p-error': errors.value })}>
                Item
            </label>
            <TreeSelect id={field.name} value={field.value} onChange={field.onChange} inputRef={field.ref} options={nodes} placeholder="Select Item" className={classNames({ 'p-invalid': fieldState.error })} />
            {getFormErrorMessage(field.name)}
        </>
    )}
/>
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
        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: form.getValues('value') });
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
            <div className="flex flex-column gap-2 md:w-20rem w-full">
                <form onSubmit={form.handleSubmit(onSubmit)} className="p-fluid">
                    <div className="mb-2">
                        <Toast ref={toast} />
                        <Controller
                            name="value"
                            control={form.control}
                            rules={{ required: 'Value is required.' }}
                            render={({ field, fieldState }) => (
                                <>
                                    <label htmlFor={field.name} className={classNames('mr-2', { 'p-error': errors.value })}>
                                        Item
                                    </label>
                                    <TreeSelect id={field.name} value={field.value} onChange={field.onChange} inputRef={field.ref} options={nodes} placeholder="Select Item" className={classNames({ 'p-invalid': fieldState.error })} />
                                    {getFormErrorMessage(field.name)}
                                </>
                            )}
                        />
                    </div>
                    <Button label="Submit" type="submit" icon="pi pi-check" />
                </form>
            </div>
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
        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: form.getValues('value') });
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
            <div className="flex flex-column gap-2 md:w-20rem w-full">
                <form onSubmit={form.handleSubmit(onSubmit)} className="p-fluid">
                    <div className="mb-2">
                        <Toast ref={toast} />
                        <Controller
                            name="value"
                            control={form.control}
                            rules={{ required: 'Value is required.' }}
                            render={({ field, fieldState }) => (
                                <>
                                    <label htmlFor={field.name} className={classNames('mr-2', { 'p-error': errors.value })}>
                                        Item
                                    </label>
                                    <TreeSelect id={field.name} value={field.value} onChange={field.onChange} inputRef={field.ref} options={nodes} placeholder="Select Item" className={classNames({ 'p-invalid': fieldState.error })} />
                                    {getFormErrorMessage(field.name)}
                                </>
                            )}
                        />
                    </div>
                    <Button label="Submit" type="submit" icon="pi pi-check" />
                </form>
            </div>
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
                {/* TO DO: Add demo content. */}
                <p></p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <div className="flex flex-column gap-2 md:w-20rem w-full">
                    <form onSubmit={form.handleSubmit(onSubmit)} className="p-fluid">
                        <div className="mb-2">
                            <Toast ref={toast} />
                            <Controller
                                name="value"
                                control={form.control}
                                rules={{ required: 'Value is required.' }}
                                render={({ field, fieldState }) => (
                                    <>
                                        <TreeSelect id={field.name} value={field.value} onChange={field.onChange} inputRef={field.ref} options={nodes} placeholder="Select Item" className={classNames({ 'p-invalid': fieldState.error })} />
                                        {getFormErrorMessage(field.name)}
                                    </>
                                )}
                            />
                        </div>
                        <Button label="Submit" type="submit" icon="pi pi-check" />
                    </form>
                </div>
            </div>
            <DocSectionCode code={code} service={['NodeService']} dependencies={{ 'react-hook-form': '^7.39.4' }} />
        </>
    );
}
