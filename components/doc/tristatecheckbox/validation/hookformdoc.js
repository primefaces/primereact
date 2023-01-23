import { useRef } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button } from '../../../lib/button/Button';
import { Toast } from '../../../lib/toast/Toast';
import { TriStateCheckbox } from '../../../lib/tristatecheckbox/TriStateCheckbox';
import { classNames } from '../../../lib/utils/Utils';
import { DocSectionCode } from '../../common/docsectioncode';
import { DocSectionText } from '../../common/docsectiontext';

export function HookFormDoc(props) {
    const toast = useRef(null);

    const show = () => {
        // TO DO: Add detail content to the toast.
        toast.current.show({ severity: 'success', summary: 'Submission Received', detail: 'Thank you, we have received your submission.' });
    };

    const defaultValues = {
        accept: null
    };

    const {
        control,
        formState: { errors },
        handleSubmit,
        reset
    } = useForm({ defaultValues });

    const onSubmit = (data) => {
        data.accept && show();

        reset();
    };

    const getFormErrorMessage = (name) => {
        return errors[name] && <small className="p-error">{errors[name].message}</small>;
    };

    const code = {
        basic: `
<Toast ref={toast} />
<Controller
    name="accept"
    control={control}
    rules={{ required: 'Accept is required.' }}
    render={({ field, fieldState }) => (
        <>
            <TriStateCheckbox id={field.name} value={field.value} ref={field.ref} onChange={field.onChange} className={classNames({ 'p-invalid': fieldState.error })} />
            <label>* I've read and accept the terms & conditions.</label>
            {getFormErrorMessage(field.name)}
        </>
    )}
/>
<Button label="Submit" type="submit" icon="pi pi-check" />
        `,
        javascript: `
import React, { useRef } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { TriStateCheckbox } from "primereact/tristatecheckbox";
import { classNames } from 'primereact/utils';

export default function HookFormDoc() {
    const toast = useRef(null);

    const show = () => {
        // TO DO: Add detail content to the toast.
        toast.current.show({ severity: 'success', summary: 'Submission Received', detail: "Thank you, we have received your submission." });
    };

    const defaultValues = {
        accept: null
    };

    const {
        control,
        formState: { errors },
        handleSubmit,
        reset
    } = useForm({ defaultValues });

    const onSubmit = (data) => {
        data.accept && show();

        reset();
    };

    const getFormErrorMessage = (name) => {
        return errors[name] && <small className="p-error">{errors[name].message}</small>;
    };

    return (
        <div className="card flex flex-column align-items-center">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-column align-items-start justify-content-center gap-2">
                <Toast ref={toast} />
                <Controller
                    name="accept"
                    control={control}
                    rules={{ required: 'Accept is required.' }}
                    render={({ field, fieldState }) => (
                        <>
                            <TriStateCheckbox id={field.name} value={field.value} ref={field.ref} onChange={field.onChange} className={classNames({ 'p-invalid': fieldState.error })} />
                            <label>* I've read and accept the terms & conditions.</label>
                            {getFormErrorMessage(field.name)}
                        </>
                    )}
                />
                <Button label="Submit" type="submit" icon="pi pi-check" />
            </form>
        </div>
    )
}
        `,
        typescript: `
import React, { useRef } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { TriStateCheckbox } from "primereact/tristatecheckbox";
import { classNames } from 'primereact/utils';

export default function HookFormDoc() {
    const toast = useRef(null);

    const show = () => {
        // TO DO: Add detail content to the toast.
        toast.current.show({ severity: 'success', summary: 'Submission Received', detail: "Thank you, we have received your submission." });
    };

    const defaultValues = {
        accept: null
    };

    const {
        control,
        formState: { errors },
        handleSubmit,
        reset
    } = useForm({ defaultValues });

    const onSubmit = (data) => {
        data.accept && show();

        reset();
    };

    const getFormErrorMessage = (name) => {
        return errors[name] && <small className="p-error">{errors[name].message}</small>;
    };

    return (
        <div className="card flex flex-column align-items-center">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-column align-items-start justify-content-center gap-2">
                <Toast ref={toast} />
                <Controller
                    name="accept"
                    control={control}
                    rules={{ required: 'Accept is required.' }}
                    render={({ field, fieldState }) => (
                        <>
                            <TriStateCheckbox id={field.name} value={field.value} ref={field.ref} onChange={field.onChange} className={classNames({ 'p-invalid': fieldState.error })} />
                            <label>* I've read and accept the terms & conditions.</label>
                            {getFormErrorMessage(field.name)}
                        </>
                    )}
                />
                <Button label="Submit" type="submit" icon="pi pi-check" />
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
                    <a href="https://react-hook-form.com/">React Hook Form</a> is the most popular React library for form validation. The field will be highlighted and receive focus on validation failure.
                </p>
            </DocSectionText>
            <div className="card flex flex-column align-items-center">
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-column align-items-start justify-content-center gap-2">
                    <Toast ref={toast} />
                    <Controller
                        name="accept"
                        control={control}
                        rules={{ required: 'Accept is required.' }}
                        render={({ field, fieldState }) => (
                            <>
                                <TriStateCheckbox id={field.name} value={field.value} ref={field.ref} onChange={field.onChange} className={classNames({ 'p-invalid': fieldState.error })} />
                                <label>* I've read and accept the terms & conditions.</label>
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
