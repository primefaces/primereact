import React, { Component } from 'react';
import './ElevationDemo.scss';
import { ElevationDoc } from './ElevationDoc';

export class ElevationDemo extends Component {

    render() {
        let cols = [];

        for (let i = 1; i < 25; i++) {
            let col = (
                <div key={i} className="p-col">
                    <div className={`box p-shadow-${i}`}>
                        p-shadow-{i}
                    </div>
                </div>
            );

            cols.push(col);
        }

        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Elevation</h1>
                        <p>Elevation is an add-on utility of <a href="https://github.com/primefaces/primeflex">PrimeFlex</a> and used to specify the separation between surfaces and elements along the z-axis.</p>
                    </div>
                </div>

                <div className="content-section implementation elevation-demo">
                    <div className="p-grid">
                        {cols}
                    </div>
                </div>

                <ElevationDoc />
            </div>
        );
    }
}
