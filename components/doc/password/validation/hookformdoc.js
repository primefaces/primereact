import { useRef } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button } from '../../../lib/button/Button';
import { Password } from '../../../lib/password/Password';
import { classNames } from '../../../lib/utils/Utils';
import { Toast } from '../../../lib/toast/Toast';
import { DocSectionCode } from '../../common/docsectioncode';
import { DocSectionText } from '../../common/docsectiontext';

export function HookFormDoc(props) {
    const toast = useRef(null);

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Submission Received', detail: 'Thank you, we have received your submission.' });
    };

    const defaultValues = { password: '' };
    const form = useForm({ defaultValues });
    const errors = form.formState.errors;

    const onSubmit = (data) => {
        data.password && show();

        form.reset();
    };

    const getFormErrorMessage = (name) => {
        return errors[name] && <small className="p-error">{errors[name].message}</small>;
    };

    const code = {
        basic: `
<Toast ref={toast} />
    <Controller
        name="password"
        control={form.control}
        rules={{ required: 'Password is required.' }}
        render={({ field, fieldState }) => (
            <>
                <label htmlFor={field.name} className={classNames({ 'p-error': errors.password })}>
                    Password
                </label>
                <Password id={field.name} {...field} inputRef={field.ref} inputClassName="w-15rem" className={classNames({ 'p-invalid': fieldState.error })} feedback={false} />
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
import { Password } from "primereact/password";

export default function HookFormDoc() {
    const toast = useRef(null);

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Submission Received', detail: 'Thank you, we have received your submission.' });
    };

    const defaultValues = { password: '' };
    const form = useForm({ defaultValues });
    const errors = form.formState.errors;

    const onSubmit = (data) => {
        data.password && show();

        form.reset();
    };

    const getFormErrorMessage = (name) => {
        return errors[name] && <small className="p-error">{errors[name].message}</small>;
    };

    return (
        <div className="card flex justify-content-center">
            <div className="flex flex-column gap-2">
                <form onSubmit={form.handleSubmit(onSubmit)} className="p-fluid">
                    <Toast ref={toast} />
                    <div className="field">
                        <Controller
                            name="password"
                            control={form.control}
                            rules={{ required: 'Password is required.' }}
                            render={({ field, fieldState }) => (
                                <>
                                    <label htmlFor={field.name} className={classNames({ 'p-error': errors.password })}>
                                        Password
                                    </label>
                                    <Password id={field.name} {...field} inputRef={field.ref} inputClassName="w-15rem" className={classNames({ 'p-invalid': fieldState.error })} feedback={false} />
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
import { Toast } from 'primereact/toast';
import { classNames } from 'primereact/utils';
import { Password } from "primereact/password";

export default function HookFormDoc() {
    const toast = useRef(null);

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Submission Received', detail: 'Thank you, we have received your submission.' });
    };

    const defaultValues = { password: '' };
    const form = useForm({ defaultValues });
    const errors = form.formState.errors;

    const onSubmit = (data) => {
        data.password && show();

        form.reset();
    };

    const getFormErrorMessage = (name) => {
        return errors[name] && <small className="p-error">{errors[name].message}</small>;
    };

    return (
        <div className="card flex justify-content-center">
            <div className="flex flex-column gap-2">
                <form onSubmit={form.handleSubmit(onSubmit)} className="p-fluid">
                    <Toast ref={toast} />
                    <div className="field">
                        <Controller
                            name="password"
                            control={form.control}
                            rules={{ required: 'Password is required.' }}
                            render={({ field, fieldState }) => (
                                <>
                                    <label htmlFor={field.name} className={classNames({ 'p-error': errors.password })}>
                                        Password
                                    </label>
                                    <Password id={field.name} {...field} inputRef={field.ref} inputClassName="w-15rem" className={classNames({ 'p-invalid': fieldState.error })} feedback={false} />
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
                        <Toast ref={toast} />
                        <div className="field">
                            <Controller
                                name="password"
                                control={form.control}
                                rules={{ required: 'Password is required.' }}
                                render={({ field, fieldState }) => (
                                    <>
                                        <label htmlFor={field.name} className={classNames({ 'p-error': errors.password })}>
                                            Password
                                        </label>
                                        <Password id={field.name} {...field} inputRef={field.ref} inputClassName="w-15rem" className={classNames({ 'p-invalid': fieldState.error })} feedback={false} />
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
