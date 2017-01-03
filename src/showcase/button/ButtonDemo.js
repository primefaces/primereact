import React, {Component} from 'react';
import {Button} from '../../components/button/Button';
import {TabView,TabPanel} from '../../components/tabview/TabView';

export class ButtonDemo extends Component {
        
    constructor() {
        super();
        this.state = {count: 0};
        this.increment = this.increment.bind(this);
    }

    increment() {
        this.setState({count: this.state.count + 1});
    }

    render() {
        return (
            <div>
                <div className="content-section">
                    <div className="feature-intro">
                        <h1>Button</h1>
                        <p>Button is an extension to standard input element with icons and theming.</p>
                    </div>
                </div>

                <div className="content-section implementation button-demo">
                    <h3 className="first">Basic</h3>
                    <Button label="Click" onClick={this.increment} />
                    <Button label="Click" icon="fa-check" onClick={this.increment}/>
                    <Button label="Click" icon="fa-check" iconPos="right" onClick={this.increment}/>
                    <Button icon="fa-check" onClick={this.increment}/>
                    <Button label="Click" disabled="disabled" onClick={this.increment}/>

                    <h3>Severities</h3>
                    <Button label="Primary" onClick={this.increment} />
                    <Button label="Secondary" onClick={this.increment} className="ui-button-secondary"/>
                    <Button label="Success" onClick={this.increment} className="ui-button-success"/>
                    <Button label="Info" onClick={this.increment} className="ui-button-info"/>
                    <Button label="Warning" onClick={this.increment} className="ui-button-warning"/>
                    <Button label="Danger" onClick={this.increment} className="ui-button-danger"/>

                    <p>Number of Clicks: {this.state.count}</p>
                </div>

                <ButtonDemoDoc />
            </div>
        )
    }
}

class ButtonDemoDoc extends Component {

    render() {
        return (
            <div className="content-section source">
                <TabView effect="fade">
                    <TabPanel header="Documentation">
                        <h3>Import</h3>
<pre>
<code className="language-typescript" pCode>
import &#123;ButtonModule&#125; from 'primeng/primeng';
</code>
</pre>

                        <h3>Getting Started</h3>
                        <p>Button is applied to a button element with pButton directive. Text of the button is defined using label property.</p>
                        
<pre>
<code className="language-markup" pCode>
&lt;button pButton type="button" label="Click"&gt;&lt;/button&gt;
</code>
</pre>

                        <h3>Events</h3>
                        <p>Events are defined using standard notation.</p>
                        
<pre>
<code className="language-markup" pCode>
&lt;button pButton type="button" (click)="onclick()" label="Click"&gt;&lt;/button&gt;
</code>
</pre>

<pre>
<code className="language-typescript" pCode>
export class Model &#123;

    onclick() &#123;
        //execute action
    &#125;

&#125;
</code>
</pre>

                        <h3>Icons</h3>
                        <p>Icon on a button is specified with icon attribute and position is customized using iconPos attribute. Default
                        icon position is left. To display only an icon, leave label as undefined.</p>
<pre>
<code className="language-markup" pCode>
&lt;button pButton type="button" icon="fa-check" iconPos="left"&gt;&lt;/button&gt;
</code>
</pre>

                        <h3>Severity</h3>
                        <p>Different color options are available to define severity levels.</p>
                        
                        <ul>
                            <li>.ui-button-secondary</li>
                            <li>.ui-button-success</li>
                            <li>.ui-button-info</li>
                            <li>.ui-button-warning</li>
                            <li>.ui-button-danger</li>
                        </ul>
<pre>
<code className="language-markup" pCode>
&lt;button pButton type="button" className="ui-button-info"&gt;&lt;/button&gt;
</code>
</pre>

                        <h3>Attributes</h3>
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
                                        <td>label</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Text of the button.</td>
                                    </tr>
                                    <tr>
                                        <td>icon</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Name of the icon.</td>
                                    </tr>
                                    <tr>
                                        <td>iconPos</td>
                                        <td>string</td>
                                        <td>left</td>
                                        <td>Position of the icon, valid values are "left" and "right".</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3>Styling</h3>
                        <p>Following is the list of structural style classes, for theming classes visit.</p>
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
                                        <td>ui-button</td>
                                        <td>Button element</td>
                                    </tr>
                                    <tr>
                                        <td>ui-button-icon</td>
                                        <td>Icon element</td>
                                    </tr>
                                    <tr>
                                        <td>ui-button-text</td>
                                        <td>Label element of the button</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3>Dependencies</h3>
                        <p>None.</p>
                    </TabPanel>

                    <TabPanel header="Source">
<pre>
<code className="language-markup" pCode ngNonBindable>
&lt;button pButton type="text" (click)="count()" label="Click"&gt;&lt;/button&gt;

&lt;button pButton type="text" (click)="count()" icon="fa-check" label="Click"&gt;&lt;/button&gt;

&lt;button pButton type="text" (click)="count()" icon="fa-check" iconPos="right" label="Click"&gt;&lt;/button&gt;

&lt;button pButton type="text" (click)="count()" icon="fa-check"&gt;&lt;/button&gt;

&lt;button pButton type="text" (click)="count()" icon="fa-check" [disabled]="true" label="Disabled"&gt;&lt;/button&gt;

Number of clicks: &#123;clicks&#125;
</code>
</pre>

<pre>
<code className="language-typescript" pCode>
export class ButtonDemo &#123;

    clicks: number = 0;

    count() &#123;
        this.clicks++;
    &#125;
&#125;
</code>
</pre>
                    </TabPanel>
                </TabView >
            </div>
        )
    }
}