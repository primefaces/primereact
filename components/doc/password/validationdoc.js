import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button } from '../../lib/button/Button';
import { Password } from '../../lib/password/Password';
import { classNames } from '../../lib/utils/Utils';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ValidationDoc(props) {
    const [formData, setFormData] = useState({});
    const defaultValues = { password: '' };
    const form = useForm({ defaultValues });
    const errors = form.formState.errors;

    const onSubmit = (data) => {
        setFormData(data);
        form.reset();
    };

    const getFormErrorMessage = (name) => {
        return errors[name] && <small className="p-error">{errors[name].message}</small>;
    };

    const code = {
        basic: `
<Controller name="password"  control={form.control} rules={{ required: 'Password is required.'}}
    render={({ field, fieldState }) => (
        <>
            <label htmlFor={field.name} className={classNames({ 'p-error': errors.name })}>Password*</label>
            <Password id={field.name} {...field} inputRef={field.ref} inputClassName="w-15rem" className={classNames({ 'p-invalid': fieldState.error })} feedback={false} />
            {getFormErrorMessage(field.name)}
        </>
    )}
/>
        `,
        javascript: `
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button } from 'primereact/button';
import { classNames } from 'primereact/utils';
import { Password } from "primereact/password";

export default function ValidationDemo() {
    const [formData, setFormData] = useState({});
    const defaultValues = {password: ''};
    const form = useForm({ defaultValues });
    const errors = form.formState.errors;

    const onSubmit = (data) => {
        setFormData(data);
        form.reset();
    };

    const getFormErrorMessage = (name) => {
        return errors[name] && <small className="p-error">{errors[name].message}</small>
    };

    return (
        <div className="card flex justify-content-center">
            <div className="flex flex-column gap-2">
                <form onSubmit={form.handleSubmit(onSubmit)} className="p-fluid">
                    <div className="field">
                        <Controller
                            name="password"
                            control={form.control}
                            rules={{ required: 'Password is required.' }}
                            render={({ field, fieldState }) => (
                                <>
                                    <label htmlFor={field.name} className={classNames({ 'p-error': errors.password })}>
                                        Password*
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
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button } from 'primereact/button';
import { classNames } from 'primereact/utils';
import { Password } from "primereact/password";

export default function InvalidDemo() {
    const [formData, setFormData] = useState<any>({});
    const defaultValues = {password: ''};
    const form = useForm({ defaultValues });
    const errors = form.formState.errors;

    const onSubmit = (data: any) => {
        setFormData(data);
        form.reset();
    };

    const getFormErrorMessage = (name: string) => {
        return errors[name] && <small className="p-error">{errors[name].message}</small>
    };

    return (
        <div className="card flex justify-content-center">
            <div className="flex flex-column gap-2">
                <form onSubmit={form.handleSubmit(onSubmit)} className="p-fluid">
                    <div className="field">
                        <Controller
                            name="password"
                            control={form.control}
                            rules={{ required: 'Password is required.' }}
                            render={({ field, fieldState }) => (
                                <>
                                    <label htmlFor={field.name} className={classNames({ 'p-error': errors.password })}>
                                        Password*
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
                        <div className="field">
                            <Controller
                                name="password"
                                control={form.control}
                                rules={{ required: 'Password is required.' }}
                                render={({ field, fieldState }) => (
                                    <>
                                        <label htmlFor={field.name} className={classNames({ 'p-error': errors.password })}>
                                            Password*
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
            <DocSectionCode code={code} />
        </>
    );
}
