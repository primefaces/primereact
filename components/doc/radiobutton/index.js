import React, { memo } from 'react';
import Link from 'next/link';
import { TabView, TabPanel } from '../../lib/tabview/TabView';
import { useLiveEditorTabs } from '../common/liveeditor';
import { CodeHighlight } from '../common/codehighlight';
import { DevelopmentSection } from '../common/developmentsection';

const RadioButtonDoc = memo(() => {

    const sources = {
        'class': {
            tabName: 'Class Source',
            content: `
import React, { Component } from 'react';
import { RadioButton } from 'primereact/radiobutton';

export class RadioButtonDemo extends Component {

    constructor(props) {
        super(props);

        this.categories = [{name: 'Accounting', key: 'A'}, {name: 'Marketing', key: 'M'}, {name: 'Production', key: 'P'}, {name: 'Research', key: 'R'}];

        this.state = {
            city: null,
            selectedCategory: this.categories[1]
        };
    }

    render() {
        return (
            <div>
                <div className="card">
                    <h5>Basic</h5>
                    <div className="field-radiobutton">
                        <RadioButton inputId="city1" name="city" value="Chicago" onChange={(e) => this.setState({city: e.value})} checked={this.state.city === 'Chicago'} />
                        <label htmlFor="city1">Chicago</label>
                    </div>
                    <div className="field-radiobutton">
                        <RadioButton inputId="city2" name="city" value="Los Angeles" onChange={(e) => this.setState({city: e.value})} checked={this.state.city === 'Los Angeles'} />
                        <label htmlFor="city2">Los Angeles</label>
                    </div>
                    <div className="field-radiobutton">
                        <RadioButton inputId="city3" name="city" value="New York" onChange={(e) => this.setState({city: e.value})} checked={this.state.city === 'New York'} />
                        <label htmlFor="city3">New York</label>
                    </div>
                    <div className="field-radiobutton">
                        <RadioButton inputId="city4" name="city" value="San Francisco" onChange={(e) => this.setState({city: e.value})} checked={this.state.city === 'San Francisco'} />
                        <label htmlFor="city4">San Francisco</label>
                    </div>

                    <h5>Dynamic Values, Preselection, Value Binding and Disabled Option</h5>
                    {
                        this.categories.map((category) => {
                            return (
                                <div key={category.key} className="field-radiobutton">
                                    <RadioButton inputId={category.key} name="category" value={category} onChange={(e) => this.setState({selectedCategory: e.value})}  checked={this.state.selectedCategory.key === category.key} disabled={category.key === 'R'} />
                                    <label htmlFor={category.key}>{category.name}</label>
                                </div>
                            )
                        })
                    }
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
import { RadioButton } from 'primereact/radiobutton';

const RadioButtonDemo = () => {
    const categories = [{name: 'Accounting', key: 'A'}, {name: 'Marketing', key: 'M'}, {name: 'Production', key: 'P'}, {name: 'Research', key: 'R'}];
    const [city, setCity] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(categories[1]);

    return (
        <div>
            <div className="card">
                <h5>Basic</h5>
                <div className="field-radiobutton">
                    <RadioButton inputId="city1" name="city" value="Chicago" onChange={(e) => setCity(e.value)} checked={city === 'Chicago'} />
                    <label htmlFor="city1">Chicago</label>
                </div>
                <div className="field-radiobutton">
                    <RadioButton inputId="city2" name="city" value="Los Angeles" onChange={(e) => setCity(e.value)} checked={city === 'Los Angeles'} />
                    <label htmlFor="city2">Los Angeles</label>
                </div>
                <div className="field-radiobutton">
                    <RadioButton inputId="city3" name="city" value="New York" onChange={(e) => setCity(e.value)} checked={city === 'New York'} />
                    <label htmlFor="city3">New York</label>
                </div>
                <div className="field-radiobutton">
                    <RadioButton inputId="city4" name="city" value="San Francisco" onChange={(e) => setCity(e.value)} checked={city === 'San Francisco'} />
                    <label htmlFor="city4">San Francisco</label>
                </div>

                <h5>Dynamic Values, Preselection, Value Binding and Disabled Option</h5>
                {
                    categories.map((category) => {
                        return (
                            <div key={category.key} className="field-radiobutton">
                                <RadioButton inputId={category.key} name="category" value={category} onChange={(e) => setSelectedCategory(e.value)}  checked={selectedCategory.key === category.key} disabled={category.key === 'R'} />
                                <label htmlFor={category.key}>{category.name}</label>
                            </div>
                        )
                    })
                }
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
import { RadioButton } from 'primereact/radiobutton';

const RadioButtonDemo = () => {
    const categories = [{name: 'Accounting', key: 'A'}, {name: 'Marketing', key: 'M'}, {name: 'Production', key: 'P'}, {name: 'Research', key: 'R'}];
    const [city, setCity] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(categories[1]);

    return (
        <div>
            <div className="card">
                <h5>Basic</h5>
                <div className="field-radiobutton">
                    <RadioButton inputId="city1" name="city" value="Chicago" onChange={(e) => setCity(e.value)} checked={city === 'Chicago'} />
                    <label htmlFor="city1">Chicago</label>
                </div>
                <div className="field-radiobutton">
                    <RadioButton inputId="city2" name="city" value="Los Angeles" onChange={(e) => setCity(e.value)} checked={city === 'Los Angeles'} />
                    <label htmlFor="city2">Los Angeles</label>
                </div>
                <div className="field-radiobutton">
                    <RadioButton inputId="city3" name="city" value="New York" onChange={(e) => setCity(e.value)} checked={city === 'New York'} />
                    <label htmlFor="city3">New York</label>
                </div>
                <div className="field-radiobutton">
                    <RadioButton inputId="city4" name="city" value="San Francisco" onChange={(e) => setCity(e.value)} checked={city === 'San Francisco'} />
                    <label htmlFor="city4">San Francisco</label>
                </div>

                <h5>Dynamic Values, Preselection, Value Binding and Disabled Option</h5>
                {
                    categories.map((category) => {
                        return (
                            <div key={category.key} className="field-radiobutton">
                                <RadioButton inputId={category.key} name="category" value={category} onChange={(e) => setSelectedCategory(e.value)}  checked={selectedCategory.key === category.key} disabled={category.key === 'R'} />
                                <label htmlFor={category.key}>{category.name}</label>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
                `
        },
        'browser': {
            tabName: 'Browser Source',
            imports: `
        <script src="https://unpkg.com/primereact/core/core.min.js"></script>
        <script src="https://unpkg.com/primereact/radiobutton/radiobutton.min.js"></script>`,
            content: `
const { useState } = React;
const { RadioButton } = primereact.radiobutton;

const RadioButtonDemo = () => {
    const categories = [{name: 'Accounting', key: 'A'}, {name: 'Marketing', key: 'M'}, {name: 'Production', key: 'P'}, {name: 'Research', key: 'R'}];
    const [city, setCity] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(categories[1]);

    return (
        <div>
            <div className="card">
                <h5>Basic</h5>
                <div className="field-radiobutton">
                    <RadioButton inputId="city1" name="city" value="Chicago" onChange={(e) => setCity(e.value)} checked={city === 'Chicago'} />
                    <label htmlFor="city1">Chicago</label>
                </div>
                <div className="field-radiobutton">
                    <RadioButton inputId="city2" name="city" value="Los Angeles" onChange={(e) => setCity(e.value)} checked={city === 'Los Angeles'} />
                    <label htmlFor="city2">Los Angeles</label>
                </div>
                <div className="field-radiobutton">
                    <RadioButton inputId="city3" name="city" value="New York" onChange={(e) => setCity(e.value)} checked={city === 'New York'} />
                    <label htmlFor="city3">New York</label>
                </div>
                <div className="field-radiobutton">
                    <RadioButton inputId="city4" name="city" value="San Francisco" onChange={(e) => setCity(e.value)} checked={city === 'San Francisco'} />
                    <label htmlFor="city4">San Francisco</label>
                </div>

                <h5>Dynamic Values, Preselection, Value Binding and Disabled Option</h5>
                {
                    categories.map((category) => {
                        return (
                            <div key={category.key} className="field-radiobutton">
                                <RadioButton inputId={category.key} name="category" value={category} onChange={(e) => setSelectedCategory(e.value)}  checked={selectedCategory.key === category.key} disabled={category.key === 'R'} />
                                <label htmlFor={category.key}>{category.name}</label>
                            </div>
                        )
                    })
                }
            </div>
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
import { RadioButton } from 'primereact/radiobutton';
`}
</CodeHighlight>

                    <h5>Import via CDN</h5>
<CodeHighlight>
{`
<script src="https://unpkg.com/primereact/core/core.min.js"></script>
<script src="https://unpkg.com/primereact/radiobutton/radiobutton.min.js"></script>
`}
</CodeHighlight>

                    <h5>Getting Started</h5>
                    <p>RadioButton is used as a controlled input with checked and onChange properties.</p>
<CodeHighlight>
{`
<RadioButton value="val1" name="city" onChange={(e) => setValue(e.value)} checked={value === 'val1'} />
<RadioButton value="val2" name="city" onChange={(e) => setValue(e.value)} checked={value === 'val2'} />
`}
</CodeHighlight>

                    <h5>Properties</h5>
                    <p>Any valid attribute is passed to the root element implicitly, extended properties are as follows;</p>
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
                                    <td>Unique identifier of the inner native radiobutton.</td>
                                </tr>
                                <tr>
                                    <td>name</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Name of the checkbox element .</td>
                                </tr>
                                <tr>
                                    <td>value</td>
                                    <td>any</td>
                                    <td>null</td>
                                    <td>Value of the radiobutton.</td>
                                </tr>
                                <tr>
                                    <td>checked</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>Specifies whether a radiobutton should be checked or not.</td>
                                </tr>
                                <tr>
                                    <td>style</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Inline style of the element.</td>
                                </tr>
                                <tr>
                                    <td>className</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Style class of the element.</td>
                                </tr>
                                <tr>
                                    <td>disabled</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>When present, it specifies that the element value cannot be altered.</td>
                                </tr>
                                <tr>
                                    <td>required</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>When present, it specifies that an input field must be filled out before submitting the form.</td>
                                </tr>
                                <tr>
                                    <td>tooltip</td>
                                    <td>any</td>
                                    <td>null</td>
                                    <td>Content of the tooltip.</td>
                                </tr>
                                <tr>
                                    <td>tooltipOptions</td>
                                    <td>object</td>
                                    <td>null</td>
                                    <td>Configuration of the tooltip, refer to the tooltip documentation for more information.</td>
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
                                        event.value: Value of the radiobutton <br />
                                        event.checked: Checked state as a boolean.</td>
                                    <td>Callback to invoke on radio button click.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h5>Styling</h5>
                    <p>Following is the list of structural style classes, for theming classes visit <Link href="/theming">theming</Link> page.</p>
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
                                    <td>p-radiobutton</td>
                                    <td>Container element</td>
                                </tr>
                                <tr>
                                    <td>p-radiobutton-box</td>
                                    <td>Container of icon.</td>
                                </tr>
                                <tr>
                                    <td>p-radiobutton-icon</td>
                                    <td>Icon element.</td>
                                </tr>
                                <tr>
                                    <td>p-radiobutton-label</td>
                                    <td>Label element.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h5>Accessibility</h5>
                <DevelopmentSection>
                    <h6>Screen Reader</h6>
                    <p>RadioButton component uses a hidden native radio button element internally that is only visible to screen readers. Value to describe the component can either be provided via <i>label</i> tag combined with <i>inputId</i> prop or using <i>aria-labelledby</i>, <i>aria-label</i> props.</p>
<CodeHighlight>
{`
<label htmlFor="rb1">One</label>
<RadioButton inputId="rb1" />

<span id="rb2">Two</span>
<RadioButton aria-labelledby="rb2" />

<RadioButton aria-label="Three" />
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
                                    <td>Moves focus to the checked radio button, if there is none within the group then first radio button receives the focus.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <span className="inline-flex flex-column">
                                            <i className="mb-1">left arrow</i>
                                            <i>up arrow</i>
                                        </span>
                                    </td>
                                    <td>Moves focus to the previous radio button, if there is none then last radio button receives the focus.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <span className="inline-flex flex-column">
                                            <i className="mb-1">right arrow</i>
                                            <i>down arrow</i>
                                        </span>
                                    </td>
                                    <td>Moves focus to the next radio button, if there is none then first radio button receives the focus.</td>
                                </tr>
                                <tr>
                                    <td><i>space</i></td>
                                    <td>If the focused radio button is unchecked, changes the state to checked.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </DevelopmentSection>
                    <h5>Dependencies</h5>
                    <p>None.</p>
                </TabPanel>

                {
                    useLiveEditorTabs({ name: 'RadioButtonDemo', sources: sources })
                }
            </TabView>
        </div>
    )
})

export default RadioButtonDoc;
