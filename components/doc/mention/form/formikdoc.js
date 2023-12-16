import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Button } from '@/components/lib/button/Button';
import { Mention } from '@/components/lib/mention/Mention';
import { Toast } from '@/components/lib/toast/Toast';
import { classNames } from '@/components/lib/utils/Utils';
import { useFormik } from 'formik';
import { useEffect, useRef, useState } from 'react';
import { CustomerService } from '../../../../service/CustomerService';

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
        const src = 'https://primefaces.org/cdn/primereact/images/avatar/' + suggestion.representative.image;

        return (
            <div className="flex align-items-center">
                <img alt={suggestion.name} src={src} width="32" style={{ verticalAlign: 'middle' }} />
                <span className="flex flex-column ml-2">
                    {suggestion.name}
                    <small style={{ fontSize: '.75rem', color: 'var(--text-color-secondary)' }}>@{suggestion.nickname}</small>
                </span>
            </div>
        );
    };

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: formik.values.item });
    };

    const formik = useFormik({
        initialValues: {
            item: ''
        },
        validate: (data) => {
            const hasMentionedCustomersNickname = customers.some((customer) => {
                return data.item && data.item.includes('@' + customer.nickname);
            });

            let errors = {};

            if (!data.item || !hasMentionedCustomersNickname) {
                errors.item = 'Mention is required.';
            }

            return errors;
        },
        onSubmit: (data) => {
            data && show();
            formik.resetForm();
        }
    });

    const isFormFieldInvalid = (name) => !!(formik.touched[name] && formik.errors[name]);

    const getFormErrorMessage = (name) => {
        return isFormFieldInvalid(name) ? <small className="p-error">{formik.errors[name]}</small> : <small className="p-error">&nbsp;</small>;
    };

    const code = {
        basic: `
<Toast ref={toast} />
<Mention
    id="item"
    name="item"
    field="nickname"
    onSearch={onSearch}
    placeholder="Please enter @ to mention people"
    rows={5}
    cols={40}
    suggestions={suggestions}
    itemTemplate={itemTemplate}
    className={classNames({ 'p-invalid': isFormFieldInvalid('item') })}
    value={formik.values.item}
    onChange={(e) => {
        formik.setFieldValue('item', e.target.value);
    }}
/>
{getFormErrorMessage('item')}
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
        const src = 'https://primefaces.org/cdn/primereact/images/avatar/' + suggestion.representative.image;

        return (
            <div className="flex align-items-center">
                <img alt={suggestion.name} src={src} width="32" style={{ verticalAlign: 'middle' }} />
                <span className="flex flex-column ml-2">
                    {suggestion.name}
                    <small style={{ fontSize: '.75rem', color: 'var(--text-color-secondary)' }}>@{suggestion.nickname}</small>
                </span>
            </div>
        );
    };

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: formik.values.item });
    };

    const formik = useFormik({
        initialValues: {
            item: ''
        },
        validate: (data) => {
            const hasMentionedCustomersNickname = customers.some((customer) => {
                return data.item && data.item.includes('@' + customer.nickname);
            });

            let errors = {};

            if (!data.item || !hasMentionedCustomersNickname) {
                errors.item = 'Mention is required.';
            }

            return errors;
        },
        onSubmit: (data) => {
            data && show();
            formik.resetForm();
        }
    });

    const isFormFieldInvalid = (name) => !!(formik.touched[name] && formik.errors[name]);

    const getFormErrorMessage = (name) => {
        return isFormFieldInvalid(name) ? <small className="p-error">{formik.errors[name]}</small> : <small className="p-error">&nbsp;</small>;
    };

    return (
        <div className="card flex justify-content-center">
            <form onSubmit={formik.handleSubmit} className="flex flex-column">
                <Toast ref={toast} />
                <div className="field">
                    <div className="flex flex-column">
                        <Mention
                            id="item"
                            name="item"
                            field="nickname"
                            onSearch={onSearch}
                            placeholder="Please enter @ to mention people"
                            rows={5}
                            cols={40}
                            suggestions={suggestions}
                            itemTemplate={itemTemplate}
                            className={classNames({ 'p-invalid': isFormFieldInvalid('item') })}
                            value={formik.values.item}
                            onChange={(e) => {
                                formik.setFieldValue('item', e.target.value);
                            }}
                        />

                        {getFormErrorMessage('item')}
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
        const src = 'https://primefaces.org/cdn/primereact/images/avatar/' + suggestion.representative.image;

        return (
            <div className="flex align-items-center">
                <img alt={suggestion.name} src={src} width="32" style={{ verticalAlign: 'middle' }} />
                <span className="flex flex-column ml-2">
                    {suggestion.name}
                    <small style={{ fontSize: '.75rem', color: 'var(--text-color-secondary)' }}>@{suggestion.nickname}</small>
                </span>
            </div>
        );
    };

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: formik.values.item });
    };

    const formik = useFormik({
        initialValues: {
            item: ''
        },
        validate: (data) => {
            const hasMentionedCustomersNickname = customers.some((customer) => {
                return data.item && data.item.includes('@' + customer.nickname);
            });

            let errors = {};

            if (!data.item || !hasMentionedCustomersNickname) {
                errors.item = 'Mention is required.';
            }

            return errors;
        },
        onSubmit: (data) => {
            data && show();
            formik.resetForm();
        }
    });

    const isFormFieldInvalid = (name) => !!(formik.touched[name] && formik.errors[name]);

    const getFormErrorMessage = (name) => {
        return isFormFieldInvalid(name) ? <small className="p-error">{formik.errors[name]}</small> : <small className="p-error">&nbsp;</small>;
    };

    return (
        <div className="card flex justify-content-center">
            <form onSubmit={formik.handleSubmit} className="flex flex-column">
                <Toast ref={toast} />
                <div className="field">
                    <div className="flex flex-column">
                        <Mention
                            id="item"
                            name="item"
                            field="nickname"
                            onSearch={onSearch}
                            placeholder="Please enter @ to mention people"
                            rows={5}
                            cols={40}
                            suggestions={suggestions}
                            itemTemplate={itemTemplate}
                            className={classNames({ 'p-invalid': isFormFieldInvalid('item') })}
                            value={formik.values.item}
                            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                                formik.setFieldValue('item', e.target.value);
                            }}
                        />

                        {getFormErrorMessage('item')}
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
                                id="item"
                                name="item"
                                field="nickname"
                                onSearch={onSearch}
                                placeholder="Please enter @ to mention people"
                                rows={5}
                                cols={40}
                                suggestions={suggestions}
                                itemTemplate={itemTemplate}
                                className={classNames({ 'p-invalid': isFormFieldInvalid('item') })}
                                value={formik.values.item}
                                onChange={(e) => {
                                    formik.setFieldValue('item', e.target.value);
                                }}
                            />

                            {getFormErrorMessage('item')}
                        </div>
                    </div>
                    <Button label="Submit" type="submit" icon="pi pi-check mt-2" />
                </form>
            </div>
            <DocSectionCode code={code} service={['CustomerService']} dependencies={{ formik: '^2.2.6' }} />
        </>
    );
}
