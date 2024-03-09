import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Button } from '@/components/lib/button/Button';
import { ListBox } from '@/components/lib/listbox/ListBox';
import { Toast } from '@/components/lib/toast/Toast';
import { useRef } from 'react';
import { Controller, useForm } from 'react-hook-form';

export function HookFormDoc(props) {
    const toast = useRef(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: getValues('value.name') });
    };

    const defaultValues = {
        value: ''
    };

    const {
        control,
        formState: { errors },
        handleSubmit,
        getValues,
        reset
    } = useForm({ defaultValues });

    const onSubmit = (data) => {
        data.value && show();

        reset();
    };

    const getFormErrorMessage = (name) => {
        return errors[name] ? <small className="p-error">{errors[name].message}</small> : <small className="p-error">&nbsp;</small>;
    };

    const code = {
        basic: `
<Toast ref={toast} />
<Controller
    name="value"
    control={control}
    rules={{ required: 'Value is required.' }}
    render={({ field }) => <ListBox value={field.value} optionLabel="name" placeholder="Select a City" name="value" options={cities} control={control} onChange={(e) => field.onChange(e.value)} style={{ width: '15rem' }} />}
/>
        `,
        javascript: `
import React, { useRef } from "react";
import { useForm, Controller } from 'react-hook-form';
import { ListBox } from 'primereact/listbox';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

export default function HookFormDoc() {
    const toast = useRef(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: getValues('value.name') });
    };

    const defaultValues = {
        value: ''
    };

    const {
        control,
        formState: { errors },
        handleSubmit,
        getValues,
        reset
    } = useForm({ defaultValues });

    const onSubmit = (data) => {
        data.value && show();

        reset();
    };

    const getFormErrorMessage = (name) => {
        return errors[name] ? <small className="p-error">{errors[name].message}</small> : <small className="p-error">&nbsp;</small>;
    };

    return (
        <div className="card flex justify-content-center">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-column align-items-center gap-2">
                <Toast ref={toast} />
                <Controller
                    name="value"
                    control={control}
                    rules={{ required: 'Value is required.' }}
                    render={({ field }) => <ListBox value={field.value} optionLabel="name" placeholder="Select a City" name="value" options={cities} control={control} onChange={(e) => field.onChange(e.value)} style={{ width: '15rem' }}/>}
                />
                {getFormErrorMessage('value')}
                <Button type="submit" label="Submit" className="mt-2" />
            </form>
        </div>
    )
}
        `,
        typescript: `
import React, { useRef } from "react";
import { useForm, Controller } from 'react-hook-form';
import { ListBox } from 'primereact/listbox';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

interface City {
    name: string;
    code: string;
}

export default function HookFormDoc() {
    const toast = useRef(null);
    const cities: City[] = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: getValues('value.name') });
    };

    const defaultValues = {
        value: ''
    };

    const {
        control,
        formState: { errors },
        handleSubmit,
        getValues,
        reset
    } = useForm({ defaultValues });

    const onSubmit = (data) => {
        data.value && show();

        reset();
    };

    const getFormErrorMessage = (name) => {
        return errors[name] ? <small className="p-error">{errors[name].message}</small> : <small className="p-error">&nbsp;</small>;
    };

    return (
        <div className="card flex justify-content-center">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-column align-items-center gap-2">
                <Toast ref={toast} />
                <Controller
                    name="value"
                    control={control}
                    rules={{ required: 'Value is required.' }}
                    render={({ field }) => <ListBox value={field.value} optionLabel="name" placeholder="Select a City" name="value" options={cities} control={control} onChange={(e) => field.onChange(e.value)} style={{ width: '15rem' }}/>}
                />
                {getFormErrorMessage('value')}
                <Button type="submit" label="Submit" className="mt-2" />
            </form>
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                {/* TO DO: Add demo content. */}
                <p></p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-column align-items-center gap-2">
                    <Toast ref={toast} />
                    <Controller
                        name="value"
                        control={control}
                        rules={{ required: 'Value is required.' }}
                        render={({ field }) => <ListBox value={field.value} optionLabel="name" placeholder="Select a City" name="value" options={cities} control={control} onChange={(e) => field.onChange(e.value)} style={{ width: '15rem' }} />}
                    />
                    {getFormErrorMessage('value')}
                    <Button type="submit" label="Submit" className="mt-2" />
                </form>
            </div>
            <DocSectionCode code={code} dependencies={{ 'react-hook-form': '^7.39.4' }} />
        </>
    );
}
