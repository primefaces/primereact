import React, { memo } from 'react';
import { TabView, TabPanel } from '../../lib/tabview/TabView';
import { useLiveEditorTabs } from '../common/liveeditor';
import { CodeHighlight } from '../common/codehighlight';
import { DevelopmentSection } from '../common/developmentsection';

const MentionDoc = memo(() => {

    const sources = {
        'class': {
            tabName: 'Class Source',
            content: `
import React, { Component } from 'react';
import { Mention } from 'primereact/mention';
import { CustomerService } from '../service/CustomerService';

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
            data.forEach(d => d['nickname'] = \`\${d.name.replace(/\\s+/g, '').toLowerCase()}_\${d.id}\`);
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
        )
    }
}

                `
        },
        'hooks': {
            tabName: 'Hooks Source',
            content: `
import React, { useState, useEffect } from 'react';
import { Mention } from 'primereact/mention';
import { CustomerService } from '../service/CustomerService';

const MentionDemo = () => {

    const [customers, setCustomers] = useState([]);
    const [suggestions, setSuggestions] = useState([]);
    const [multipleSuggestions, setMultipleSuggestions]= useState([]);

    const tagSuggestions = ['primereact', 'primefaces', 'primeng', 'primevue'];
    const customerservice = new CustomerService();

    useEffect(() => {
        customerservice.getCustomersSmall().then(data => {
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
        <div className="card">
            <h5>Basic</h5>
            <Mention suggestions={suggestions} onSearch={onSearch} field="nickname" placeholder="Please enter @ to mention people"  rows={5} cols={40}
                itemTemplate={itemTemplate} />

            <h5>Auto Resize</h5>
            <Mention suggestions={suggestions} onSearch={onSearch} field="nickname" placeholder="Please enter @ to mention people"  rows={5} cols={40} autoResize
                itemTemplate={itemTemplate} />

            <h5>Multiple Trigger</h5>
            <Mention trigger={['@', '#']} suggestions={multipleSuggestions} onSearch={onMultipleSearch} field={['nickname']} placeholder="Please enter @ to mention people, # to mention tag"
                itemTemplate={multipleItemTemplate} rows={5} cols={40} />
        </div>
    )
}
                `
        },
        'ts': {
            tabName: 'TS Source',
            content: `
import React, { useState, useEffect } from 'react';
import { Mention } from 'primereact/mention';
import { CustomerService } from '../service/CustomerService';

const MentionDemo = () => {

    const [customers, setCustomers] = useState([]);
    const [suggestions, setSuggestions] = useState([]);
    const [multipleSuggestions, setMultipleSuggestions]= useState([]);

    const tagSuggestions = ['primereact', 'primefaces', 'primeng', 'primevue'];
    const customerservice = new CustomerService();

    useEffect(() => {
        customerservice.getCustomersSmall().then(data => {
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
        <div className="card">
            <h5>Basic</h5>
            <Mention suggestions={suggestions} onSearch={onSearch} field="nickname" placeholder="Please enter @ to mention people"  rows={5} cols={40}
                itemTemplate={itemTemplate} />

            <h5>Auto Resize</h5>
            <Mention suggestions={suggestions} onSearch={onSearch} field="nickname" placeholder="Please enter @ to mention people"  rows={5} cols={40} autoResize
                itemTemplate={itemTemplate} />

            <h5>Multiple Trigger</h5>
            <Mention trigger={['@', '#']} suggestions={multipleSuggestions} onSearch={onMultipleSearch} field={['nickname']} placeholder="Please enter @ to mention people, # to mention tag"
                itemTemplate={multipleItemTemplate} rows={5} cols={40} />
        </div>
    )
}
                `
        },
        'browser': {
            tabName: 'Browser Source',
            imports: `
        <script src="./CustomerService.js"></script>

        <script src="https://unpkg.com/primereact/core/core.min.js"></script>
        <script src="https://unpkg.com/primereact/mention/mention.min.js"></script>`,
            content: `
const { useEffect, useState } = React;
const { Mention } = primereact.mention;

const MentionDemo = () => {

    const [customers, setCustomers] = useState([]);
    const [suggestions, setSuggestions] = useState([]);
    const [multipleSuggestions, setMultipleSuggestions]= useState([]);

    const tagSuggestions = ['primereact', 'primefaces', 'primeng', 'primevue'];
    const customerservice = new CustomerService();

    useEffect(() => {
        customerservice.getCustomersSmall().then(data => {
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
        <div className="card">
            <h5>Basic</h5>
            <Mention suggestions={suggestions} onSearch={onSearch} field="nickname" placeholder="Please enter @ to mention people"  rows={5} cols={40}
                itemTemplate={itemTemplate} />

            <h5>Auto Resize</h5>
            <Mention suggestions={suggestions} onSearch={onSearch} field="nickname" placeholder="Please enter @ to mention people"  rows={5} cols={40} autoResize
                itemTemplate={itemTemplate} />

            <h5>Multiple Trigger</h5>
            <Mention trigger={['@', '#']} suggestions={multipleSuggestions} onSearch={onMultipleSearch} field={['nickname']} placeholder="Please enter @ to mention people, # to mention tag"
                itemTemplate={multipleItemTemplate} rows={5} cols={40} />
        </div>
    )
}
                `
        }
    }

    return (
        <div className="content-section documentation" id="app-doc">
            <TabView>
                <TabPanel header="Documentation">
                    <h5>Import via Module</h5>
<CodeHighlight lang="js">
{`
import { Mention } from 'primereact/mention';
`}
</CodeHighlight>

                    <h5>Import via CDN</h5>
<CodeHighlight>
{`
<script src="https://unpkg.com/primereact/core/core.min.js"></script>
<script src="https://unpkg.com/primereact/mention/mention.min.js"></script>
`}
</CodeHighlight>

                    <h5>Getting Started</h5>
                    <p>Mention is used as a controlled component with <i>suggestions</i> and <i>onSearch</i> properties.</p>

<CodeHighlight>
{`
<Mention suggestions={suggestions} onSearch={onSearch} field="nickname" placeholder="Please enter @ to mention people" />
`}
</CodeHighlight>

<CodeHighlight lang="js">
{`
const customers = // datasource

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
`}
</CodeHighlight>

                    <h5>Trigger</h5>
                    <p>It is used to define the expected keyword/s in the input field to mention someone or something.</p>
<CodeHighlight>
{`
<Mention trigger="@" suggestions={suggestions} onSearch={onSearch} field="nickname" placeholder="Please enter @ to mention people" />

<Mention trigger={['@', '#']} suggestions={suggestions} onSearch={onSearch} field="nickname" placeholder="Please enter @ to mention people" />
`}
</CodeHighlight>

                    <h5>Properties</h5>
                    <p>InputTextarea passes any attribute to the underlying textarea element, additional attributes are as follows;</p>
                    <div className="doc-tablewrapper">
                        <table className="doc-table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Type</th>
                                    <th>Default</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>id</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Unique identifier of the element.</td>
                                </tr>
                                <tr>
                                    <td>inputId</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Identifier of the input element.</td>
                                </tr>
                                <tr>
                                    <td>style</td>
                                    <td>object</td>
                                    <td>null</td>
                                    <td>Inline style of the component.</td>
                                </tr>
                                <tr>
                                    <td>className</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Style class of the component.</td>
                                </tr>
                                <tr>
                                    <td>trigger</td>
                                    <td>string|array</td>
                                    <td>@</td>
                                    <td>Set trigger keyword.</td>
                                </tr>
                                <tr>
                                    <td>suggestions</td>
                                    <td>array</td>
                                    <td>null</td>
                                    <td>An array of suggestions to display.</td>
                                </tr>
                                <tr>
                                    <td>field</td>
                                    <td>string|array</td>
                                    <td>null</td>
                                    <td>Field of a suggested object to resolve and display.</td>
                                </tr>
                                <tr>
                                    <td>inputStyle</td>
                                    <td>object</td>
                                    <td>null</td>
                                    <td>Inline style of the input field.</td>
                                </tr>
                                <tr>
                                    <td>inputClassName</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Style class of the input field.</td>
                                </tr>
                                <tr>
                                    <td>panelClassName</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Style class of the overlay panel element.</td>
                                </tr>
                                <tr>
                                    <td>panelStyle</td>
                                    <td>object</td>
                                    <td>null</td>
                                    <td>Inline style of the overlay panel element.</td>
                                </tr>
                                <tr>
                                    <td>scrollHeight</td>
                                    <td>string</td>
                                    <td>200px</td>
                                    <td>Maximum height of the suggestions panel.</td>
                                </tr>
                                <tr>
                                    <td>autoHighlight</td>
                                    <td>boolean</td>
                                    <td>true</td>
                                    <td>When enabled, highlights the first item in the list by default.</td>
                                </tr>
                                <tr>
                                    <td>placeholder</td>
                                    <td>boolean</td>
                                    <td>true</td>
                                    <td>Placeholder text for the input.</td>
                                </tr>
                                <tr>
                                    <td>delay</td>
                                    <td>number</td>
                                    <td>0</td>
                                    <td>Delay between keystrokes to wait before sending a query.</td>
                                </tr>
                                <tr>
                                    <td>headerTemplate</td>
                                    <td>any</td>
                                    <td>null</td>
                                    <td>The template of header.</td>
                                </tr>
                                <tr>
                                    <td>footerTemplate</td>
                                    <td>any</td>
                                    <td>null</td>
                                    <td>The template of footer.</td>
                                </tr>
                                <tr>
                                    <td>itemTemplate</td>
                                    <td>any</td>
                                    <td>null</td>
                                    <td>Custom template for the items.</td>
                                </tr>
                                <tr>
                                    <td>transitionOptions</td>
                                    <td>object</td>
                                    <td>null</td>
                                    <td>The properties of <a href="https://reactcommunity.org/react-transition-group/css-transition" rel="noopener noreferrer" target="_blank">CSSTransition</a> can be customized, except for "nodeRef" and "in" properties.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h5>Events</h5>
                    <div className="doc-tablewrapper">
                        <table className="doc-table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Parameters</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>onChange</td>
                                    <td>event: Browser event</td>
                                    <td>Callback to invoke when value changes.</td>
                                </tr>
                                <tr>
                                    <td>onFocus</td>
                                    <td>event: Browser event.</td>
                                    <td>Callback to invoke when the element receives focus.</td>
                                </tr>
                                <tr>
                                    <td>onBlur</td>
                                    <td>event: Browser event.</td>
                                    <td>Callback to invoke when the element loses focus.</td>
                                </tr>
                                <tr>
                                    <td>onShow</td>
                                    <td>-</td>
                                    <td>Callback to invoke when overlay panel becomes visible.</td>
                                </tr>
                                <tr>
                                    <td>onHide</td>
                                    <td>-</td>
                                    <td>Callback to invoke when overlay panel becomes hidden.</td>
                                </tr>
                                <tr>
                                    <td>onSearch</td>
                                    <td>event.originalEvent: Browser event <br />
                                        event.trigger: Current trigger keyword.
                                    </td>
                                    <td>Callback to invoke when search. </td>
                                </tr>
                                <tr>
                                    <td>onSelect</td>
                                    <td>event.originalEvent: Browser event<br />
                                        event.suggestion: Selected item
                                    </td>
                                    <td>Callback to invoke when selection changes.</td>
                                </tr>
                                <tr>
                                    <td>onInput</td>
                                    <td>event: Browser event</td>
                                    <td>Callback to invoke on input event of input field.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h5>Styling</h5>
                    <p>Following is the list of structural style classes</p>
                    <div className="doc-tablewrapper">
                        <table className="doc-table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Element</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>p-mention</td>
                                    <td>Container element</td>
                                </tr>
                                <tr>
                                    <td>p-mention-panel</td>
                                    <td>Overlay panel of suggestions.</td>
                                </tr>
                                <tr>
                                    <td>p-mention-items</td>
                                    <td>List container of suggestions.</td>
                                </tr>
                                <tr>
                                    <td>p-mention-item</td>
                                    <td>List item of a suggestion.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h5>Accessibility</h5>
                <DevelopmentSection>
                    <h6>Screen Reader</h6>
                    <p>Value to describe the component can either be provided via <i>label</i> tag combined with <i>inputId</i> prop or using <i>aria-labelledby</i>, <i>aria-label</i> props. The input element has <i>combobox</i> role
                    in addition to <i>aria-autocomplete</i>, <i>aria-haspopup</i> and <i>aria-expanded</i> attributes. The relation between the input and the popup is created with <i>aria-controls</i> and <i>aria-activedescendant</i> attribute is used
                    to instruct screen reader which option to read during keyboard navigation within the popup list.</p>
                    <p>The popup list has an id that refers to the <i>aria-controls</i> attribute of the input element and uses <i>listbox</i> as the role. Each list item has <i>option</i> role and an id to match the <i>aria-activedescendant</i> of the input element.</p>
<CodeHighlight>
{`
<label htmlFor="men1">Username</label>
<Mention inputId="men1" />

<span id="men2">Email</span>
<Mention aria-labelledby="men2" />

<Mention aria-label="City" />
`}
</CodeHighlight>
                    <h6>Keyboard Support</h6>
                    <div className="doc-tablewrapper">
                        <table className="doc-table">
                            <thead>
                                <tr>
                                    <th>Key</th>
                                    <th>Function</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><i>tab</i></td>
                                    <td>Moves focus to the input element when popup is not visible.
                                        If the popup is open and an item is highlighted then popup gets closed, item gets selected and focus moves to the next focusable element.</td>
                                </tr>
                                <tr>
                                    <td><i>up arrow</i></td>
                                    <td>Highlights the previous item if popup is visible.</td>
                                </tr>
                                <tr>
                                    <td><i>down arrow</i></td>
                                    <td>Highlights the next item if popup is visible.</td>
                                </tr>
                                <tr>
                                    <td><i>enter</i></td>
                                    <td>Selects the highlighted item and closes the popup if popup is visible.</td>
                                </tr>
                                <tr>
                                    <td><i>home</i></td>
                                    <td>Highlights the first item if popup is visible.</td>
                                </tr>
                                <tr>
                                    <td><i>end</i></td>
                                    <td>Highlights the last item if popup is visible.</td>
                                </tr>
                                <tr>
                                    <td><i>escape</i></td>
                                    <td>Hides the popup.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </DevelopmentSection>
                    <h5>Dependencies</h5>
                    <p>None.</p>

                </TabPanel>
                {
                    useLiveEditorTabs({ name: 'MentionDemo', sources: sources, service: 'CustomerService', data: 'customers-small' })
                }
            </TabView>
        </div>
    )
})

export default MentionDoc;
