import React, {Component} from 'react';
import { InputText } from '../../components/inputtext/InputText';
import { AppInlineHeader } from '../../AppInlineHeader';
import { KeyFilterDoc } from './KeyFilterDoc';

export class KeyFilterDemo extends Component {

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <AppInlineHeader changelogText="keyFilter" showInputStyle>
                        <h1>KeyFilter</h1>
                        <p>KeyFilter feature restricts user input based on a regular expression.</p>
                    </AppInlineHeader>
                </div>

                <div className="content-section implementation">
                    <div className="card">
                        <div className="p-grid p-fluid">
                            <div className="p-field p-col-12 p-md-3">
                                <label htmlFor="integer">Integers</label>
                                <InputText id="integer" keyfilter="int" />
                            </div>
                            <div className="p-field p-col-12 p-md-3">
                                <label htmlFor="numbers">Numbers</label>
                                <InputText id="numbers" keyfilter="num" />
                            </div>
                            <div className="p-field p-col-12 p-md-3">
                                <label htmlFor="money">Hex</label>
                                <InputText id="money" keyfilter="money" />
                            </div>
                            <div className="p-field p-col-12 p-md-3">
                            <label htmlFor="integer">Integers</label>
                                <InputText id="hex" keyfilter="hex" />
                            </div>
                            <div className="p-field p-col-12 p-md-3">
                                <label htmlFor="alpha">Alphabetic</label>
                                <InputText id="alpha" keyfilter="alpha"/>
                            </div>
                            <div className="p-field p-col-12 p-md-3">
                            <label htmlFor="alphanum">Alphanumberic</label>
                                <InputText id="alphanum" keyfilter="alphanum" />
                            </div>
                            <div className="p-field p-col-12 p-md-3">
                                <label htmlFor="block">Block {`< > * !`}</label>
                                <InputText id="block" keyfilter={/^[^<>*!]+$/}/>
                            </div>
                            <div className="p-field p-col-12 p-md-3">
                                <label htmlFor="spaceblock">Block space key</label>
                                <InputText id="spaceblock" keyfilter={/[^\s]/} />
                            </div>
                        </div>
                    </div>
                </div>

                <KeyFilterDoc />
            </div>
        )
    }
}
