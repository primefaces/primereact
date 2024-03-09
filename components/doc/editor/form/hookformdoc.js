import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Button } from '@/components/lib/button/Button';
import { Editor } from '@/components/lib/editor/Editor';
import { Toast } from '@/components/lib/toast/Toast';
import { useRef } from 'react';
import { Controller, useForm } from 'react-hook-form';

export function HookFormDoc(props) {
    const toast = useRef(null);

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Submission Received', detail: 'The blog is uploaded' });
    };

    const renderHeader = () => {
        return (
            <span className="ql-formats">
                <button className="ql-bold" aria-label="Bold"></button>
                <button className="ql-italic" aria-label="Italic"></button>
                <button className="ql-underline" aria-label="Underline"></button>
            </span>
        );
    };

    const header = renderHeader();

    const defaultValues = {
        blog: ''
    };

    const {
        control,
        formState: { errors },
        handleSubmit,
        reset
    } = useForm({ defaultValues });

    const onSubmit = (data) => {
        data.blog && show();

        reset();
    };

    const getFormErrorMessage = (name) => {
        return errors[name] ? <small className="p-error">{errors[name].message}</small> : <small className="p-error">&nbsp;</small>;
    };

    const code = {
        basic: `
<Toast ref={toast} />
<Controller
    name="blog"
    control={control}
    rules={{ required: 'Content is required.' }}
    render={({ field }) => <Editor id={field.name} name="blog" value={field.value} headerTemplate={header} onTextChange={(e) => field.onChange(e.textValue)} style={{ height: '320px' }} />}
/
{getFormErrorMessage('blog')}
<Button type="submit" label="Save" />
        `,
        javascript: `
import React, { useRef } from "react";
import { useForm, Controller } from 'react-hook-form';
import { Editor } from 'primereact/editor';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

export default function HookFormDoc() {
    const toast = useRef(null);

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Submission Received', detail: 'The blog is uploaded' });
    };

    const renderHeader = () => {
        return (
            <span className="ql-formats">
                <button className="ql-bold" aria-label="Bold"></button>
                <button className="ql-italic" aria-label="Italic"></button>
                <button className="ql-underline" aria-label="Underline"></button>
            </span>
        );
    };

    const header = renderHeader();

    const defaultValues = {
        blog: ''
    };

    const {
        control,
        formState: { errors },
        handleSubmit,
        reset
    } = useForm({ defaultValues });

    const onSubmit = (data) => {
        data.blog && show();

        reset();
    };

    const getFormErrorMessage = (name) => {
        return errors[name] ? <small className="p-error">{errors[name].message}</small> : <small className="p-error">&nbsp;</small>;
    };

    return (
        <div className="card">
            <form onSubmit={handleSubmit(onSubmit)}>
                <Toast ref={toast} />
                <Controller
                    name="blog"
                    control={control}
                    rules={{ required: 'Content is required.' }}
                    render={({ field }) => <Editor id={field.name} name="blog" value={field.value} headerTemplate={header} onTextChange={(e) => field.onChange(e.textValue)} style={{ height: '320px' }} />}
                />
                <div className="flex flex-wrap justify-content-between align-items-center gap-3 mt-3">
                    {getFormErrorMessage('blog')}
                    <Button type="submit" label="Save" />
                </div>
            </form>
        </div>
    )
}
        `,
        typescript: `
import React, { useRef } from "react";
import { useForm, Controller } from 'react-hook-form';
import { Editor, EditorTextChangeEvent } from 'primereact/editor';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

export default function HookFormDoc() {
    const toast = useRef(null);

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Submission Received', detail: 'The blog is uploaded' });
    };

    const renderHeader = () => {
        return (
            <span className="ql-formats">
                <button className="ql-bold" aria-label="Bold"></button>
                <button className="ql-italic" aria-label="Italic"></button>
                <button className="ql-underline" aria-label="Underline"></button>
            </span>
        );
    };

    const header = renderHeader();

    const defaultValues = {
        blog: ''
    };

    const {
        control,
        formState: { errors },
        handleSubmit,
        reset
    } = useForm({ defaultValues });

    const onSubmit = (data) => {
        data.blog && show();

        reset();
    };

    const getFormErrorMessage = (name) => {
        return errors[name] ? <small className="p-error">{errors[name].message}</small> : <small className="p-error">&nbsp;</small>;
    };

    return (
        <div className="card">
            <form onSubmit={handleSubmit(onSubmit)}>
                <Toast ref={toast} />
                <Controller
                    name="blog"
                    control={control}
                    rules={{ required: 'Content is required.' }}
                    render={({ field }) => <Editor id={field.name} name="blog" value={field.value} headerTemplate={header} onTextChange={(e: EditorTextChangeEvent) => field.onChange(e.textValue)} style={{ height: '320px' }} />}
                />
                <div className="flex flex-wrap justify-content-between align-items-center gap-3 mt-3">
                    {getFormErrorMessage('blog')}
                    <Button type="submit" label="Save" />
                </div>
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
            <div className="card">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Toast ref={toast} />
                    <Controller
                        name="blog"
                        control={control}
                        rules={{ required: 'Content is required.' }}
                        render={({ field }) => <Editor id={field.name} name="blog" value={field.value} headerTemplate={header} onTextChange={(e) => field.onChange(e.textValue)} style={{ height: '320px' }} />}
                    />
                    <div className="flex flex-wrap justify-content-between align-items-center gap-3 mt-3">
                        {getFormErrorMessage('blog')}
                        <Button type="submit" label="Save" />
                    </div>
                </form>
            </div>
            <DocSectionCode code={code} dependencies={{ 'react-hook-form': '^7.39.4', quill: '1.3.7' }} />
        </>
    );
}
