import React, { Component } from 'react';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { CodeHighlight } from '../codehighlight/CodeHighlight';

export class FlexGridDoc extends Component {

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <div className="content-section documentation flexgrid-demo">
                <TabView>
                    <TabPanel header="Documentation">
                        <h5>Install</h5>
                        <p>PrimeFlex is available at npm, if you have an existing application run the following command to download it to your project.</p>
<CodeHighlight lang="js">
{`
npm install primeflex --save
`}
</CodeHighlight>

                        <p>Then add the primeflex.css to your application</p>
<CodeHighlight lang="js">
{`
import 'primeflex/primeflex.css';
`}
</CodeHighlight>


                        <h5>Getting Started</h5>
                        <p>FlexGrid is a CSS utility based on flexbox. For more information about Flex, visit <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/">A Complete Guide to Flexbox</a>. A basic grid is defined by giving
					a container <i>p-grid</i> class and children the <i>p-col</i> class. Children of the grid will have the same width and scale according to the width of the parent.</p>
<CodeHighlight>
{`
<div className="p-grid">
    <div className="p-col">1</div>
    <div className="p-col">2</div>
    <div className="p-col">3</div>
</div>
`}
</CodeHighlight>

                        <div className="p-grid">
                            <div className="p-col">
                                <div className="box">1</div>
                            </div>
                            <div className="p-col">
                                <div className="box">2</div>
                            </div>
                            <div className="p-col">
                                <div className="box">3</div>
                            </div>
                        </div>

                        <h5>Direction</h5>
                        <p>Default direction is <b>row</b> and <i>p-dir-*</i> class at the container defines the other possible directions which can be <b>row reverse</b>, <b>column</b> and <b>column reverse</b></p>
<CodeHighlight>
{`
<!-- Row Reverse -->
<div className="p-grid p-dir-rev">
	<div className="p-col">1</div>
	<div className="p-col">2</div>
	<div className="p-col">3</div>
</div>

<!-- Column -->
<div className="p-grid p-dir-col">
	<div className="p-col">1</div>
	<div className="p-col">2</div>
	<div className="p-col">3</div>
</div>

<!-- Column Reverse -->
<div className="p-grid p-dir-col-rev">
	<div className="p-col">1</div>
	<div className="p-col">2</div>
	<div className="p-col">3</div>
</div>
`}
</CodeHighlight>

                        <div className="p-grid p-dir-rev">
                            <div className="p-col">
                                <div className="box">1</div>
                            </div>
                            <div className="p-col">
                                <div className="box">2</div>
                            </div>
                            <div className="p-col">
                                <div className="box">3</div>
                            </div>
                        </div>

                        <div className="p-grid p-dir-col">
                            <div className="p-col">
                                <div className="box">1</div>
                            </div>
                            <div className="p-col">
                                <div className="box">2</div>
                            </div>
                            <div className="p-col">
                                <div className="box">3</div>
                            </div>
                        </div>

                        <div className="p-grid p-dir-col-rev">
                            <div className="p-col">
                                <div className="box">1</div>
                            </div>
                            <div className="p-col">
                                <div className="box">2</div>
                            </div>
                            <div className="p-col">
                                <div className="box">3</div>
                            </div>
                        </div>
                        <h5>12 Column Grid</h5>
                        <p>FlexGrid includes a 12 column based layout utility where width of a column is defined with the <i>p-col-&#123;number&#125;</i> style class. Columns with prefined widths can be used with columns with auto width (p-col) as well.</p>

                        <p>In the first example below, first column covers the 4 units out of 12 and the rest of the columns share the remaining space whereas in the second example, all three columns have explicit units.</p>
<CodeHighlight>
{`
<div className="p-grid">
    <div className="p-col-4">4</div>
    <div className="p-col">1</div>
    <div className="p-col">1</div>
    <div className="p-col">1</div>
    <div className="p-col">1</div>
    <div className="p-col">1</div>
    <div className="p-col">1</div>
    <div className="p-col">1</div>
    <div className="p-col">1</div>
</div>

<div className="p-grid">
    <div className="p-col-2">2</div>
    <div className="p-col-6">6</div>
    <div className="p-col-4">4</div>
</div>
`}
</CodeHighlight>

                        <div className="p-grid">
                            <div className="p-col-4">
                                <div className="box">4</div>
                            </div>
                            <div className="p-col">
                                <div className="box">1</div>
                            </div>
                            <div className="p-col">
                                <div className="box">1</div>
                            </div>
                            <div className="p-col">
                                <div className="box">1</div>
                            </div>
                            <div className="p-col">
                                <div className="box">1</div>
                            </div>
                            <div className="p-col">
                                <div className="box">1</div>
                            </div>
                            <div className="p-col">
                                <div className="box">1</div>
                            </div>
                            <div className="p-col">
                                <div className="box">1</div>
                            </div>
                            <div className="p-col">
                                <div className="box">1</div>
                            </div>
                        </div>

                        <div className="p-grid">
                            <div className="p-col-2">
                                <div className="box">2</div>
                            </div>
                            <div className="p-col-6">
                                <div className="box">6</div>
                            </div>
                            <div className="p-col-4">
                                <div className="box">4</div>
                            </div>
                        </div>

                        <h5>MultiLine</h5>
                        <p>When the number of columns exceed 12, columns wrap to a new line.</p>
<CodeHighlight>
{`
<div className="p-grid">
    <div className="p-col-6">6</div>
    <div className="p-col-6">6</div>
    <div className="p-col-6">6</div>
    <div className="p-col-6">6</div>
</div>
`}
</CodeHighlight>

                        <div className="p-grid">
                            <div className="p-col-6">
                                <div className="box">6</div>
                            </div>
                            <div className="p-col-6">
                                <div className="box">6</div>
                            </div>
                            <div className="p-col-6">
                                <div className="box">6</div>
                            </div>
                            <div className="p-col-6">
                                <div className="box">6</div>
                            </div>
                        </div>

                        <h5>Fixed Width Column</h5>
                        <p>A column can have a fixed width while siblings having auto width. Apply <i>p-col-fixed</i> class to fix a column width.</p>
<CodeHighlight>
{`
<div className="p-grid">
    <div className="p-col-fixed" style={{ width: '100px'}}>Fixed</div>
    <div className="p-col">Auto</div>
</div>
`}
</CodeHighlight>

                        <div className="p-grid">
                            <div className="p-col-fixed" style={{ width: '100px'}}>
                                <div className="box">100px</div>
                            </div>
                            <div className="p-col">
                                <div className="box">auto</div>
                            </div>
                        </div>
                        <h5>Responsive</h5>
                        <p>Responsive layout is achieved by applying breakpoint specific classes to the columns whereas <i>p-col-*</i> define the default behavior for mobile devices with small screens. Four screen sizes are supported with different breakpoints.</p>
                        <div className="doc-tablewrapper">
                            <table className="doc-table">
                                <thead>
                                    <tr>
                                        <th>Prefix</th>
                                        <th>Devices</th>
                                        <th>Media Query</th>
                                        <th>Example</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>p-sm-*</td>
                                        <td>Small devices</td>
                                        <td>min-width: 576px</td>
                                        <td>p-sm-6, p-sm-4</td>
                                    </tr>
                                    <tr>
                                        <td>p-md-*</td>
                                        <td>Medium sized devices such as tablets</td>
                                        <td>min-width: 768px</td>
                                        <td>p-md-2, p-md-8</td>
                                    </tr>
                                    <tr>
                                        <td>p-lg-*</td>
                                        <td>Devices with large screen like desktops</td>
                                        <td>min-width: 992px</td>
                                        <td>p-lg-6, p-lg-12</td>
                                    </tr>
                                    <tr>
                                        <td>p-xl-*</td>
                                        <td>Big screen monitors</td>
                                        <td>min-width: 1200px</td>
                                        <td>p-xl-2, ui-xl-10</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <p>In example below, large screens display 4 columns, medium screens display 2 columns in 2 rows and finally on small devices, columns are stacked.</p>
<CodeHighlight>
{`
<div className="p-grid">
    <div className="p-col-12 p-md-6 p-lg-3">A</div>
    <div className="p-col-12 p-md-6 p-lg-3">B</div>
    <div className="p-col-12 p-md-6 p-lg-3">C</div>
    <div className="p-col-12 p-md-6 p-lg-3">D</div>
</div>
`}
</CodeHighlight>

                        <div className="p-grid">
                            <div className="p-col-12 p-md-6 p-lg-3">
                                <div className="box">A</div>
                            </div>
                            <div className="p-col-12 p-md-6 p-lg-3">
                                <div className="box">B</div>
                            </div>
                            <div className="p-col-12 p-md-6 p-lg-3">
                                <div className="box">C</div>
                            </div>
                            <div className="p-col-12 p-md-6 p-lg-3">
                                <div className="box">D</div>
                            </div>
                        </div>

                        <h5>Horizontal Alignment</h5>
                        <p><i>p-justify-*</i> classes are used on the container element to define the alignment along the main axis.</p>
                        <div className="doc-tablewrapper">
                            <table className="doc-table">
                                <thead>
                                    <tr>
                                        <th>Class</th>
                                        <th>Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>p-justify-start (default)</td>
                                        <td>Items are packed toward the start line</td>
                                    </tr>
                                    <tr>
                                        <td>p-justify-end</td>
                                        <td>Items are packed toward to end line</td>
                                    </tr>
                                    <tr>
                                        <td>p-justify-center</td>
                                        <td>Items are centered along the line</td>
                                    </tr>
                                    <tr>
                                        <td>p-justify-between</td>
                                        <td>Items are evenly distributed in the line; first item is on the start line, last item on the end line</td>
                                    </tr>
                                    <tr>
                                        <td>p-justify-around</td>
                                        <td>Items are evenly distributed in the line with equal space around them.</td>
                                    </tr>
                                    <tr>
                                        <td>p-justify-even</td>
                                        <td>Items are distributed so that the spacing between any two items (and the space to the edges) is equal.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
<CodeHighlight>
{`
<div className="p-grid p-justify-between">
    <div className="p-col-2">2</div>
    <div className="p-col-1">1</div>
    <div className="p-col-4">4</div>
</div>
`}
</CodeHighlight>

                        <div className="p-grid p-justify-between">
                            <div className="p-col-2">
                                <div className="box">2</div>
                            </div>
                            <div className="p-col-1">
                                <div className="box">1</div>
                            </div>
                            <div className="p-col-4">
                                <div className="box">4</div>
                            </div>
                        </div>

                        <h5>Vertical Alignment</h5>
                        <p><i>p-align-*</i> classes are used on the container element to define the alignment along the cross axis.</p>
                        <div className="doc-tablewrapper">
                            <table className="doc-table">
                                <thead>
                                    <tr>
                                        <th>Class</th>
                                        <th>Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>p-align-stretch (default)</td>
                                        <td>Stretch to fill the container.</td>
                                    </tr>
                                    <tr>
                                        <td>p-align-start</td>
                                        <td>Cross-start margin edge of the items is placed on the cross-start line</td>
                                    </tr>
                                    <tr>
                                        <td>p-align-end</td>
                                        <td>Cross-end margin edge of the items is placed on the cross-end line</td>
                                    </tr>
                                    <tr>
                                        <td>p-align-center</td>
                                        <td>Items are centered in the cross-axis</td>
                                    </tr>
                                    <tr>
                                        <td>p-align-baseline</td>
                                        <td>Items are aligned such as their baselines align</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
<CodeHighlight>
{`
<div className="p-grid p-align-center">
    <div className="p-col">4</div>
    <div className="p-col">4</div>
    <div className="p-col">4</div>
</div>
`}
</CodeHighlight>

                        <div className="p-grid p-align-center vertical-container">
                            <div className="p-col">
                                <div className="box">4</div>
                            </div>
                            <div className="p-col">
                                <div className="box">4</div>
                            </div>
                            <div className="p-col">
                                <div className="box">4</div>
                            </div>
                        </div>
                        <p>Vertical alignment can also be defined at column level with the <i>p-align-col-*</i> classes.</p>
                        <div className="doc-tablewrapper">
                            <table className="doc-table">
                                <thead>
                                    <tr>
                                        <th>Class</th>
                                        <th>Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>p-col-align-stretch</td>
                                        <td>Stretch to fill the container.</td>
                                    </tr>
                                    <tr>
                                        <td>p-col-align-start</td>
                                        <td>Cross-start margin edge of the items is placed on the cross-start line</td>
                                    </tr>
                                    <tr>
                                        <td>p-col-align-end</td>
                                        <td>Cross-end margin edge of the items is placed on the cross-end line</td>
                                    </tr>
                                    <tr>
                                        <td>p-col-align-center</td>
                                        <td>Items are centered in the cross-axis</td>
                                    </tr>
                                    <tr>
                                        <td>p-col-align-baseline</td>
                                        <td>Items are aligned such as their baselines align</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
<CodeHighlight>
{`
<div className="p-grid">
    <div className="p-col p-col-align-start">4</div>
    <div className="p-col p-col-align-center">4</div>
    <div className="p-col p-col-align-end">4</div>
</div>
`}
</CodeHighlight>

                        <div className="p-grid vertical-container">
                            <div className="p-col p-col-align-start">
                                <div className="box">4</div>
                            </div>
                            <div className="p-col p-col-align-center">
                                <div className="box">4</div>
                            </div>
                            <div className="p-col p-col-align-end">
                                <div className="box">4</div>
                            </div>
                        </div>

                        <h5>Offset</h5>
                        <p>Offset classes allow defining a left margin on a column to avoid adding empty columns for spacing.</p>
<CodeHighlight>
{`
<div className="p-grid">
    <div className="p-col-6 p-offset-3">6</div>
</div>

<div className="p-grid">
    <div className="p-col-4">4</div>
    <div className="p-col-4 p-offset-4">4</div>
</div>
`}
</CodeHighlight>

                        <div className="p-grid">
                            <div className="p-col-6 p-offset-3">
                                <div className="box">6</div>
                            </div>
                        </div>

                        <div className="p-grid">
                            <div className="p-col-4">
                                <div className="box">4</div>
                            </div>
                            <div className="p-col-4 p-offset-4">
                                <div className="box">4</div>
                            </div>
                        </div>
                        <p>The list of offset classes varying within a range of 1 to 12.</p>
                        <div className="doc-tablewrapper">
                            <table className="doc-table">
                                <thead>
                                    <tr>
                                        <th>Prefix</th>
                                        <th>Devices</th>
                                        <th>Media Query</th>
                                        <th>Example</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>p-col-offset-*</td>
                                        <td>All devices</td>
                                        <td>All screens</td>
                                        <td>p-col-offset-6, p-col-offset-4</td>
                                    </tr>
                                    <tr>
                                        <td>p-sm-offset-*</td>
                                        <td>Small devices</td>
                                        <td>min-width: 576px</td>
                                        <td>p-sm-offset-6, p-sm-offset-4</td>
                                    </tr>
                                    <tr>
                                        <td>p-md-offset-*</td>
                                        <td>Medium sized devices such as tablets</td>
                                        <td>min-width: 768px</td>
                                        <td>p-md-offset-6, p-md-offset-4</td>
                                    </tr>
                                    <tr>
                                        <td>p-lg-offset-*</td>
                                        <td>Devices with large screen like desktops</td>
                                        <td>min-width: 992px</td>
                                        <td>p-lg-offset-6, p-lg-offset-4</td>
                                    </tr>
                                    <tr>
                                        <td>p-xl-offset-*</td>
                                        <td>Big screen monitors</td>
                                        <td>min-width: 1200px</td>
                                        <td>p-xl-offset-6, p-xl-offset-4</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h5>Nested</h5>
                        <p>Columns can be nested to create more complex layouts.</p>
<CodeHighlight>
{`
<div className="p-grid nested-grid">
    <div className="p-col-8">
        <div className="p-grid">
            <div className="p-col-6">
            6
            </div>
            <div className="p-col-6">
            6
            </div>
            <div className="p-col-12">
            12
            </div>
        </div>
    </div>
    <div className="p-col-4">
        4
    </div>
</div>
`}
</CodeHighlight>

                        <div className="p-grid nested-grid">
                            <div className="p-col-8">
                                <div className="p-grid">
                                    <div className="p-col-6">
                                        <div className="box">6</div>
                                    </div>
                                    <div className="p-col-6">
                                        <div className="box">6</div>
                                    </div>
                                    <div className="p-col-12">
                                        <div className="box">12</div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-col-4">
                                <div className="box box-stretched">4</div>
                            </div>
                        </div>

                        <h5>Gutter</h5>
                        <p>A .5rem padding is applied to each column along with negative margins on the container element, in case you'd like to remove these gutters, apply
					<i>p-nogutter</i> class to the container. Gutters can also be removed on an ndividual columns with the same class name.
				</p>
<CodeHighlight>
{`
<div className="p-grid p-nogutter">
    <div className="p-col">1</div>
    <div className="p-col p-nogutter">2</div>
    <div className="p-col">3</div>
</div>
`}
</CodeHighlight>

                        <h5>Customization</h5>
                        <p>PrimeFlex allows customization of breakpoints and gutters via SASS variables, visit the <a href="https://github.com/primefaces/primeflex">PrimeFlex</a> repository to get access to the primeflex.scss file to build your own customized Grid.</p>

                        <div className="doc-tablewrapper">
                            <table className="doc-table">
                                <thead>
                                    <tr>
                                        <th>Variable</th>
                                        <th>Default</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>$sm</td>
                                        <td>576px</td>
                                    </tr>
                                    <tr>
                                        <td>$md</td>
                                        <td>768</td>
                                    </tr>
                                    <tr>
                                        <td>$lg</td>
                                        <td>992</td>
                                    </tr>
                                    <tr>
                                        <td>$xl</td>
                                        <td>1200px</td>
                                    </tr>
                                    <tr>
                                        <td>$gutter</td>
                                        <td>.5em</td>
                                    </tr>
                                    <tr>
                                        <td>$fieldMargin</td>
                                        <td>1rem</td>
                                    </tr>
                                    <tr>
                                        <td>$fieldLabelMargin</td>
                                        <td>.5rem</td>
                                    </tr>
                                    <tr>
                                        <td>$helperTextMargin</td>
                                        <td>.25rem</td>
                                    </tr>
                                    <tr>
                                        <td>$spacer</td>
                                        <td>1rem</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </TabPanel>

                    <TabPanel header="Source">
<CodeHighlight lang="js">
{`
export class FlexGridDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            columns: [0, 1, 2, 3, 4, 5]
        };

        this.addColumn = this.addColumn.bind(this);
        this.removeColumn = this.removeColumn.bind(this);
    }

    addColumn() {
        this.setState({
            columns: [...this.state.columns, this.state.columns.length]
        });
    }

    removeColumn() {
        let cols = [...this.state.columns];
        cols.splice(-1, 1);
        this.setState({
            columns: cols
        });
    }

    render() {
        return (
            <div>
                <div className="flexgrid-demo">
                    <h5>Basic</h5>
                    <div className="p-grid">
                        <div className="p-col">
                            <div className="box">1</div>
                        </div>
                        <div className="p-col">
                            <div className="box">2</div>
                        </div>
                        <div className="p-col">
                            <div className="box">3</div>
                        </div>
                    </div>

                    <h5>Dynamic</h5>
                    <Button type="button" icon="pi pi-plus" title="Add Column" onClick={this.addColumn} disabled={this.state.columns.length === 20} className="p-mr-2" />
                    <Button type="button" icon="pi pi-minus" title="Remove Column" onClick={this.removeColumn} disabled={this.state.columns.length === 1} />

                    <div className="p-grid p-mt-2">
                        {
                            this.state.columns.map(col =>
                                <div key={col} className="p-col">
                                    <div className="box">{col}</div>
                                </div>
                            )
                        }
                    </div>

                    <h5>Reverse Direction</h5>
                    <div className="p-grid p-dir-rev">
                        <div className="p-col">
                            <div className="box">1</div>
                        </div>
                        <div className="p-col">
                            <div className="box">2</div>
                        </div>
                        <div className="p-col">
                            <div className="box">3</div>
                        </div>
                    </div>

                    <h5>Column Direction</h5>
                    <div className="p-grid p-dir-col">
                        <div className="p-col">
                            <div className="box">1</div>
                        </div>
                        <div className="p-col">
                            <div className="box">2</div>
                        </div>
                        <div className="p-col">
                            <div className="box">3</div>
                        </div>
                    </div>

                    <h5>Reverse Column Direction</h5>
                    <div className="p-grid p-dir-col-rev">
                        <div className="p-col">
                            <div className="box">1</div>
                        </div>
                        <div className="p-col">
                            <div className="box">2</div>
                        </div>
                        <div className="p-col">
                            <div className="box">3</div>
                        </div>
                    </div>

                    <h5>12 Column Grid</h5>
                    <div className="p-grid">
                        <div className="p-col-4">
                            <div className="box">4</div>
                        </div>
                        <div className="p-col">
                            <div className="box">1</div>
                        </div>
                        <div className="p-col">
                            <div className="box">1</div>
                        </div>
                        <div className="p-col">
                            <div className="box">1</div>
                        </div>
                        <div className="p-col">
                            <div className="box">1</div>
                        </div>
                        <div className="p-col">
                            <div className="box">1</div>
                        </div>
                        <div className="p-col">
                            <div className="box">1</div>
                        </div>
                        <div className="p-col">
                            <div className="box">1</div>
                        </div>
                        <div className="p-col">
                            <div className="box">1</div>
                        </div>
                    </div>

                    <div className="p-grid">
                        <div className="p-col-2">
                            <div className="box">2</div>
                        </div>
                        <div className="p-col-6">
                            <div className="box">6</div>
                        </div>
                        <div className="p-col-4">
                            <div className="box">4</div>
                        </div>
                    </div>

                    <div className="p-grid">
                        <div className="p-col-8">
                            <div className="box">8</div>
                        </div>
                        <div className="p-col-2">
                            <div className="box">2</div>
                        </div>
                        <div className="p-col-2">
                            <div className="box">2</div>
                        </div>
                    </div>

                    <h5>MultiLine</h5>
                    <div className="p-grid">
                        <div className="p-col-6">
                            <div className="box">6</div>
                        </div>
                        <div className="p-col-6">
                            <div className="box">6</div>
                        </div>
                        <div className="p-col-6">
                            <div className="box">6</div>
                        </div>
                        <div className="p-col-6">
                            <div className="box">6</div>
                        </div>
                    </div>

                    <h5>Fixed Width Column</h5>
                    <div className="p-grid">
                        <div className="p-col-fixed" style={{ width: '100px' }}>
                            <div className="box">100px</div>
                        </div>
                        <div className="p-col">
                            <div className="box">auto</div>
                        </div>
                    </div>

                    <h5>Responsive</h5>
                    <div className="p-grid">
                        <div className="p-col-12 p-md-6 p-lg-3">
                            <div className="box">p-col-12 p-md-6 p-lg-3</div>
                        </div>
                        <div className="p-col-12 p-md-6 p-lg-3">
                            <div className="box">p-col-12 p-md-6 p-lg-3</div>
                        </div>
                        <div className="p-col-12 p-md-6 p-lg-3">
                            <div className="box">p-col-12 p-md-6 p-lg-3</div>
                        </div>
                        <div className="p-col-12 p-md-6 p-lg-3">
                            <div className="box">p-col-12 p-md-6 p-lg-3</div>
                        </div>
                    </div>

                    <h5>Horizontal Alignment - Start</h5>
                    <div className="p-grid p-justify-start">
                        <div className="p-col-2">
                            <div className="box">2</div>
                        </div>
                        <div className="p-col-1">
                            <div className="box">1</div>
                        </div>
                        <div className="p-col-4">
                            <div className="box">4</div>
                        </div>
                    </div>

                    <h5>Horizontal Alignment - End</h5>
                    <div className="p-grid p-justify-end">
                        <div className="p-col-2">
                            <div className="box">2</div>
                        </div>
                        <div className="p-col-1">
                            <div className="box">1</div>
                        </div>
                        <div className="p-col-4">
                            <div className="box">4</div>
                        </div>
                    </div>

                    <h5>Horizontal Alignment - Center</h5>
                    <div className="p-grid p-justify-center">
                        <div className="p-col-2">
                            <div className="box">2</div>
                        </div>
                        <div className="p-col-1">
                            <div className="box">1</div>
                        </div>
                        <div className="p-col-4">
                            <div className="box">4</div>
                        </div>
                    </div>

                    <h5>Horizontal Alignment - Between</h5>
                    <div className="p-grid p-justify-between">
                        <div className="p-col-2">
                            <div className="box">2</div>
                        </div>
                        <div className="p-col-1">
                            <div className="box">1</div>
                        </div>
                        <div className="p-col-4">
                            <div className="box">4</div>
                        </div>
                    </div>

                    <h5>Horizontal Alignment - Around</h5>
                    <div className="p-grid p-justify-around">
                        <div className="p-col-2">
                            <div className="box">2</div>
                        </div>
                        <div className="p-col-1">
                            <div className="box">1</div>
                        </div>
                        <div className="p-col-4">
                            <div className="box">4</div>
                        </div>
                    </div>

                    <h5>Horizontal Alignment - Even</h5>
                    <div className="p-grid p-justify-even">
                        <div className="p-col-2">
                            <div className="box">2</div>
                        </div>
                        <div className="p-col-1">
                            <div className="box">1</div>
                        </div>
                        <div className="p-col-4">
                            <div className="box">4</div>
                        </div>
                    </div>

                    <h5>Vertical Alignment - Start</h5>
                    <div className="p-grid p-align-start vertical-container">
                        <div className="p-col">
                            <div className="box">4</div>
                        </div>
                        <div className="p-col">
                            <div className="box">4</div>
                        </div>
                        <div className="p-col">
                            <div className="box">4</div>
                        </div>
                    </div>

                    <h5>Vertical Alignment - End</h5>
                    <div className="p-grid p-align-end vertical-container">
                        <div className="p-col">
                            <div className="box">4</div>
                        </div>
                        <div className="p-col">
                            <div className="box">4</div>
                        </div>
                        <div className="p-col">
                            <div className="box">4</div>
                        </div>
                    </div>

                    <h5>Vertical Alignment - Center</h5>
                    <div className="p-grid p-align-center vertical-container">
                        <div className="p-col">
                            <div className="box">4</div>
                        </div>
                        <div className="p-col">
                            <div className="box">4</div>
                        </div>
                        <div className="p-col">
                            <div className="box">4</div>
                        </div>
                    </div>

                    <h5>Vertical Alignment - Stretch</h5>
                    <div className="p-grid p-align-stretch vertical-container">
                        <div className="p-col">
                            <div className="box box-stretched">4</div>
                        </div>
                        <div className="p-col">
                            <div className="box box-stretched">4</div>
                        </div>
                        <div className="p-col">
                            <div className="box box-stretched">4</div>
                        </div>
                    </div>

                    <h5>Vertical Alignment - Per Column</h5>
                    <div className="p-grid vertical-container">
                        <div className="p-col p-col-align-start">
                            <div className="box">4</div>
                        </div>
                        <div className="p-col p-col-align-center">
                            <div className="box">4</div>
                        </div>
                        <div className="p-col p-col-align-end">
                            <div className="box">4</div>
                        </div>
                    </div>

                    <h5>Offset</h5>
                    <div className="p-grid">
                        <div className="p-col-6 p-offset-3">
                            <div className="box">6</div>
                        </div>
                    </div>

                    <div className="p-grid">
                        <div className="p-col-4">
                            <div className="box">4</div>
                        </div>
                        <div className="p-col-4 p-offset-4">
                            <div className="box">4</div>
                        </div>
                    </div>

                    <h5>Nested</h5>
                    <div className="p-grid nested-grid">
                        <div className="p-col-8">
                            <div className="p-grid">
                                <div className="p-col-6">
                                    <div className="box">6</div>
                                </div>
                                <div className="p-col-6">
                                    <div className="box">6</div>
                                </div>
                                <div className="p-col-12">
                                    <div className="box">12</div>
                                </div>
                            </div>
                        </div>
                        <div className="p-col-4">
                            <div className="box box-stretched">4</div>
                        </div>
                    </div>

                    <h5>Panels</h5>
                    <div className="p-grid">
                        <div className="p-col">
                            <Panel header="Header">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </Panel>
                        </div>
                        <div className="p-col">
                            <Panel header="Header">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </Panel>
                        </div>
                        <div className="p-col">
                            <Panel header="Header">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </Panel>
                        </div>
                    </div>
                </div>

                <FlexGridDoc />
            </div>
        );
    }
`}
</CodeHighlight>

<CodeHighlight lang="scss">
{`
.flexgrid-demo {
    .box {
        background-color: var(--surface-e);
        text-align: center;
        padding-top: 1rem;
        padding-bottom: 1rem;
        border-radius: 4px;
        box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);
    }

    .box-stretched {
        height: 100%;
    }

    .vertical-container {
        margin: 0;
        height: 200px;
        background: var(--surface-d);
        border-radius: 4px;
    }

    .nested-grid .p-col-4 {
        padding-bottom: 1rem;
    }

    p {
        margin: 0;
    }
}
`}
</CodeHighlight>
                    </TabPanel>
                </TabView>
            </div>
        );
    }
}
