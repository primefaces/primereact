import React from 'react';
import ChartDoc from '../../components/doc/chart';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';

const ChartDemo = () => {

    return (
        <div>
            <Head>
                <title>React Chart</title>
            </Head>
            <div className="content-section introduction">
                <div>
                    <h1>Charts</h1>
                    <p>Chart components are based on <a style={{ color: 'black' }} href="http://www.chartjs.org/">Chart.js</a>, an open source HTML5 based charting library.</p>
                </div>
                <DocActions github="chart/index.js" />
            </div>

            <ChartDoc />
        </div>
    )
}

export default ChartDemo;
