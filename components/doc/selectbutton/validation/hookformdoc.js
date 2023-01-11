import { useRef } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button } from '../../../lib/button/Button';
import { SelectButton } from '../../../lib/selectbutton/SelectButton';
import { Toast } from '../../../lib/toast/Toast';
import { classNames } from '../../../lib/utils/Utils';
import { DocSectionCode } from '../../common/docsectioncode';
import { DocSectionText } from '../../common/docsectiontext';

export function HookFormDoc(props) {
    const options = ['Off', 'On'];
    const defaultValues = { engine: '' };
    const form = useForm({ defaultValues });
    const errors = form.formState.errors;
    const toast = useRef(null);

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Submission Received', detail: 'The blog is uploaded' });
    };

    const onSubmit = (data) => {
        data.engine && show();

        form.reset();
    };

    const getFormErrorMessage = (name) => {
        return errors[name] && <small className="p-error">{errors[name].message}</small>;
    };

    const code = {
        basic: `
<Controller
    name="engine"
    control={form.control}
    rules={{ required: 'Engine State is required.' }}
    render={({ field, fieldState }) => (
        <>
            <label htmlFor={field.name} className={classNames('flex justify-content-center', { 'p-error': errors.engine })}>
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
    const defaultValues = { engine: '' };
    const form = useForm({ defaultValues });
    const errors = form.formState.errors;
    const toast = useRef(null);

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Submission Received', detail: 'The blog is uploaded' });
    };

    const onSubmit = (data) => {
        data.engine && show();

        form.reset();
    };

    const getFormErrorMessage = (name) => {
        return errors[name] && <small className="p-error">{errors[name].message}</small>;
    };

    return (
        <div className="card flex justify-content-center">
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-column align-items-center gap-2">
                <Toast ref={toast} />
                <Controller
                    name="engine"
                    control={form.control}
                    rules={{ required: 'Engine State is required.' }}
                    render={({ field, fieldState }) => (
                        <>
                            <label htmlFor={field.name} className={classNames('flex justify-content-center', { 'p-error': errors.engine })}>
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
    const defaultValues = { engine: '' };
    const form = useForm({ defaultValues });
    const errors = form.formState.errors;
    const toast = useRef(null);

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Submission Received', detail: 'The blog is uploaded' });
    };

    const onSubmit = (data) => {
        data.engine && show();

        form.reset();
    };

    const getFormErrorMessage = (name) => {
        return errors[name] && <small className="p-error">{errors[name].message}</small>;
    };

    return (
        <div className="card flex justify-content-center">
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-column align-items-center gap-2">
                <Toast ref={toast} />
                <Controller
                    name="engine"
                    control={form.control}
                    rules={{ required: 'Engine State is required.' }}
                    render={({ field, fieldState }) => (
                        <>
                            <label htmlFor={field.name} className={classNames('flex justify-content-center', { 'p-error': errors.engine })}>
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
                    <a href="https://react-hook-form.com/">React Hook Form</a> is the most popular React library for form validation. The field will be highlighted and receive focus on validation failure.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-column align-items-center gap-2">
                    <Toast ref={toast} />
                    <Controller
                        name="engine"
                        control={form.control}
                        rules={{ required: 'Engine State is required.' }}
                        render={({ field, fieldState }) => (
                            <>
                                <label htmlFor={field.name} className={classNames('flex justify-content-center', { 'p-error': errors.engine })}>
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
