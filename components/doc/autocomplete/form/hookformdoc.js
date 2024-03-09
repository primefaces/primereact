import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { AutoComplete } from '@/components/lib/autocomplete/AutoComplete';
import { Button } from '@/components/lib/button/Button';
import { Toast } from '@/components/lib/toast/Toast';
import { classNames } from '@/components/lib/utils/Utils';
import { useRef, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

export function HookFormDoc(props) {
    const toast = useRef(null);
    const [items, setItems] = useState([]);
    const defaultValues = { value: '' };
    const form = useForm({ defaultValues });
    const errors = form.formState.errors;

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: form.getValues('value') });
    };

    const search = (event) => {
        setItems([...Array(10).keys()].map((item) => event.query + '-' + item));
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
<form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-column gap-2">
    <Toast ref={toast} />
    <Controller
        name="value"
        control={form.control}
        rules={{ required: 'Value is required.' }}
        render={({ field, fieldState }) => (
            <>
                <label htmlFor={field.name}>
                    Value
                </label>
                <AutoComplete inputId={field.name} value={field.value} onChange={field.onChange} inputRef={field.ref} suggestions={items} completeMethod={search} className={classNames({ 'p-invalid': fieldState.error })} />
                {getFormErrorMessage(field.name)}
            </>
        )}
    />
    <Button label="Submit" type="submit" icon="pi pi-check" />
</form>
        `,
        javascript: `
import React, {useRef, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button } from 'primereact/button';
import { classNames } from 'primereact/utils';
import { AutoComplete } from "primereact/autocomplete";
import { Toast } from "primereact/toast";

export default function HookFormDoc() {
    const toast = useRef(null);
    const [items, setItems] = useState([]);
    const defaultValues = { value: '' };
    const form = useForm({ defaultValues });
    const errors = form.formState.errors;

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: form.getValues('value') });
    };

    const search = (event) => {
        setItems([...Array(10).keys()].map((item) => event.query + '-' + item));
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
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-column gap-2">
                <Toast ref={toast} />
                <Controller
                    name="value"
                    control={form.control}
                    rules={{ required: 'Value is required.' }}
                    render={({ field, fieldState }) => (
                        <>
                            <label htmlFor={field.name}>
                                Value
                            </label>
                            <AutoComplete inputId={field.name} value={field.value} onChange={field.onChange} inputRef={field.ref} suggestions={items} completeMethod={search} className={classNames({ 'p-invalid': fieldState.error })} />
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
import React, {useRef, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button } from 'primereact/button';
import { classNames } from 'primereact/utils';
import { AutoComplete } from "primereact/autocomplete";
import { Toast } from "primereact/toast";

export default function HookFormDoc() {
    const toast = useRef(null);
    const [items, setItems] = useState([]);
    const defaultValues = { value: '' };
    const form = useForm({ defaultValues });
    const errors = form.formState.errors;

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: form.getValues('value') });
    };

    const search = (event) => {
        setItems([...Array(10).keys()].map((item) => event.query + '-' + item));
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
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-column gap-2">
                <Toast ref={toast} />
                <Controller
                    name="value"
                    control={form.control}
                    rules={{ required: 'Value is required.' }}
                    render={({ field, fieldState }) => (
                        <>
                            <label htmlFor={field.name}>
                                Value
                            </label>
                            <AutoComplete inputId={field.name} value={field.value} onChange={field.onChange} inputRef={field.ref} suggestions={items} completeMethod={search} className={classNames({ 'p-invalid': fieldState.error })} />
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
                        name="value"
                        control={form.control}
                        rules={{ required: 'Value is required.' }}
                        render={({ field, fieldState }) => (
                            <>
                                <label htmlFor={field.name}>Value</label>
                                <AutoComplete inputId={field.name} value={field.value} onChange={field.onChange} inputRef={field.ref} suggestions={items} completeMethod={search} className={classNames({ 'p-invalid': fieldState.error })} />
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
