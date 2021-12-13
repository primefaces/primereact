import React, { Component } from 'react';
import { TriStateCheckbox } from '../../components/lib/tristatecheckbox/TriStateCheckbox';
import { TriStateCheckboxDoc } from '../../components/doc/tristatecheckbox';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';

export default class TriStateCheckboxDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            value: null
        };
    }

    render() {
        return (
            <div>
                <Head>
                    <title>React TriStateCheckbox Component</title>
                    <meta name="description" content="TriStateCheckbox is used to select either true, false or null as the value." />
                </Head>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>TriStateCheckbox</h1>
                        <p>TriStateCheckbox is used to select either "true", "false" or "null" as the value.</p>
                    </div>

                    <DocActions github="tristatecheckbox/index.js" />
                </div>

                <div className="content-section implementation">
                    <div className="card">
                        <div className="p-field-checkbox p-m-0">
                            <TriStateCheckbox value={this.state.value} onChange={(e) => this.setState({value: e.value})} />
                            <label>{String(this.state.value)}</label>
                        </div>
                    </div>
                </div>

                <TriStateCheckboxDoc />
            </div>
        );
    }
}
