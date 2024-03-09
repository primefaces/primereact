import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Button } from '@/components/lib/button/Button';
import { Toast } from '@/components/lib/toast/Toast';
import { ToggleButton } from '@/components/lib/togglebutton/ToggleButton';
import { classNames } from '@/components/lib/utils/Utils';
import { useRef } from 'react';
import { Controller, useForm } from 'react-hook-form';

export function HookFormDoc(props) {
    const toast = useRef(null);
    const defaultValues = { value: false };
    const form = useForm({ defaultValues });
    const errors = form.formState.errors;

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: form.getValues('value').toString() });
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
<Controller
    name="value"
    control={form.control}
    rules={{ required: 'Value is required.' }}
    render={({ field, fieldState }) => (
        <div className="flex flex-column align-items-center gap-2">
            <ToggleButton id={field.name} checked={field.value} onChange={field.onChange} className={classNames('w-6rem', { 'p-invalid': fieldState.error })} />
            {getFormErrorMessage(field.name)}
        </div>
    )}
/>
        `,
        javascript: `
import React, { useRef } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { classNames } from 'primereact/utils';
import { ToggleButton } from "primereact/togglebutton";

export default function HookFormDoc() {
    const toast = useRef(null);
    const defaultValues = { value: false };
    const form = useForm({ defaultValues });
    const errors = form.formState.errors;

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: form.getValues('value').toString() });
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
                        <div className="flex flex-column align-items-center gap-2">
                            <ToggleButton id={field.name} checked={field.value} onChange={field.onChange} className={classNames('w-6rem', { 'p-invalid': fieldState.error })} />
                            {getFormErrorMessage(field.name)}
                        </div>
                    )}
                />
                <Button label="Submit" type="submit" icon="pi pi-check" className="p-button-outlined" />
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
import { ToggleButton } from "primereact/togglebutton";

export default function HookFormDoc() {
    const toast = useRef<Toast | null>(null);
    const defaultValues = { value: false };
    const form = useForm({ defaultValues });
    const errors = form.formState.errors;

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: form.getValues('value').toString() });
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
                        <div className="flex flex-column align-items-center gap-2">
                            <ToggleButton id={field.name} checked={field.value} onChange={field.onChange} className={classNames('w-6rem', { 'p-invalid': fieldState.error })} />
                            {getFormErrorMessage(field.name)}
                        </div>
                    )}
                />
                <Button label="Submit" type="submit" icon="pi pi-check" className="p-button-outlined" />
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
                        rules={{ required: 'Value is required.' }}
                        render={({ field, fieldState }) => (
                            <div className="flex flex-column align-items-center gap-2">
                                <ToggleButton id={field.name} checked={field.value} onChange={field.onChange} className={classNames('w-6rem', { 'p-invalid': fieldState.error })} />
                                {getFormErrorMessage(field.name)}
                            </div>
                        )}
                    />
                    <Button label="Submit" type="submit" icon="pi pi-check" className="p-button-outlined" />
                </form>
            </div>
            <DocSectionCode code={code} dependencies={{ 'react-hook-form': '^7.39.4' }} />
        </>
    );
}
