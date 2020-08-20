import React, {Component} from 'react';
import { ProgressSpinner } from '../../components/progressspinner/ProgressSpinner';
import { AppInlineHeader } from '../../AppInlineHeader';
import { ProgressSpinnerDoc } from './ProgressSpinnerDoc';

export class ProgressSpinnerDemo extends Component {

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <AppInlineHeader changelogText="progressSpinner">
                        <h1>ProgressSpinner</h1>
                        <p>ProgressSpinner is a process status indicator.</p>
                    </AppInlineHeader>
                </div>

                <div className="content-section implementation">
                    <div className="card">
                        <h5>Basic</h5>
                        <ProgressSpinner />

                        <h5>Custom</h5>
                        <ProgressSpinner style={{width: '50px', height: '50px'}} strokeWidth="8" fill="var(--surface-b)" animationDuration=".5s"/>
                    </div>
                </div>

                <ProgressSpinnerDoc />
            </div>
        );
    }
}
