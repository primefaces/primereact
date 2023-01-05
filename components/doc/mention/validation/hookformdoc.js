import { useRef, useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button } from '../../../lib/button/Button';
import { Mention } from '../../../lib/mention/Mention';
import { Toast } from '../../../lib/toast/Toast';
import { classNames } from '../../../lib/utils/Utils';
import { DocSectionCode } from '../../common/docsectioncode';
import { DocSectionText } from '../../common/docsectiontext';
import { CustomerService } from '../../../../service/CustomerService';

export function HookFormDoc(props) {
    const [customers, setCustomers] = useState([]);
    const [suggestions, setSuggestions] = useState([]);
    const toast = useRef(null);

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Submission Received', detail: 'Thank you, we have received your submission.' });
    };

    const defaultValues = { description: '' };
    const form = useForm({ defaultValues });
    const errors = form.formState.errors;

    const onSubmit = (data) => {
        data.description && show();

        form.reset();
    };

    const getFormErrorMessage = (name) => {
        return errors[name] && <small className="p-error">{errors[name].message}</small>;
    };

    useEffect(() => {
        CustomerService.getCustomersSmall().then((data) => {
            data.forEach((d) => (d['nickname'] = `${d.name.replace(/\s+/g, '').toLowerCase()}_${d.id}`));
            setCustomers(data);
        });
    }, []);

    const onSearch = (event) => {
        //in a real application, make a request to a remote url with the query and return suggestions, for demo we filter at client side
        setTimeout(() => {
            const query = event.query;
            let suggestions;

            if (!query.trim().length) {
                suggestions = [...customers];
            } else {
                suggestions = customers.filter((customer) => {
                    return customer.nickname.toLowerCase().startsWith(query.toLowerCase());
                });
            }

            setSuggestions(suggestions);
        }, 250);
    };

    const itemTemplate = (suggestion) => {
        const src = 'images/avatar/' + suggestion.representative.image;

        return (
            <div className="flex align-items-center">
                <img alt={suggestion.name} src={src} onError={(e) => (e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')} width="32" style={{ verticalAlign: 'middle' }} />
                <span className="flex flex-column ml-2">
                    {suggestion.name}
                    <small style={{ fontSize: '.75rem', color: 'var(--text-secondary-color)' }}>@{suggestion.nickname}</small>
                </span>
            </div>
        );
    };

    const code = {
        basic: `
<Controller name="description"  control={form.control} rules={{ required: 'Description is required.'}}
    render={({ field, fieldState }) => (
        <div className="flex flex-column">
            <label htmlFor={field.name} className={classNames({ 'p-error': errors.name })}>Description*</label>
            <InputTextarea id={field.name} {...field} rows={5} cols={30} className={classNames({ 'p-invalid': fieldState.error })} />
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
import { InputTextarea } from "primereact/inputtextarea";

export default function HookFormDoc() {
    const toast = useRef(null);
    const defaultValues = {description: ''};
    const form = useForm({ defaultValues });
    const errors = form.formState.errors;

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Submission Received', detail: 'Thank you, we have received your submission.' });
    };

    const onSubmit = (data) => {
        data.description && show();

        form.reset();
    };

    const getFormErrorMessage = (name) => {
        return errors[name] && <small className="p-error">{errors[name].message}</small>
    };

    return (
        <div className="card flex justify-content-center">
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-column">
                <div className="field">
                    <Toast ref={toast} />
                    <Controller
                        name="description"
                        control={form.control}
                        rules={{ required: 'Description is required.' }}
                        render={({ field, fieldState }) => (
                            <div className="flex flex-column">
                                <label htmlFor={field.name} className={classNames({ 'p-error': errors.description })}>
                                    Description*
                                </label>
                                <InputTextarea id={field.name} {...field} rows={5} cols={30} className={classNames({ 'p-invalid': fieldState.error })} />
                                {getFormErrorMessage(field.name)}
                            </div>
                        )}
                    />
                </div>
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
    const toast = useRef<any>(null);
    const defaultValues = {description: ''};
    const form = useForm({ defaultValues });
    const errors = form.formState.errors;

    const show = ():void => {
        toast.current.show({ severity: 'success', summary: 'Submission Received', detail: 'Thank you, we have received your submission.' });
    };

    const onSubmit = (data: any) => {
        data.description && show();

        form.reset();
    };

    const getFormErrorMessage = (name: string) => {
        return errors[name] && <small className="p-error">{errors[name].message}</small>
    };

    return (
        <div className="card flex justify-content-center">
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-column">
                <div className="field">
                    <Toast ref={toast} />
                    <Controller
                        name="description"
                        control={form.control}
                        rules={{ required: 'Description is required.' }}
                        render={({ field, fieldState }) => (
                            <div className="flex flex-column">
                                <label htmlFor={field.name} className={classNames({ 'p-error': errors.description })}>
                                    Description*
                                </label>
                                <InputTextarea id={field.name} {...field} rows={5} cols={30} className={classNames({ 'p-invalid': fieldState.error })} />
                                {getFormErrorMessage(field.name)}
                            </div>
                        )}
                    />
                </div>
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
                    <a href="https://react-hook-form.com/">React Hook Form</a> is the most popular React library for form validation. The field will be highlighted and receive focus on validation failure.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-column">
                    <div className="field">
                        <Toast ref={toast} />
                        <Controller
                            name="description"
                            control={form.control}
                            rules={{ required: 'Mention is required.' }}
                            render={({ field, fieldState }) => (
                                <div className="flex flex-column">
                                    <label htmlFor={field.name} className={classNames({ 'p-error': errors.description })}>
                                        Please enter @ to mention people
                                    </label>
                                    <Mention
                                        field="nickname"
                                        id={field.name}
                                        {...field}
                                        rows={5}
                                        cols={30}
                                        className={classNames({ 'p-invalid': fieldState.error })}
                                        suggestions={suggestions}
                                        onSearch={onSearch}
                                        placeholder="Please enter @ to mention people"
                                        itemTemplate={itemTemplate}
                                    />
                                    {getFormErrorMessage(field.name)}
                                </div>
                            )}
                        />
                    </div>
                    <Button label="Submit" type="submit" icon="pi pi-check" />
                </form>
            </div>
            <DocSectionCode code={code} dependencies={{ 'react-hook-form': '^7.39.4' }} />
        </>
    );
}
