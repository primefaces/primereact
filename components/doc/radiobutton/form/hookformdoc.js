import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Button } from '@/components/lib/button/Button';
import { RadioButton } from '@/components/lib/radiobutton/RadioButton';
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
        rules={{ required: 'Value is required.' }}
        render={({ field }) => (
            <>
                <div>Please choose your ingredient.</div>
                <div className="flex justify-content-center">
                    <div className="flex align-items-center">
                        <RadioButton inputId="f5" {...field} inputRef={field.ref} value="Cheese" checked={field.value === 'Cheese'} />
                        <label htmlFor="f5" className="ml-1 mr-3">
                            Cheese
                        </label>

                        <RadioButton inputId="f6" {...field} value="Mushroom" checked={field.value === 'Mushroom'} />
                        <label htmlFor="f6" className="ml-1 mr-3">
                            Mushroom
                        </label>

                        <RadioButton inputId="f7" {...field} value="Pepper" checked={field.value === 'Pepper'} />
                        <label htmlFor="f7" className="ml-1 mr-3">
                            Pepper
                        </label>

                        <RadioButton inputId="f8" {...field} value="Onion" checked={field.value === 'Onion'} />
                        <label htmlFor="f8" className="ml-1 mr-3">
                            Onion
                        </label>
                    </div>
                </div>
                {getFormErrorMessage(field.name)}
                <Button label="Submit" type="submit" icon="pi pi-check" />
            </>
        )}
    />
        `,
        javascript: `
import React, { useRef } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { RadioButton } from "primereact/radiobutton";

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
        <div className="card flex justify-content-center ">
            <div className="flex">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-column gap-2">
                        <Toast ref={toast} />
                        <Controller
                            name="value"
                            control={control}
                            rules={{ required: 'Value is required.' }}
                            render={({ field }) => (
                                <>
                                    <div>Please choose your ingredient.</div>
                                    <div className="flex justify-content-center">
                                        <div className="flex align-items-center">
                                            <RadioButton inputId="f5" {...field} inputRef={field.ref} value="Cheese" checked={field.value === 'Cheese'} />
                                            <label htmlFor="f5" className="ml-1 mr-3">
                                                Cheese
                                            </label>

                                            <RadioButton inputId="f6" {...field} value="Mushroom" checked={field.value === 'Mushroom'} />
                                            <label htmlFor="f6" className="ml-1 mr-3">
                                                Mushroom
                                            </label>

                                            <RadioButton inputId="f7" {...field} value="Pepper" checked={field.value === 'Pepper'} />
                                            <label htmlFor="f7" className="ml-1 mr-3">
                                                Pepper
                                            </label>

                                            <RadioButton inputId="f8" {...field} value="Onion" checked={field.value === 'Onion'} />
                                            <label htmlFor="f8" className="ml-1 mr-3">
                                                Onion
                                            </label>
                                        </div>
                                    </div>
                                    {getFormErrorMessage(field.name)}
                                    <Button label="Submit" type="submit" icon="pi pi-check" />
                                </>
                            )}
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}
        `,
        typescript: `
import React, { useRef } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { RadioButton } from "primereact/radiobutton";

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
        <div className="card flex justify-content-center ">
            <div className="flex">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-column gap-2">
                        <Toast ref={toast} />
                        <Controller
                            name="value"
                            control={control}
                            rules={{ required: 'Value is required.' }}
                            render={({ field }) => (
                                <>
                                    <div>Please choose your ingredient.</div>
                                    <div className="flex justify-content-center">
                                        <div className="flex align-items-center">
                                            <RadioButton inputId="f5" {...field} inputRef={field.ref} value="Cheese" checked={field.value === 'Cheese'} />
                                            <label htmlFor="f5" className="ml-1 mr-3">
                                                Cheese
                                            </label>

                                            <RadioButton inputId="f6" {...field} value="Mushroom" checked={field.value === 'Mushroom'} />
                                            <label htmlFor="f6" className="ml-1 mr-3">
                                                Mushroom
                                            </label>

                                            <RadioButton inputId="f7" {...field} value="Pepper" checked={field.value === 'Pepper'} />
                                            <label htmlFor="f7" className="ml-1 mr-3">
                                                Pepper
                                            </label>

                                            <RadioButton inputId="f8" {...field} value="Onion" checked={field.value === 'Onion'} />
                                            <label htmlFor="f8" className="ml-1 mr-3">
                                                Onion
                                            </label>
                                        </div>
                                    </div>
                                    {getFormErrorMessage(field.name)}
                                    <Button label="Submit" type="submit" icon="pi pi-check" />
                                </>
                            )}
                        />
                    </div>
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
                    <a href="https://react-hook-form.com/">React Hook Form</a> is another popular React library to handle forms.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center ">
                <div className="flex">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-column gap-2">
                            <Toast ref={toast} />
                            <Controller
                                name="value"
                                control={control}
                                rules={{ required: 'Value is required.' }}
                                render={({ field }) => (
                                    <>
                                        <div>Please choose your ingredient.</div>
                                        <div className="flex justify-content-center">
                                            <div className="flex align-items-center">
                                                <RadioButton inputId="f5" {...field} inputRef={field.ref} value="Cheese" checked={field.value === 'Cheese'} />
                                                <label htmlFor="f5" className="ml-1 mr-3">
                                                    Cheese
                                                </label>

                                                <RadioButton inputId="f6" {...field} value="Mushroom" checked={field.value === 'Mushroom'} />
                                                <label htmlFor="f6" className="ml-1 mr-3">
                                                    Mushroom
                                                </label>

                                                <RadioButton inputId="f7" {...field} value="Pepper" checked={field.value === 'Pepper'} />
                                                <label htmlFor="f7" className="ml-1 mr-3">
                                                    Pepper
                                                </label>

                                                <RadioButton inputId="f8" {...field} value="Onion" checked={field.value === 'Onion'} />
                                                <label htmlFor="f8" className="ml-1 mr-3">
                                                    Onion
                                                </label>
                                            </div>
                                        </div>
                                        {getFormErrorMessage(field.name)}
                                        <Button label="Submit" type="submit" icon="pi pi-check" />
                                    </>
                                )}
                            />
                        </div>
                    </form>
                </div>
            </div>

            <DocSectionCode code={code} dependencies={{ 'react-hook-form': '^7.39.4' }} />
        </>
    );
}
