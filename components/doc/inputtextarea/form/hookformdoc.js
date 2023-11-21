import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Button } from '@/components/lib/button/Button';
import { InputTextarea } from '@/components/lib/inputtextarea/InputTextarea';
import { Toast } from '@/components/lib/toast/Toast';
import { classNames } from '@/components/lib/utils/Utils';
import { useRef } from 'react';
import { Controller, useForm } from 'react-hook-form';

export function HookFormDoc(props) {
    const toast = useRef(null);

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: form.getValues('description') });
    };

    const defaultValues = { description: '' };
    const form = useForm({ defaultValues });
    const errors = form.formState.errors;

    const onSubmit = (data) => {
        data.description && show();

        form.reset();
    };

    const getFormErrorMessage = (name) => {
        return errors[name] ? <small className="p-error">{errors[name].message}</small> : <small className="p-error">&nbsp;</small>;
    };

    const code = {
        basic: `
<Toast ref={toast} />
<Controller
    name="description"
    control={form.control}
    rules={{ required: 'Description is required.' }}
    render={({ field, fieldState }) => (
        <>
            <label htmlFor={field.name}>Description</label>
            <InputTextarea id={field.name} {...field} rows={4} cols={30} className={classNames({ 'p-invalid': fieldState.error })} />
            {getFormErrorMessage(field.name)}
        </>
    )}
/>
<Button label="Submit" type="submit" icon="pi pi-check" />
        `,
        javascript: `
import React, { useRef } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { classNames } from 'primereact/utils';
import { InputTextarea } from "primereact/inputtextarea";

export default function HookFormDoc() {
    const toast = useRef(null);

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: form.getValues('description') });
    };

    const defaultValues = { description: '' };
    const form = useForm({ defaultValues });
    const errors = form.formState.errors;

    const onSubmit = (data) => {
        data.description && show();

        form.reset();
    };

    const getFormErrorMessage = (name) => {
        return errors[name] ? <small className="p-error">{errors[name].message}</small> : <small className="p-error">&nbsp;</small>;
    };

    return (
        <div className="card flex justify-content-center">
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-column gap-2">
                <Toast ref={toast} />
                <Controller
                    name="description"
                    control={form.control}
                    rules={{ required: 'Description is required.' }}
                    render={({ field, fieldState }) => (
                        <>
                            <label htmlFor={field.name}>Description</label>
                            <InputTextarea id={field.name} {...field} rows={4} cols={30} className={classNames({ 'p-invalid': fieldState.error })} />
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
import React, { useRef } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { classNames } from 'primereact/utils';
import { InputTextarea } from "primereact/inputtextarea";

export default function HookFormDoc() {
    const toast = useRef(null);

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: form.getValues('description') });
    };

    const defaultValues = { description: '' };
    const form = useForm({ defaultValues });
    const errors = form.formState.errors;

    const onSubmit = (data) => {
        data.description && show();

        form.reset();
    };

    const getFormErrorMessage = (name) => {
        return errors[name] ? <small className="p-error">{errors[name].message}</small> : <small className="p-error">&nbsp;</small>;
    };

    return (
        <div className="card flex justify-content-center">
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-column gap-2">
                <Toast ref={toast} />
                <Controller
                    name="description"
                    control={form.control}
                    rules={{ required: 'Description is required.' }}
                    render={({ field, fieldState }) => (
                        <>
                            <label htmlFor={field.name}>Description</label>
                            <InputTextarea id={field.name} {...field} rows={4} cols={30} className={classNames({ 'p-invalid': fieldState.error })} />
                            {getFormErrorMessage(field.name)}
                        </>
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
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-column gap-2">
                    <Toast ref={toast} />
                    <Controller
                        name="description"
                        control={form.control}
                        rules={{ required: 'Description is required.' }}
                        render={({ field, fieldState }) => (
                            <>
                                <label htmlFor={field.name}>Description</label>
                                <InputTextarea id={field.name} {...field} rows={4} cols={30} className={classNames({ 'p-invalid': fieldState.error })} />
                                {getFormErrorMessage(field.name)}
                            </>
                        )}
                    />
                    <Button label="Submit" type="submit" icon="pi pi-check" />
                </form>
            </div>
            <DocSectionCode code={code} dependencies={{ 'react-hook-form': '^7.39.4' }} />
        </>
    );
}
