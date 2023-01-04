import { useRef } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { CascadeSelect } from '../../../lib/cascadeselect/CascadeSelect';
import { DocSectionText } from '../../common/docsectiontext';
import { DocSectionCode } from '../../common/docsectioncode';
import { Button } from '../../../lib/button/Button';
import { Toast } from '../../../lib/toast/Toast';

export function HookFormDoc(props) {
    const toast = useRef(null);
    const countries = [
        {
            name: 'Australia',
            code: 'AU',
            states: [
                {
                    name: 'New South Wales',
                    cities: [
                        { cname: 'Sydney', code: 'A-SY' },
                        { cname: 'Newcastle', code: 'A-NE' },
                        { cname: 'Wollongong', code: 'A-WO' }
                    ]
                },
                {
                    name: 'Queensland',
                    cities: [
                        { cname: 'Brisbane', code: 'A-BR' },
                        { cname: 'Townsville', code: 'A-TO' }
                    ]
                }
            ]
        },
        {
            name: 'Canada',
            code: 'CA',
            states: [
                {
                    name: 'Quebec',
                    cities: [
                        { cname: 'Montreal', code: 'C-MO' },
                        { cname: 'Quebec City', code: 'C-QU' }
                    ]
                },
                {
                    name: 'Ontario',
                    cities: [
                        { cname: 'Ottawa', code: 'C-OT' },
                        { cname: 'Toronto', code: 'C-TO' }
                    ]
                }
            ]
        },
        {
            name: 'United States',
            code: 'US',
            states: [
                {
                    name: 'California',
                    cities: [
                        { cname: 'Los Angeles', code: 'US-LA' },
                        { cname: 'San Diego', code: 'US-SD' },
                        { cname: 'San Francisco', code: 'US-SF' }
                    ]
                },
                {
                    name: 'Florida',
                    cities: [
                        { cname: 'Jacksonville', code: 'US-JA' },
                        { cname: 'Miami', code: 'US-MI' },
                        { cname: 'Tampa', code: 'US-TA' },
                        { cname: 'Orlando', code: 'US-OR' }
                    ]
                },
                {
                    name: 'Texas',
                    cities: [
                        { cname: 'Austin', code: 'US-AU' },
                        { cname: 'Dallas', code: 'US-DA' },
                        { cname: 'Houston', code: 'US-HO' }
                    ]
                }
            ]
        }
    ];

    const show = (data) => {
        // TO DO: Add detail content to the toast.
        toast.current.show({ severity: 'success', summary: 'Submission Received', detail: 'Thank you, we have received your submission.' });
    };

    const defaultValues = {
        city: null
    };

    const {
        control,
        formState: { errors },
        handleSubmit,
        reset
    } = useForm({ defaultValues });

    const onSubmit = (data) => {
        data.city && show(data);

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
<Button type="submit" label="Submit" className="mt-2" />
        `,
        javascript: `
import React, { useRef } from "react";
import { useForm, Controller } from 'react-hook-form';
import { CascadeSelect } from 'primereact/cascadeselect';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

export default function HookFormDoc() {
    const toast = useRef(null);
    const countries = [
        {
            name: 'Australia',
            code: 'AU',
            states: [
                {
                    name: 'New South Wales',
                    cities: [
                        { cname: 'Sydney', code: 'A-SY' },
                        { cname: 'Newcastle', code: 'A-NE' },
                        { cname: 'Wollongong', code: 'A-WO' }
                    ]
                },
                {
                    name: 'Queensland',
                    cities: [
                        { cname: 'Brisbane', code: 'A-BR' },
                        { cname: 'Townsville', code: 'A-TO' }
                    ]
                }
            ]
        },
        {
            name: 'Canada',
            code: 'CA',
            states: [
                {
                    name: 'Quebec',
                    cities: [
                        { cname: 'Montreal', code: 'C-MO' },
                        { cname: 'Quebec City', code: 'C-QU' }
                    ]
                },
                {
                    name: 'Ontario',
                    cities: [
                        { cname: 'Ottawa', code: 'C-OT' },
                        { cname: 'Toronto', code: 'C-TO' }
                    ]
                }
            ]
        },
        {
            name: 'United States',
            code: 'US',
            states: [
                {
                    name: 'California',
                    cities: [
                        { cname: 'Los Angeles', code: 'US-LA' },
                        { cname: 'San Diego', code: 'US-SD' },
                        { cname: 'San Francisco', code: 'US-SF' }
                    ]
                },
                {
                    name: 'Florida',
                    cities: [
                        { cname: 'Jacksonville', code: 'US-JA' },
                        { cname: 'Miami', code: 'US-MI' },
                        { cname: 'Tampa', code: 'US-TA' },
                        { cname: 'Orlando', code: 'US-OR' }
                    ]
                },
                {
                    name: 'Texas',
                    cities: [
                        { cname: 'Austin', code: 'US-AU' },
                        { cname: 'Dallas', code: 'US-DA' },
                        { cname: 'Houston', code: 'US-HO' }
                    ]
                }
            ]
        }
    ];

    const show = (data) => {
        // TO DO: Add detail content to the toast.
        toast.current.show({ severity: 'success', summary: 'Submission Received', detail: 'Thank you, we have received your submission.' });
    };

    const defaultValues = {
        city: null
    };

    const {
        control,
        formState: { errors },
        handleSubmit,
        reset
    } = useForm({ defaultValues });

    const onSubmit = (data) => {
        data.city && show(data);

        reset();
    };

    const getFormErrorMessage = (name) => {
        return errors[name] && <small className="p-error">{errors[name].message}</small>;
    };

    return (
        <div className="card flex justify-content-center">
            <form onSubmit={handleSubmit(onSubmit)} className="p-fluid">
                    <Toast ref={toast} />
                    <Controller
                        name="city"
                        control={control}
                        rules={{ required: 'City is required.' }}
                        render={({ field }) => (
                            <CascadeSelect
                                id={field.name}
                                name="city"
                                value={field.value}
                                options={countries}
                                optionLabel={'cname'}
                                optionGroupLabel={'name'}
                                optionGroupChildren={['states', 'cities']}
                                style={{ minWidth: '14rem' }}
                                placeholder={'Select a City'}
                                onChange={(e) => field.onChange(e.value)}
                            />
                        )}
                    />

                    {getFormErrorMessage('city')}
                    <Button type="submit" label="Submit" className="mt-2" />
            </form>
        </div>
    )
}
        `,
        typescript: `
import React, { useRef } from "react";
import { useForm, Controller } from 'react-hook-form';
import { CascadeSelect } from 'primereact/cascadeselect';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

export default function HookFormDoc() {
    const [formData, setFormData] = useState({});
    const toast = useRef(null);
    const countries = [
        {
            name: 'Australia',
            code: 'AU',
            states: [
                {
                    name: 'New South Wales',
                    cities: [
                        {cname: 'Sydney', code: 'A-SY'},
                        {cname: 'Newcastle', code: 'A-NE'},
                        {cname: 'Wollongong', code: 'A-WO'}
                    ]
                },
                {
                    name: 'Queensland',
                    cities: [
                        {cname: 'Brisbane', code: 'A-BR'},
                        {cname: 'Townsville', code: 'A-TO'}
                    ]
                },

            ]
        },
        {
            name: 'Canada',
            code: 'CA',
            states: [
                {
                    name: 'Quebec',
                    cities: [
                        {cname: 'Montreal', code: 'C-MO'},
                        {cname: 'Quebec City', code: 'C-QU'}
                    ]
                },
                {
                    name: 'Ontario',
                    cities: [
                        {cname: 'Ottawa', code: 'C-OT'},
                        {cname: 'Toronto', code: 'C-TO'}
                    ]
                },

            ]
        },
        {
            name: 'United States',
            code: 'US',
            states: [
                {
                    name: 'California',
                    cities: [
                        {cname: 'Los Angeles', code: 'US-LA'},
                        {cname: 'San Diego', code: 'US-SD'},
                        {cname: 'San Francisco', code: 'US-SF'}
                    ]
                },
                {
                    name: 'Florida',
                    cities: [
                        {cname: 'Jacksonville', code: 'US-JA'},
                        {cname: 'Miami', code: 'US-MI'},
                        {cname: 'Tampa', code: 'US-TA'},
                        {cname: 'Orlando', code: 'US-OR'}
                    ]
                },
                {
                    name: 'Texas',
                    cities: [
                        {cname: 'Austin', code: 'US-AU'},
                        {cname: 'Dallas', code: 'US-DA'},
                        {cname: 'Houston', code: 'US-HO'}
                    ]
                }
            ]
        }
    ];

    const show = (data) => {
        // TO DO: Add detail content to the toast.
        toast.current.show({ severity: 'success', summary: 'Submission Received', detail: 'Thank you, we have received your submission.' });
    };

    const defaultValues = {
        city: null
    };

    const {
        control,
        formState: { errors },
        handleSubmit,
        reset
    } = useForm({ defaultValues });

    const onSubmit = (data) => {
        data.city && show(data);

        reset();
    };

    const getFormErrorMessage = (name) => {
        return errors[name] && <small className="p-error">{errors[name].message}</small>;
    };

    return (
        <div className="card flex justify-content-center">
            <form onSubmit={handleSubmit(onSubmit)} className="p-fluid">
                    <Toast ref={toast} />
                    <Controller
                        name="city"
                        control={control}
                        rules={{ required: 'City is required.' }}
                        render={({ field }) => (
                            <CascadeSelect
                                id={field.name}
                                name="city"
                                value={field.value}
                                options={countries}
                                optionLabel={'cname'}
                                optionGroupLabel={'name'}
                                optionGroupChildren={['states', 'cities']}
                                style={{ minWidth: '14rem' }}
                                placeholder={'Select a City'}
                                onChange={(e) => field.onChange(e.value)}
                            />
                        )}
                    />

                    {getFormErrorMessage('city')}
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
                    <Controller
                        name="city"
                        control={control}
                        rules={{ required: 'City is required.' }}
                        render={({ field }) => (
                            <CascadeSelect
                                id={field.name}
                                name="city"
                                value={field.value}
                                options={countries}
                                optionLabel={'cname'}
                                optionGroupLabel={'name'}
                                optionGroupChildren={['states', 'cities']}
                                style={{ minWidth: '14rem' }}
                                placeholder={'Select a City'}
                                onChange={(e) => field.onChange(e.value)}
                            />
                        )}
                    />

                    {getFormErrorMessage('city')}
                    <Button type="submit" label="Submit" className="mt-2" />
                </form>
            </div>
            <DocSectionCode code={code} dependencies={{ 'react-hook-form': '^7.39.4' }} />
        </>
    );
}
