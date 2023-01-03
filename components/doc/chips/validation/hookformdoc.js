import { useRef } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { DocSectionText } from '../../common/docsectiontext';
import { DocSectionCode } from '../../common/docsectioncode';
import { Button } from '../../../lib/button/Button';
import { Toast } from '../../../lib/toast/Toast';
import { Chips } from '../../../lib/chips/Chips';

export function HookFormDoc(props) {
    const toast = useRef(null);

    const show = (data) => {
        // TO DO: Add detail content to the toast.
        toast.current.show({ severity: 'success', summary: 'Submitted', detail: `${data.chipArray}` });
    };

    const defaultValues = {
        chipArray: null
    };

    const {
        control,
        formState: { errors },
        handleSubmit,
        reset
    } = useForm({ defaultValues });

    const onSubmit = (data) => {
        data.chipArray.length > 0 && show(data);

        reset();
    };

    const getFormErrorMessage = (name) => {
        return errors[name] && <small className="p-error">{errors[name].message}</small>;
    };

    const code = {
        basic: `
<Toast ref={toast} />
<Controller
    name="city"
    control={control}
    rules={{ required: 'City is required.' }}
    render={({ field }) => (
        <CascadeSelect id={field.name} name="city" value={field.value} options={countries} optionLabel={'cname'} optionGroupLabel={'name'}
         optionGroupChildren={['states', 'cities']} style={{ minWidth: '14rem' }} placeholder={'Select a City'}
         onChange={(e) => field.onChange(e.value)}/>)}
    />
        `,
        javascript: `
import React, { useRef } from "react";
import { useForm, Controller } from 'react-hook-form';
import { Chips } from 'primereact/chips';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

export default function HookFormDoc() {
    const toast = useRef(null);

    const show = (data) => {
        // TO DO: Add detail content to the toast.
        toast.current.show({ severity: 'success', summary: 'Submitted', detail: \`\${data.chipArray}\` });
    };

    const defaultValues = {
        chipArray: []
    };

    const {
        control,
        formState: { errors },
        handleSubmit,
        reset
    } = useForm({ defaultValues });

    const onSubmit = (data) => {
        data.chipArray.length > 0 && show(data);

        reset();
    };

    const getFormErrorMessage = (name) => {
        return errors[name] && <small className="p-error">{errors[name].message}</small>;
    };

    return (
        <div className="card flex justify-content-center">
            <form onSubmit={handleSubmit(onSubmit)} className="p-fluid">
                <Toast ref={toast} />
                <Controller name="chipArray" control={control} rules={{ required: 'At least 1 chip required.' }} render={({ field }) => <Chips id={field.name} name="chipArray" value={field.value} onChange={(e) => field.onChange(e.value)} />} />

                {getFormErrorMessage('chipArray')}
                <Button type="submit" label="Submit" className="mt-2" />
            </form>
        </div>
    )
}
        `,
        typescript: `
import React, { useRef } from "react";
import { useForm, Controller } from 'react-hook-form';
import { Chips } from 'primereact/chips';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

export default function HookFormDoc() {
    const [formData, setFormData] = useState({});
    const toast = useRef(null);

    const show = (data) => {
        // TO DO: Add detail content to the toast.
        toast.current.show({ severity: 'success', summary: 'Submitted', detail: \`\${data.chipArray}\` });
    };

    const defaultValues = {
        chipArray: []
    };

    const {
        control,
        formState: { errors },
        handleSubmit,
        reset
    } = useForm({ defaultValues });

    const onSubmit = (data) => {
        data.chipArray.length > 0 && show(data);

        reset();
    };

    const getFormErrorMessage = (name) => {
        return errors[name] && <small className="p-error">{errors[name].message}</small>;
    };

    return (
        <div className="card flex justify-content-center">
            <form onSubmit={handleSubmit(onSubmit)} className="p-fluid">
                <Toast ref={toast} />
                <Controller name="chipArray" control={control} rules={{ required: 'At least 1 chip required.' }} render={({ field }) => <Chips id={field.name} name="chipArray" value={field.value} onChange={(e) => field.onChange(e.value)} />} />

                {getFormErrorMessage('chipArray')}
                <Button type="submit" label="Submit" className="mt-2" />
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
                <form onSubmit={handleSubmit(onSubmit)} className="p-fluid">
                    <Toast ref={toast} />
                    <Controller name="chipArray" control={control} rules={{ required: 'At least 1 chip required.' }} render={({ field }) => <Chips id={field.name} name="chipArray" value={field.value} onChange={(e) => field.onChange(e.value)} />} />

                    {getFormErrorMessage('chipArray')}
                    <Button type="submit" label="Submit" className="mt-2" />
                </form>
            </div>
            <DocSectionCode code={code} dependencies={{ 'react-hook-form': '^7.39.4' }} />
        </>
    );
}
