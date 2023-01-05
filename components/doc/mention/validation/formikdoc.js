import { useRef, useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { DocSectionText } from '../../common/docsectiontext';
import { DocSectionCode } from '../../common/docsectioncode';
import { Button } from '../../../lib/button/Button';
import { CustomerService } from '../../../../service/CustomerService';
import { Toast } from '../../../lib/toast/Toast';
import { classNames } from '../../../lib/utils/Utils';
import { Mention } from '../../../lib/mention/Mention';

export function FormikDoc(props) {
    const toast = useRef(null);
    const [customers, setCustomers] = useState([]);
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        CustomerService.getCustomersSmall().then((data) => {
            data.forEach((d) => (d['nickname'] = `${d.name.replace(/\s+/g, '').toLowerCase()}_${d.id}`));
            setCustomers(data);
        });
    }, []);

    const onSearch = (event) => {
        //in a real application, make a request to a remote url with the query and return suggestions, for demo we filter at client side
        setTimeout(() => {
            const query = event.query;
            let suggestions;

            if (!query.trim().length) {
                suggestions = [...customers];
            } else {
                suggestions = customers.filter((customer) => {
                    return customer.nickname.toLowerCase().startsWith(query.toLowerCase());
                });
            }

            setSuggestions(suggestions);
        }, 250);
    };

    const itemTemplate = (suggestion) => {
        const src = 'images/avatar/' + suggestion.representative.image;

        return (
            <div className="flex align-items-center">
                <img alt={suggestion.name} src={src} onError={(e) => (e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')} width="32" style={{ verticalAlign: 'middle' }} />
                <span className="flex flex-column ml-2">
                    {suggestion.name}
                    <small style={{ fontSize: '.75rem', color: 'var(--text-secondary-color)' }}>@{suggestion.nickname}</small>
                </span>
            </div>
        );
    };

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Submission Received', detail: 'Thank you, we have received your submission.' });
    };

    const formik = useFormik({
        initialValues: {
            description: null
        },
        validate: (data) => {
            let errors = {};

            if (!data.description) {
                errors.description = 'Mention is required.';
            }

            return errors;
        },
        onSubmit: (data) => {
            data && show();
            formik.resetForm();
        }
    });

    const isFormFieldValid = (name) => !!(formik.touched[name] && formik.errors[name]);

    const getFormErrorMessage = (name) => {
        return isFormFieldValid(name) ? <small className="p-error">{formik.errors[name]}</small> : <small className="p-error"> </small>;
    };

    const code = {
        basic: `
<Toast ref={toast} />
<label htmlFor="description" className={classNames({ 'p-error': isFormFieldValid('description') })}>
    Description*
</label>
<InputTextarea
    id="description"
    name="description"
    rows={5}
    cols={30}
    className={classNames({ 'p-invalid': isFormFieldValid('description') })}
    value={formik.values.description}
    onChange={(e) => {
        formik.setFieldValue('description', e.target.value);
    }}
/>
<Button label="Submit" type="submit" icon="pi pi-check mt-2" />
        `,
        javascript: `
import React, { useRef } from "react";
import { useFormik } from 'formik';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import { classNames } from 'primereact/utils';
import { Toast } from 'primereact/toast';


export default function FormikDoc() {
    const toast = useRef(null);
        
    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Submission Received', detail: "Thank you, we have received your submission." });
    };

    const formik = useFormik({
        initialValues: {
            description: ''
        },
        validate: (data) => {
            let errors = {};

            if (!data.description) {
                errors.description = 'Description is required.';
            }

            return errors;
        },
        onSubmit: (data) => {
            data && show();
            formik.resetForm();
        }
    });

    const isFormFieldValid = (name) => !!(formik.touched[name] && formik.errors[name]);

    const getFormErrorMessage = (name) => {
        return isFormFieldValid(name) ? <small className="p-error">{formik.errors[name]}</small> : <small className="p-error"> </small>;
    };

    return (
        <div className="card flex justify-content-center">
            <form onSubmit={formik.handleSubmit} className="flex flex-column">
                <Toast ref={toast} />
                <div className="field">
                    <div className="flex flex-column">
                        <label htmlFor="description" className={classNames({ 'p-error': isFormFieldValid('description') })}>
                            Description*
                        </label>
                        <InputTextarea
                            id="description"
                            name="description"
                            rows={5}
                            cols={30}
                            className={classNames({ 'p-invalid': isFormFieldValid('description') })}
                            value={formik.values.description}
                            onChange={(e) => {
                                formik.setFieldValue('description', e.target.value);
                            }}
                        />
                        {getFormErrorMessage('description')}
                    </div>
                </div>
                <Button label="Submit" type="submit" icon="pi pi-check mt-2" />
            </form>
        </div>
    )
}
        `,
        typescript: `
import React, { useRef } from "react";
import { useFormik } from 'formik';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import { classNames } from 'primereact/utils';
import { Toast } from 'primereact/toast';

export default function FormikDoc() {
    const toast = useRef<any>(null);
        
    const show = ():void => {
        toast.current.show({ severity: 'success', summary: 'Submission Received', detail: "Thank you, we have received your submission." });
    };

    const formik = useFormik({
        initialValues: {
            description: ''
        },
        validate: (data) => {
            let errors = {};

            if (!data.description) {
                errors.description = 'Description is required.';
            }

            return errors;
        },
        onSubmit: (data) => {
            data && show();
            formik.resetForm();
        }
    });

    const isFormFieldValid = (name) => !!(formik.touched[name] && formik.errors[name]);

    const getFormErrorMessage = (name) => {
        return isFormFieldValid(name) ? <small className="p-error">{formik.errors[name]}</small> : <small className="p-error"> </small>;
    };

    return (
        <div className="card flex justify-content-center">
            <form onSubmit={formik.handleSubmit} className="flex flex-column">
                <Toast ref={toast} />
                <div className="field">
                    <div className="flex flex-column">
                        <label htmlFor="description" className={classNames({ 'p-error': isFormFieldValid('description') })}>
                            Description*
                        </label>
                        <InputTextarea
                            id="description"
                            name="description"
                            rows={5}
                            cols={30}
                            className={classNames({ 'p-invalid': isFormFieldValid('description') })}
                            value={formik.values.description}
                            onChange={(e) => {
                                formik.setFieldValue('description', e.target.value);
                            }}
                        />
                        {getFormErrorMessage('description')}
                    </div>
                </div>
                <Button label="Submit" type="submit" icon="pi pi-check mt-2" />
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
                <form onSubmit={formik.handleSubmit} className="flex flex-column">
                    <Toast ref={toast} />
                    <div className="field">
                        <div className="flex flex-column">
                            <label htmlFor="description" className={classNames({ 'p-error': isFormFieldValid('description') })}>
                                Please enter @ to mention people
                            </label>
                            <Mention
                                id="description"
                                name="description"
                                field="nickname"
                                onSearch={onSearch}
                                placeholder="Please enter @ to mention people"
                                rows={5}
                                cols={40}
                                suggestions={suggestions}
                                itemTemplate={itemTemplate}
                                className={classNames({ 'p-invalid': isFormFieldValid('description') })}
                                value={formik.values.description}
                                onChange={(e) => {
                                    formik.setFieldValue('description', e.target.value);
                                }}
                            />

                            {getFormErrorMessage('description')}
                        </div>
                    </div>
                    <Button label="Submit" type="submit" icon="pi pi-check mt-2" />
                </form>
            </div>
            <DocSectionCode code={code} dependencies={{ formik: '^2.2.6' }} />
        </>
    );
}
