import React, { Component } from 'react';
import { Mention } from '../../components/mention/Mention';
import { CustomerService } from '../service/CustomerService';
import { AppInlineHeader } from '../../AppInlineHeader';
import { MentionDoc } from './MentionDoc';
import AppDemoActions from '../../AppDemoActions';

export class MentionDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            customers: [],
            suggestions: [],
            multipleSuggestions: []
        };

        this.tagSuggestions = ['primereact', 'primefaces', 'primeng', 'primevue'];

        this.customerservice = new CustomerService();

        this.onSearch = this.onSearch.bind(this);
        this.onMultipleSearch = this.onMultipleSearch.bind(this);
        this.itemTemplate = this.itemTemplate.bind(this);
        this.multipleItemTemplate = this.multipleItemTemplate.bind(this);
    }

    componentDidMount() {
        this.customerservice.getCustomersSmall().then(data => {
            data.forEach(d => d['nickname'] = `${d.name.replace(/\s+/g, '').toLowerCase()}_${d.id}`);
            this.setState({ customers: data })
        });
    }

    onSearch(event) {
        //in a real application, make a request to a remote url with the query and return suggestions, for demo we filter at client side
        setTimeout(() => {
            const query = event.query;
            let suggestions;

            if (!query.trim().length) {
                suggestions = [...this.state.customers];
            }
            else {
                suggestions = this.state.customers.filter((customer) => {
                    return customer.nickname.toLowerCase().startsWith(query.toLowerCase());
                });
            }

            this.setState({ suggestions });
        }, 250);
    }

    onMultipleSearch(event) {
        const trigger = event.trigger;

        if (trigger === '@') {
            //in a real application, make a request to a remote url with the query and return suggestions, for demo we filter at client side
            setTimeout(() => {
                const query = event.query;
                let suggestions;

                if (!query.trim().length) {
                    suggestions = [...this.state.customers];
                }
                else {
                    suggestions = this.state.customers.filter((customer) => {
                        return customer.nickname.toLowerCase().startsWith(query.toLowerCase());
                    });
                }

                this.setState({ multipleSuggestions: suggestions });
            }, 250);
        }
        else if (trigger === '#') {
            setTimeout(() => {
                const query = event.query;
                let suggestions;

                if (!query.trim().length) {
                    suggestions = [...this.tagSuggestions];
                }
                else {
                    suggestions = this.tagSuggestions.filter((tag) => {
                        return tag.toLowerCase().startsWith(query.toLowerCase());
                    });
                }

                this.setState({ multipleSuggestions: suggestions });
            }, 250);
        }
    }

    itemTemplate(suggestion) {
        const src = 'showcase/demo/images/avatar/' + suggestion.representative.image;

        return (
            <div className="p-d-flex p-ai-center">
                <img alt={suggestion.name} src={src} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} width="32" style={{verticalAlign: 'middle'}} />
                <span className="p-d-flex p-dir-col p-ml-2">
                    {suggestion.name}
                    <small style={{ fontSize: '.75rem', color: 'var(--text-secondary-color)' }}>@{suggestion.nickname}</small>
                </span>
            </div>
        );
    }

    multipleItemTemplate(suggestion, options) {
        const trigger = options.trigger;

        if (trigger === '@' && suggestion.nickname) {
            return this.itemTemplate(suggestion);
        }
        else if (trigger === '#' && !suggestion.nickname) {
            return <span>{suggestion}</span>;
        }

        return null;
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <AppInlineHeader changelogText="mention">
                        <h1>Mention</h1>
                        <p>It is used to mention someone or something.</p>
                    </AppInlineHeader>

                    <AppDemoActions github="mention/MentionDemo.js" />
                </div>

                <div className="content-section implementation">
                    <div className="card">
                        <h5>Basic</h5>
                        <Mention suggestions={this.state.suggestions} onSearch={this.onSearch} field="nickname" placeholder="Please enter @ to mention people"  rows={5} cols={40}
                            itemTemplate={this.itemTemplate} />

                        <h5>Auto Resize</h5>
                        <Mention suggestions={this.state.suggestions} onSearch={this.onSearch} field="nickname" placeholder="Please enter @ to mention people"  rows={5} cols={40} autoResize
                            itemTemplate={this.itemTemplate} />

                        <h5>Multiple Trigger</h5>
                        <Mention trigger={['@', '#']} suggestions={this.state.multipleSuggestions} onSearch={this.onMultipleSearch} field={['nickname']} placeholder="Please enter @ to mention people, # to mention tag"
                            itemTemplate={this.multipleItemTemplate} rows={5} cols={40} />
                    </div>
                </div>

                <MentionDoc />
            </div>
        )
    }
}
