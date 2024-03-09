import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Button } from '@/components/lib/button/Button';
import { InputSwitch } from '@/components/lib/inputswitch/InputSwitch';
import { Toast } from '@/components/lib/toast/Toast';
import { classNames } from '@/components/lib/utils/Utils';
import { useRef } from 'react';
import { Controller, useForm } from 'react-hook-form';

export function HookFormDoc(props) {
    const toast = useRef(null);

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: 'The form is successfully submitted.' });
    };

    const defaultValues = {
        checked: false
    };

    const {
        control,
        formState: { errors },
        handleSubmit,
        reset
    } = useForm({ defaultValues });

    const onSubmit = (data) => {
        data.checked && show();

        reset();
    };

    const getFormErrorMessage = (name) => {
        return errors[name] ? <small className="p-error">{errors[name].message}</small> : <small className="p-error">&nbsp;</small>;
    };

    const code = {
        basic: `
<Toast ref={toast} />
<Controller
    name="checked"
    control={control}
    rules={{ required: 'Accept is required.' }}
    render={({ field, fieldState }) => (
        <>
            <label htmlFor={field.name} className={classNames({ 'p-error': errors.checked })}></label>
            <InputSwitch inputId={field.name} checked={field.value} inputRef={field.ref} className={classNames({ 'p-invalid': fieldState.error })} onChange={(e) => field.onChange(e.value)} />
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
import { Toast } from 'primereact/toast';
import { InputSwitch } from "primereact/inputswitch";

export default function HookFormDoc() {
    const toast = useRef(null);

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: 'The form is successfully submitted.' });
    };

    const defaultValues = {
        checked: false
    };

    const {
        control,
        formState: { errors },
        handleSubmit,
        reset
    } = useForm({ defaultValues });

    const onSubmit = (data) => {
        data.checked && show();

        reset();
    };

    const getFormErrorMessage = (name) => {
        return errors[name] ? <small className="p-error">{errors[name].message}</small> : <small className="p-error">&nbsp;</small>;
    };

    return (
        <div className="card flex justify-content-center">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-column gap-2">
                I've read and accept the terms & conditions.
                <Toast ref={toast} />
                <Controller
                    name="checked"
                    control={control}
                    rules={{ required: 'Accept is required.' }}
                    render={({ field, fieldState }) => (
                        <>
                            <label htmlFor={field.name} className={classNames({ 'p-error': errors.checked })}></label>
                            <InputSwitch inputId={field.name} checked={field.value} inputRef={field.ref} className={classNames({ 'p-invalid': fieldState.error })} onChange={(e) => field.onChange(e.value)} />
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
import { Toast } from 'primereact/toast';
import { InputSwitch } from "primereact/inputswitch";

export default function HookFormDoc() {
    const toast = useRef(null);

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: 'The form is successfully submitted.' });
    };

    const defaultValues = {
        checked: false
    };

    const {
        control,
        formState: { errors },
        handleSubmit,
        reset
    } = useForm({ defaultValues });

    const onSubmit = (data) => {
        data.checked && show();

        reset();
    };

    const getFormErrorMessage = (name) => {
        return errors[name] ? <small className="p-error">{errors[name].message}</small> : <small className="p-error">&nbsp;</small>;
    };
    
    return (
        <div className="card flex justify-content-center">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-column gap-2">
                I've read and accept the terms & conditions.
                <Toast ref={toast} />
                <Controller
                    name="checked"
                    control={control}
                    rules={{ required: 'Accept is required.' }}
                    render={({ field, fieldState }) => (
                        <>
                            <label htmlFor={field.name} className={classNames({ 'p-error': errors.checked })}></label>
                            <InputSwitch inputId={field.name} checked={field.value} inputRef={field.ref} className={classNames({ 'p-invalid': fieldState.error })} onChange={(e) => field.onChange(e.value)} />
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
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-column gap-2">
                    I've read and accept the terms & conditions.
                    <Toast ref={toast} />
                    <Controller
                        name="checked"
                        control={control}
                        rules={{ required: 'Accept is required.' }}
                        render={({ field, fieldState }) => (
                            <>
                                <label htmlFor={field.name} className={classNames({ 'p-error': errors.checked })}></label>
                                <InputSwitch inputId={field.name} checked={field.value} inputRef={field.ref} className={classNames({ 'p-invalid': fieldState.error })} onChange={(e) => field.onChange(e.value)} />
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
