import { useRef } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { DocSectionText } from '../../common/docsectiontext';
import { DocSectionCode } from '../../common/docsectioncode';
import { Button } from '../../../lib/button/Button';
import { Toast } from '../../../lib/toast/Toast';
import { MultiSelect } from '../../../lib/multiselect/MultiSelect';

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
    render={({ field }) => <MultiSelect id={field.name} name="value" value={field.value} options={cities} onChange={(e) => field.onChange(e.value)} optionLabel="name" placeholder="Select a City" maxSelectedLabels={3} />}
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
            <form onSubmit={handleSubmit(onSubmit)} className="p-fluid">
                <Toast ref={toast} />
                <Controller
                    name="value"
                    control={control}
                    rules={{ required: 'Value is required.' }}
                    render={({ field }) => <MultiSelect id={field.name} name="value" value={field.value} options={cities} onChange={(e) => field.onChange(e.value)} optionLabel="name" placeholder="Select a City" maxSelectedLabels={3} />}
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
import { MultiSelect, MultiSelectChangeParams } from 'primereact/multiselect';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

export default function HookFormDoc() {
    const toast = useRef<Toast | null>(null);
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
            <form onSubmit={handleSubmit(onSubmit)} className="p-fluid">
                <Toast ref={toast} />
                <Controller
                    name="value"
                    control={control}
                    rules={{ required: 'Value is required.' }}
                    render={({ field }) => <MultiSelect id={field.name} name="value" value={field.value} options={cities} onChange={(e: MultiSelectChangeParams) => field.onChange(e.value)} optionLabel="name" placeholder="Select a City" maxSelectedLabels={3} />}
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
                <form onSubmit={handleSubmit(onSubmit)} className="p-fluid">
                    <Toast ref={toast} />
                    <Controller
                        name="value"
                        control={control}
                        rules={{ required: 'Value is required.' }}
                        render={({ field }) => <MultiSelect id={field.name} name="value" value={field.value} options={cities} onChange={(e) => field.onChange(e.value)} optionLabel="name" placeholder="Select a City" maxSelectedLabels={3} />}
                    />

                    {getFormErrorMessage('value')}
                    <Button type="submit" label="Submit" className="mt-2" />
                </form>
            </div>
            <DocSectionCode code={code} dependencies={{ 'react-hook-form': '^7.39.4' }} />
        </>
    );
}
