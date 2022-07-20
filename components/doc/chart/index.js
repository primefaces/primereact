import React from 'react';
import { CodeHighlight } from '../common/codehighlight';
import { DevelopmentSection } from '../common/developmentsection';

const ChartDoc = () => {

    return (
        <div className="content-section documentation" id="app-doc">
            <h5>Import via Module</h5>
<CodeHighlight lang="js">
{`
import { Chart } from 'primereact/chart';
`}
</CodeHighlight>

            <h5>Import via CDN</h5>
<CodeHighlight>
{`
<script src="https://unpkg.com/primereact/core/core.min.js"></script>
<script src="https://unpkg.com/primereact/chart/chart.min.js"></script>
`}
</CodeHighlight>

            <h5>Getting Started</h5>
            <p>Chart component is a wrapper around on <a href="https://www.chartjs.org/docs/3.3.2/">Chart.js 3.3.2+</a> so chart.js needs to be included in your project.
            For a complete documentation and samples please refer to the <a href="https://www.chartjs.org/">chart.js website</a>.</p>

<CodeHighlight lang="js">
{`
npm install chart.js
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
    plugins: {
        title: {
            display: true,
            text: 'My Title',
            font: {
                size: 16
            }
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
                            <td>object</td>
                            <td>null</td>
                            <td>Options to customize the chart.</td>
                        </tr>
                        <tr>
                            <td>plugins</td>
                            <td>any[]</td>
                            <td>null</td>
                            <td>Used to custom plugins of the chart.</td>
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

            <h5>Accessibility</h5>
            <DevelopmentSection>
                <p>Chart components internally use <i>canvas</i> element, refer to the <a>Chart.js accessibility</a> guide for more information. The canvas element can be customized
                with <i>canvasProps</i> property to define aria roles and properties, in addition any content inside the component is directly passed as a child of the canvas to be able to 
                provide fallback content like a table.</p>
<CodeHighlight>
{`
<Chart type="line" data={data} canvasProps={{'role': 'img', 'aria-label': 'Data'}} />

<Chart type="line" data={data}>
    <DataTable />
</Chart>
`}
</CodeHighlight>

            </DevelopmentSection>
        </div>
    )
}

export default ChartDoc;
