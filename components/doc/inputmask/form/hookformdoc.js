import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Button } from '@/components/lib/button/Button';
import { InputMask } from '@/components/lib/inputmask/InputMask';
import { Toast } from '@/components/lib/toast/Toast';
import { classNames } from '@/components/lib/utils/Utils';
import { useRef } from 'react';
import { Controller, useForm } from 'react-hook-form';

export function HookFormDoc(props) {
    const toast = useRef(null);

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: getValues('value') });
    };

    const defaultValues = {
        value: false
    };

    const {
        control,
        formState: { errors },
        getValues,
        handleSubmit,
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
    rules={{ required: 'Phone is required.' }}
    render={({ field, fieldState }) => (
        <>
            <label htmlFor={field.name} className={classNames({ 'p-error': errors.value })}></label>
            <InputMask
                id={field.name}
                value={field.value}
                className={classNames({ 'p-invalid': fieldState.error })}
                onChange={(e) => field.onChange(e.target.value)}
                mask="99-999999"
                placeholder="99-999999"
            />
            {getFormErrorMessage(field.name)}
        </>
    )}
/>
<Button label="Submit" type="submit" icon="pi pi-check"/>      
`,
        javascript: `
import React, { useRef } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button } from 'primereact/button';
import { classNames } from 'primereact/utils';
import { Toast } from 'primereact/toast';
import { InputMask } from "primereact/inputmask";

export default function HookFormDoc() {
    const toast = useRef(null);

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: getValues('value') });
    };

    const defaultValues = {
        value: false
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
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-column gap-2">
                <Toast ref={toast} />
                <Controller
                    name="value"
                    control={control}
                    rules={{ required: 'Phone is required.' }}
                    render={({ field, fieldState }) => (
                        <>
                            <label htmlFor={field.name} className={classNames({ 'p-error': errors.value })}></label>
                            <InputMask
                                id={field.name}
                                value={field.value}
                                className={classNames({ 'p-invalid': fieldState.error })}
                                onChange={(e) => field.onChange(e.target.value)}
                                mask="99-999999"
                                placeholder="99-999999"
                            />
                            {getFormErrorMessage(field.name)}
                        </>
                    )}
                />
                <Button label="Submit" type="submit" icon="pi pi-check"/>
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
import { InputMask } from "primereact/inputmask";

export default function HookFormDoc() {
    const toast = useRef(null);

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: getValues('value') });
    };

    const defaultValues = {
        value: false
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
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-column gap-2">
                <Toast ref={toast} />
                <Controller
                    name="value"
                    control={control}
                    rules={{ required: 'Phone is required.' }}
                    render={({ field, fieldState }) => (
                        <>
                            <label htmlFor={field.name} className={classNames({ 'p-error': errors.value })}></label>
                            <InputMask
                                id={field.name}
                                value={field.value}
                                className={classNames({ 'p-invalid': fieldState.error })}
                                onChange={(e) => field.onChange(e.target.value)}
                                mask="99-999999"
                                placeholder="99-999999"
                            />
                            {getFormErrorMessage(field.name)}
                        </>
                    )}
                />
                <Button label="Submit" type="submit" icon="pi pi-check"/>
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
                        name="value"
                        control={control}
                        rules={{ required: 'Phone is required.' }}
                        render={({ field, fieldState }) => (
                            <>
                                <label htmlFor={field.name} className={classNames({ 'p-error': errors.value })}></label>
                                <InputMask id={field.name} value={field.value} className={classNames({ 'p-invalid': fieldState.error })} onChange={(e) => field.onChange(e.target.value)} mask="99-999999" placeholder="99-999999" />
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
