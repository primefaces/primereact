/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { CustomerService } from '../../../service/CustomerService';
import { Mention } from '../../lib/mention/Mention';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function MultipleDoc(props) {
    const [customers, setCustomers] = useState([]);
    const [multipleSuggestions, setMultipleSuggestions] = useState([]);
    const tagSuggestions = ['primereact', 'primefaces', 'primeng', 'primevue'];
    const customerservice = new CustomerService();

    useEffect(() => {
        customerservice.getCustomersSmall().then((data) => {
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
import { useState, useEffect } from "react";
import { Mention } from 'primereact/mention';
import { CustomerService } from '../../../service/CustomerService';

export default function MultipleDoc() {
    const [customers, setCustomers] = useState([]);
    const [multipleSuggestions, setMultipleSuggestions]= useState([]);
    const tagSuggestions = ['primereact', 'primefaces', 'primeng', 'primevue'];
    const customerservice = new CustomerService();

    useEffect(() => {
        customerservice.getCustomersSmall().then(data => {
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
        <Mention suggestions={suggestions} onSearch={onSearch} field="nickname" placeholder="Please enter @ to mention people"  rows={5} cols={40} autoResize itemTemplate={itemTemplate} />
    )
}
        `,
        typescript: `
import { useState, useEffect } from "react";
import { Mention, MentionSearchParams, MentionItemTemplateOptions } from 'primereact/mention';
import { CustomerService } from '../../../service/CustomerService';

export default function MultipleDoc() {
    const [customers, setCustomers] = useState<any>([]);
    const [multipleSuggestions, setMultipleSuggestions]= useState<any>([]);
    const tagSuggestions = ['primereact', 'primefaces', 'primeng', 'primevue'];
    const customerservice = new CustomerService();

    useEffect(() => {
        customerservice.getCustomersSmall().then(data => {
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
        <Mention suggestions={suggestions} onSearch={onSearch} field="nickname" placeholder="Please enter @ to mention people"  rows={5} cols={40} autoResize
        itemTemplate={itemTemplate} />
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>It is used to define the expected keyword/s in the input field to mention someone or something.</DocSectionText>
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
            <DocSectionCode code={code} />
        </>
    );
}
