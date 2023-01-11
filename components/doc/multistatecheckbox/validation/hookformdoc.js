import { useRef } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button } from '../../../lib/button/Button';
import { MultiStateCheckbox } from '../../../lib/multistatecheckbox/MultiStateCheckbox';
import { Toast } from '../../../lib/toast/Toast';
import { classNames } from '../../../lib/utils/utils';
import { DocSectionCode } from '../../common/docsectioncode';
import { DocSectionText } from '../../common/docsectiontext';

export function HookFormDoc(props) {
    const toast = useRef(null);
    const defaultValues = { level: '' };
    const form = useForm({ defaultValues });
    const errors = form.formState.errors;

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Submission Received', detail: 'Thank you, we have received your submission.' });
    };

    const options = [
        { value: 'public', icon: 'pi pi-globe' },
        { value: 'protected', icon: 'pi pi-lock-open' },
        { value: 'private', icon: 'pi pi-lock' }
    ];

    const onSubmit = (data) => {
        data.level && show();
        form.reset();
    };

    const getFormErrorMessage = (name) => {
        return errors[name] && <small className="p-error">{errors[name].message}</small>;
    };

    const code = {
        basic: `
<Controller name="level"  control={form.control} rules={{ required: 'Level is required.'}}
    render={({ field, fieldState }) => (
        <>
            <label htmlFor={field.name} className={classNames({ 'p-error': errors.name })}>Level*</label>
            <MultiStateCheckbox id={field.name} value={field.value} onChange={field.onChange} ref={field.ref} options={options} optionValue="value" className={classNames({ 'p-invalid': fieldState.error })} />
            {getFormErrorMessage(field.name)}
        </>
    )}
/>
        `,
        javascript: `
import React, { useRef } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { classNames } from 'primereact/utils';
import { MultiStateCheckbox } from "primereact/multistatecheckbox";

export default function HookFormDoc() {
    const toast = useRef(null);
    const defaultValues = {level: ''};
    const form = useForm({ defaultValues });
    const errors = form.formState.errors;
    
    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Submission Received', detail: 'Thank you, we have received your submission.' });
    };

    const options = [
        { value: 'public', icon: 'pi pi-globe' },
        { value: 'protected', icon: 'pi pi-lock-open' },
        { value: 'private', icon: 'pi pi-lock' }
    ];

    const onSubmit = (data) => {
        data.level && show();
        form.reset();
    };

    const getFormErrorMessage = (name) => {
        return errors[name] && <small className="p-error ml-2">{errors[name].message}</small>
    };

    return (
        <div className="card flex justify-content-center">
            <div className="flex flex-column gap-2">
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="field">
                        <Toast ref={toast} />
                        <Controller
                            name="level"
                            control={form.control}
                            rules={{ required: 'Level is required.' }}
                            render={({ field, fieldState }) => (
                                <div className="flex flex-column gap-2">
                                    <label htmlFor={field.name} className={classNames('mr-2', { 'p-error': errors.level })}>
                                        Level
                                    </label>
                                    <MultiStateCheckbox id={field.name} value={field.value} ref={field.ref} onChange={field.onChange} options={options} optionValue="value" className={classNames({ 'p-invalid': fieldState.error })} />
                                    {getFormErrorMessage(field.name)}
                                </div>
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
import { Toast } from 'primereact/toast';
import { classNames } from 'primereact/utils';
import { MultiStateCheckbox } from "primereact/multistatecheckbox";

export default function HookFormDoc() {
    const toast = useRef<Toast | null>(null);
    const defaultValues = {level: ''};
    const form = useForm({ defaultValues });
    const errors = form.formState.errors;
    
    const show = (): void => {
        toast.current.show({ severity: 'success', summary: 'Submission Received', detail: 'Thank you, we have received your submission.' });
    };

    const options = [
        { value: 'public', icon: 'pi pi-globe' },
        { value: 'protected', icon: 'pi pi-lock-open' },
        { value: 'private', icon: 'pi pi-lock' }
    ];

    const onSubmit = (data: any) => {
        data.level && show();
        form.reset();
    };

    const getFormErrorMessage = (name: string) => {
        return errors[name] && <small className="p-error ml-2">{errors[name].message}</small>
    };

    return (
        <div className="card flex justify-content-center">
            <div className="flex flex-column gap-2">
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="field">
                        <Toast ref={toast} />
                        <Controller
                            name="level"
                            control={form.control}
                            rules={{ required: 'Level is required.' }}
                            render={({ field, fieldState }) => (
                                <div className="flex flex-column gap-2">
                                    <label htmlFor={field.name} className={classNames('mr-2', { 'p-error': errors.level })}>
                                        Level
                                    </label>
                                    <MultiStateCheckbox id={field.name} value={field.value} ref={field.ref} onChange={field.onChange} options={options} optionValue="value" className={classNames({ 'p-invalid': fieldState.error })} />
                                    {getFormErrorMessage(field.name)}
                                </div>
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
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <div className="field">
                            <Toast ref={toast} />
                            <Controller
                                name="level"
                                control={form.control}
                                rules={{ required: 'Level is required.' }}
                                render={({ field, fieldState }) => (
                                    <div className="flex flex-column gap-2">
                                        <label htmlFor={field.name} className={classNames('mr-2', { 'p-error': errors.level })}>
                                            Level
                                        </label>
                                        <MultiStateCheckbox id={field.name} value={field.value} ref={field.ref} onChange={field.onChange} options={options} optionValue="value" className={classNames({ 'p-invalid': fieldState.error })} />
                                        {getFormErrorMessage(field.name)}
                                    </div>
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
