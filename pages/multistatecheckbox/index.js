import React, { Component } from 'react';
import { MultiStateCheckbox } from '../../components/lib/multistatecheckbox/MultiStateCheckbox';
import { MultiStateCheckboxDoc } from '../../components/doc/multistatecheckbox';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';

export default class MultiStateCheckboxDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            value: 'public'
        };

        this.options = [
            { value: 'public', icon: 'pi pi-globe' },
            { value: 'protected', icon: 'pi pi-lock-open' },
            { value: 'private', icon: 'pi pi-lock' }
        ];
    }

    render() {
        return (
            <div>
                <Head>
                    <title>React MultiStateCheckbox Component</title>
                    <meta name="description" content="MultiStateCheckbox is used to select a state from given multiple states." />
                </Head>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>MultiStateCheckbox</h1>
                        <p>MultiStateCheckbox is used to select a state from given multiple states.</p>
                    </div>

                    <DocActions github="multistatecheckbox/index.js" />
                </div>

                <div className="content-section implementation">
                    <div className="card">
                        <div className="p-field-checkbox p-m-0">
                            <MultiStateCheckbox value={this.state.value} options={this.options} optionValue="value" onChange={(e) => this.setState({ value: e.value })} />
                            <label>{this.state.value}</label>
                        </div>
                    </div>
                </div>

                <MultiStateCheckboxDoc />
            </div>
        );
    }
}
