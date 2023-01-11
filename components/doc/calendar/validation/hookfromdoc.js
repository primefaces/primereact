import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Calendar } from '../../../lib/calendar/Calendar';
import { Button } from '../../../lib/button/Button';
import { classNames } from '../../../lib/utils/Utils';
import { DocSectionCode } from '../../common/docsectioncode';
import { DocSectionText } from '../../common/docsectiontext';

export function HookFormDoc(props) {
    const [formData, setFormData] = useState({});
    const defaultValues = { birthdate: null };
    const form = useForm({ defaultValues });
    const errors = form.formState.errors;

    const onSubmit = (data) => {
        setFormData(data);
    };

    const getFormErrorMessage = (name) => {
        return errors[name] && <small className="p-error">{errors[name].message}</small>;
    };

    const code = {
        basic: `
<Controller name="birthdate"  control={form.control} rules={{ required: 'Birth Date is required.'}}
    render={({ field, fieldState }) => (
        <>
            <label htmlFor={field.name} className={classNames({ 'p-error': errors.name })}>Birth Date</label>
            <Calendar id={field.name} value={field.value} inputRef={field.ref} onChange={field.onChange} dateFormat="dd/mm/yy" className={classNames({ 'p-invalid': fieldState.error })} />
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
import { Calendar } from "primereact/calendar";

export default function HookFormDoc() {
    const [formData, setFormData] = useState({});
    const defaultValues = {birthdate: ''};
    const form = useForm({ defaultValues });
    const errors = form.formState.errors;

    const onSubmit = (data) => {
        setFormData(data);
    };

    const getFormErrorMessage = (name) => {
        return errors[name] && <small className="p-error">{errors[name].message}</small>
    };

    return (
        <div className="card flex justify-content-center">
            <form onSubmit={form.handleSubmit(onSubmit)} className="p-fluid">
                <div className="field">
                    <Controller
                        name="birthdate"
                        control={form.control}
                        rules={{ required: 'Birth Date is required.' }}
                        render={({ field, fieldState }) => (
                            <>
                                <label htmlFor={field.name} className={classNames({ 'p-error': errors.birthdate })}>
                                    Birth Date
                                </label>
                                <Calendar id={field.name} value={field.value} inputRef={field.ref} onChange={field.onChange} dateFormat="dd/mm/yy" className={classNames({ 'p-invalid': fieldState.error })} />
                                {getFormErrorMessage(field.name)}
                            </>
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
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button } from 'primereact/button';
import { classNames } from 'primereact/utils';
import { Calendar } from "primereact/calendar";

export default function HookFormDoc() {
    const [formData, setFormData] = useState<any>({});
    const defaultValues = {birthdate: ''};
    const form = useForm({ defaultValues });
    const errors = form.formState.errors;

    const onSubmit = (data: any) => {
        setFormData(data);
    };

    const getFormErrorMessage = (name: string) => {
        return errors[name] && <small className="p-error">{errors[name].message}</small>
    };

    return (
        <div className="card flex justify-content-center">
            <form onSubmit={form.handleSubmit(onSubmit)} className="p-fluid">
                <div className="field">
                    <Controller
                        name="birthdate"
                        control={form.control}
                        rules={{ required: 'Birth Date is required.' }}
                        render={({ field, fieldState }) => (
                            <>
                                <label htmlFor={field.name} className={classNames({ 'p-error': errors.birthdate })}>
                                    Birth Date
                                </label>
                                <Calendar id={field.name} value={field.value} inputRef={field.ref} onChange={field.onChange} dateFormat="dd/mm/yy" className={classNames({ 'p-invalid': fieldState.error })} />
                                {getFormErrorMessage(field.name)}
                            </>
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
                <div className="flex flex-column gap-2">
                    <form onSubmit={form.handleSubmit(onSubmit)} className="p-fluid">
                        <div className="field">
                            <Controller
                                name="birthdate"
                                control={form.control}
                                rules={{ required: 'Birth Date is required.' }}
                                render={({ field, fieldState }) => (
                                    <>
                                        <label htmlFor={field.name} className={classNames({ 'p-error': errors.birthdate })}>
                                            Birth Date
                                        </label>
                                        <Calendar id={field.name} value={field.value} inputRef={field.ref} onChange={field.onChange} dateFormat="dd/mm/yy" className={classNames({ 'p-invalid': fieldState.error })} />
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
