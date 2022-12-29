import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { AutoComplete } from '../../../lib/autocomplete/AutoComplete';
import { Button } from '../../../lib/button/Button';
import { classNames } from '../../../lib/utils/Utils';
import { DocSectionText } from '../../common/docsectiontext';
import { DocSectionCode } from '../../common/docsectioncode';

export function FormikDoc(props) {
    const [items, setItems] = useState([]);

    const search = (event) => {
        setItems([...Array(10).keys()].map((item) => event.query + '-' + item));
    };

    const code = {
        basic: `
<Controller name="value"  control={form.control} rules={{ required: 'Value is required.'}}
    render={({ field, fieldState }) => (
        <>
            <label htmlFor={field.name} className={classNames({ 'p-error': errors.name })}>Value</label>
            <AutoComplete id={field.name} value={field.value} onChange={field.onChange} inputRef={field.ref} suggestions={items} completeMethod={search} className={classNames({ 'p-invalid': fieldState.error })} />
            {getFormErrorMessage(field.name)}
        </>
    )}
/>
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
                    PrimeReact components can be easily used/integrated with <i>Formik</i>. In this example, a register panel is simulated using Formik.
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
