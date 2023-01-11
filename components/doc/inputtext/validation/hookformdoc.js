import { useRef } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Button } from '../../../lib/button/Button';
import { InputText } from '../../../lib/inputtext/InputText';
import { Toast } from '../../../lib/toast/Toast';
import { classNames } from '../../../lib/utils/Utils';
import { DocSectionCode } from '../../common/docsectioncode';
import { DocSectionText } from '../../common/docsectiontext';

export function HookFormDoc(props) {
    const toast = useRef(null);

    const show = () => {
        // TO DO: Add detail content to the toast.
        toast.current.show({ severity: 'success', summary: 'Saved', detail: 'Successfully submitted.' });
    };

    const defaultValues = {
        checked: false
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
        return errors[name] && <small className="p-error">{errors[name].message}</small>;
    };

    const code = {
        basic: `
<Controller
    name="checked"
    control={control}
    rules={{ required: 'Name - Surname is required.' }}
    render={({ field, fieldState }) => (
        <>
            <label htmlFor={field.name} className={classNames({ 'p-error': errors.checked })}></label>
            <InputText inputId={field.name} checked={field.value} inputRef={field.ref} className={classNames({ 'p-invalid my-1': fieldState.error })} onChange={(e) => field.onChange(e.target.value)} />
            {getFormErrorMessage(field.name)}
        </>
    )}/>        
`,
        javascript: `
import React, { useRef } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button } from 'primereact/button';
import { classNames } from 'primereact/utils';
import { Toast } from 'primereact/toast';
import { InputText } from "primereact/inputtext";

export default function HookFormDoc() {
    const toast = useRef(null);

    const show = () => {
        // TO DO: Add detail content to the toast.
        toast.current.show({ severity: 'success', summary: 'Saved', detail: 'Successfully submitted.' });
    };

    const defaultValues = {
        checked: false
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
        return errors[name] && <small className="p-error">{errors[name].message}</small>;
    };

    return (
        <div className="card flex justify-content-center ">
            <div className="flex flex-column">
                <form onSubmit={handleSubmit(onSubmit)} className="p-fluid ">
                    <span>Name - Surname</span>
                    <div className="mb-2 flex flex-column align-items-center">
                        <Toast ref={toast} />
                        <Controller
                            name="checked"
                            control={control}
                            rules={{ required: 'Name - Surname is required.' }}
                            render={({ field, fieldState }) => (
                                <>
                                    <label htmlFor={field.name} className={classNames({ 'p-error': errors.checked })}></label>
                                    <InputText inputId={field.name} checked={field.value} inputRef={field.ref} className={classNames({ 'p-invalid my-1': fieldState.error })} onChange={(e) => field.onChange(e.target.value)} />
                                    {getFormErrorMessage(field.name)}
                                </>
                            )}
                        />
                    </div>
                    <Button label="Submit" type="submit" icon="pi pi-check" />
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
import { classNames } from 'primereact/utils';
import { Toast } from 'primereact/toast';
import { InputText } from "primereact/inputtext";

export default function HookFormDoc() {
    const toast = useRef(null);

    const show = () => {
        // TO DO: Add detail content to the toast.
        toast.current.show({ severity: 'success', summary: 'Saved', detail: 'Successfully submitted.' });
    };

    const defaultValues = {
        checked: false
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
        return errors[name] && <small className="p-error">{errors[name].message}</small>;
    };

    return (
        <div className="card flex justify-content-center ">
            <div className="flex flex-column">
                <form onSubmit={handleSubmit(onSubmit)} className="p-fluid ">
                    <span>Name - Surname</span>
                    <div className="mb-2 flex flex-column align-items-center">
                        <Toast ref={toast} />
                        <Controller
                            name="checked"
                            control={control}
                            rules={{ required: 'Name - Surname is required.' }}
                            render={({ field, fieldState }) => (
                                <>
                                    <label htmlFor={field.name} className={classNames({ 'p-error': errors.checked })}></label>
                                    <InputText inputId={field.name} checked={field.value} inputRef={field.ref} className={classNames({ 'p-invalid my-1': fieldState.error })} onChange={(e) => field.onChange(e.target.value)} />
                                    {getFormErrorMessage(field.name)}
                                </>
                            )}
                        />
                    </div>
                    <Button label="Submit" type="submit" icon="pi pi-check" />
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
                <div className="flex flex-column">
                    <form onSubmit={handleSubmit(onSubmit)} className="p-fluid ">
                        <span>Name - Surname</span>
                        <div className="mb-2 flex flex-column align-items-center">
                            <Toast ref={toast} />
                            <Controller
                                name="checked"
                                control={control}
                                rules={{ required: 'Name - Surname is required.' }}
                                render={({ field, fieldState }) => (
                                    <>
                                        <label htmlFor={field.name} className={classNames({ 'p-error': errors.checked })}></label>
                                        <InputText inputId={field.name} checked={field.value} inputRef={field.ref} className={classNames({ 'p-invalid my-1': fieldState.error })} onChange={(e) => field.onChange(e.target.value)} />
                                        {getFormErrorMessage(field.name)}
                                    </>
                                )}
                            />
                        </div>
                        <Button label="Submit" type="submit" icon="pi pi-check" className="my-" />
                    </form>
                </div>
            </div>

            <DocSectionCode code={code} dependencies={{ 'react-hook-form': '^7.39.4' }} />
        </>
    );
}
