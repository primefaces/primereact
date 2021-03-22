import React, { Component } from 'react';
import { Dialog } from './components/dialog/Dialog';
import { Button } from './components/button/Button';
import axios from 'axios';

export class AppChangelogDialog extends Component {

    constructor(props) {
        super(props);
        this.state = {
            changelog: null,
            totalVersion: 0,
            prevChangelog: null,
            currentChangelog: null,
            nextChangelog: null,
            filteredChangelog: null
        };

        this.onPrev = this.onPrev.bind(this);
        this.onNext = this.onNext.bind(this);
    }

    getChangelog() {
        axios.get('showcase/changelog/changelog.json', { headers: { 'Cache-Control': 'no-cache' } })
            .then(res => res.data)
            .then(data => this.setState({ changelog: data }));
    }

    onPrev() {
        let state = {
            filteredChangelog: this.state.changelog[this.state.prevChangelog.version][this.props.searchVal.toLowerCase()],
            prevChangelog: null,
            currentChangelog: this.state.prevChangelog,
            nextChangelog: this.state.currentChangelog
        };

        if (this.state.totalVersion > this.state.prevChangelog.index + 1) {
            let prevIndex = this.state.prevChangelog.index + 1;
            let prevVersion = Object.keys(this.state.changelog)[prevIndex];
            state['prevChangelog'] = {
                version: prevVersion,
                index: prevIndex
            }
        }

        this.setState(state);
    }

    onNext() {
        let state = {
            filteredChangelog: this.state.changelog[this.state.nextChangelog.version][this.props.searchVal.toLowerCase()],
            prevChangelog: this.state.currentChangelog,
            currentChangelog: this.state.nextChangelog,
            nextChangelog: null
        };

        if (this.state.nextChangelog.index > 0) {
            let nextIndex = this.state.nextChangelog.index - 1;
            let nextVersion = Object.keys(this.state.changelog)[nextIndex];
            state['nextChangelog'] = {
                version: nextVersion,
                index: nextIndex
            }
        }

        this.setState(state);
    }

    componentDidMount() {
        this.getChangelog();
    }

    componentDidUpdate(prevProps) {
        if (this.props.visible) {
            if (prevProps.searchVal !== this.props.searchVal) {
                const currentVersion = Object.keys(this.state.changelog)[0],
                    totalVersion = Object.keys(this.state.changelog).length;

                this.setState({
                    currentChangelog: { version: currentVersion, index: 0 },
                    prevChangelog: { version: Object.keys(this.state.changelog)[1], index: 1 },
                    nextChangelog: null,
                    filteredChangelog: this.state.changelog[currentVersion][this.props.searchVal.toLowerCase()],
                    totalVersion
                });
            }
        }
    }

    render() {
        return (
            <Dialog header={<span className="p-text-capitalize">{this.props.searchVal} changelog</span>} className="layout-changelog-dialog" visible={this.props.visible} style={{ width: '50vw' }} onHide={this.props.onHide}>
                {
                    this.state.currentChangelog && <div className="p-d-flex p-ai-center">
                        <span className="p-text-bold" style={{ fontSize: '1.1rem'}}>{this.state.currentChangelog.version}</span>
                        {this.state.currentChangelog.index === 0 && <span className="p-tag p-tag-rounded p-tag-info p-ml-2" style={{padding: '.14rem .5rem'}}>current</span>}
                        <a href="https://github.com/primefaces/primereact/blob/master/CHANGELOG.md" target="_blank" rel="noopener noreferrer" className="p-ml-auto">View Full Changelog</a>
                    </div>
                }
                <ul className="p-reset p-my-4">
                    {
                        this.state.filteredChangelog ?
                            this.state.filteredChangelog.map((item, index) => {
                                return (
                                    <li key={index} className="p-my-2">
                                        <span className="p-d-flex p-ai-center">
                                            <i className="pi pi-circle-on p-mr-2" style={{ fontSize: '.5rem' }}></i>
                                            {item.title}
                                            <a href={item.url} target="_blank" rel="noopener noreferrer" className="p-ml-auto">#{item.number}</a>
                                        </span>
                                    </li>
                                )
                            })
                            :
                            <li>No Change</li>
                    }
                </ul>
                <div className="p-d-flex p-ai-center p-jc-between p-mb-3 p-mt-2">
                    {this.state.prevChangelog && <Button type="button" label={this.state.prevChangelog.version} onClick={this.onPrev} className="p-button-text" icon="pi pi-chevron-left" />}
                    {this.state.nextChangelog && <Button type="button" label={this.state.nextChangelog.version} onClick={this.onNext} className="p-button-text" icon="pi pi-chevron-right" iconPos="right" />}
                </div>
            </Dialog>
        );
    }
}
