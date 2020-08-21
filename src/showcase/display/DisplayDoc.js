import React, { Component } from 'react';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { CodeHighlight } from '../codehighlight/CodeHighlight';

export class DisplayDoc extends Component {

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <div className="content-section documentation">
                <TabView>
                    <TabPanel header="Documentation">
                        <h5>Getting Started</h5>
                        <p>The display classes use the <i>p-d-{`{value}`}</i> format and <i>p-d-{`{breakpoint}`}-{`{value}`}</i> format for responsive design.</p>

                        <h5>Values</h5>
                        <p>Value field can be one of the following options.</p>
                        <ul>
                            <li>none</li>
                            <li>inline</li>
                            <li>inline-block</li>
                            <li>block</li>
                            <li>flex</li>
                            <li>inline-flex</li>
                        </ul>

                        <h5>Breakpoint</h5>
                        <p>Breakpoints define how the display property should be defined depending on the screen size. Design is mobile first so smaller values
                            can also apply to larger values e.g. md also applies to lg or xl if they are not explicitly defined.</p>
                        <ul>
                            <li><b>sm</b>: small screens e.g. phones</li>
                            <li><b>md</b>: medium screens e.g. tablets</li>
                            <li><b>lg</b>: large screens e.g. notebooks</li>
                            <li><b>xl</b>: larger screens .e.g monitors</li>
                        </ul>

                        <h5>Examples</h5>
<CodeHighlight>
{`
<div className="p-d-inline">Displayed as inline.</div>
<div className="p-d-flex">Displayed as a flexbox container.</div>
<div className="p-d-block p-d-lg-inline">Inline for larger screens and block for others.</div>
<div className="p-d-md-none">Visible on a Small Screen</div>
<div className="p-d-none p-d-md-inline-flex">Hidden on a Small Screen</div>
<div className="p-d-none p-print-block">Only visible when printed.</div>
<div className="p-d-block p-print-none">Not available for printing.</div>
`}
</CodeHighlight>

                        <h5>Customization</h5>
                        <p>A custom build with different values can be obtained from <a href="https://github.com/primefaces/primeflex">PrimeFlex</a> using the _variables.scss file.</p>

                        <h5>Dependencies</h5>
                        <p>PrimeFlex.</p>
                    </TabPanel>

                    <TabPanel header="Source">
<CodeHighlight>
{`
<div className="card">
    <h5>Inline</h5>
    <InputText className="p-mr-2 p-d-inline" />
    <InputText className="p-d-inline" />

    <h5>Block</h5>
    <InputText className="p-mb-2 p-d-block" />
    <InputText className="p-d-block" />

    <h5>Visible on a Small Screen</h5>
    <p>Resize to view.</p>
    <Button type="button" icon="pi pi-bars" className="p-button-rounded p-d-md-none" />

    <h5>Hidden on a Small Screen</h5>
    <p>Resize to hide.</p>
    <Button type="button" icon="pi pi-search" className="p-button-rounded p-button-success p-d-none p-d-md-inline-flex" />

    <h5>Visible to Print, Invisible for Screen</h5>
    <p className="p-d-none p-print-block">Only visible when printed.</p>

    <h5>Visible to Screen, Invisible for Print</h5>
    <p className="p-d-block p-print-none">Not available for printing.</p>
</div>
`}
</CodeHighlight>
                    </TabPanel>
                </TabView>
            </div>
        );
    }
}
