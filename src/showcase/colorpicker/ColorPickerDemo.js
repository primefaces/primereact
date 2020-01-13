import React, {Component} from 'react';
import {ColorPicker} from '../../components/colorpicker/ColorPicker';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';
import AppContentContext from '../../AppContentContext';

export class ColorPickerDemo extends Component {

    constructor() {
        super();
        this.state = {
            color1: null,
            color2: '1976D2'
        };
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>ColorPicker</h1>
                        <p>ColorPicker is an input component to select a color.</p>

                        <AppContentContext.Consumer>
                            { context => <button onClick={() => context.onChangelogBtnClick("colorPicker")} className="layout-changelog-button">{context.changelogText}</button> }
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Inline</h3>
                    <ColorPicker inline={true} value={this.state.color1} onChange={(e) => this.setState({ color1: e.value })}></ColorPicker>
                    <p style={{'marginTop':'.5em'}}>Selected Color: <span style={{'display':'inline-block','width':'32px','height':'32px','verticalAlign':'middle','backgroundColor': '#' + this.state.color1}}></span> {this.state.color1} </p>

                    <h3>Overlay</h3>
                    <ColorPicker value={this.state.color2} onChange={(e) => this.setState({ color2: e.value })}></ColorPicker>
                    <p style={{'marginTop':'.5em'}}>Selected Color: <span style={{'color':'#' + this.state.color2}}>{this.state.color2}</span></p>
                </div>

                <ColorPickerDoc />
            </div>
        )
    }
}

class ColorPickerDoc extends Component {

    shouldComponentUpdate(){
        return false;
    }

    render() {
        return (
            <div className="content-section documentation">
                <TabView>
                    <TabPanel header="Documentation">
                        <h3>Import</h3>
<CodeHighlight className="language-javascript">
{`
import {ColorPicker} from 'primereact/colorpicker';

`}
</CodeHighlight>

                        <h3>Getting Started</h3>
                        <p>ColorPicker is used as a controlled input component with <i>value</i> and <i>onChange</i> properties.</p>

<CodeHighlight className="language-jsx">
{`
<ColorPicker value={this.state.color} onChange={(e) => this.setState({color: e.value})} />

`}
</CodeHighlight>

                        <h3>Formats</h3>
                        <p>Default color format to use in value binding is "hex" and other possible values are "rgb" and "hsb". Example below has 3 colorpickers having default values with different formats.</p>

<CodeHighlight className="language-jsx">
{`
<ColorPicker value={this.state.color1} onChange={(e) => this.setState({color1: e.value})} />

<ColorPicker format="rgb" value={this.state.color2} onChange={(e) => this.setState({color2: e.value})} />

<ColorPicker format="hsb" value={this.state.color3} onChange={(e) => this.setState({color3: e.value})}/>

`}
</CodeHighlight>


                        <h3>Properties</h3>
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
                                        <td>Unique identifier of the component.</td>
                                    </tr>
                                    <tr>
                                        <td>value</td>
                                        <td>any</td>
                                        <td>null</td>
                                        <td>Value of the component.</td>
                                    </tr>
                                    <tr>
                                        <td>style</td>
                                        <td>string</td>
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
                                        <td>defaultColor</td>
                                        <td>string</td>
                                        <td>ff0000</td>
                                        <td>Default color to display when value is null.</td>
                                    </tr>
                                    <tr>
                                        <td>inline</td>
                                        <td>boolean</td>
                                        <td>false</td>
                                        <td>Whether to display as an overlay or not.</td>
                                    </tr>
                                    <tr>
                                        <td>format</td>
                                        <td>string</td>
                                        <td>hex</td>
                                        <td>Format to use in value binding, supported formats are "hex", "rgb" and "hsb".</td>
                                    </tr>
                                    <tr>
                                        <td>appendTo</td>
                                        <td>DOM element</td>
                                        <td>null</td>
                                        <td>DOM element instance where the dialog should be mounted.</td>
                                    </tr>
                                    <tr>
                                        <td>disabled</td>
                                        <td>boolean</td>
                                        <td>false</td>
                                        <td>When present, it specifies that the component should be disabled.</td>
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
                                        <td>Identifier of the focus input to match a label defined for the dropdown.</td>
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

                        <h3>Events</h3>
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
                                        <td>value: Selected color value whose type depends on the format.</td>
                                        <td>Callback to invoke when a color is selected.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3>Styling</h3>
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
                                        <td>p-colorpicker</td>
                                        <td>Container element.</td>
                                    </tr>
                                    <tr>
                                        <td>p-colorpicker-overlay</td>
                                        <td>Container element in overlay mode.</td>
                                    </tr>
                                    <tr>
                                        <td>p-colorpicker-preview </td>
                                        <td>Preview input in overlay mode.</td>
                                    </tr>
                                    <tr>
                                        <td>p-colorpicker-panel</td>
                                        <td>Panel element of the colorpicker.</td>
                                    </tr>
                                    <tr>
                                        <td>p-colorpicker-content</td>
                                        <td>Wrapper that contains color and hue sections.</td>
                                    </tr>
                                    <tr>
                                        <td>p-colorpicker-color-selector</td>
                                        <td>Color selector container.</td>
                                    </tr>
                                    <tr>
                                        <td>p-colorpicker-color</td>
                                        <td>Color element.</td>
                                    </tr>
                                    <tr>
                                        <td>p-colorpicker-color-handle</td>
                                        <td>Handle of the color element.</td>
                                    </tr>
                                    <tr>
                                        <td>p-colorpicker-hue</td>
                                        <td>Hue slider.</td>
                                    </tr>
                                    <tr>
                                        <td>p-colorpicker-hue-handle</td>
                                        <td>Handle of the hue slider.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3>Dependencies</h3>
                        <p>None.</p>
                    </TabPanel>

                    <TabPanel header="Source">
                        <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/colorpicker" className="btn-viewsource" target="_blank" rel="noopener noreferrer">
                            <span>View on GitHub</span>
                        </a>
<CodeHighlight className="language-javascript">
{`
import React, {Component} from 'react';
import {ColorPicker} from 'primereact/colorpicker';

export class ColorPickerDemo extends Component {

    constructor() {
        super();
        this.state = {
            color1: null,
            color2: '1976D2'
        };
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>ColorPicker</h1>
                        <p>ColorPicker is an input component to select a color.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Inline</h3>
                    <ColorPicker inline="true" value={this.state.color1} onChange={(e) => this.setState({ color1: e.value })}></ColorPicker>
                    <p style={{'marginTop':'.5em'}}>Selected Color: <span style={{'display':'inline-block','width':'32px','height':'32px','verticalAlign':'middle','backgroundColor': '#' + this.state.color1}}></span> {this.state.color1} </p>

                    <h3>Overlay</h3>
                    <ColorPicker value={this.state.color2} onChange={(e) => this.setState({ color2: e.value })}></ColorPicker>
                    <p style={{'marginTop':'.5em'}}>Selected Color: <span style={{'color':'#' + this.state.color2}}>{this.state.color2}</span></p>
                </div>
            </div>
        )
    }
}

`}
</CodeHighlight>
                    </TabPanel>
                </TabView>
            </div>
        )
    }
}
