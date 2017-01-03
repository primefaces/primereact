import React, {Component} from 'react';
import {ProgressBar} from '../../components/progressbar/ProgressBar';
import {Growl} from '../../components/growl/Growl';

export class ProgressBarDemo extends Component {

    constructor() {
        super();
        this.state = {value1: 0, value2: 50};
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            var val = this.state.value1;
            val += Math.floor(Math.random() * 10) + 1;
            if(val >= 100) {
                val = 100;
                this.setState({msgs: [{severity: 'info', summary: 'Success', detail: 'Process Completed'}]});
                clearInterval(this.interval);
            }
            this.setState({value1: val});
        }, 2000);
    }

    render() {
        return (
            <div>
                <div className="content-section">
                    <div className="feature-intro">
                        <h1>ProgressBar</h1>
                        <p>ProgressBar is a process status indicator</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <Growl value={this.state.msgs}/>

                    <h3>Dynamic</h3>
                    <ProgressBar value={this.state.value1}></ProgressBar>

                    <h3>Static</h3>
                    <ProgressBar value={this.state.value2}></ProgressBar>
                </div>
            </div>
        );
    }
}