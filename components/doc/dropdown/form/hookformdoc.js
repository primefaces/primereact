import { useRef } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { DocSectionText } from '../../common/docsectiontext';
import { DocSectionCode } from '../../common/docsectioncode';
import { Button } from '../../../lib/button/Button';
import { Toast } from '../../../lib/toast/Toast';
import { Dropdown } from '../../../lib/dropdown/Dropdown';
import { classNames } from '../../../lib/utils/Utils';

export function HookFormDoc(props) {
    const toast = useRef(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    const show = (data) => {
        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: `${data.city.name}` });
    };

    const defaultValues = {
        city: ''
    };

    const {
        control,
        formState: { errors },
        handleSubmit,
        reset
    } = useForm({ defaultValues });

    const onSubmit = (data) => {
        data.city && show(data);

        reset();
    };

    const getFormErrorMessage = (name) => {
        return errors[name] ? <small className="p-error">{errors[name].message}</small> : <small className="p-error">&nbsp;</small>;
    };

    const code = {
        basic: `
<Toast ref={toast} />
<Controller
    name="city"
    control={control}
    rules={{ required: 'City is required.' }}
    render={({ field, fieldState }) => (
        <Dropdown
            value={field.value}
            optionLabel="name"
            placeholder="Select a City"
            name="city"
            options={cities}
            control={control}
            onChange={(e) => field.onChange(e.value)}
            className={classNames({ 'p-invalid': fieldState.error })}
        />
    )}
/>
{getFormErrorMessage('city')}
<Button type="submit" label="Submit" />
        `,
        javascript: `
import React, { useRef } from "react";
import { useForm, Controller } from 'react-hook-form';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { classNames } from 'primereact/utils';

export default function HookFormDoc() {
    const toast = useRef(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    const show = (data) => {
        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: \`\${data.city.name}\` });
    };

    const defaultValues = {
        city: ''
    };

    const {
        control,
        formState: { errors },
        handleSubmit,
        reset
    } = useForm({ defaultValues });

    const onSubmit = (data) => {
        data.city && show(data);

        reset();
    };

    const getFormErrorMessage = (name) => {
        return errors[name] ? <small className="p-error">{errors[name].message}</small> : <small className="p-error">&nbsp;</small>;
    };

    return (
        <div className="card flex justify-content-center">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-column gap-2">
                <Toast ref={toast} />
                <Controller
                    name="city"
                    control={control}
                    rules={{ required: 'City is required.' }}
                    render={({ field, fieldState }) => (
                        <Dropdown
                            value={field.value}
                            optionLabel="name"
                            placeholder="Select a City"
                            name="city"
                            options={cities}
                            control={control}
                            onChange={(e) => field.onChange(e.value)}
                            className={classNames({ 'p-invalid': fieldState.error })}
                        />
                    )}
                />
                {getFormErrorMessage('city')}
                <Button type="submit" label="Submit" />
            </form>
        </div>
    )
}
        `,
        typescript: `
import React, { useRef } from "react";
import { useForm, Controller } from 'react-hook-form';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { classNames } from 'primereact/utils';

export default function HookFormDoc() {
    const toast = useRef(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    const show = (data) => {
        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: \`\${data.city.name}\` });
    };

    const defaultValues = {
        city: ''
    };

    const {
        control,
        formState: { errors },
        handleSubmit,
        reset
    } = useForm({ defaultValues });

    const onSubmit = (data) => {
        data.city && show(data);

        reset();
    };

    const getFormErrorMessage = (name) => {
        return errors[name] ? <small className="p-error">{errors[name].message}</small> : <small className="p-error">&nbsp;</small>;
    };

    return (
        <div className="card flex justify-content-center">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-column gap-2">
                <Toast ref={toast} />
                <Controller
                    name="city"
                    control={control}
                    rules={{ required: 'City is required.' }}
                    render={({ field, fieldState }) => (
                        <Dropdown
                            value={field.value}
                            optionLabel="name"
                            placeholder="Select a City"
                            name="city"
                            options={cities}
                            control={control}
                            onChange={(e) => field.onChange(e.value)}
                            className={classNames({ 'p-invalid': fieldState.error })}
                        />
                    )}
                />
                {getFormErrorMessage('city')}
                <Button type="submit" label="Submit" />
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
                    <Toast ref={toast} />
                    <Controller
                        name="city"
                        control={control}
                        rules={{ required: 'City is required.' }}
                        render={({ field, fieldState }) => (
                            <Dropdown
                                value={field.value}
                                optionLabel="name"
                                placeholder="Select a City"
                                name="city"
                                options={cities}
                                control={control}
                                onChange={(e) => field.onChange(e.value)}
                                className={classNames({ 'p-invalid': fieldState.error })}
                            />
                        )}
                    />
                    {getFormErrorMessage('city')}
                    <Button type="submit" label="Submit" />
                </form>
            </div>
            <DocSectionCode code={code} dependencies={{ 'react-hook-form': '^7.39.4' }} />
        </>
    );
}
