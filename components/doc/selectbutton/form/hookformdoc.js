import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Button } from '@/components/lib/button/Button';
import { SelectButton } from '@/components/lib/selectbutton/SelectButton';
import { Toast } from '@/components/lib/toast/Toast';
import { classNames } from '@/components/lib/utils/Utils';
import { useRef } from 'react';
import { Controller, useForm } from 'react-hook-form';

export function HookFormDoc(props) {
    const options = ['Off', 'On'];
    const defaultValues = { value: '' };
    const form = useForm({ defaultValues });
    const errors = form.formState.errors;
    const toast = useRef(null);

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
<Controller
    name="value"
    control={form.control}
    rules={{ required: 'Engine State is required.' }}
    render={({ field, fieldState }) => (
        <>
            <label htmlFor={field.name} className={classNames('flex justify-content-center', { 'p-error': errors.value })}>
                Engine State
            </label>
            <SelectButton id={field.name} options={options} {...field} className={classNames('flex justify-content-center', { 'p-invalid': fieldState.error })} />
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
import { classNames } from 'primereact/utils';
import { SelectButton } from "primereact/selectbutton";
import { Toast } from 'primereact/toast';

export default function HookFormDoc() {
    const options = ['Off', 'On'];
    const defaultValues = { value: '' };
    const form = useForm({ defaultValues });
    const errors = form.formState.errors;
    const toast = useRef(null);

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
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-column align-items-center gap-2">
                <Toast ref={toast} />
                <Controller
                    name="value"
                    control={form.control}
                    rules={{ required: 'Engine State is required.' }}
                    render={({ field, fieldState }) => (
                        <>
                            <label htmlFor={field.name} className={classNames('flex justify-content-center', { 'p-error': errors.value })}>
                                Engine State
                            </label>
                            <SelectButton id={field.name} options={options} {...field} className={classNames('flex justify-content-center', { 'p-invalid': fieldState.error })} />
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
import { classNames } from 'primereact/utils';
import { SelectButton } from "primereact/selectbutton";
import { Toast } from 'primereact/toast';

export default function HookFormDoc() {
    const options = ['Off', 'On'];
    const defaultValues = { value: '' };
    const form = useForm({ defaultValues });
    const errors = form.formState.errors;
    const toast = useRef(null);

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
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-column align-items-center gap-2">
                <Toast ref={toast} />
                <Controller
                    name="value"
                    control={form.control}
                    rules={{ required: 'Engine State is required.' }}
                    render={({ field, fieldState }) => (
                        <>
                            <label htmlFor={field.name} className={classNames('flex justify-content-center', { 'p-error': errors.value })}>
                                Engine State
                            </label>
                            <SelectButton id={field.name} options={options} {...field} className={classNames('flex justify-content-center', { 'p-invalid': fieldState.error })} />
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
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-column align-items-center gap-2">
                    <Toast ref={toast} />
                    <Controller
                        name="value"
                        control={form.control}
                        rules={{ required: 'Engine State is required.' }}
                        render={({ field, fieldState }) => (
                            <>
                                <label htmlFor={field.name} className={classNames('flex justify-content-center', { 'p-error': errors.value })}>
                                    Engine State
                                </label>
                                <SelectButton id={field.name} options={options} {...field} className={classNames('flex justify-content-center', { 'p-invalid': fieldState.error })} />
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
