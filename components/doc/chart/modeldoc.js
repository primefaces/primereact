import { DocSectionText } from '../common/docsectiontext';
import { DocSubSection } from '../common/docsubsection';
import { CodeHighlight } from '../common/codehighlight';

export function ModelDoc(props) {
    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <DocSubSection id="charttypes" label="Chart Types">
                <p>
                    Chart type is defined using the <i>type</i> property. Currently there are 6 options available; "pie", "doughtnut", "line", "bar", "radar" and "polarArea".
                </p>
            </DocSubSection>
            <DocSubSection id="data" label="Data">
                <p>
                    Data of a chart is provided using a binding to the <i>data</i> property, each type has its own format of data. Here is an example of a line chart.
                </p>

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
            </DocSubSection>
            <DocSubSection id="options" label="Options">
                <p>
                    While a series can be customized per dataset, general chart options are defined with options property. Example below adds a title and customizes the legend position of the chart. For all available options refer to the charts.js
                    documentation.
                </p>

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
            </DocSubSection>
        </>
    );
}
