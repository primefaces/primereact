import { Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import { AutoComplete } from '../../../lib/autocomplete/AutoComplete';
import { Button } from '../../../lib/button/Button';
import { classNames } from '../../../lib/utils/Utils';
import { DocSectionCode } from '../../common/docsectioncode';
import { DocSectionText } from '../../common/docsectiontext';

export function FormikDoc(props) {
    const [items, setItems] = useState([]);

    const search = (event) => {
        setItems([...Array(10).keys()].map((item) => event.query + '-' + item));
    };

    const code = {
        basic: `
<Form className="p-fluid">
     <div className="field">
         <Field
             name="search"
             validate={(value) => !value && 'Required'}
             render={({ field }) => (
                 <>
                     <label htmlFor={field.name} className={classNames({ 'p-error': errors.search })}>
                         Value
                     </label>
                     <AutoComplete id={field.name} value={field.value} onChange={field.onChange} suggestions={items} completeMethod={search} className={classNames({ 'p-invalid': touched.search && errors.search })} />
                     {errors.search && touched.search && <small className="p-error">{errors.search}</small>}
                 </>
             )}
         />
     </div>
     <Button label="Submit" type="submit" icon="pi pi-check" />
</Form>
        `,
        javascript: `
import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { Button } from 'primereact/button';
import { classNames } from 'primereact/utils';
import { AutoComplete } from "primereact/autocomplete";

export default function FormikDoc() {
    const [items, setItems] = useState([]);

    const search = (event) => {
        setItems([...Array(10).keys()].map((item) => event.query + '-' + item));
    };

    return (
        <div className="card">
            <div className="flex justify-content-center">
                <Formik
                    initialValues={{ search: '' }}
                    onSubmit={(values, actions) => {
                        setFormData(values);
                        actions.setSubmitting(false);
                    }}
                >
                    {({ errors, touched }) => (
                        <Form className="p-fluid">
                            <div className="field">
                                <Field
                                    name="search"
                                    validate={(value) => !value && 'Required'}
                                    render={({ field }) => (
                                        <>
                                            <label htmlFor={field.name} className={classNames({ 'p-error': errors.search })}>
                                                Value
                                            </label>
                                            <AutoComplete id={field.name} value={field.value} onChange={field.onChange} suggestions={items} completeMethod={search} className={classNames({ 'p-invalid': touched.search && errors.search })} />
                                            {errors.search && touched.search && <small className="p-error">{errors.search}</small>}
                                        </>
                                    )}
                                />
                            </div>
                            <Button label="Submit" type="submit" icon="pi pi-check" />
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { Button } from 'primereact/button';
import { classNames } from 'primereact/utils';
import { AutoComplete } from "primereact/autocomplete";

export default function FormikDoc() {
    const [items, setItems] = useState([]);

    const search = (event) => {
        setItems([...Array(10).keys()].map((item) => event.query + '-' + item));
    };

    return (
        <div className="card">
            <div className="flex justify-content-center">
                <Formik
                    initialValues={{ search: '' }}
                    onSubmit={(values, actions) => {
                        setFormData(values);
                        actions.setSubmitting(false);
                    }}
                >
                    {({ errors, touched }) => (
                        <Form className="p-fluid">
                            <div className="field">
                                <Field
                                    name="search"
                                    validate={(value) => !value && 'Required'}
                                    render={({ field }) => (
                                        <>
                                            <label htmlFor={field.name} className={classNames({ 'p-error': errors.search })}>
                                                Value
                                            </label>
                                            <AutoComplete id={field.name} value={field.value} onChange={field.onChange} suggestions={items} completeMethod={search} className={classNames({ 'p-invalid': touched.search && errors.search })} />
                                            {errors.search && touched.search && <small className="p-error">{errors.search}</small>}
                                        </>
                                    )}
                                />
                            </div>
                            <Button label="Submit" type="submit" icon="pi pi-check" />
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    <a href="https://formik.org/">Formik</a> is a popular React library for form validation. The field will be highlighted on validation failure.
                </p>
            </DocSectionText>
            <div className="card">
                <div className="flex justify-content-center">
                    <Formik
                        initialValues={{ search: '' }}
                        onSubmit={(values, actions) => {
                            setFormData(values);
                            actions.setSubmitting(false);
                        }}
                    >
                        {({ errors, touched }) => (
                            <Form className="p-fluid">
                                <div className="field">
                                    <Field
                                        name="search"
                                        validate={(value) => !value && 'Required'}
                                        render={({ field }) => (
                                            <>
                                                <label htmlFor={field.name} className={classNames({ 'p-error': errors.search })}>
                                                    Value
                                                </label>
                                                <AutoComplete id={field.name} value={field.value} onChange={field.onChange} suggestions={items} completeMethod={search} className={classNames({ 'p-invalid': touched.search && errors.search })} />
                                                {errors.search && touched.search && <small className="p-error">{errors.search}</small>}
                                            </>
                                        )}
                                    />
                                </div>
                                <Button label="Submit" type="submit" icon="pi pi-check" />
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
            <DocSectionCode code={code} service={['CountryService']} dependencies={{ formik: '^2.2.6' }} />
        </>
    );
}
