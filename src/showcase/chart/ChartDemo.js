import React, {Component} from 'react';
import {CodeHighlight} from '../codehighlight/CodeHighlight';
import AppContentContext from '../../AppContentContext';

export class ChartDemo extends Component {

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Charts</h1>
                        <p>Chart components are based on <a style={{color:'black'}} href="http://www.chartjs.org/">Charts.js</a>, an open source HTML5 based charting library.</p>

                        <AppContentContext.Consumer>
                            { context => <button onClick={() => context.onChangelogBtnClick("chart")} className="layout-changelog-button">{context.changelogText}</button> }
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <ChartDoc />
            </div>
        )
    }
}

class ChartDoc extends Component {

    shouldComponentUpdate(){
        return false;
    }

    render() {
        return (
            <div className="content-section documentation">
                <h3>Import</h3>
<CodeHighlight className="language-javascript">
{`
import {Chart} from 'primereact/chart';

`}
</CodeHighlight>

                <h3>Chart Types</h3>
                <p>Chart type is defined using the <i>type</i> property. Currently there are 6 options available; "pie", "doughtnut", "line", "bar", "radar" and "polarArea".</p>

                <h3>Data</h3>
                <p>Data of a chart is provided using a binding to the <i>data</i> property, each type has its own format of data. Here is an example of a line chart.</p>

<CodeHighlight className="language-jsx">
{`
<Chart type="line" data={data} />

`}
</CodeHighlight>

<CodeHighlight className="language-jsx">
{`
const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'First Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: '#4bc0c0'
        },
        {
            label: 'Second Dataset',
            data: [28, 48, 40, 19, 86, 27, 90],
            fill: false,
            borderColor: '#565656'
        }
    ]
};

`}
</CodeHighlight>

<h3>Options</h3>
<p>While a series can be customized per dataset, general chart options are defined with options property.
    Example below adds a title and customizes the legend position of the chart. For all available options refer to the charts.js documentation.</p>

    <CodeHighlight className="language-jsx">
{`
<Chart type="line" data={data} options={options} />

`}
</CodeHighlight>

<CodeHighlight className="language-javascript">
{`
const options = {
        title: {
            display: true,
            text: 'My Title',
            fontSize: 16
        },
        legend: {
            position: 'bottom'
        }
    };
}

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
                                <td>Unique identifier of the element.</td>
                            </tr>
                            <tr>
                                <td>type</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Type of the chart.</td>
                            </tr>
                            <tr>
                                <td>data</td>
                                <td>any</td>
                                <td>null</td>
                                <td>Data to display.</td>
                            </tr>
                            <tr>
                                <td>options</td>
                                <td>any</td>
                                <td>null</td>
                                <td>Options to customize the chart.</td>
                            </tr>
                            <tr>
                                <td>width</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Width of the chart in non-responsive mode.</td>
                            </tr>
                            <tr>
                                <td>height</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Height of the chart in non-responsive mode.</td>
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
                        </tbody>
                    </table>
                </div>

                <h3>Methods</h3>
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
                                <td>refresh</td>
                                <td>-</td>
                                <td>Redraws the graph.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
