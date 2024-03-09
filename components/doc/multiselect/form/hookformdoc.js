import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Button } from '@/components/lib/button/Button';
import { MultiSelect } from '@/components/lib/multiselect/MultiSelect';
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
        const values = getValues('value');
        const detail = values.map((value, i) => value.name + (i < values.length - 1 ? ', ' : ''));

        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail });
    };

    const defaultValues = {
        value: null
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
    render={({ field }) => <MultiSelect id={field.name} name="value" value={field.value} options={cities} onChange={(e) => field.onChange(e.value)} optionLabel="name" placeholder="Select Cities" maxSelectedLabels={3} />}
/>
<Button type="submit" label="Submit" className="mt-2" />
        `,
        javascript: `
import React, { useRef } from "react";
import { useForm, Controller } from 'react-hook-form';
import { MultiSelect } from 'primereact/multiselect';
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
        const values = getValues('value');
        const detail = values.map((value, i) => value.name + (i < values.length - 1 ? ', ' : ''));

        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail });
    };

    const defaultValues = {
        value: null
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
                    render={({ field }) => <MultiSelect id={field.name} name="value" value={field.value} options={cities} onChange={(e) => field.onChange(e.value)} optionLabel="name" placeholder="Select Cities" maxSelectedLabels={3} className="w-full md:w-20rem" />}
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
import { MultiSelect, MultiSelectChangeEvent } from 'primereact/multiselect';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

interface City {
    name: string;
    code: string;
}

export default function HookFormDoc() {
    const toast = useRef<Toast | null>(null);
    const cities: City[] = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    const show = () => {
        const values = getValues('value');
        const detail = values.map((value, i) => value.name + (i < values.length - 1 ? ', ' : ''));

        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail });
    };

    const defaultValues = {
        value: null
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
                    render={({ field }) => <MultiSelect id={field.name} name="value" value={field.value} options={cities} onChange={(e: MultiSelectChangeEvent) => field.onChange(e.value)} optionLabel="name" placeholder="Select Cities" maxSelectedLabels={3} className="w-full md:w-20rem" />}
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
                        render={({ field }) => (
                            <MultiSelect id={field.name} name="value" value={field.value} options={cities} onChange={(e) => field.onChange(e.value)} optionLabel="name" placeholder="Select Cities" maxSelectedLabels={3} className="w-full md:w-20rem" />
                        )}
                    />

                    {getFormErrorMessage('value')}
                    <Button type="submit" label="Submit" className="mt-2" />
                </form>
            </div>
            <DocSectionCode code={code} dependencies={{ 'react-hook-form': '^7.39.4' }} />
        </>
    );
}
