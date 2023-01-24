import { useRef } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { DocSectionText } from '../../common/docsectiontext';
import { DocSectionCode } from '../../common/docsectioncode';
import { Button } from '../../../lib/button/Button';
import { Toast } from '../../../lib/toast/Toast';
import { ColorPicker } from '../../../lib/colorpicker/ColorPicker';
import { classNames } from '../../../lib/utils/Utils';

export function HookFormDoc(props) {
    const toast = useRef(null);

    const show = (data) => {
        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: `#${data.color.toUpperCase()}` });
    };

    const defaultValues = {
        color: ''
    };

    const {
        control,
        formState: { errors },
        handleSubmit,
        reset
    } = useForm({ defaultValues });

    const onSubmit = (data) => {
        data.color && show(data);

        reset();
    };

    const getFormErrorMessage = (name) => {
        return errors[name] ? <small className="p-error">{errors[name].message}</small> : <small className="p-error">&nbsp;</small>;
    };

    const code = {
        basic: `
<Toast ref={toast} />
<Controller
name="color"
control={control}
    rules={{ required: 'Color is required.' }}
    render={({ field, fieldState }) => <ColorPicker name="color" control={control} value={field.value} className={classNames({ 'p-invalid': fieldState.error })} onChange={(e) => field.onChange(e.value)} />}
    />
    {getFormErrorMessage('color')}
<Button type="submit" label="Submit" />
        `,
        javascript: `
import React, { useRef } from "react";
import { useForm, Controller } from 'react-hook-form';
import { ColorPicker } from 'primereact/colorpicker';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { classNames } from 'primereact/utils';

export default function HookFormDoc() {
    const toast = useRef(null);

    const show = (data) => {
        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail:\`#\${data.color.toUpperCase()}\`});
    };

    const defaultValues = {
        color: ''
    };

    const {
        control,
        formState: { errors },
        handleSubmit,
        reset
    } = useForm({ defaultValues });

    const onSubmit = (data) => {
        data.color && show(data);

        reset();
    };

    const getFormErrorMessage = (name) => {
        return errors[name] ? <small className="p-error">{errors[name].message}</small> : <small className="p-error">&nbsp;</small>;
    };

    return (
        <div className="card flex justify-content-center">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-column align-items-center gap-2">
                <Toast ref={toast} />
                <Controller
                    name="color"
                    control={control}
                    rules={{ required: 'Color is required.' }}
                    render={({ field, fieldState }) => <ColorPicker name="color" control={control} value={field.value} className={classNames({ 'p-invalid': fieldState.error })} onChange={(e) => field.onChange(e.value)} />}
                />
                {getFormErrorMessage('color')}
                <Button type="submit" label="Submit" />
            </form>
        </div>
    )
}
        `,
        typescript: `
import React, { useRef } from "react";
import { useForm, Controller } from 'react-hook-form';
import { ColorPicker } from 'primereact/colorpicker';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { classNames } from 'primereact/utils';

export default function HookFormDoc() {
    const toast = useRef(null);

    const show = (data) => {
        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: detail:\`#\${data.color.toUpperCase()}\`});
    };

    const defaultValues = {
        color: ''
    };

    const {
        control,
        formState: { errors },
        handleSubmit,
        reset
    } = useForm({ defaultValues });

    const onSubmit = (data) => {
        data.color && show(data);

        reset();
    };

    const getFormErrorMessage = (name) => {
        return errors[name] ? <small className="p-error">{errors[name].message}</small> : <small className="p-error">&nbsp;</small>;
    };

    return (
        <div className="card flex justify-content-center">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-column align-items-center gap-2">
                <Toast ref={toast} />
                <Controller
                    name="color"
                    control={control}
                    rules={{ required: 'Color is required.' }}
                    render={({ field, fieldState }) => <ColorPicker name="color" control={control} value={field.value} className={classNames({ 'p-invalid': fieldState.error })} onChange={(e) => field.onChange(e.value)} />}
                />
                {getFormErrorMessage('color')}
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
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-column align-items-center gap-2">
                    <Toast ref={toast} />
                    <Controller
                        name="color"
                        control={control}
                        rules={{ required: 'Color is required.' }}
                        render={({ field, fieldState }) => <ColorPicker name="color" control={control} value={field.value} className={classNames({ 'p-invalid': fieldState.error })} onChange={(e) => field.onChange(e.value)} />}
                    />
                    {getFormErrorMessage('color')}
                    <Button type="submit" label="Submit" />
                </form>
            </div>
            <DocSectionCode code={code} dependencies={{ 'react-hook-form': '^7.39.4' }} />
        </>
    );
}
