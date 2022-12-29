import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { AutoComplete } from '../../../lib/autocomplete/AutoComplete';
import { Button } from '../../../lib/button/Button';
import { classNames } from '../../../lib/utils/Utils';
import { DocSectionCode } from '../../common/docsectioncode';
import { DocSectionText } from '../../common/docsectiontext';

export function HookFormDoc(props) {
    const [formData, setFormData] = useState({});
    const [items, setItems] = useState([]);
    const defaultValues = { search: '' };
    const form = useForm({ defaultValues });
    const errors = form.formState.errors;

    const search = (event) => {
        setItems([...Array(10).keys()].map((item) => event.query + '-' + item));
    };

    const onSubmit = (data) => {
        setFormData(data);
    };

    const getFormErrorMessage = (name) => {
        return errors[name] && <small className="p-error">{errors[name].message}</small>;
    };

    const code = {
        basic: `
<Controller name="value"  control={form.control} rules={{ required: 'Value is required.'}}
    render={({ field, fieldState }) => (
        <>
            <label htmlFor={field.name} className={classNames({ 'p-error': errors.name })}>Value</label>
            <AutoComplete id={field.name} value={field.value} onChange={field.onChange} inputRef={field.ref} suggestions={items} completeMethod={search} className={classNames({ 'p-invalid': fieldState.error })} />
            {getFormErrorMessage(field.name)}
        </>
    )}
/>
        `,
        javascript: `
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button } from 'primereact/button';
import { classNames } from 'primereact/utils';
import { AutoComplete } from "primereact/autocomplete";

export default function HookFormDoc() {
    const [formData, setFormData] = useState({});
    const [items, setItems] = useState([]);
    const defaultValues = { search: '' };
    const form = useForm({ defaultValues });
    const errors = form.formState.errors;

    const search = (event) => {
        setItems([...Array(10).keys()].map((item) => event.query + '-' + item));
    };

    const onSubmit = (data) => {
        setFormData(data);
    };

    const getFormErrorMessage = (name) => {
        return errors[name] && <small className="p-error">{errors[name].message}</small>
    };

    return (
        <form onSubmit={form.handleSubmit(onSubmit)} className="p-fluid">
            <div className="field">
                <Controller
                    name="value"
                    control={form.control}
                    rules={{ required: 'Value is required.' }}
                    render={({ field, fieldState }) => (
                        <>
                            <label htmlFor={field.name} className={classNames({ 'p-error': errors.search })}>
                                Value
                            </label>
                            <AutoComplete id={field.name} value={field.value} onChange={field.onChange} inputRef={field.ref} suggestions={items} completeMethod={search} className={classNames({ 'p-invalid': fieldState.error })} />
                            {getFormErrorMessage(field.name)}
                        </>
                    )}
                />
            </div>
            <Button label="Submit" type="submit" icon="pi pi-check" />
        </form>
    )
}
        `,
        typescript: `
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button } from 'primereact/button';
import { classNames } from 'primereact/utils';
import { AutoComplete } from "primereact/autocomplete";

export default function HookFormDoc() {
    const [formData, setFormData] = useState<any>({});
    const [items, setItems] = useState<any[]>([]);
    const defaultValues = { search: '' };
    const form = useForm({ defaultValues });
    const errors = form.formState.errors;

    const search = (event) => {
        setItems([...Array(10).keys()].map((item) => event.query + '-' + item));
    };

    const onSubmit = (data: any) => {
        setFormData(data);
    };

    const getFormErrorMessage = (name: string) => {
        return errors[name] && <small className="p-error">{errors[name].message}</small>
    };

    return (
        <form onSubmit={form.handleSubmit(onSubmit)} className="p-fluid">
            <div className="field">
                <Controller
                    name="value"
                    control={form.control}
                    rules={{ required: 'Value is required.' }}
                    render={({ field, fieldState }) => (
                        <>
                            <label htmlFor={field.name} className={classNames({ 'p-error': errors.search })}>
                                Value
                            </label>
                            <AutoComplete id={field.name} value={field.value} onChange={field.onChange} inputRef={field.ref} suggestions={items} completeMethod={search} className={classNames({ 'p-invalid': fieldState.error })} />
                            {getFormErrorMessage(field.name)}
                        </>
                    )}
                />
            </div>
            <Button label="Submit" type="submit" icon="pi pi-check" />
        </form>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    <a href="https://react-hook-form.com/">React Hook Form</a> is the most popular React library for form validation. The field will be highlighted and receive focus on validation failure.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <div className="flex flex-column gap-2">
                    <form onSubmit={form.handleSubmit(onSubmit)} className="p-fluid">
                        <div className="field">
                            <Controller
                                name="value"
                                control={form.control}
                                rules={{ required: 'Value is required.' }}
                                render={({ field, fieldState }) => (
                                    <>
                                        <label htmlFor={field.name} className={classNames({ 'p-error': errors.search })}>
                                            Value
                                        </label>
                                        <AutoComplete id={field.name} value={field.value} onChange={field.onChange} inputRef={field.ref} suggestions={items} completeMethod={search} className={classNames({ 'p-invalid': fieldState.error })} />
                                        {getFormErrorMessage(field.name)}
                                    </>
                                )}
                            />
                        </div>
                        <Button label="Submit" type="submit" icon="pi pi-check" />
                    </form>
                </div>
            </div>
            <DocSectionCode code={code} dependencies={{ 'react-hook-form': '^7.39.4' }} />
        </>
    );
}
