import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button } from '../../lib/button/Button';
import { Dropdown } from '../../lib/dropdown/Dropdown';
import { classNames } from '../../lib/utils/Utils';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ValidationDoc(props) {
    const [formData, setFormData] = useState({});
    const defaultValues = { city: '' };
    const form = useForm({ defaultValues });
    const errors = form.formState.errors;
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    const onSubmit = (data) => {
        setFormData(data);
    };

    const getFormErrorMessage = (name) => {
        return errors[name] && <small className="p-error">{errors[name].message}</small>;
    };

    const code = {
        basic: `
<Controller name="city"  control={form.control} rules={{ required: 'City is required.'}}
    render={({ field, fieldState }) => (
        <>
            <label htmlFor={field.name} className={classNames({ 'p-error': errors.name })}>City*</label>
            <Dropdown
                    id={field.name}
                    value={field.value}
                    onChange={field.onChange}
                    focusInputRef={field.ref}
                    options={cities}
                    optionLabel="name"
                    placeholder="Select a City"
                    className={classNames({ 'p-invalid': fieldState.error })} />
            {getFormErrorMessage(field.name)}
        </>
    )}
/>
        `,
        javascript: `
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button } from '../../lib/button/Button';
import { Dropdown } from "primereact/dropdown";
import { classNames } from '../../lib/utils/Utils';

export default function ValidationDemo() {
    const [formData, setFormData] = useState({});
    const defaultValues = {city: ''};
    const form = useForm({ defaultValues });
    const errors = form.formState.errors;

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
                    name="city"
                    control={form.control}
                    rules={{ required: 'City is required.' }}
                    render={({ field, fieldState }) => (
                        <>
                            <label htmlFor={field.name} className={classNames({ 'p-error': errors.city })}>
                                City*
                            </label>
                            <Dropdown id={field.name} {...field} focusInputRef={field.ref} options={cities} optionLabel="name" placeholder="Select a City" className={classNames({ 'p-invalid': fieldState.error })} />
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
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button } from '../../lib/button/Button';
import { Dropdown } from "primereact/dropdown";
import { classNames } from '../../lib/utils/Utils';

export default function InvalidDemo() {
    const [formData, setFormData] = useState<any>({});
    const defaultValues = {city: ''};
    const form = useForm({ defaultValues });
    const errors = form.formState.errors;

    const onSubmit = (data: any) => {
        setFormData(data);
    };

    const getFormErrorMessage = (name) => {
        return errors[name] && <small className="p-error">{errors[name].message}</small>
    };

    return (
        <form onSubmit={form.handleSubmit(onSubmit)} className="p-fluid">
            <div className="field">
                <Controller
                    name="city"
                    control={form.control}
                    rules={{ required: 'City is required.' }}
                    render={({ field, fieldState }) => (
                        <>
                            <label htmlFor={field.name} className={classNames({ 'p-error': errors.city })}>
                                City*
                            </label>
                            <Dropdown id={field.name} value={field.value} onChange={field.onChange} focusInputRef={field.ref} options={cities} optionLabel="name" placeholder="Select a City" className={classNames({ 'p-invalid': fieldState.error })} />
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
                                name="city"
                                control={form.control}
                                rules={{ required: 'City is required.' }}
                                render={({ field, fieldState }) => (
                                    <>
                                        <label htmlFor={field.name} className={classNames({ 'p-error': errors.city })}>
                                            City*
                                        </label>
                                        <Dropdown
                                            id={field.name}
                                            value={field.value}
                                            onChange={field.onChange}
                                            focusInputRef={field.ref}
                                            options={cities}
                                            optionLabel="name"
                                            placeholder="Select a City"
                                            className={classNames({ 'p-invalid': fieldState.error })}
                                        />
                                        {getFormErrorMessage(field.name)}
                                    </>
                                )}
                            />
                        </div>
                        <Button label="Submit" type="submit" icon="pi pi-check" />
                    </form>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
