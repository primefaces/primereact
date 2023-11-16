import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Button } from '@/components/lib/button/Button';
import { RadioButton } from '@/components/lib/radiobutton/RadioButton';
import { classNames } from '@/components/lib/utils/Utils';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

export function ValidationDoc(props) {
    const [formData, setFormData] = useState({});
    const defaultValues = { ingredient: '' };
    const form = useForm({ defaultValues });
    const errors = form.formState.errors;

    const onSubmit = (data) => {
        setFormData(data);
    };

    const getFormErrorMessage = (name) => {
        return errors[name] && <small className="p-error ml-2">{errors[name].message}</small>;
    };

    const code = {
        basic: `
<Controller
    name="ingredient"
    control={form.control}
    rules={{ required: 'Ingredient is required.' }}
    render={({ field, fieldState }) => (
        <>
            <div className="card flex justify-content-center">
                <div className="flex flex-wrap gap-3">
                    <div className="flex align-items-center">
                        <RadioButton inputId="f1" {...field} name={field.name} inputRef={field.ref} value="Cheese" checked={field.value === 'Cheese'} className={classNames({ 'p-invalid': fieldState.error })} />
                        <label htmlFor="f1" className={classNames('ml-2', { 'p-error': errors.ingredient })}>
                            Cheese
                        </label>
                    </div>
                    <div className="flex align-items-center">
                        <RadioButton inputId="f2" {...field} name={field.name} value="Mushroom" checked={field.value === 'Mushroom'} className={classNames({ 'p-invalid': fieldState.error })} />
                        <label htmlFor="f2" className={classNames('ml-2', { 'p-error': errors.ingredient })}>
                            Mushroom
                        </label>
                    </div>
                    <div className="flex align-items-center">
                        <RadioButton inputId="f3" {...field} name={field.name} value="Pepper" checked={field.value === 'Pepper'} className={classNames({ 'p-invalid': fieldState.error })} />
                        <label htmlFor="f3" className={classNames('ml-2', { 'p-error': errors.ingredient })}>
                            Pepper
                        </label>
                    </div>
                    <div className="flex align-items-center">
                        <RadioButton inputId="f4" {...field} name={field.name} value="Onion" checked={field.value === 'Onion'} className={classNames({ 'p-invalid': fieldState.error })} />
                        <label htmlFor="f4" className={classNames('ml-2', { 'p-error': errors.ingredient })}>
                            Onion
                        </label>
                    </div>
                </div>
            </div>
        </>
    )}
/>
        `,
        javascript: `
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button } from 'primereact/button';
import { classNames } from 'primereact/utils';
import { RadioButton } from "primereact/radiobutton";

export default function ValidationDemo() {
    const [formData, setFormData] = useState({});
    const defaultValues = {ingredient: ''};
    const form = useForm({ defaultValues });
    const errors = form.formState.errors;

    const onSubmit = (data) => {
        setFormData(data);
    };

    const getFormErrorMessage = (name) => {
        return errors[name] && <small className="p-error ml-2">{errors[name].message}</small>
    };

    return (
        <form onSubmit={form.handleSubmit(onSubmit)}>
        <Controller
            name="ingredient"
            control={form.control}
            rules={{ required: 'Ingredient is required.' }}
            render={({ field, fieldState }) => (
                <>
                    <div className="card flex justify-content-center">
                        <div className="flex flex-wrap gap-3">
                            <div className="flex align-items-center">
                                <RadioButton inputId="f1" {...field} name={field.name} inputRef={field.ref} value="Cheese" checked={field.value === 'Cheese'} className={classNames({ 'p-invalid': fieldState.error })} />
                                <label htmlFor="f1" className={classNames('ml-2', { 'p-error': errors.ingredient })}>
                                    Cheese
                                </label>
                            </div>
                            <div className="flex align-items-center">
                                <RadioButton inputId="f2" {...field} name={field.name} value="Mushroom" checked={field.value === 'Mushroom'} className={classNames({ 'p-invalid': fieldState.error })} />
                                <label htmlFor="f2" className={classNames('ml-2', { 'p-error': errors.ingredient })}>
                                    Mushroom
                                </label>
                            </div>
                            <div className="flex align-items-center">
                                <RadioButton inputId="f3" {...field} name={field.name} value="Pepper" checked={field.value === 'Pepper'} className={classNames({ 'p-invalid': fieldState.error })} />
                                <label htmlFor="f3" className={classNames('ml-2', { 'p-error': errors.ingredient })}>
                                    Pepper
                                </label>
                            </div>
                            <div className="flex align-items-center">
                                <RadioButton inputId="f4" {...field} name={field.name} value="Onion" checked={field.value === 'Onion'} className={classNames({ 'p-invalid': fieldState.error })} />
                                <label htmlFor="f4" className={classNames('ml-2', { 'p-error': errors.ingredient })}>
                                    Onion
                                </label>
                            </div>
                        </div>
                        <div className="flex align-items-center ml-8">
                            {getFormErrorMessage(field.name)}
                            <Button label="Submit" type="submit" icon="pi pi-check" />
                        </div>
                    </div>
                </>
            )}
        />
        </form>
    )
}
        `,
        typescript: `
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button } from 'primereact/button';
import { classNames } from 'primereact/utils';
import { RadioButton } from "primereact/radiobutton";

export default function InvalidDemo() {
    const [formData, setFormData] = useState<any>({});
    const defaultValues = {ingredient: ''};
    const form = useForm({ defaultValues });
    const errors = form.formState.errors;

    const onSubmit = (data: any) => {
        setFormData(data);
    };

    const getFormErrorMessage = (name: string) => {
        return errors[name] && <small className="p-error">{errors[name].message}</small>
    };

    return (
        <form onSubmit={form.handleSubmit(onSubmit)}>
        <Controller
            name="ingredient"
            control={form.control}
            rules={{ required: 'Ingredient is required.' }}
            render={({ field, fieldState }) => (
                <>
                    <div className="card flex justify-content-center">
                        <div className="flex flex-wrap gap-3">
                            <div className="flex align-items-center">
                                <RadioButton inputId="f1" {...field} name={field.name} inputRef={field.ref} value="Cheese" checked={field.value === 'Cheese'} className={classNames({ 'p-invalid': fieldState.error })} />
                                <label htmlFor="f1" className={classNames('ml-2', { 'p-error': errors.ingredient })}>
                                    Cheese
                                </label>
                            </div>
                            <div className="flex align-items-center">
                                <RadioButton inputId="f2" {...field} name={field.name} value="Mushroom" checked={field.value === 'Mushroom'} className={classNames({ 'p-invalid': fieldState.error })} />
                                <label htmlFor="f2" className={classNames('ml-2', { 'p-error': errors.ingredient })}>
                                    Mushroom
                                </label>
                            </div>
                            <div className="flex align-items-center">
                                <RadioButton inputId="f3" {...field} name={field.name} value="Pepper" checked={field.value === 'Pepper'} className={classNames({ 'p-invalid': fieldState.error })} />
                                <label htmlFor="f3" className={classNames('ml-2', { 'p-error': errors.ingredient })}>
                                    Pepper
                                </label>
                            </div>
                            <div className="flex align-items-center">
                                <RadioButton inputId="f4" {...field} name={field.name} value="Onion" checked={field.value === 'Onion'} className={classNames({ 'p-invalid': fieldState.error })} />
                                <label htmlFor="f4" className={classNames('ml-2', { 'p-error': errors.ingredient })}>
                                    Onion
                                </label>
                            </div>
                        </div>
                        <div className="flex align-items-center ml-8">
                            {getFormErrorMessage(field.name)}
                            <Button label="Submit" type="submit" icon="pi pi-check" />
                        </div>
                    </div>
                </>
            )}
        />
        </form>
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

            <form onSubmit={form.handleSubmit(onSubmit)}>
                <Controller
                    name="ingredient"
                    control={form.control}
                    rules={{ required: 'Ingredient is required.' }}
                    render={({ field, fieldState }) => (
                        <>
                            <div className="card flex justify-content-center">
                                <div className="flex flex-wrap gap-3">
                                    <div className="flex align-items-center">
                                        <RadioButton inputId="f1" {...field} name={field.name} inputRef={field.ref} value="Cheese" checked={field.value === 'Cheese'} className={classNames({ 'p-invalid': fieldState.error })} />
                                        <label htmlFor="f1" className={classNames('ml-2', { 'p-error': errors.ingredient })}>
                                            Cheese
                                        </label>
                                    </div>
                                    <div className="flex align-items-center">
                                        <RadioButton inputId="f2" {...field} name={field.name} value="Mushroom" checked={field.value === 'Mushroom'} className={classNames({ 'p-invalid': fieldState.error })} />
                                        <label htmlFor="f2" className={classNames('ml-2', { 'p-error': errors.ingredient })}>
                                            Mushroom
                                        </label>
                                    </div>
                                    <div className="flex align-items-center">
                                        <RadioButton inputId="f3" {...field} name={field.name} value="Pepper" checked={field.value === 'Pepper'} className={classNames({ 'p-invalid': fieldState.error })} />
                                        <label htmlFor="f3" className={classNames('ml-2', { 'p-error': errors.ingredient })}>
                                            Pepper
                                        </label>
                                    </div>
                                    <div className="flex align-items-center">
                                        <RadioButton inputId="f4" {...field} name={field.name} value="Onion" checked={field.value === 'Onion'} className={classNames({ 'p-invalid': fieldState.error })} />
                                        <label htmlFor="f4" className={classNames('ml-2', { 'p-error': errors.ingredient })}>
                                            Onion
                                        </label>
                                    </div>
                                </div>
                                <div className="flex align-items-center ml-8">
                                    {getFormErrorMessage(field.name)}
                                    <Button label="Submit" type="submit" icon="pi pi-check" />
                                </div>
                            </div>
                        </>
                    )}
                />
            </form>

            <DocSectionCode code={code} dependencies={{ 'react-hook-form': '^7.39.4' }} />
        </>
    );
}
