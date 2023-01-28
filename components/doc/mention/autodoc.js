/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { CustomerService } from '../../../service/CustomerService';
import { Mention } from '../../lib/mention/Mention';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function AutoDoc(props) {
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
        const src = 'https://www.primereact.org/images/avatar/' + suggestion.representative.image;

        return (
            <div className="flex align-items-center">
                <img alt={suggestion.name} src={src} width="32" style={{ verticalAlign: 'middle' }} />
                <span className="flex flex-column ml-2">
                    {suggestion.name}
                    <small style={{ fontSize: '.75rem', color: 'var(--text-secondary-color)' }}>@{suggestion.nickname}</small>
                </span>
            </div>
        );
    };

    const code = {
        basic: `
<Mention suggestions={suggestions} onSearch={onSearch} field="nickname" placeholder="Please enter @ to mention people"  rows={5} cols={40} autoResize itemTemplate={itemTemplate} />
        `,
        javascript: `
import React, { useState, useEffect } from "react";
import { Mention } from 'primereact/mention';
import { CustomerService } from './service/CustomerService';

export default function AutoDoc() {
    const [customers, setCustomers] = useState([]);
    const [suggestions, setSuggestions] = useState([]);
    

    useEffect(() => {
        CustomerService.getCustomersSmall().then(data => {
            data.forEach(d => d['nickname'] = \`\${d.name.replace(/\\s+/g, '').toLowerCase()}_\${d.id}\`);
            setCustomers(data);
        });
    }, [])

    const onSearch = (event) => {
        //in a real application, make a request to a remote url with the query and return suggestions, for demo we filter at client side
        setTimeout(() => {
            const query = event.query;
            let suggestions;

            if (!query.trim().length) {
                suggestions = [...customers];
            }
            else {
                suggestions = customers.filter((customer) => {
                    return customer.nickname.toLowerCase().startsWith(query.toLowerCase());
                });
            }

            setSuggestions(suggestions);
        }, 250);
    }

    const itemTemplate = (suggestion) => {
        const src = 'https://www.primereact.org/images/avatar/' + suggestion.representative.image;

        return (
            <div className="flex align-items-center">
                <img alt={suggestion.name} src={src} width="32" style={{verticalAlign: 'middle'}} />
                <span className="flex flex-column ml-2">
                    {suggestion.name}
                    <small style={{ fontSize: '.75rem', color: 'var(--text-secondary-color)' }}>@{suggestion.nickname}</small>
                </span>
            </div>
        );
    }

    return (
        <div className="card flex justify-content-center">
            <Mention suggestions={suggestions} onSearch={onSearch} field="nickname" placeholder="Please enter @ to mention people"  rows={5} cols={40} autoResize itemTemplate={itemTemplate} />
        </div>
    )
}
        `,
        typescript: `
import React, { useState, useEffect } from "react";
import { Mention, MentionSearchParams } from 'primereact/mention';
import { CustomerService } from './service/CustomerService';

export default function AutoDoc() {
    const [customers, setCustomers] = useState<any>([]);
    const [suggestions, setSuggestions] = useState<any>([]);
    

    useEffect(() => {
        CustomerService.getCustomersSmall().then(data => {
            data.forEach(d => d['nickname'] = \`\${d.name.replace(/\\s+/g, '').toLowerCase()}_\${d.id}\`);
            setCustomers(data);
        });
    }, [])

    const onSearch = (event: MentionSearchParams) => {
        //in a real application, make a request to a remote url with the query and return suggestions, for demo we filter at client side
        setTimeout(() => {
            const query = event.query;
            let suggestions;

            if (!query.trim().length) {
                suggestions = [...customers];
            }
            else {
                suggestions = customers.filter((customer) => {
                    return customer.nickname.toLowerCase().startsWith(query.toLowerCase());
                });
            }

            setSuggestions(suggestions);
        }, 250);
    }

    const itemTemplate = (suggestion: any) => {
        const src = 'https://www.primereact.org/images/avatar/' + suggestion.representative.image;

        return (
            <div className="flex align-items-center">
                <img alt={suggestion.name} src={src} width="32" style={{verticalAlign: 'middle'}} />
                <span className="flex flex-column ml-2">
                    {suggestion.name}
                    <small style={{ fontSize: '.75rem', color: 'var(--text-secondary-color)' }}>@{suggestion.nickname}</small>
                </span>
            </div>
        );
    }

    return (
        <div className="card flex justify-content-center">
            <Mention suggestions={suggestions} onSearch={onSearch} field="nickname" placeholder="Please enter @ to mention people"  rows={5} cols={40} autoResize itemTemplate={itemTemplate} />
        </div>
    )
}
        `,
        data: `
/* CustomerService */ 
{
    id: 1000,
    name: 'James Butt',
    country: {
        name: 'Algeria',
        code: 'dz'
    },
    company: 'Benton, John B Jr',
    date: '2015-09-13',
    status: 'unqualified',
    verified: true,
    activity: 17,
    representative: {
        name: 'Ioni Bowcher',
        image: 'ionibowcher.png'
    },
    balance: 70663
},
...
       `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    InputMask is used as a controlled input with <i>value</i> and <i>onChange</i> properties, <i>mask</i> property is required to define the mask of the input.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Mention suggestions={suggestions} onSearch={onSearch} field="nickname" placeholder="Please enter @ to mention people" rows={5} cols={40} autoResize itemTemplate={itemTemplate} />
            </div>
            <DocSectionCode code={code} service={['CustomerService']} />
        </>
    );
}
