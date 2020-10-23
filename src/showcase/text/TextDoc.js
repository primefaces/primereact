import React, { Component } from 'react';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { CodeHighlight } from '../codehighlight/CodeHighlight';

export class TextDoc extends Component {

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <div className="content-section documentation">
                <TabView>
                    <TabPanel header="Documentation">
                        <h5>Getting Started</h5>
                        <p>The text classes use the <i>p-text-{`{value}`}</i> syntax.</p>

                        <h5>Alignment</h5>
                        <p>Four options are available for alignment.</p>
                        <ul>
                            <li>left</li>
                            <li>center</li>
                            <li>right</li>
                            <li>justify</li>
                        </ul>
<CodeHighlight>
{`
<div className="p-text-left">Left</div>
<div className="p-text-center">Center</div>
<div className="p-text-right">Right</div>
<div className="p-text-justify">Justify</div>
`}
</CodeHighlight>

                        <h5>Wrap</h5>
                        <p>Text wrapping defines how the text would be displayed when it exceeds the size of its container.</p>
                        <ul>
                            <li>nowrap</li>
                            <li>wrap</li>
                            <li>truncate</li>
                        </ul>
<CodeHighlight>
{`
<div style={{width: '10rem'}}>Long text wraps and does not overlow.</div>
<div className="p-text-nowrap" style={{width: '10rem'}}>Long text does not wrap and overflows the parent.</div>
<div className="p-text-nowrap p-text-truncate" style={{width: '10rem'}}>Long text does not wrap and overflows the parent.</div>
`}
</CodeHighlight>

                        <h5>Transform</h5>
                        <p>Transform property changes the case of the text.</p>
                        <ul>
                            <li>lowercase</li>
                            <li>uppercase</li>
                            <li>capitalize</li>
                        </ul>
<CodeHighlight>
{`
<div className="p-text-lowercase">LOWERCASE</div>
<div className="p-text-uppercase">uppercase</div>
<div className="p-text-capitalize">capitalize</div>
`}
</CodeHighlight>

                        <h5>Style</h5>
                        <p>Text styling applies to font weight and style.</p>
                        <ul>
                            <li>bold</li>
                            <li>normal</li>
                            <li>light</li>
                            <li>italic</li>
                        </ul>
<CodeHighlight>
{`
<div className="p-text-bold">Bold</div>
<div className="p-text-normal">Normal</div>
<div className="p-text-light">Light</div>
<div className="p-text-italic">Italic</div>
`}
</CodeHighlight>

                        <h5>Dependencies</h5>
                        <p>PrimeFlex.</p>
                    </TabPanel>

                    <TabPanel header="Source">
<CodeHighlight>
{`
<div className="card">
    <h5>Alignment</h5>
    <div className="p-mb-3 p-text-left">Left</div>
    <div className="p-mb-3 p-text-center">Center</div>
    <div className="p-text-right">Right</div>

    <h5>Wrap</h5>
    <div className="p-mb-3 demo-container" style={{width: '10rem'}}>Long text wraps and does not overlow.</div>
    <div className="p-mb-3 demo-container p-text-nowrap" style={{width: '10rem'}}>Long text does not wrap and overflows the parent.</div>
    <div className="p-mb-3 demo-container p-text-nowrap p-text-truncate" style={{width: '10rem'}}>Long text does not wrap and overflows the parent.</div>

    <h5>Transform</h5>
    <div className="p-mb-3 p-text-lowercase">LOWERCASE</div>
    <div className="p-mb-3 p-text-uppercase">uppercase</div>
    <div className="p-text-capitalize">capitalize</div>

    <h5>Style</h5>
    <div className="p-mb-3 p-text-bold">Bold</div>
    <div className="p-mb-3 p-text-normal">Normal</div>
    <div className="p-mb-3 p-text-light">Light</div>
    <div className="p-mb-3 p-text-italic">Italic</div>
</div>
`}
</CodeHighlight>
                    </TabPanel>
                </TabView>
            </div>
        );
    }
}
