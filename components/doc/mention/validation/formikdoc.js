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
            mention: ''
        },
        validate: (data) => {
            const hasMentionedCustomersNickname = customers.some((customer) => {
                return data.mention && data.mention.includes('@' + customer.nickname);
            });

            let errors = {};

            if (!data.mention || !hasMentionedCustomersNickname) {
                errors.mention = 'Mention is required.';
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
<Mention
    id="mention"
    name="mention"
    field="nickname"
    onSearch={onSearch}
    placeholder="Please enter @ to mention people"
    rows={5}
    cols={40}
    suggestions={suggestions}
    itemTemplate={itemTemplate}
    className={classNames({ 'p-invalid': isFormFieldValid('mention') })}
    value={formik.values.mention}
    onChange={(e) => {
        formik.setFieldValue('mention', e.target.value);
    }}
/>
{getFormErrorMessage('mention')}
<Button label="Submit" type="submit" icon="pi pi-check mt-2" />
        `,
        javascript: `
import React, { useRef, useState, useEffect } from "react";
import { useFormik } from 'formik';
import { Button } from 'primereact/button';
import { CustomerService } from './service/CustomerService';
import { Toast } from 'primereact/toast';
import { classNames } from 'primereact/utils';
import { Mention } from "primereact/mention";


export default function FormikDoc() {
    const toast = useRef(null);
    const [customers, setCustomers] = useState([]);
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        CustomerService.getCustomersSmall().then((data) => {
            data.forEach((d) => (d['nickname'] = \`$\{d.name.replace(/\s+/g, '').toLowerCase()}_\${d.id}\`));
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
            mention: ''
        },
        validate: (data) => {
            const hasMentionedCustomersNickname = customers.some((customer) => {
                return data.mention && data.mention.includes('@' + customer.nickname);
            });

            let errors = {};

            if (!data.mention || !hasMentionedCustomersNickname) {
                errors.mention = 'Mention is required.';
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
                        <Mention
                            id="mention"
                            name="mention"
                            field="nickname"
                            onSearch={onSearch}
                            placeholder="Please enter @ to mention people"
                            rows={5}
                            cols={40}
                            suggestions={suggestions}
                            itemTemplate={itemTemplate}
                            className={classNames({ 'p-invalid': isFormFieldValid('mention') })}
                            value={formik.values.mention}
                            onChange={(e) => {
                                formik.setFieldValue('mention', e.target.value);
                            }}
                        />

                        {getFormErrorMessage('mention')}
                    </div>
                </div>
                <Button label="Submit" type="submit" icon="pi pi-check mt-2" />
            </form>
        </div>
    )
}
        `,
        typescript: `
import React, { useRef, useState, useEffect } from "react";
import { useFormik } from 'formik';
import { Button } from 'primereact/button';
import { CustomerService } from './service/CustomerService';
import { Toast } from 'primereact/toast';
import { classNames } from 'primereact/utils';
import { Mention } from "primereact/mention";

export default function FormikDoc() {
    const toast = useRef<Toast | null>(null);
    const [customers, setCustomers] = useState<any[] | []>([]);
    const [suggestions, setSuggestions] = useState<any[] | []>([]);

    useEffect(() => {
        CustomerService.getCustomersSmall().then((data) => {
            data.forEach((d) => (d['nickname'] = \`$\{d.name.replace(/\s+/g, '').toLowerCase()}_\${d.id}\`));
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
            mention: ''
        },
        validate: (data) => {
            const hasMentionedCustomersNickname = customers.some((customer) => {
                return data.mention && data.mention.includes('@' + customer.nickname);
            });

            let errors = {};

            if (!data.mention || !hasMentionedCustomersNickname) {
                errors.mention = 'Mention is required.';
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
                        <Mention
                            id="mention"
                            name="mention"
                            field="nickname"
                            onSearch={onSearch}
                            placeholder="Please enter @ to mention people"
                            rows={5}
                            cols={40}
                            suggestions={suggestions}
                            itemTemplate={itemTemplate}
                            className={classNames({ 'p-invalid': isFormFieldValid('mention') })}
                            value={formik.values.mention}
                            onChange={(e) => {
                                formik.setFieldValue('mention', e.target.value);
                            }}
                        />

                        {getFormErrorMessage('mention')}
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
                            <Mention
                                id="mention"
                                name="mention"
                                field="nickname"
                                onSearch={onSearch}
                                placeholder="Please enter @ to mention people"
                                rows={5}
                                cols={40}
                                suggestions={suggestions}
                                itemTemplate={itemTemplate}
                                className={classNames({ 'p-invalid': isFormFieldValid('mention') })}
                                value={formik.values.mention}
                                onChange={(e) => {
                                    formik.setFieldValue('mention', e.target.value);
                                }}
                            />

                            {getFormErrorMessage('mention')}
                        </div>
                    </div>
                    <Button label="Submit" type="submit" icon="pi pi-check mt-2" />
                </form>
            </div>
            <DocSectionCode code={code} service={['CustomerService']} dependencies={{ formik: '^2.2.6' }} />
        </>
    );
}
