import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Button } from '@/components/lib/button/Button';
import { MultiStateCheckbox } from '@/components/lib/multistatecheckbox/MultiStateCheckbox';
import { Toast } from '@/components/lib/toast/Toast';
import { classNames } from '@/components/lib/utils/Utils';
import { useRef } from 'react';
import { Controller, useForm } from 'react-hook-form';

export function HookFormDoc(props) {
    const toast = useRef(null);
    const defaultValues = { value: '' };
    const form = useForm({ defaultValues });
    const errors = form.formState.errors;

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: form.getValues('value') });
    };

    const options = [
        { value: 'public', icon: 'pi pi-globe' },
        { value: 'protected', icon: 'pi pi-lock-open' },
        { value: 'private', icon: 'pi pi-lock' }
    ];

    const onSubmit = (data) => {
        data.value && show();
        form.reset();
    };

    const getFormErrorMessage = (name) => {
        return errors[name] ? <small className="p-error">{errors[name].message}</small> : <small className="p-error">&nbsp;</small>;
    };

    const code = {
        basic: `
<Controller name="value"  control={form.control} rules={{ required: 'Level is required.'}}
    render={({ field, fieldState }) => (
        <>
            <label htmlFor={field.name} className={classNames({ 'p-error': errors.name })}>Level*</label>
            <MultiStateCheckbox id={field.name} value={field.value} onChange={field.onChange} ref={field.ref} options={options} optionValue="value" className={classNames({ 'p-invalid': fieldState.error })} />
            {getFormErrorMessage(field.name)}
        </>
    )}
/>
        `,
        javascript: `
import React, { useRef } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { classNames } from 'primereact/utils';
import { MultiStateCheckbox } from "primereact/multistatecheckbox";

export default function HookFormDoc() {
    const toast = useRef(null);
    const defaultValues = {value: ''};
    const form = useForm({ defaultValues });
    const errors = form.formState.errors;
    
    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: form.getValues('value') });
    };

    const options = [
        { value: 'public', icon: 'pi pi-globe' },
        { value: 'protected', icon: 'pi pi-lock-open' },
        { value: 'private', icon: 'pi pi-lock' }
    ];

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
                    rules={{ required: 'Level is required.' }}
                    render={({ field, fieldState }) => (
                        <div className="flex flex-column align-items-center gap-2">
                            <label htmlFor={field.name} className={classNames('mr-2', { 'p-error': errors.value })}>
                                Level
                            </label>
                            <MultiStateCheckbox id={field.name} value={field.value} ref={field.ref} onChange={field.onChange} options={options} optionValue="value" className={classNames({ 'p-invalid': fieldState.error })} />
                            {getFormErrorMessage(field.name)}
                        </div>
                    )}
                />
                <Button label="Submit" type="submit" icon="pi pi-check" />
            </form>
        </div>
    )
}
        `,
        typescript: `
import React, { useRef } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { classNames } from 'primereact/utils';
import { MultiStateCheckbox } from "primereact/multistatecheckbox";

interface Item {
    value: string;
    icon: string;
}

export default function HookFormDoc() {
    const toast = useRef<Toast | null>(null);
    const defaultValues = {value: ''};
    const form = useForm({ defaultValues });
    const errors = form.formState.errors;
    
    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: form.getValues('value') });
    };

    const options: Item[] = [
        { value: 'public', icon: 'pi pi-globe' },
        { value: 'protected', icon: 'pi pi-lock-open' },
        { value: 'private', icon: 'pi pi-lock' }
    ];

    const onSubmit = (data: any) => {
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
                    rules={{ required: 'Level is required.' }}
                    render={({ field, fieldState }) => (
                        <div className="flex flex-column align-items-center gap-2">
                            <label htmlFor={field.name} className={classNames('mr-2', { 'p-error': errors.value })}>
                                Level
                            </label>
                            <MultiStateCheckbox id={field.name} value={field.value} ref={field.ref} onChange={field.onChange} options={options} optionValue="value" className={classNames({ 'p-invalid': fieldState.error })} />
                            {getFormErrorMessage(field.name)}
                        </div>
                    )}
                />
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
                    <a href="https://react-hook-form.com/">React Hook Form</a> is another popular React library to handle forms.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-column align-items-center gap-2">
                    <Toast ref={toast} />
                    <Controller
                        name="value"
                        control={form.control}
                        rules={{ required: 'Level is required.' }}
                        render={({ field, fieldState }) => (
                            <div className="flex flex-column align-items-center gap-2">
                                <label htmlFor={field.name} className={classNames('mr-2', { 'p-error': errors.value })}>
                                    Level
                                </label>
                                <MultiStateCheckbox id={field.name} value={field.value} ref={field.ref} onChange={field.onChange} options={options} optionValue="value" className={classNames({ 'p-invalid': fieldState.error })} />
                                {getFormErrorMessage(field.name)}
                            </div>
                        )}
                    />
                    <Button label="Submit" type="submit" icon="pi pi-check" />
                </form>
            </div>
            <DocSectionCode code={code} dependencies={{ 'react-hook-form': '^7.39.4' }} />
        </>
    );
}
