import { useRef } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button } from '../../../lib/button/Button';
import { InputTextarea } from '../../../lib/inputtextarea/InputTextarea';
import { Toast } from '../../../lib/toast/Toast';
import { classNames } from '../../../lib/utils/Utils';
import { DocSectionCode } from '../../common/docsectioncode';
import { DocSectionText } from '../../common/docsectiontext';

export function HookFormDoc(props) {
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
            <DocSectionCode code={code} dependencies={{ 'react-hook-form': '^7.39.4' }} />
        </>
    );
}
