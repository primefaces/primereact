import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Button } from '@/components/lib/button/Button';
import { InputNumber } from '@/components/lib/inputnumber/InputNumber';
import { Toast } from '@/components/lib/toast/Toast';
import { classNames } from '@/components/lib/utils/Utils';
import { useRef } from 'react';
import { Controller, useForm } from 'react-hook-form';

export function HookFormDoc(props) {
    const toast = useRef(null);
    const defaultValues = { year: null };
    const form = useForm({ defaultValues });
    const errors = form.formState.errors;

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: form.getValues('year') });
    };

    const onSubmit = (data) => {
        data.year && show();
        form.reset();
    };

    const getFormErrorMessage = (name) => {
        return errors[name] ? <small className="p-error">{errors[name].message}</small> : <small className="p-error">&nbsp;</small>;
    };

    const code = {
        basic: `
<Toast ref={toast} />
<Controller
    name="year"
    control={form.control}
    rules={{
        required: 'Enter a valid year.',
        validate: (value) => (value >= 1960 && value <= 2050) || 'Enter a valid year.'
    }}
    render={({ field, fieldState }) => (
        <>
            <label htmlFor={field.name}>Enter a year between 1960-2050.</label>
            <InputNumber id={field.name} inputRef={field.ref} value={field.value} onBlur={field.onBlur} onValueChange={(e) => field.onChange(e)} useGrouping={false} inputClassName={classNames({ 'p-invalid': fieldState.error })} />
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
import { Toast } from "primereact/toast";
import { InputNumber } from "primereact/inputnumber";

export default function HookFormDoc() {
    const toast = useRef(null);
    const defaultValues = { year: null };
    const form = useForm({ defaultValues });
    const errors = form.formState.errors;

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: form.getValues('year') });
    };

    const onSubmit = (data) => {
        data.year && show();
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
                    name="year"
                    control={form.control}
                    rules={{
                        required: 'Enter a valid year.',
                        validate: (value) => (value >= 1960 && value <= 2050) || 'Enter a valid year.'
                    }}
                    render={({ field, fieldState }) => (
                        <>
                            <label htmlFor={field.name}>Enter a year between 1960-2050.</label>
                            <InputNumber id={field.name} inputRef={field.ref} value={field.value} onBlur={field.onBlur} onValueChange={(e) => field.onChange(e)} useGrouping={false} inputClassName={classNames({ 'p-invalid': fieldState.error })} />
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
import { Toast } from "primereact/toast";
import { InputNumber } from "primereact/inputnumber";

export default function HookFormDoc() {
    const toast = useRef(null);
    const defaultValues = { year: null };
    const form = useForm({ defaultValues });
    const errors = form.formState.errors;

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: form.getValues('year') });
    };

    const onSubmit = (data) => {
        data.year && show();
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
                    name="year"
                    control={form.control}
                    rules={{
                        required: 'Enter a valid year.',
                        validate: (value) => (value >= 1960 && value <= 2050) || 'Enter a valid year.'
                    }}
                    render={({ field, fieldState }) => (
                        <>
                            <label htmlFor={field.name}>Enter a year between 1960-2050.</label>
                            <InputNumber id={field.name} inputRef={field.ref} value={field.value} onBlur={field.onBlur} onValueChange={(e) => field.onChange(e)} useGrouping={false} inputClassName={classNames({ 'p-invalid': fieldState.error })} />
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
                        name="year"
                        control={form.control}
                        rules={{
                            required: 'Enter a valid year.',
                            validate: (value) => (value >= 1960 && value <= 2050) || 'Enter a valid year.'
                        }}
                        render={({ field, fieldState }) => (
                            <>
                                <label htmlFor={field.name}>Enter a year between 1960-2050.</label>
                                <InputNumber id={field.name} inputRef={field.ref} value={field.value} onBlur={field.onBlur} onValueChange={(e) => field.onChange(e)} useGrouping={false} inputClassName={classNames({ 'p-invalid': fieldState.error })} />
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
