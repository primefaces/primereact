import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Chart } from '@/components/lib/chart/Chart';
import { useEffect, useState } from 'react';

export function DoughnutChartDoc(props) {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const data = {
            labels: ['A', 'B', 'C'],
            datasets: [
                {
                    data: [300, 50, 100],
                    backgroundColor: [documentStyle.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--yellow-500'), documentStyle.getPropertyValue('--green-500')],
                    hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--yellow-400'), documentStyle.getPropertyValue('--green-400')]
                }
            ]
        };
        const options = {
            cutout: '60%'
        };

        setChartData(data);
        setChartOptions(options);
    }, []);

    const code = {
        basic: `
<Chart type="doughnut" data={chartData} options={chartOptions} className="w-full md:w-30rem" />
        `,
        javascript: `
import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';

export default function DoughnutChartDemo() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const data = {
            labels: ['A', 'B', 'C'],
            datasets: [
                {
                    data: [300, 50, 100],
                    backgroundColor: [
                        documentStyle.getPropertyValue('--blue-500'), 
                        documentStyle.getPropertyValue('--yellow-500'), 
                        documentStyle.getPropertyValue('--green-500')
                    ],
                    hoverBackgroundColor: [
                        documentStyle.getPropertyValue('--blue-400'), 
                        documentStyle.getPropertyValue('--yellow-400'), 
                        documentStyle.getPropertyValue('--green-400')
                    ]
                }
            ]
        };
        const options = {
            cutout: '60%'
        };

        setChartData(data);
        setChartOptions(options);
    }, []);

    return (
        <div className="card flex justify-content-center">
            <Chart type="doughnut" data={chartData} options={chartOptions} className="w-full md:w-30rem" />
        </div>
    )
}
        `,
        typescript: `
import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';

export default function DoughnutChartDemo() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const data = {
            labels: ['A', 'B', 'C'],
            datasets: [
                {
                    data: [300, 50, 100],
                    backgroundColor: [
                        documentStyle.getPropertyValue('--blue-500'), 
                        documentStyle.getPropertyValue('--yellow-500'), 
                        documentStyle.getPropertyValue('--green-500')
                    ],
                    hoverBackgroundColor: [
                        documentStyle.getPropertyValue('--blue-400'), 
                        documentStyle.getPropertyValue('--yellow-400'), 
                        documentStyle.getPropertyValue('--green-400')
                    ]
                }
            ]
        };
        const options = {
            cutout: '60%'
        };

        setChartData(data);
        setChartOptions(options);
    }, []);

    return (
        <div className="card flex justify-content-center">
            <Chart type="doughnut" data={chartData} options={chartOptions} className="w-full md:w-30rem" />
        </div>
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
                <Chart type="doughnut" data={chartData} options={chartOptions} className="w-full md:w-30rem" />
            </div>
            <DocSectionCode code={code} dependencies={{ 'chart.js': '3.9.1' }} />
        </>
    );
}
