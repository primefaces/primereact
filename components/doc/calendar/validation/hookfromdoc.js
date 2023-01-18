import { useRef } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Calendar } from '../../../lib/calendar/Calendar';
import { Button } from '../../../lib/button/Button';
import { classNames } from '../../../lib/utils/Utils';
import { DocSectionCode } from '../../common/docsectioncode';
import { DocSectionText } from '../../common/docsectiontext';
import { Toast } from '../../../lib/toast/Toast';

export function HookFormDoc(props) {
    const toast = useRef(null);
    const defaultValues = { date: null };
    const form = useForm({ defaultValues });
    const errors = form.formState.errors;

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Submission Received', detail: 'Thank you, we have received your submission.' });
    };

    const onSubmit = (data) => {
        data.date && show();
        form.reset();
    };

    const getFormErrorMessage = (name) => {
        return errors[name] && <small className="p-error">{errors[name].message}</small>;
    };

    const code = {
        basic: `
<Controller name="date"  control={form.control} rules={{ required: 'Date is required.'}}
    render={({ field, fieldState }) => (
        <>
            <label htmlFor={field.name} className={classNames({ 'p-error': errors.name })}>Date</label>
            <Calendar id={field.name} value={field.value} inputRef={field.ref} onChange={field.onChange} dateFormat="dd/mm/yy" className={classNames({ 'p-invalid': fieldState.error })} />
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
        toast.current.show({ severity: 'success', summary: 'Submission Received', detail: 'Thank you, we have received your submission.' });
    };

    const onSubmit = (data) => {
        data.date && show();
        form.reset();
    };

    const getFormErrorMessage = (name) => {
        return errors[name] && <small className="p-error">{errors[name].message}</small>;
    };

    return (
        <div className="card flex justify-content-center">
            <div className="flex flex-column gap-2">
                <form onSubmit={form.handleSubmit(onSubmit)} className="p-fluid">
                    <div className="field">
                        <Toast ref={toast} />
                        <Controller
                            name="date"
                            control={form.control}
                            rules={{ required: 'Date is required.' }}
                            render={({ field, fieldState }) => (
                                <>
                                    <label htmlFor={field.name} className={classNames({ 'p-error': errors.date })}>
                                        Date
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
        toast.current.show({ severity: 'success', summary: 'Submission Received', detail: 'Thank you, we have received your submission.' });
    };

    const onSubmit = (data) => {
        data.date && show();
        form.reset();
    };

    const getFormErrorMessage = (name) => {
        return errors[name] && <small className="p-error">{errors[name].message}</small>;
    };

    return (
        <div className="card flex justify-content-center">
            <div className="flex flex-column gap-2">
                <form onSubmit={form.handleSubmit(onSubmit)} className="p-fluid">
                    <div className="field">
                        <Toast ref={toast} />
                        <Controller
                            name="date"
                            control={form.control}
                            rules={{ required: 'Date is required.' }}
                            render={({ field, fieldState }) => (
                                <>
                                    <label htmlFor={field.name} className={classNames({ 'p-error': errors.date })}>
                                        Date
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
                            <Toast ref={toast} />
                            <Controller
                                name="date"
                                control={form.control}
                                rules={{ required: 'Date is required.' }}
                                render={({ field, fieldState }) => (
                                    <>
                                        <label htmlFor={field.name} className={classNames({ 'p-error': errors.date })}>
                                            Date
                                        </label>
                                        <Calendar id={field.name} value={field.value} onChange={field.onChange} dateFormat="dd/mm/yy" className={classNames({ 'p-invalid': fieldState.error })} />
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
