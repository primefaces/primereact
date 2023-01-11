import { useRef } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button } from '../../../lib/button/Button';
import { RadioButton } from '../../../lib/radiobutton/RadioButton';
import { classNames } from '../../../lib/utils/Utils';
import { DocSectionCode } from '../../common/docsectioncode';
import { DocSectionText } from '../../common/docsectiontext';
import { Toast } from '../../../lib/toast/Toast';

export function HookFormDoc(props) {
    const toast = useRef(null);

    const show = () => {
        // TO DO: Add detail content to the toast.
        toast.current.show({ severity: 'success', summary: 'Submission Received', detail: `Thank you, we have received your submission.` });
    };

    const defaultValues = {
        checked: true
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
        return errors[name] && <small className="p-error mb-2">{errors[name].message}</small>;
    };

    const code = {
        basic: `
<Toast ref={toast} />
    <Controller
        name="ingredient"
        control={control}
        rules={{ required: 'Ingredient is required.' }}
        render={({ field, fieldState }) => (
            <>
                <div className="mt-3 mb-3 flex justify-content-center">
                    <div className="flex align-items-center">
                        <RadioButton inputId="f5" {...field} inputRef={field.ref} value="Cheese" checked={field.value === 'Cheese'} className={classNames( { 'p-invalid': fieldState.error })} />
                        <label htmlFor="f5" className={classNames('ml-1', { 'p-error': errors.ingredient })}>
                            Cheese
                        </label>
                        <RadioButton inputId="f6" {...field} value="Mushroom" checked={field.value === 'Mushroom'} className={classNames('ml-2', { 'p-invalid': fieldState.error })} />
                        <label htmlFor="f6" className={classNames('ml-1', { 'p-error': errors.ingredient })}>
                            Mushroom
                        </label>
                        <RadioButton inputId="f6" {...field} value="Pepper" checked={field.value === 'Pepper'} className={classNames('ml-2', { 'p-invalid': fieldState.error })} />
                        <label htmlFor="f6" className={classNames('ml-1', { 'p-error': errors.ingredient })}>
                            Pepper
                        </label>
                        <RadioButton inputId="f7" {...field} value="Onion" checked={field.value === 'Onion'} className={classNames('ml-2', { 'p-invalid': fieldState.error })} />
                        <label htmlFor="f7" className={classNames('ml-1', { 'p-error': errors.ingredient })}>
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
import { classNames } from 'primereact/utils';
import { Toast } from 'primereact/toast';
import { RadioButton } from "primereact/radiobutton";

export default function HookFormDoc() {
    const toast = useRef(null);

    const show = () => {
        // TO DO: Add detail content to the toast.
        toast.current.show({ severity: 'success', summary: 'Submission Received', detail: "Thank you, we have received your submission." });
    };

    const defaultValues = {
        checked: true
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
        return errors[name] && <small className="p-error mb-2">{errors[name].message}</small>;
    };

    return (
        <div className="card flex justify-content-center ">
            <div className="flex">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>Please choose your ingredient.</div>
                    <div className="flex flex-column">
                    <Toast ref={toast} />
                        <Controller
                            name="ingredient"
                            control={control}
                            rules={{ required: 'Ingredient is required.' }}
                            render={({ field, fieldState }) => (
                                <>
                                    <div className="mt-3 mb-3 flex justify-content-center">
                                        <div className="flex align-items-center">
                                            <RadioButton inputId="f5" {...field} inputRef={field.ref} value="Cheese" checked={field.value === 'Cheese'} className={classNames( { 'p-invalid': fieldState.error })} />
                                            <label htmlFor="f5" className={classNames('ml-1', { 'p-error': errors.ingredient })}>
                                                Cheese
                                            </label>

                                            <RadioButton inputId="f6" {...field} value="Mushroom" checked={field.value === 'Mushroom'} className={classNames('ml-2', { 'p-invalid': fieldState.error })} />
                                            <label htmlFor="f6" className={classNames('ml-1', { 'p-error': errors.ingredient })}>
                                                Mushroom
                                            </label>

                                            <RadioButton inputId="f6" {...field} value="Pepper" checked={field.value === 'Pepper'} className={classNames('ml-2', { 'p-invalid': fieldState.error })} />
                                            <label htmlFor="f6" className={classNames('ml-1', { 'p-error': errors.ingredient })}>
                                                Pepper
                                            </label>

                                            <RadioButton inputId="f7" {...field} value="Onion" checked={field.value === 'Onion'} className={classNames('ml-2', { 'p-invalid': fieldState.error })} />
                                            <label htmlFor="f7" className={classNames('ml-1', { 'p-error': errors.ingredient })}>
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
import { classNames } from 'primereact/utils';
import { RadioButton } from "primereact/radiobutton";

export default function HookFormDoc() {
    const toast = useRef(null);

    const show = () => {
        // TO DO: Add detail content to the toast.
        toast.current.show({ severity: 'success', summary: 'Submission Received', detail: "Thank you, we have received your submission." });
    };

    const defaultValues = {
        checked: true
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
        return errors[name] && <small className="p-error mb-2">{errors[name].message}</small>;
    };

    return (
        <div className="card flex justify-content-center ">
            <div className="flex">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>Please choose your ingredient.</div>
                    <div className="flex flex-column">
                    <Toast ref={toast} />
                        <Controller
                            name="ingredient"
                            control={control}
                            rules={{ required: 'Ingredient is required.' }}
                            render={({ field, fieldState }) => (
                                <>
                                    <div className="mt-3 mb-3 flex justify-content-center">
                                        <div className="flex align-items-center">
                                            <RadioButton inputId="f5" {...field} inputRef={field.ref} value="Cheese" checked={field.value === 'Cheese'} className={classNames( { 'p-invalid': fieldState.error })} />
                                            <label htmlFor="f5" className={classNames('ml-1', { 'p-error': errors.ingredient })}>
                                                Cheese
                                            </label>

                                            <RadioButton inputId="f6" {...field} value="Mushroom" checked={field.value === 'Mushroom'} className={classNames('ml-2', { 'p-invalid': fieldState.error })} />
                                            <label htmlFor="f6" className={classNames('ml-1', { 'p-error': errors.ingredient })}>
                                                Mushroom
                                            </label>

                                            <RadioButton inputId="f6" {...field} value="Pepper" checked={field.value === 'Pepper'} className={classNames('ml-2', { 'p-invalid': fieldState.error })} />
                                            <label htmlFor="f6" className={classNames('ml-1', { 'p-error': errors.ingredient })}>
                                                Pepper
                                            </label>

                                            <RadioButton inputId="f7" {...field} value="Onion" checked={field.value === 'Onion'} className={classNames('ml-2', { 'p-invalid': fieldState.error })} />
                                            <label htmlFor="f7" className={classNames('ml-1', { 'p-error': errors.ingredient })}>
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
                {/* TO DO: Add demo content. */}
                <p></p>
            </DocSectionText>
            <div className="card flex justify-content-center ">
                <div className="flex">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>Please choose your ingredient.</div>
                        <div className="flex flex-column">
                            <Toast ref={toast} />
                            <Controller
                                name="ingredient"
                                control={control}
                                rules={{ required: 'Ingredient is required.' }}
                                render={({ field, fieldState }) => (
                                    <>
                                        <div className="mt-3 mb-3 flex justify-content-center">
                                            <div className="flex align-items-center">
                                                <RadioButton inputId="f5" {...field} inputRef={field.ref} value="Cheese" checked={field.value === 'Cheese'} className={classNames({ 'p-invalid': fieldState.error })} />
                                                <label htmlFor="f5" className={classNames('ml-1', { 'p-error': errors.ingredient })}>
                                                    Cheese
                                                </label>

                                                <RadioButton inputId="f6" {...field} value="Mushroom" checked={field.value === 'Mushroom'} className={classNames('ml-2', { 'p-invalid': fieldState.error })} />
                                                <label htmlFor="f6" className={classNames('ml-1', { 'p-error': errors.ingredient })}>
                                                    Mushroom
                                                </label>

                                                <RadioButton inputId="f6" {...field} value="Pepper" checked={field.value === 'Pepper'} className={classNames('ml-2', { 'p-invalid': fieldState.error })} />
                                                <label htmlFor="f6" className={classNames('ml-1', { 'p-error': errors.ingredient })}>
                                                    Pepper
                                                </label>

                                                <RadioButton inputId="f7" {...field} value="Onion" checked={field.value === 'Onion'} className={classNames('ml-2', { 'p-invalid': fieldState.error })} />
                                                <label htmlFor="f7" className={classNames('ml-1', { 'p-error': errors.ingredient })}>
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
