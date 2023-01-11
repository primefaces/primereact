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
        toast.current.show({ severity: 'success', summary: 'Submission Received', detail: 'Thank you, we have received your submission.' });
    };

    const defaultValues = {
        city: null
    };

    const {
        control,
        formState: { errors },
        handleSubmit,
        reset
    } = useForm({ defaultValues });

    const onSubmit = (data) => {
        data.city && show();

        reset();
    };

    const getFormErrorMessage = (name) => {
        return errors[name] && <small className="p-error">{errors[name].message}</small>;
    };

    const code = {
        basic: `
<Toast ref={toast} />
<Controller
    name="city"
    control={control}
    rules={{ required: 'City is required.' }}
    render={({ field }) => <MultiSelect id={field.name} name="city" value={field.value} options={cities} onChange={(e) => field.onChange(e.value)} optionLabel="name" placeholder="Select a City" maxSelectedLabels={3} />}
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
        toast.current.show({ severity: 'success', summary: 'Submission Received', detail: 'Thank you, we have received your submission.' });
    };

    const defaultValues = {
        city: null
    };

    const {
        control,
        formState: { errors },
        handleSubmit,
        reset
    } = useForm({ defaultValues });

    const onSubmit = (data) => {
        data.city && show();

        reset();
    };

    const getFormErrorMessage = (name) => {
        return errors[name] && <small className="p-error">{errors[name].message}</small>;
    };

    return (
        <div className="card flex justify-content-center">
            <form onSubmit={handleSubmit(onSubmit)} className="p-fluid">
                <Toast ref={toast} />
                <Controller
                    name="city"
                    control={control}
                    rules={{ required: 'City is required.' }}
                    render={({ field }) => <MultiSelect id={field.name} name="city" value={field.value} options={cities} onChange={(e) => field.onChange(e.value)} optionLabel="name" placeholder="Select a City" maxSelectedLabels={3} />}
                />

                {getFormErrorMessage('city')}
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
        toast.current.show({ severity: 'success', summary: 'Submission Received', detail: 'Thank you, we have received your submission.' });
    };

    const defaultValues = {
        city: null
    };

    const {
        control,
        formState: { errors },
        handleSubmit,
        reset
    } = useForm({ defaultValues });

    const onSubmit = (data) => {
        data.city && show();

        reset();
    };

    const getFormErrorMessage = (name) => {
        return errors[name] && <small className="p-error">{errors[name].message}</small>;
    };

    return (
        <div className="card flex justify-content-center">
            <form onSubmit={handleSubmit(onSubmit)} className="p-fluid">
                <Toast ref={toast} />
                <Controller
                    name="city"
                    control={control}
                    rules={{ required: 'City is required.' }}
                    render={({ field }) => <MultiSelect id={field.name} name="city" value={field.value} options={cities} onChange={(e: MultiSelectChangeParams) => field.onChange(e.value)} optionLabel="name" placeholder="Select a City" maxSelectedLabels={3} />}
                />

                {getFormErrorMessage('city')}
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
                        name="city"
                        control={control}
                        rules={{ required: 'City is required.' }}
                        render={({ field }) => <MultiSelect id={field.name} name="city" value={field.value} options={cities} onChange={(e) => field.onChange(e.value)} optionLabel="name" placeholder="Select a City" maxSelectedLabels={3} />}
                    />

                    {getFormErrorMessage('city')}
                    <Button type="submit" label="Submit" className="mt-2" />
                </form>
            </div>
            <DocSectionCode code={code} dependencies={{ 'react-hook-form': '^7.39.4' }} />
        </>
    );
}
