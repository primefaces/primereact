import React, { Component } from 'react';
import { CodeHighlight } from '../codehighlight/CodeHighlight';

export class ChartDoc extends Component {

    shouldComponentUpdate(){
        return false;
    }

    render() {
        return (
            <div className="content-section documentation">
                <h5>Import</h5>
<CodeHighlight lang="js">
{`
import { Chart } from 'primereact/chart';
`}
</CodeHighlight>

                <h5>Chart Types</h5>
                <p>Chart type is defined using the <i>type</i> property. Currently there are 6 options available; "pie", "doughtnut", "line", "bar", "radar" and "polarArea".</p>

                <h5>Data</h5>
                <p>Data of a chart is provided using a binding to the <i>data</i> property, each type has its own format of data. Here is an example of a line chart.</p>

<CodeHighlight>
{`
<Chart type="line" data={data} />
`}
</CodeHighlight>

<CodeHighlight lang="js">
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

<h5>Options</h5>
<p>While a series can be customized per dataset, general chart options are defined with options property.
    Example below adds a title and customizes the legend position of the chart. For all available options refer to the charts.js documentation.</p>

<CodeHighlight>
{`
<Chart type="line" data={data} options={options} />
`}
</CodeHighlight>

<CodeHighlight lang="js">
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

                <h5>Methods</h5>
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
