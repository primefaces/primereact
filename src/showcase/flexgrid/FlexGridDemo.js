import React, {Component} from 'react';
import {Button} from '../../components/button/Button';
import {Panel} from '../../components/panel/Panel';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';
import AppContentContext from '../../AppContentContext';

export class FlexGridDemo extends Component {

    constructor() {
        super();
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
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Flex Grid</h1>
                        <p>Flex Grid CSS is a lightweight flex based responsive layout utility optimized for mobile phones, tablets and desktops. Flex Grid CSS is not included
                            in PrimeReact as it is provided by <a href="https://github.com/primefaces/primeflex">PrimeFlex</a> , a shared grid library between PrimeFaces, PrimeNG and PrimeReact projects.</p>

                        <AppContentContext.Consumer>
                            { context => <button onClick={() => context.onChangelogBtnClick("flexGrid")} className="layout-changelog-button">{context.changelogText}</button> }
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation flexgrid-demo">
                    <h3 className="first">Basic</h3>
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

                    <h3>Dynamic</h3>
                    <Button type="button" icon="pi pi-plus" title="Add Column" onClick={this.addColumn} disabled={this.state.columns.length === 20} style={{marginRight: '.5em'}} />
                    <Button type="button" icon="pi pi-minus" title="Remove Column" onClick={this.removeColumn} disabled={this.state.columns.length === 1} />

                    <div className="p-grid" style={{marginTop: '.5em'}}>
                        {
                            this.state.columns.map(col =>
                                <div key={col} className="p-col">
                                    <div className="box">{col}</div>
                                </div>
                            )
                        }
                    </div>

                    <h3>Reverse Direction</h3>
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

                    <h3>Column Direction</h3>
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

                    <h3>Reverse Column Direction</h3>
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

                    <h3>12 Column Grid</h3>
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

                    <h3>MultiLine</h3>
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

                    <h3>Fixed Width Column</h3>
                    <div className="p-grid">
                        <div className="p-col-fixed" style={{width:'100px'}}>
                            <div className="box">100px</div>
                        </div>
                        <div className="p-col">
                            <div className="box">auto</div>
                        </div>
                    </div>

                    <h3>Responsive</h3>
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

                    <h3>Horizontal Alignment - Start</h3>
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

                    <h3>Horizontal Alignment - End</h3>
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

                    <h3>Horizontal Alignment - Center</h3>
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

                    <h3>Horizontal Alignment - Between</h3>
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

                    <h3>Horizontal Alignment - Around</h3>
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

                    <h3>Horizontal Alignment - Even</h3>
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

                    <h3>Vertical Alignment - Start</h3>
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

                    <h3>Vertical Alignment - End</h3>
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

                    <h3>Vertical Alignment - Center</h3>
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

                    <h3>Vertical Alignment - Stretch</h3>
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

                    <h3>Vertical Alignment - Per Column</h3>
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

                    <h3>Offset</h3>
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

                    <h3>Nested</h3>
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

                    <h3>Panel Integration</h3>
                    <div className="p-grid">
                        <div className="p-col">
                            <Panel header="Godfather">
                                The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.
                                His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.
                                Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,
                                kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.
                            </Panel>
                        </div>
                        <div className="p-col">
                            <Panel header="Godfather">
                                The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.
                                His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.
                                Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,
                                kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.
                            </Panel>
                        </div>
                        <div className="p-col">
                            <Panel header="Godfather">
                                The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.
                                His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.
                                Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,
                                kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.
                            </Panel>
                        </div>
                    </div>

                    <h3>Sample Layout</h3>
                    <div className="p-grid sample-layout">
                        <div className="p-col-12 p-md-2">
                            Menu
                        </div>
                        <div className="p-col-12 p-md-10 p-col-nogutter">
                            <div className="p-col-12 p-col-nogutter">
                                Top Bar
                            </div>
                            <div className="p-col-12">
                                <div className="p-grid">
                                    <div className="p-col-12 p-md-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet, orci nec
                                        dictum convallis, ligula mauris vestibulum turpis, nec varius tortor quam at diam. Nullam a viverra nibh.
                                        In tincidunt tempor lectus quis vulputate. Pellentesque nec dui aliquam, lobortis est in, lobortis ante</div>
                                    <div className="p-col-12 p-md-4">Maecenas vel nisi aliquet, vulputate tortor id, laoreet massa. Maecenas mattis
                                        tristique bibendum. Suspendisse vel mi dictum, vestibulum lacus quis, pulvinar quam. Proin vulputate, nibh
                                        at finibus varius, leo eros lacinia elit, nec blandit odio tellus a justo. Donec nec ex auctor, tristique
                                        nulla nec, rutrum sapien.</div>
                                    <div className="p-col-12 p-md-4">Proin efficitur in leo eget ornare. Nam vestibulum neque sed velit sagittis
                                        sodales. Sed scelerisque hendrerit magna a hendrerit. Cras tempor sem at justo pharetra convallis.
                                        Curabitur vel sodales purus. Vestibulum interdum facilisis nulla imperdiet suscipit. Quisque lectus felis,
                                        condimentum eget hendrerit sit amet.</div>

                                    <div className="p-col-6 p-md-3"><img alt="Galleria 1" src="showcase/resources/demo/images/galleria/galleria1.jpg" style={{width:'100%'}} /></div>
                                    <div className="p-col-6 p-md-3"><img alt="Galleria 2" src="showcase/resources/demo/images/galleria/galleria2.jpg" style={{width:'100%'}} /></div>
                                    <div className="p-col-6 p-md-3"><img alt="Galleria 3" src="showcase/resources/demo/images/galleria/galleria3.jpg" style={{width:'100%'}} /></div>
                                    <div className="p-col-6 p-md-3"><img alt="Galleria 4" src="showcase/resources/demo/images/galleria/galleria4.jpg" style={{width:'100%'}} /></div>

                                    <div className="p-col-12 p-md-6">Phasellus faucibus purus volutpat mauris lacinia sodales. Ut sit amet sapien
                                        facilisis, commodo dui non, fringilla tellus. Quisque tempus facilisis nisi sodales finibus. Pellentesque
                                        neque orci, ullamcorper vitae ligula quis, dignissim euismod augue.</div>
                                    <div className="p-col-12 p-md-6">Fusce ullamcorper congue massa, eget ullamcorper nunc lobortis egestas. Lorem
                                        ipsum dolor sit amet, consectetur adipiscing elit. Quisque ultrices dui eget dolor feugiat dapibus. Aliquam
                                        pretium leo et egestas luctus. Nunc facilisis gravida tellus.</div>
                                </div>
                            </div>
                        </div>
                        <div className="p-col-12">
                            Footer
                        </div>
                    </div>
                </div>

                <FlexGridDoc />
            </div>
        );
    }
}

export class FlexGridDoc extends Component {

    shouldComponentUpdate(){
        return false;
    }

    render() {
        return (
            <div className="content-section documentation flexgrid-demo">
                <TabView>
                    <TabPanel header="Documentation">

                    <h3>Getting Started</h3>
                    <p>FlexGrid is a CSS utility based on flexbox. For more information about Flex, visit <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/">A Complete Guide to Flexbox</a>. A basic grid is defined by giving
                    a container <i>p-grid</i> class and children the <i>p-col</i> class. Children of the grid will have the same width and scale according to the width of the parent.</p>
<CodeHighlight className="language-jsx">
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

                    <h3>Direction</h3>
                    <p>Default direction is <b>row</b> and <i>p-dir-*</i> class at the container defines the other possible directions which can be <b>row reverse</b>, <b>column</b> and <b>column reverse</b></p>
<CodeHighlight className="language-jsx">
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
                <h3>12 Column Grid</h3>
                <p>FlexGrid includes a 12 column based layout utility where width of a column is defined with the <i>p-col-&#123;number&#125;</i> style class. Columns with prefined widths can be used with columns with auto width (p-col) as well.</p>

                <p>In the first example below, first column covers the 4 units out of 12 and the rest of the columns share the remaining space whereas in the second example, all three columns have explicit units.</p>
<CodeHighlight className="language-jsx">
{`
<div className="p-grid">
    <div className="p-col-4">4</div>
    <div className="p-col">1 </div>
    <div className="p-col">1 </div>
    <div className="p-col">1 </div>
    <div className="p-col">1 </div>
    <div className="p-col">1 </div>
    <div className="p-col">1 </div>
    <div className="p-col">1 </div>
    <div className="p-col">1 </div>
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

                    <h3>MultiLine</h3>
                    <p>When the number of columns exceed 12, columns wrap to a new line.</p>
<CodeHighlight className="language-jsx">
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
                    <h3>Fixed Width Column</h3>
                    <p>A column can have a fixed width while siblings having auto width. Apply <i>p-col-fixed</i> class to fix a column width.</p>
<CodeHighlight className="language-jsx">
{`
<div className="p-grid">
    <div className="p-col-fixed" style={{width:'100px'}}>Fixed</div>
    <div className="p-col">Auto</div>
</div>

`}
</CodeHighlight>

<div className="p-grid">
    <div className="p-col-fixed" style={{width:'100px'}}>
        <div className="box">100px</div>
    </div>
    <div className="p-col">
        <div className="box">auto</div>
    </div>
</div>
                    <h3>Responsive</h3>
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
<CodeHighlight className="language-jsx">
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


                        <h3>Horizontal Alignment</h3>
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

<CodeHighlight className="language-jsx">
{`
<div className="p-grid p-justify-between">
    <div className="p-col-2">2 </div>
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

                        <h3>Vertical Alignment</h3>
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

<CodeHighlight className="language-jsx">
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

<CodeHighlight className="language-jsx">
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

                        <h3>Offset</h3>
                        <p>Offset classes allow defining a left margin on a column to avoid adding empty columns for spacing.</p>

<CodeHighlight className="language-jsx">
{`
<div className="p-grid">
    <div className="p-col-6 p-offset-3">6</div>
</div>

<div className="p-grid">
    <div className="p-col-4">4 </div>
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

                        <h3>Nested</h3>
                        <p>Columns can be nested to create more complex layouts.</p>
<CodeHighlight className="language-jsx">
{`
<div className="p-grid">
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

                        <h3>Gutter</h3>
                        <p>A .5 em padding is applied to each column along with negative margins on the container element, in case you'd like to remove these gutters, apply
                        <i>p-nogutter</i> class to the container. Gutters can also be removed on an ndividual columns with the same class name.
                        </p>

        <CodeHighlight className="language-jsx">
{`
<div className="p-grid p-nogutter">
    <div className="p-col">1</div>
    <div className="p-col p-nogutter">2</div>
    <div className="p-col">3</div>
</div>

`}
</CodeHighlight>

                        <h3>Customization</h3>
                        <p>PrimeFlex allows customization of breakpoints and gutters via SASS variables, visit the <a href="https://github.com/primefaces/primeflex">PrimeFlex</a> repository to get access to the primeflex.scss file to build your own customized Grid.</p>

            </TabPanel>

            <TabPanel header="Source">
                <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/grid" className="btn-viewsource" target="_blank" rel="noopener noreferrer">
                    <span>View on GitHub</span>
                </a>
<CodeHighlight className="language-javascript">
{`
import React, {Component} from 'react';
import {Button} from 'primereact/button';
import {Panel} from 'primereact/panel';

export class FlexGridDemo extends Component {

    constructor() {
        super();
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
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Flex Grid</h1>
                        <p>Flex Grid CSS is a lightweight flex based responsive layout utility optimized for mobile phones, tablets and desktops. Flex Grid CSS is not included
                            in PrimeNG as it is provided by <a href="https://github.com/primefaces/primeflex">PrimeFlex</a>, a shared grid library between PrimeFaces, PrimeNG and PrimeReact projects.</p>
                    </div>
                </div>

                <div className="content-section implementation flexgrid-demo">
                    <h3 className="first">Basic</h3>
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

                    <h3>Dynamic</h3>
                    <Button type="button" icon="pi pi-plus" title="Add Column" onClick={this.addColumn} disabled={this.state.columns.length === 20} style={{marginRight: '.5em'}} />
                    <Button type="button" icon="pi pi-minus" title="Remove Column" onClick={this.removeColumn} disabled={this.state.columns.length === 1} />

                    <div className="p-grid" style={{marginTop: '.5em'}}>
                        {
                            this.state.columns.map(col =>
                                <div key={col} className="p-col">
                                    <div className="box">{col}</div>
                                </div>
                            )
                        }
                    </div>

                    <h3>Reverse Direction</h3>
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

                    <h3>Column Direction</h3>
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

                    <h3>Reverse Column Direction</h3>
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

                    <h3>12 Column Grid</h3>
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

                    <h3>MultiLine</h3>
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

                    <h3>Fixed Width Column</h3>
                    <div className="p-grid">
                        <div className="p-col-fixed" style={{width:'100px'}}>
                            <div className="box">100px</div>
                        </div>
                        <div className="p-col">
                            <div className="box">auto</div>
                        </div>
                    </div>

                    <h3>Responsive</h3>
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

                    <h3>Horizontal Alignment - Start</h3>
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

                    <h3>Horizontal Alignment - End</h3>
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

                    <h3>Horizontal Alignment - Center</h3>
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

                    <h3>Horizontal Alignment - Between</h3>
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

                    <h3>Horizontal Alignment - Around</h3>
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

                    <h3>Horizontal Alignment - Even</h3>
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

                    <h3>Vertical Alignment - Start</h3>
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

                    <h3>Vertical Alignment - End</h3>
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

                    <h3>Vertical Alignment - Center</h3>
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

                    <h3>Vertical Alignment - Stretch</h3>
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

                    <h3>Vertical Alignment - Per Column</h3>
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

                    <h3>Offset</h3>
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

                    <h3>Nested</h3>
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

                    <h3>Panel Integration</h3>
                    <div className="p-grid">
                        <div className="p-col">
                            <Panel header="Godfather">
                                The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.
                                His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.
                                Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,
                                kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.
                            </Panel>
                        </div>
                        <div className="p-col">
                            <Panel header="Godfather">
                                The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.
                                His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.
                                Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,
                                kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.
                            </Panel>
                        </div>
                        <div className="p-col">
                            <Panel header="Godfather">
                                The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.
                                His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.
                                Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,
                                kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.
                            </Panel>
                        </div>
                    </div>

                    <h3>Sample Layout</h3>
                    <div className="p-grid sample-layout">
                        <div className="p-col-12 p-md-2">
                            Menu
                        </div>
                        <div className="p-col-12 p-md-10 p-col-nogutter">
                            <div className="p-col-12 p-col-nogutter">
                                Top Bar
                            </div>
                            <div className="p-col-12">
                                <div className="p-grid">
                                    <div className="p-col-12 p-md-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet, orci nec
                                        dictum convallis, ligula mauris vestibulum turpis, nec varius tortor quam at diam. Nullam a viverra nibh.
                                        In tincidunt tempor lectus quis vulputate. Pellentesque nec dui aliquam, lobortis est in, lobortis ante</div>
                                    <div className="p-col-12 p-md-4">Maecenas vel nisi aliquet, vulputate tortor id, laoreet massa. Maecenas mattis
                                        tristique bibendum. Suspendisse vel mi dictum, vestibulum lacus quis, pulvinar quam. Proin vulputate, nibh
                                        at finibus varius, leo eros lacinia elit, nec blandit odio tellus a justo. Donec nec ex auctor, tristique
                                        nulla nec, rutrum sapien.</div>
                                    <div className="p-col-12 p-md-4">Proin efficitur in leo eget ornare. Nam vestibulum neque sed velit sagittis
                                        sodales. Sed scelerisque hendrerit magna a hendrerit. Cras tempor sem at justo pharetra convallis.
                                        Curabitur vel sodales purus. Vestibulum interdum facilisis nulla imperdiet suscipit. Quisque lectus felis,
                                        condimentum eget hendrerit sit amet.</div>

                                    <div className="p-col-6 p-md-3"><img alt="Galleria 1" src="showcase/resources/demo/images/galleria/galleria1.jpg" style={{width:'100%'}} /></div>
                                    <div className="p-col-6 p-md-3"><img alt="Galleria 2" src="showcase/resources/demo/images/galleria/galleria2.jpg" style={{width:'100%'}} /></div>
                                    <div className="p-col-6 p-md-3"><img alt="Galleria 3" src="showcase/resources/demo/images/galleria/galleria3.jpg" style={{width:'100%'}} /></div>
                                    <div className="p-col-6 p-md-3"><img alt="Galleria 4" src="showcase/resources/demo/images/galleria/galleria4.jpg" style={{width:'100%'}} /></div>

                                    <div className="p-col-12 p-md-6">Phasellus faucibus purus volutpat mauris lacinia sodales. Ut sit amet sapien
                                        facilisis, commodo dui non, fringilla tellus. Quisque tempus facilisis nisi sodales finibus. Pellentesque
                                        neque orci, ullamcorper vitae ligula quis, dignissim euismod augue.</div>
                                    <div className="p-col-12 p-md-6">Fusce ullamcorper congue massa, eget ullamcorper nunc lobortis egestas. Lorem
                                        ipsum dolor sit amet, consectetur adipiscing elit. Quisque ultrices dui eget dolor feugiat dapibus. Aliquam
                                        pretium leo et egestas luctus. Nunc facilisis gravida tellus.</div>
                                </div>
                            </div>
                        </div>
                        <div className="p-col-12">
                            Footer
                        </div>
                    </div>
                </div>
            </div>
        );
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
