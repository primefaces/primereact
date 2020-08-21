import React, { Component } from 'react';
import { Button } from '../../components/button/Button';
import { Panel } from '../../components/panel/Panel';
import { AppInlineHeader } from '../../AppInlineHeader';
import { FlexGridDoc } from './FlexGridDoc';
import './FlexGridDemo.scss';

export class FlexGridDemo extends Component {

    constructor(props) {
        super(props);
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
                    <AppInlineHeader changelogText="flexGrid">
                        <h1>Grid System</h1>
                        <p>Grid is a lightweight flex based responsive layout utility optimized for mobile phones, tablets and desktops.</p>
                    </AppInlineHeader>
                </div>

                <div className="content-section implementation flexgrid-demo">
                    <h5>Basic</h5>
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

                    <h5>Dynamic</h5>
                    <Button type="button" icon="pi pi-plus" title="Add Column" onClick={this.addColumn} disabled={this.state.columns.length === 20} className="p-mr-2" />
                    <Button type="button" icon="pi pi-minus" title="Remove Column" onClick={this.removeColumn} disabled={this.state.columns.length === 1} />

                    <div className="p-grid p-mt-2">
                        {
                            this.state.columns.map(col =>
                                <div key={col} className="p-col">
                                    <div className="box">{col}</div>
                                </div>
                            )
                        }
                    </div>

                    <h5>Reverse Direction</h5>
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

                    <h5>Column Direction</h5>
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

                    <h5>Reverse Column Direction</h5>
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

                    <h5>12 Column Grid</h5>
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

                    <h5>MultiLine</h5>
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

                    <h5>Fixed Width Column</h5>
                    <div className="p-grid">
                        <div className="p-col-fixed" style={{ width: '100px' }}>
                            <div className="box">100px</div>
                        </div>
                        <div className="p-col">
                            <div className="box">auto</div>
                        </div>
                    </div>

                    <h5>Responsive</h5>
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

                    <h5>Horizontal Alignment - Start</h5>
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

                    <h5>Horizontal Alignment - End</h5>
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

                    <h5>Horizontal Alignment - Center</h5>
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

                    <h5>Horizontal Alignment - Between</h5>
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

                    <h5>Horizontal Alignment - Around</h5>
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

                    <h5>Horizontal Alignment - Even</h5>
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

                    <h5>Vertical Alignment - Start</h5>
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

                    <h5>Vertical Alignment - End</h5>
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

                    <h5>Vertical Alignment - Center</h5>
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

                    <h5>Vertical Alignment - Stretch</h5>
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

                    <h5>Vertical Alignment - Per Column</h5>
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

                    <h5>Offset</h5>
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

                    <h5>Nested</h5>
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

                    <h5>Panels</h5>
                    <div className="p-grid">
                        <div className="p-col">
                            <Panel header="Header">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </Panel>
                        </div>
                        <div className="p-col">
                            <Panel header="Header">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </Panel>
                        </div>
                        <div className="p-col">
                            <Panel header="Header">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </Panel>
                        </div>
                    </div>
                </div>

                <FlexGridDoc />
            </div>
        );
    }
}
