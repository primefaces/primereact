import { useRef } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button } from '../../../lib/button/Button';
import { Toast } from '../../../lib/toast/Toast';
import { ToggleButton } from '../../../lib/togglebutton/ToggleButton';
import { classNames } from '../../../lib/utils/utils';
import { DocSectionCode } from '../../common/docsectioncode';
import { DocSectionText } from '../../common/docsectiontext';

export function HookFormDoc(props) {
    const toast = useRef(null);
    const defaultValues = { checked: false };
    const form = useForm({ defaultValues });
    const errors = form.formState.errors;

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Submission Received', detail: 'Thank you, we have received your submission.' });
    };

    const onSubmit = (data) => {
        data.checked && show();
        form.reset();
    };

    const getFormErrorMessage = (name) => {
        return errors[name] && <small className="p-error">{errors[name].message}</small>;
    };

    const code = {
        basic: `
<Controller
name="checked"
control={form.control}
rules={{ required: 'Checked is required.' }}
render={({ field, fieldState }) => (
    <div className="flex flex-column gap-2">
        <ToggleButton id={field.name} checked={field.value} onChange={field.onChange} className={classNames({ 'p-invalid': fieldState.error })} />
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
import { ToggleButton } from "primereact/togglebutton";

export default function HookFormDoc() {
    const toast = useRef(null);
    const defaultValues = { checked: false };
    const form = useForm({ defaultValues });
    const errors = form.formState.errors;

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Submission Received', detail: 'Thank you, we have received your submission.' });
    };

    const onSubmit = (data) => {
        data.checked && show();
        form.reset();
    };

    const getFormErrorMessage = (name) => {
        return errors[name] && <small className="p-error">{errors[name].message}</small>;
    };

    return (
        <div className="card flex justify-content-center">
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-column gap-2">
                <Toast ref={toast} />
                <Controller
                    name="checked"
                    control={form.control}
                    rules={{ required: 'Checked is required.' }}
                    render={({ field, fieldState }) => (
                        <div className="flex flex-column gap-2">
                            <ToggleButton id={field.name} checked={field.value} onChange={field.onChange} className={classNames({ 'p-invalid': fieldState.error })} />
                            {getFormErrorMessage(field.name)}
                        </div>
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
import { Toast } from 'primereact/toast';
import { classNames } from 'primereact/utils';
import { ToggleButton } from "primereact/togglebutton";

export default function HookFormDoc() {
    const toast = useRef<Toast | null>(null);
    const defaultValues = { checked: false };
    const form = useForm({ defaultValues });
    const errors = form.formState.errors;

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Submission Received', detail: 'Thank you, we have received your submission.' });
    };

    const onSubmit = (data) => {
        data.checked && show();
        form.reset();
    };

    const getFormErrorMessage = (name) => {
        return errors[name] && <small className="p-error">{errors[name].message}</small>;
    };

    return (
        <div className="card flex justify-content-center">
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-column gap-2">
                <Toast ref={toast} />
                <Controller
                    name="checked"
                    control={form.control}
                    rules={{ required: 'Checked is required.' }}
                    render={({ field, fieldState }) => (
                        <div className="flex flex-column gap-2">
                            <ToggleButton id={field.name} checked={field.value} onChange={field.onChange} className={classNames({ 'p-invalid': fieldState.error })} />
                            {getFormErrorMessage(field.name)}
                        </div>
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
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-column gap-2">
                    <Toast ref={toast} />
                    <Controller
                        name="checked"
                        control={form.control}
                        rules={{ required: 'Checked is required.' }}
                        render={({ field, fieldState }) => (
                            <div className="flex flex-column gap-2">
                                <ToggleButton id={field.name} checked={field.value} onChange={field.onChange} className={classNames({ 'p-invalid': fieldState.error })} />
                                {getFormErrorMessage(field.name)}
                            </div>
                        )}
                    />
                    <Button label="Submit" type="submit" icon="pi pi-check" />
                </form>
            </div>
            <DocSectionCode code={code} dependencies={{ 'react-hook-form': '^7.39.4' }} />
        </>
    );
}
