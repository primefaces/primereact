import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Button } from '@/components/lib/button/Button';
import { Knob } from '@/components/lib/knob/Knob';
import { Toast } from '@/components/lib/toast/Toast';
import { useRef } from 'react';
import { Controller, useForm } from 'react-hook-form';

export function HookFormDoc(props) {
    const toast = useRef(null);

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: getValues('value') });
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
    rules={{ required: 'The value must be greater than zero.' }}
    render={({ field }) => (
        <CascadeSelect id={field.name} name="value" value={field.value} options={countries} optionLabel={'cname'} optionGroupLabel={'name'}
         optionGroupChildren={['states', 'cities']} style={{ minWidth: '14rem' }} placeholder={'Select a City'}
         onChange={(e) => field.onChange(e.value)}/>)}
    />
<Button type="submit" label="Submit" className="mt-2" />
        `,
        javascript: `
import React, { useRef } from "react";
import { useForm, Controller } from 'react-hook-form';
import { Knob } from 'primereact/knob';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

export default function HookFormDoc() {
    const toast = useRef(null);

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: getValues('value') });
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
            <form onSubmit={handleSubmit(onSubmit)}>
                <Toast ref={toast} />
                <div className="flex flex-column align-items-center">
                    <Controller
                        name="value"
                        control={control}
                        rules={{ required: 'The value must be greater than zero.' }}
                        render={({ field }) => <Knob id={field.name} name="value" value={field.value || '0'} onChange={(e) => field.onChange(e.value)} />}
                    />

                    {getFormErrorMessage('value')}
                    <Button type="submit" label="Submit" className="mt-2" />
                </div>
            </form>
        </div>
    )
}
        `,
        typescript: `
import React, { useRef } from "react";
import { useForm, Controller } from 'react-hook-form';
import { Knob } from 'primereact/knob';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

export default function HookFormDoc() {
    const toast = useRef(null);

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: getValues('value') });
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
            <form onSubmit={handleSubmit(onSubmit)}>
                <Toast ref={toast} />
                <div className="flex flex-column align-items-center">
                    <Controller
                        name="value"
                        control={control}
                        rules={{ required: 'The value must be greater than zero.' }}
                        render={({ field }) => <Knob id={field.name} name="value" value={field.value || '0'} onChange={(e) => field.onChange(e.value)} />}
                    />

                    {getFormErrorMessage('value')}
                    <Button type="submit" label="Submit" className="mt-2" />
                </div>
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
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Toast ref={toast} />
                    <div className="flex flex-column align-items-center">
                        <Controller
                            name="value"
                            control={control}
                            rules={{ required: 'The value must be greater than zero.' }}
                            render={({ field }) => <Knob id={field.name} name="value" value={field.value || '0'} onChange={(e) => field.onChange(e.value)} />}
                        />

                        {getFormErrorMessage('value')}
                        <Button type="submit" label="Submit" className="mt-2" />
                    </div>
                </form>
            </div>
            <DocSectionCode code={code} dependencies={{ 'react-hook-form': '^7.39.4' }} />
        </>
    );
}
