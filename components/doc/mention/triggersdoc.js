/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { CustomerService } from '../../../service/CustomerService';
import { Mention } from '../../lib/mention/Mention';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function TriggersDoc(props) {
    const [customers, setCustomers] = useState([]);
    const [multipleSuggestions, setMultipleSuggestions] = useState([]);
    const tagSuggestions = ['primereact', 'primefaces', 'primeng', 'primevue'];

    useEffect(() => {
        CustomerService.getCustomersSmall().then((data) => {
            data.forEach((d) => (d['nickname'] = `${d.name.replace(/\s+/g, '').toLowerCase()}_${d.id}`));
            setCustomers(data);
        });
    }, []);

    const onMultipleSearch = (event) => {
        const trigger = event.trigger;

        if (trigger === '@') {
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

                setMultipleSuggestions(suggestions);
            }, 250);
        } else if (trigger === '#') {
            setTimeout(() => {
                const query = event.query;
                let suggestions;

                if (!query.trim().length) {
                    suggestions = [...tagSuggestions];
                } else {
                    suggestions = tagSuggestions.filter((tag) => {
                        return tag.toLowerCase().startsWith(query.toLowerCase());
                    });
                }

                setMultipleSuggestions(suggestions);
            }, 250);
        }
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

    const multipleItemTemplate = (suggestion, options) => {
        const trigger = options.trigger;

        if (trigger === '@' && suggestion.nickname) {
            return itemTemplate(suggestion);
        } else if (trigger === '#' && !suggestion.nickname) {
            return <span>{suggestion}</span>;
        }

        return null;
    };

    const code = {
        basic: `
<Mention suggestions={suggestions} onSearch={onSearch} field="nickname" placeholder="Please enter @ to mention people"  rows={5} cols={40} autoResize itemTemplate={itemTemplate} />
        `,
        javascript: `
import React, { useState, useEffect } from "react";
import { Mention } from 'primereact/mention';
import { CustomerService } from './service/CustomerService';

export default function TriggersDoc() {
    const [customers, setCustomers] = useState([]);
    const [multipleSuggestions, setMultipleSuggestions]= useState([]);
    const tagSuggestions = ['primereact', 'primefaces', 'primeng', 'primevue'];
    

    useEffect(() => {
        CustomerService.getCustomersSmall().then(data => {
            data.forEach(d => d['nickname'] = \`\${d.name.replace(/\\s+/g, '').toLowerCase()}_\${d.id}\`);
            setCustomers(data);
        });
    }, [])

    const onMultipleSearch = (event) => {
        const trigger = event.trigger;

        if (trigger === '@') {
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

                setMultipleSuggestions(suggestions);
            }, 250);
        }
        else if (trigger === '#') {
            setTimeout(() => {
                const query = event.query;
                let suggestions;

                if (!query.trim().length) {
                    suggestions = [...tagSuggestions];
                }
                else {
                    suggestions = tagSuggestions.filter((tag) => {
                        return tag.toLowerCase().startsWith(query.toLowerCase());
                    });
                }

                setMultipleSuggestions(suggestions);
            }, 250);
        }
    }

    const itemTemplate = (suggestion) => {
        const src = 'images/avatar/' + suggestion.representative.image;
        
        return (
            <div className="flex align-items-center">
                <img alt={suggestion.name} src={src} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} width="32" style={{verticalAlign: 'middle'}} />
                <span className="flex flex-column ml-2">
                    {suggestion.name}
                    <small style={{ fontSize: '.75rem', color: 'var(--text-secondary-color)' }}>@{suggestion.nickname}</small>
                </span>
            </div>
        );
    }

    const multipleItemTemplate = (suggestion, options) => {
        const trigger = options.trigger;

        if (trigger === '@' && suggestion.nickname) {
            return itemTemplate(suggestion);
        }
        else if (trigger === '#' && !suggestion.nickname) {
            return <span>{suggestion}</span>;
        }

        return null;
    }

    return (
        <Mention suggestions={multipleSuggestions} onSearch={onMultipleSearch} field="nickname" placeholder="Please enter @ to mention people"  rows={5} cols={40} autoResize itemTemplate={itemTemplate} />
    )
}
        `,
        typescript: `
import React, { useState, useEffect } from "react";
import { Mention, MentionSearchParams, MentionItemTemplateOptions } from 'primereact/mention';
import { CustomerService } from './service/CustomerService';

export default function TriggersDoc() {
    const [customers, setCustomers] = useState<any>([]);
    const [multipleSuggestions, setMultipleSuggestions]= useState<any>([]);
    const tagSuggestions = ['primereact', 'primefaces', 'primeng', 'primevue'];
    

    useEffect(() => {
        CustomerService.getCustomersSmall().then(data => {
            data.forEach(d => d['nickname'] = \`\${d.name.replace(/\\s+/g, '').toLowerCase()}_\${d.id}\`);
            setCustomers(data);
        });
    }, [])

    const onMultipleSearch = (event: MentionSearchParams) => {
        const trigger = event.trigger;

        if (trigger === '@') {
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

                setMultipleSuggestions(suggestions);
            }, 250);
        }
        else if (trigger === '#') {
            setTimeout(() => {
                const query = event.query;
                let suggestions;

                if (!query.trim().length) {
                    suggestions = [...tagSuggestions];
                }
                else {
                    suggestions = tagSuggestions.filter((tag) => {
                        return tag.toLowerCase().startsWith(query.toLowerCase());
                    });
                }

                setMultipleSuggestions(suggestions);
            }, 250);
        }
    }

    const itemTemplate = (suggestion) => {
        const src = 'images/avatar/' + suggestion.representative.image;
        
        return (
            <div className="flex align-items-center">
                <img alt={suggestion.name} src={src} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} width="32" style={{verticalAlign: 'middle'}} />
                <span className="flex flex-column ml-2">
                    {suggestion.name}
                    <small style={{ fontSize: '.75rem', color: 'var(--text-secondary-color)' }}>@{suggestion.nickname}</small>
                </span>
            </div>
        );
    }

    const multipleItemTemplate = (suggestion: any, options: MentionItemTemplateOptions) => {
        const trigger = options.trigger;

        if (trigger === '@' && suggestion.nickname) {
            return itemTemplate(suggestion);
        }
        else if (trigger === '#' && !suggestion.nickname) {
            return <span>{suggestion}</span>;
        }

        return null;
    }

    return (
        <Mention suggestions={multipleSuggestions} onSearch={onMultipleSearch} field="nickname" placeholder="Please enter @ to mention people"  rows={5} cols={40} autoResize
        itemTemplate={itemTemplate} />
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
                <p>It is used to define the expected keyword/s in the input field to mention someone or something.</p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Mention
                    trigger={['@', '#']}
                    suggestions={multipleSuggestions}
                    onSearch={onMultipleSearch}
                    field={['nickname']}
                    placeholder="Please enter @ to mention people, # to mention tag"
                    itemTemplate={multipleItemTemplate}
                    rows={5}
                    cols={40}
                />
            </div>
            <DocSectionCode code={code} service={['CustomerService']} />
        </>
    );
}
