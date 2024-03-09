import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Button } from '@/components/lib/button/Button';
import { Calendar } from '@/components/lib/calendar/Calendar';
import { Toast } from '@/components/lib/toast/Toast';
import { classNames } from '@/components/lib/utils/Utils';
import { useRef } from 'react';
import { Controller, useForm } from 'react-hook-form';

export function HookFormDoc(props) {
    const toast = useRef(null);
    const defaultValues = { date: null };
    const form = useForm({ defaultValues });
    const errors = form.formState.errors;

    const show = () => {
        const date = new Date(form.getValues('date')).toLocaleDateString();

        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: date });
    };

    const onSubmit = (data) => {
        data.date && show();
        form.reset();
    };

    const getFormErrorMessage = (name) => {
        return errors[name] ? <small className="p-error">{errors[name].message}</small> : <small className="p-error">&nbsp;</small>;
    };

    const code = {
        basic: `
<Toast ref={toast} />
<Controller
    name="date"
    control={form.control}
    rules={{ required: 'Date is required.' }}
    render={({ field, fieldState }) => (
        <>
            <label htmlFor={field.name}>Date</label>
            <Calendar inputId={field.name} value={field.value} onChange={field.onChange} dateFormat="dd/mm/yy" className={classNames({ 'p-invalid': fieldState.error })} />
            {getFormErrorMessage(field.name)}
        </>
    )}
/>
        `,
        javascript: `
import React, { useRef } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button } from 'primereact/button';
import { classNames } from 'primereact/utils';
import { Calendar } from "primereact/calendar";
import { Toast } from "primereact/toast";

export default function HookFormDoc() {
    const toast = useRef(null);
    const defaultValues = { date: null };
    const form = useForm({ defaultValues });
    const errors = form.formState.errors;

const show = () => {
    const date = new Date(form.getValues('date')).toLocaleDateString();
    
    toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: date });
};

    const onSubmit = (data) => {
        data.date && show();
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
                    name="date"
                    control={form.control}
                    rules={{ required: 'Date is required.' }}
                    render={({ field, fieldState }) => (
                        <>
                            <label htmlFor={field.name}>Date</label>
                            <Calendar inputId={field.name} value={field.value} onChange={field.onChange} dateFormat="dd/mm/yy" className={classNames({ 'p-invalid': fieldState.error })} />
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
import { Calendar } from "primereact/calendar";
import { Toast } from "primereact/toast";

export default function HookFormDoc() {
    const toast = useRef(null);
    const defaultValues = { date: null };
    const form = useForm({ defaultValues });
    const errors = form.formState.errors;

const show = () => {
    const date = new Date(form.getValues('date')).toLocaleDateString();
    
    toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: date });
};

    const onSubmit = (data) => {
        data.date && show();
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
                    name="date"
                    control={form.control}
                    rules={{ required: 'Date is required.' }}
                    render={({ field, fieldState }) => (
                        <>
                            <label htmlFor={field.name}>Date</label>
                            <Calendar inputId={field.name} value={field.value} onChange={field.onChange} dateFormat="dd/mm/yy" className={classNames({ 'p-invalid': fieldState.error })} />
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
                        name="date"
                        control={form.control}
                        rules={{ required: 'Date is required.' }}
                        render={({ field, fieldState }) => (
                            <>
                                <label htmlFor={field.name}>Date</label>
                                <Calendar inputId={field.name} value={field.value} onChange={field.onChange} dateFormat="dd/mm/yy" className={classNames({ 'p-invalid': fieldState.error })} />
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
