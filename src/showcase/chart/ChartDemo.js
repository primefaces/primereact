import React, { Component } from 'react';
import { AppInlineHeader } from '../../AppInlineHeader';
import { ChartDoc } from './ChartDoc';

export class ChartDemo extends Component {

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <AppInlineHeader changelogText="chart">
                        <h1>Charts</h1>
                        <p>Chart components are based on <a style={{color:'black'}} href="http://www.chartjs.org/">Charts.js</a>, an open source HTML5 based charting library.</p>
                    </AppInlineHeader>
                </div>

                <ChartDoc />
            </div>
        )
    }
}
