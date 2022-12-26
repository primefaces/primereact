import { useState, useEffect } from 'react';
import { Chart } from '../../lib/chart/Chart';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function DoughnutChartDoc(props) {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');

        const data = {
            labels: ['A', 'B', 'C'],
            datasets: [
                {
                    data: [300, 50, 100],
                    backgroundColor: [documentStyle.getPropertyValue('--pink-500'), documentStyle.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--yellow-500')],
                    hoverBackgroundColor: [documentStyle.getPropertyValue('--ink-400'), documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--yellow-400')]
                }
            ]
        };

        setChartData(data);

        const options = {
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            }
        };

        setChartOptions(options);
    }, []);

    const code = {
        basic: `
<Chart type="doughnut" data={chartData} options={chartOptions} style={{ position: 'relative', width: '40%' }} />
        `,
        javascript: `
import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';

export default function DoughnutChartDoc() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');

        const data = {
            labels: ['A', 'B', 'C'],
            datasets: [
                {
                    data: [300, 50, 100],
                    backgroundColor: [documentStyle.getPropertyValue('--pink-500'), documentStyle.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--yellow-500')],
                    hoverBackgroundColor: [documentStyle.getPropertyValue('--ink-400'), documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--yellow-400')]
                }
            ]
        };

        setChartData(data);

        const options = {
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            }
        };

        setChartOptions(options);
    }, []);

    return (
        <Chart type="doughnut" data={chartData} options={chartOptions} style={{ position: 'relative', width: '40%' }} />
    )
}
        `,
        typescript: `
import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';

export default function DoughnutChartDoc() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');

        const data = {
            labels: ['A', 'B', 'C'],
            datasets: [
                {
                    data: [300, 50, 100],
                    backgroundColor: [documentStyle.getPropertyValue('--pink-500'), documentStyle.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--yellow-500')],
                    hoverBackgroundColor: [documentStyle.getPropertyValue('--ink-400'), documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--yellow-400')]
                }
            ]
        };

        setChartData(data);

        const options = {
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            }
        };

        setChartOptions(options);
    }, []);

    return (
        <Chart type="doughnut" data={chartData} options={chartOptions} style={{ position: 'relative', width: '40%' }} />
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>A doughnut chart is a variant of the pie chart, with a blank center allowing for additional information about the data as a whole to be included.</p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Chart type="doughnut" data={chartData} options={chartOptions} style={{ position: 'relative', width: '40%' }} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
