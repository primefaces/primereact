import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Button } from '@/components/lib/button/Button';
import { Chips } from '@/components/lib/chips/Chips';
import { Toast } from '@/components/lib/toast/Toast';
import { classNames } from '@/components/lib/utils/Utils';
import { useRef } from 'react';
import { Controller, useForm } from 'react-hook-form';

export function HookFormDoc(props) {
    const toast = useRef(null);

    const show = (data) => {
        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: `${data.chipArray}` });
    };

    const defaultValues = {
        chipArray: null
    };

    const {
        control,
        formState: { errors },
        handleSubmit,
        reset
    } = useForm({ defaultValues });

    const onSubmit = (data) => {
        data.chipArray.length > 0 && show(data);

        reset();
    };

    const getFormErrorMessage = (name) => {
        return errors[name] ? <small className="p-error">{errors[name].message}</small> : <small className="p-error">&nbsp;</small>;
    };

    const code = {
        basic: `
<Toast ref={toast} />
<Controller
    name="chipArray"
    control={control}
    rules={{ required: 'At least one chip is required.' }}
    render={({ field, fieldState }) => <Chips id={field.name} name="chipArray" value={field.value} onChange={(e) => field.onChange(e.value)} className={classNames({ 'p-invalid': fieldState.error })} />}
/>
{getFormErrorMessage('chipArray')}
<Button type="submit" label="Submit" className="w-7rem" />
        `,
        javascript: `
import React, { useRef } from "react";
import { useForm, Controller } from 'react-hook-form';
import { Chips } from 'primereact/chips';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { classNames } from 'primereact/utils';

export default function HookFormDoc() {
    const toast = useRef(null);

    const show = (data) => {
        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: \`\${data.chipArray}\` });
    };

    const defaultValues = {
        chipArray: null
    };

    const {
        control,
        formState: { errors },
        handleSubmit,
        reset
    } = useForm({ defaultValues });

    const onSubmit = (data) => {
        data.chipArray.length > 0 && show(data);

        reset();
    };

    const getFormErrorMessage = (name) => {
        return errors[name] ? <small className="p-error">{errors[name].message}</small> : <small className="p-error">&nbsp;</small>;
    };

    return (
        <div className="card p-fluid justify-content-center">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-column gap-2">
                <Toast ref={toast} />
                <Controller
                    name="chipArray"
                    control={control}
                    rules={{ required: 'At least one chip is required.' }}
                    render={({ field, fieldState }) => <Chips id={field.name} name="chipArray" value={field.value} onChange={(e) => field.onChange(e.value)} className={classNames({ 'p-invalid': fieldState.error })} />}
                />
                {getFormErrorMessage('chipArray')}
                <Button type="submit" label="Submit" className="w-7rem" />
            </form>
        </div>
    )
}
        `,
        typescript: `
import React, { useRef } from "react";
import { useForm, Controller } from 'react-hook-form';
import { Chips } from 'primereact/chips';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { classNames } from 'primereact/utils';

export default function HookFormDoc() {
    const toast = useRef(null);

    const show = (data) => {
        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: \`\${data.chipArray}\` });
    };

    const defaultValues = {
        chipArray: null
    };

    const {
        control,
        formState: { errors },
        handleSubmit,
        reset
    } = useForm({ defaultValues });

    const onSubmit = (data) => {
        data.chipArray.length > 0 && show(data);

        reset();
    };

    const getFormErrorMessage = (name) => {
        return errors[name] ? <small className="p-error">{errors[name].message}</small> : <small className="p-error">&nbsp;</small>;
    };

    return (
        <div className="card p-fluid justify-content-center">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-column gap-2">
                <Toast ref={toast} />
                <Controller
                    name="chipArray"
                    control={control}
                    rules={{ required: 'At least one chip is required.' }}
                    render={({ field, fieldState }) => <Chips id={field.name} name="chipArray" value={field.value} onChange={(e) => field.onChange(e.value)} className={classNames({ 'p-invalid': fieldState.error })} />}
                />
                {getFormErrorMessage('chipArray')}
                <Button type="submit" label="Submit" className="w-7rem" />
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
            <div className="card p-fluid justify-content-center">
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-column gap-2">
                    <Toast ref={toast} />
                    <Controller
                        name="chipArray"
                        control={control}
                        rules={{ required: 'At least one chip is required.' }}
                        render={({ field, fieldState }) => <Chips id={field.name} name="chipArray" value={field.value} onChange={(e) => field.onChange(e.value)} className={classNames({ 'p-invalid': fieldState.error })} />}
                    />
                    {getFormErrorMessage('chipArray')}
                    <Button type="submit" label="Submit" className="w-7rem" />
                </form>
            </div>
            <DocSectionCode code={code} dependencies={{ 'react-hook-form': '^7.39.4' }} />
        </>
    );
}
