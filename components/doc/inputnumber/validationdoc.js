import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button } from '../../lib/button/Button';
import { InputNumber } from '../../lib/inputnumber/InputNumber';
import { classNames } from '../../lib/utils/Utils';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ValidationDoc(props) {
    const [formData, setFormData] = useState({});
    const defaultValues = { year: null };
    const form = useForm({ defaultValues });
    const errors = form.formState.errors;

    const onSubmit = (data) => {
        setFormData(data);
    };

    const getFormErrorMessage = (fieldState, fieldName, max, min) => {
        if (!fieldState || !fieldState.error) {
            return null;
        }

        const name = fieldName ? fieldName.charAt(0).toUpperCase() + fieldName.slice(1) : '';
        const error = fieldState.error;
        let message;

        switch (error.type) {
            case 'required':
                message = `${name} is required`;
                break;
            case 'min':
                message = `${name} less than minimum allowed value of ${min}`;
                break;
            case 'max':
                message = `${name} more than maximum allowed value of ${max}`;
                break;
            case 'maxLength':
                message = `${name} more than maximum ${max} allowed characters`;
                break;
            default:
                break;
        }

        return <small className="p-error">{message}</small>;
    };

    const code = {
        basic: `
<Controller name="year" control={form.control} rules={{ required: true, min: 1960, max: 2050 }}
    render={({ field, fieldState }) => (
        <>
            <label htmlFor={field.name} className={classNames({ 'p-error': errors.name })}>Year* (between 1960 and 2050)</label>
            <InputNumber
                id={field.name}
                inputRef={field.ref}
                value={field.value}
                onBlur={field.onBlur}
                onValueChange={(e) => field.onChange(e)}
                useGrouping={false}
                inputClassName={classNames({ 'p-invalid': fieldState.error })}
            />
            {getFormErrorMessage(field.name)}
        </>
    )}
/>
        `,
        javascript: `
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button } from 'primereact/button';
import { classNames } from 'primereact/utils';
import { InputNumber } from "primereact/inputnumber";

export default function ValidationDemo() {
    const [formData, setFormData] = useState({});
    const defaultValues = {year: ''};
    const form = useForm({ defaultValues });
    const errors = form.formState.errors;

    const onSubmit = (data) => {
        setFormData(data);
    };

	const getFormErrorMessage = (fieldState, fieldName, max, min) => {
		if (!fieldState || !fieldState.error) {
			return null;
		}
		const name = fieldName ? fieldName.charAt(0).toUpperCase() + fieldName.slice(1) : '';
		const error = fieldState.error;
		let message;
		switch (error.type) {
			case 'required':
				message = name + ' is required';
				break;
			case 'min':
				message =  name + ' less than minimum allowed value of ' + min + ';
				break;
			case 'max':
				message =  name + ' more than maximum allowed value of ' + max + ';
				break;
			case 'maxLength':
				message =  name + ' more than maximum ' + max + ' allowed characters';
				break;
			default:
				break;
		}
		return <small className="p-error">{message}</small>;
	};

    return (
        <form onSubmit={form.handleSubmit(onSubmit)} className="p-fluid">
            <div className="field">
                <Controller
                    name="year"
                    control={form.control}
                    rules={{ required: true, min: 1960, max: 2050 }}
                    render={({ field, fieldState }) => (
                        <>
                            <label htmlFor={field.name} className={classNames({ 'p-error': errors.year })}>
                                Year* (between 1960 and 2050)
                            </label>
                            <InputNumber
                                id={field.name}
                                inputRef={field.ref}
                                value={field.value}
                                onBlur={field.onBlur}
                                onValueChange={(e) => field.onChange(e)}
                                useGrouping={false}
                                inputClassName={classNames({ 'p-invalid': fieldState.error })}
                            />
                            {getFormErrorMessage(fieldState, field.name, 2050, 1960)}
                        </>
                    )}
                />
            </div>
            <Button label="Submit" type="submit" icon="pi pi-check" />
        </form>
    )
}
        `,
        typescript: `
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button } from 'primereact/button';
import { classNames } from 'primereact/utils';
import { InputNumber } from "primereact/inputnumber";

export default function InvalidDemo() {
    const [formData, setFormData] = useState<any>({});
    const defaultValues = {year: ''};
    const form = useForm({ defaultValues });
    const errors = form.formState.errors;

    const onSubmit = (data: any) => {
        setFormData(data);
    };

	const getFormErrorMessage = (fieldState: ControllerFieldState, fieldName?: string, max?: number, min?: number): JSX.Element | null => {
		if (!fieldState || !fieldState.error) {
			return null;
		}
		const name = fieldName ? fieldName.charAt(0).toUpperCase() + fieldName.slice(1) : '';
		const error = fieldState.error;
		let message;
		switch (error.type) {
			case 'required':
				message = name + ' is required';
				break;
			case 'min':
				message =  name + ' less than minimum allowed value of ' + min + ';
				break;
			case 'max':
				message =  name + ' more than maximum allowed value of ' + max + ';
				break;
			case 'maxLength':
				message =  name + ' more than maximum ' + max + ' allowed characters';
				break;
			default:
				break;
		}
		return <small className="p-error">{message}</small>;
	};

    return (
        <form onSubmit={form.handleSubmit(onSubmit)} className="p-fluid">
            <div className="field">
                <Controller
                    name="year"
                    control={form.control}
                    rules={{ required: true, min: 1960, max: 2050 }}
                    render={({ field, fieldState }) => (
                        <>
                            <label htmlFor={field.name} className={classNames({ 'p-error': errors.year })}>
                                Year* (between 1960 and 2050)
                            </label>
                            <InputNumber
                                id={field.name}
                                inputRef={field.ref}
                                value={field.value}
                                onBlur={field.onBlur}
                                onValueChange={(e) => field.onChange(e)}
                                useGrouping={false}
                                inputClassName={classNames({ 'p-invalid': fieldState.error })}
                            />
                            {getFormErrorMessage(fieldState, field.name, 2050, 1960)}
                        </>
                    )}
                />
            </div>
            <Button label="Submit" type="submit" icon="pi pi-check" />
        </form>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    <a href="https://react-hook-form.com/">React Hook Form</a> is the most popular React library for form validation. The field will be highlighted and receive focus on validation failure.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <div className="flex flex-column gap-2">
                    <form onSubmit={form.handleSubmit(onSubmit)} className="p-fluid">
                        <div className="field">
                            <Controller
                                name="year"
                                control={form.control}
                                rules={{ required: true, min: 1960, max: 2050 }}
                                render={({ field, fieldState }) => (
                                    <>
                                        <label htmlFor={field.name} className={classNames({ 'p-error': errors.year })}>
                                            Year* (between 1960 and 2050)
                                        </label>
                                        <InputNumber
                                            id={field.name}
                                            inputRef={field.ref}
                                            value={field.value}
                                            onBlur={field.onBlur}
                                            onValueChange={(e) => field.onChange(e)}
                                            useGrouping={false}
                                            inputClassName={classNames({ 'p-invalid': fieldState.error })}
                                        />
                                        {getFormErrorMessage(fieldState, field.name, 2050, 1960)}
                                    </>
                                )}
                            />
                        </div>
                        <Button label="Submit" type="submit" icon="pi pi-check" />
                    </form>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
