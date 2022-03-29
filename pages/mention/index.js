import React, { useState, useEffect } from 'react';
import { Mention } from '../../components/lib/mention/Mention';
import { CustomerService } from '../../service/CustomerService';
import MentionDoc from '../../components/doc/mention';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';

const MentionDemo = () => {

    const [customers, setCustomers] = useState([]);
    const [suggestions, setSuggestions] = useState([]);
    const [multipleSuggestions, setMultipleSuggestions] = useState([]);

    const tagSuggestions = ['primereact', 'primefaces', 'primeng', 'primevue'];
    const customerservice = new CustomerService();

    useEffect(() => {
        customerservice.getCustomersSmall().then(data => {
            data.forEach(d => d['nickname'] = `${d.name.replace(/\s+/g, '').toLowerCase()}_${d.id}`);
            setCustomers(data);
        });
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

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
                <img alt={suggestion.name} src={src} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} width="32" style={{ verticalAlign: 'middle' }} />
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
        <div>
            <Head>
                <title>React Mention Component</title>
                <meta name="description" content="Mention component is used to refer someone or something." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>Mention</h1>
                    <p>Mention component is used to refer someone or something.</p>
                </div>

                <DocActions github="mention/index.js" />
            </div>

            <div className="content-section implementation">
                <div className="card">
                    <h5>Basic</h5>
                    <Mention suggestions={suggestions} onSearch={onSearch} field="nickname" placeholder="Please enter @ to mention people" rows={5} cols={40}
                        itemTemplate={itemTemplate} />

                    <h5>Auto Resize</h5>
                    <Mention suggestions={suggestions} onSearch={onSearch} field="nickname" placeholder="Please enter @ to mention people" rows={5} cols={40} autoResize
                        itemTemplate={itemTemplate} />

                    <h5>Multiple Trigger</h5>
                    <Mention trigger={['@', '#']} suggestions={multipleSuggestions} onSearch={onMultipleSearch} field={['nickname']} placeholder="Please enter @ to mention people, # to mention tag"
                        itemTemplate={multipleItemTemplate} rows={5} cols={40} />
                </div>
            </div>

            <MentionDoc />
        </div>
    )
}

export default MentionDemo;
