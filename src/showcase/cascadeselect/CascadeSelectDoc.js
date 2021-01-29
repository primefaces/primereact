import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { CodeHighlight } from '../codehighlight/CodeHighlight';
import { useLiveEditorTabs }from '../liveeditor/LiveEditor';

export class CascadeSelectDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'class': {
                tabName: 'Class Source',
                content: `
import React, { Component } from 'react';
import { CascadeSelect } from 'primereact/cascadeselect';

export class CascadeSelectDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedCity1: null,
            selectedCity2: null
        };

        this.countries = [
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
    }

    countryOptionTemplate(option) {
        return (
            <div className="country-item">
                {option.states && <img alt={option.name} src="showcase/demo/images/flag_placeholder.png" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'}
                                       className={\`flag flag-\${option.code.toLowerCase()}\`} />}
                {option.cities && <i className="pi pi-compass p-mr-2"/>}
                {option.cname && <i className="pi pi-map-marker p-mr-2"/>}
                <span>{option.cname || option.name}</span>
            </div>
        );
    }
    render() {
        return (
            <div>
                <div className="card">
                    <h5>Basic</h5>
                    <CascadeSelect  value={this.state.selectedCity1} options={this.countries}  optionLabel={"cname"} optionGroupLabel={"name"} optionGroupChildren={['states', 'cities']}
                                    style={{minWidth: '14rem'}} placeholder={"Select a City"} onChange={event => this.setState({selectedCity1: event.value})}/>

                    <h5>Templating</h5>
                    <CascadeSelect  value={this.state.selectedCity2} options={this.countries}  optionLabel={"cname"} optionGroupLabel={"name"} optionGroupChildren={['states', 'cities']}
                                    style={{minWidth: '14rem'}} placeholder={"Select a City"} onChange={event => this.setState({selectedCity2: event.value})}  itemTemplate={this.countryOptionTemplate}/>
                </div>
            </div>
        )
    }
}
                `
            },
            'hooks': {
                tabName: 'Hooks Source',
                content: `
import React, { useState } from 'react';
import { CascadeSelect } from 'primereact/cascadeselect';

const CascadeSelectDemo = () => {
    const [selectedCity1, setSelectedCity1] = useState(null);
    const [selectedCity2, setSelectedCity2] = useState(null);
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

    const countryOptionTemplate = (option) => {
        return (
            <div className="country-item">
                {option.states && <img alt={option.name} src="showcase/demo/images/flag_placeholder.png" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'}
                                       className={\`flag flag-\${option.code.toLowerCase()}\`} />}
                {option.cities && <i className="pi pi-compass p-mr-2"/>}
                {option.cname && <i className="pi pi-map-marker p-mr-2"/>}
                <span>{option.cname || option.name}</span>
            </div>
        );
    }

    return (
        <div>
            <div className="card">
                <h5>Basic</h5>
                <CascadeSelect  value={selectedCity1} options={countries}  optionLabel={"cname"} optionGroupLabel={"name"} optionGroupChildren={['states', 'cities']}
                                style={{minWidth: '14rem'}} placeholder={"Select a City"} onChange={event => setSelectedCity1(event.value)}/>

                <h5>Templating</h5>
                <CascadeSelect  value={selectedCity2} options={countries}  optionLabel={"cname"} optionGroupLabel={"name"} optionGroupChildren={['states', 'cities']}
                                style={{minWidth: '14rem'}} placeholder={"Select a City"} onChange={event =>  setSelectedCity2(event.value)}  itemTemplate={countryOptionTemplate}/>
            </div>
        </div>
    )
}
                `
            },
            'ts': {
                tabName: 'TS Source',
                content: `
import React, { useState } from 'react';
import { CascadeSelect } from 'primereact/cascadeselect';

const CascadeSelectDemo = () => {
    const [selectedCity1, setSelectedCity1] = useState(null);
    const [selectedCity2, setSelectedCity2] = useState(null);
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

    const countryOptionTemplate = (option) => {
        return (
            <div className="country-item">
                {option.states && <img alt={option.name} src="showcase/demo/images/flag_placeholder.png" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'}
                                       className={\`flag flag-\${option.code.toLowerCase()}\`} />}
                {option.cities && <i className="pi pi-compass p-mr-2"/>}
                {option.cname && <i className="pi pi-map-marker p-mr-2"/>}
                <span>{option.cname || option.name}</span>
            </div>
        );
    }

    return (
        <div>
            <div className="card">
                <h5>Basic</h5>
                <CascadeSelect  value={selectedCity1} options={countries}  optionLabel={"cname"} optionGroupLabel={"name"} optionGroupChildren={['states', 'cities']}
                                style={{minWidth: '14rem'}} placeholder={"Select a City"} onChange={event => setSelectedCity1(event.value)}/>

                <h5>Templating</h5>
                <CascadeSelect  value={selectedCity2} options={countries}  optionLabel={"cname"} optionGroupLabel={"name"} optionGroupChildren={['states', 'cities']}
                                style={{minWidth: '14rem'}} placeholder={"Select a City"} onChange={event =>  setSelectedCity2(event.value)}  itemTemplate={countryOptionTemplate}/>
            </div>
        </div>
    )
}
                `
            }
        }
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <div className="content-section documentation">
                <TabView>
                    <TabPanel header="Documentation">
                        <h5>Import</h5>
<CodeHighlight lang="js">
{`
import { CascadeSelect } from 'primereact/cascadeselect';
`}
</CodeHighlight>

                        <h5>Getting Started</h5>
                        <p>CascadeSelect requires a value to bind and a collection of arbitrary objects with a nested hierarchy. <i>optionGroupLabel</i>
                            is used for the text of a category and <i>optionGroupChildren</i> is to define the children of the category. Note that order of the <i>optionGroupChildren</i>
                            matters and it should correspond to the data hierarchy.</p>
<CodeHighlight>
{`
<CascadeSelect  value={selectedCity} options={countries}  optionLabel={"cname"} optionGroupLabel={"name"} optionGroupChildren={['states', 'cities']}
                style={{minWidth: '14rem'}} placeholder={"Select a City"} onChange={event => setSelectedCity1(event.value)}/>
`}
</CodeHighlight>

<CodeHighlight lang="js">
{`
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
]
`}
</CodeHighlight>


                        <h5>Templating</h5>
                        <p>Content of an item can be customized with the <i>itemTemplate</i> prop.</p>
<CodeHighlight>
{`
<CascadeSelect value={selectedCity2} options={countries}  optionLabel={"cname"} optionGroupLabel={"name"} optionGroupChildren={['states', 'cities']}
    style={{minWidth: '14rem'}} placeholder={"Select a City"} onChange={event => setSelectedCity2(event.value)} itemTemplate={countryOptionTemplate}/>
`}
</CodeHighlight>
<CodeHighlight lang="js">
{`
const countryOptionTemplate = (option) => {
    return (
        <div className="country-item">
            {option.states && <img alt={option.name} src="showcase/demo/images/flag_placeholder.png" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'}
                                   className={\`flag flag-\${option.code.toLowerCase()}\`} />}
            {option.cities && <i className="pi pi-compass p-mr-2"/>}
            {option.cname && <i className="pi pi-map-marker p-mr-2"/>}
            <span>{option.cname || option.name}</span>
        </div>
    );
}
`}
</CodeHighlight>

                        <h5>Properties</h5>
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
                                        <td>options</td>
                                        <td>array</td>
                                        <td>null</td>
                                        <td>An array of selectitems to display as the available options.</td>
                                    </tr>
                                    <tr>
                                        <td>optionLabel</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Property name or getter function to use as the label of an option.</td>
                                    </tr>
                                    <tr>
                                        <td>optionValue</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Property name or getter function to use as the value of an option, defaults to the option itself when not defined.</td>
                                    </tr>
                                    <tr>
                                        <td>optionGroupLabel</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Property name or getter function to use as the label of an option group.</td>
                                    </tr>
                                    <tr>
                                        <td>optionGroupChildren</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Property name or getter function to retrieve the items of a group.</td>
                                    </tr>
                                    <tr>
                                        <td>placeholder</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Default text to display when no option is selected.</td>
                                    </tr>
                                    <tr>
                                        <td>disabled</td>
                                        <td>boolean</td>
                                        <td>false</td>
                                        <td>When present, it specifies that the component should be disabled.</td>
                                    </tr>
                                    <tr>
                                        <td>dataKey</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>A property to uniquely identify an option.</td>
                                    </tr>
                                    <tr>
                                        <td>tabIndex</td>
                                        <td>number</td>
                                        <td>null</td>
                                        <td>Index of the element in tabbing order.</td>
                                    </tr>
                                    <tr>
                                        <td>inputId</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Identifier of the underlying input element.</td>
                                    </tr>
                                    <tr>
                                        <td>ariaLabelledBy</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Establishes relationships between the component and label(s) where its value should be one or more element IDs.</td>
                                    </tr>
                                    <tr>
                                        <td>appendTo</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Id of the element or "body" for document where the overlay should be appended to.</td>
                                    </tr>
                                    <tr>
                                        <td>itemTemplate</td>
                                        <td>any</td>
                                        <td>null</td>
                                        <td>The template of items.</td>
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
                                        <td>event.originalEvent: Original event <br />
                                            event.value: Value of the checkbox </td>
                                        <td>Callback to invoke on value change</td>
                                    </tr>
                                    <tr>
                                        <td>onGroupChange</td>
                                        <td>event: Browser event.</td>
                                        <td>Callback to invoke when a group changes.</td>
                                    </tr>
                                    <tr>
                                        <td>onBeforeShow</td>
                                        <td>-</td>
                                        <td>Callback to invoke before the overlay is shown.</td>
                                    </tr>
                                    <tr>
                                        <td>onBeforeHide</td>
                                        <td>-</td>
                                        <td>Callback to invoke before the overlay is hidden.</td>
                                    </tr>
                                    <tr>
                                        <td>onShow</td>
                                        <td>-</td>
                                        <td>Callback to invoke when the overlay is shown.</td>
                                    </tr>
                                    <tr>
                                        <td>onHide</td>
                                        <td>-</td>
                                        <td>Callback to invoke when the overlay is hidden.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h5>Styling</h5>
                        <p>Following is the list of structural style classes, for theming classes visit <Link to="/theming">theming</Link> page.</p>
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
                                        <td>p-cascadeselect</td>
                                        <td>Container element.</td>
                                    </tr>
                                    <tr>
                                        <td>p-cascadeselect-label</td>
                                        <td>Element to display label of selected option.</td>
                                    </tr>
                                    <tr>
                                        <td>p-cascadeselect-trigger</td>
                                        <td>Icon element.</td>
                                    </tr>
                                    <tr>
                                        <td>p-cascadeselect-panel</td>
                                        <td>Icon element.</td>
                                    </tr>
                                    <tr>
                                        <td>p-cascadeselect-items-wrapper</td>
                                        <td>Wrapper element of items list.</td>
                                    </tr>
                                    <tr>
                                        <td>p-cascadeselect-items</td>
                                        <td>List element of items.</td>
                                    </tr>
                                    <tr>
                                        <td>p-cascadeselect-item</td>
                                        <td>An item in the list.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h5>Dependencies</h5>
                        <p>None.</p>
                    </TabPanel>

                    {
                        useLiveEditorTabs({ name: 'CascadeSelectDemo', sources: this.sources })
                    }
                </TabView>
            </div>
        )
    }
}
