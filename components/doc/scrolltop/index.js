import React, { memo } from 'react';
import Link from 'next/link';
import { TabView, TabPanel } from '../../lib/tabview/TabView';
import { useLiveEditorTabs } from '../common/liveeditor';
import { CodeHighlight } from '../common/codehighlight';
import { DevelopmentSection } from '../common/developmentsection';

const ScrollTopDoc = memo(() => {

    const sources = {
        'class': {
            tabName: 'Class Source',
            content: `
import React, { Component } from 'react';
import { ScrollTop } from 'primereact/scrolltop';
import { ScrollPanel } from 'primereact/scrollpanel';
import './ScrollTopDemo.css';

export class ScrollTopDemo extends Component {
    render() {
        return (
            <div>
                <div className="card">
                    <h5>Window</h5>
                    <p>Scroll down the page to display the ScrollTo component.</p>
                    <ScrollTop />

                    <h5>Element</h5>
                    <ScrollPanel style={{width: '250px', height: '200px'}}>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Vitae et leo duis ut diam.
                            Ultricies mi quis hendrerit dolor magna eget est lorem. Amet consectetur adipiscing elit ut.
                            Nam libero justo laoreet sit amet. Pharetra massa massa ultricies mi quis hendrerit dolor magna.
                            Est ultricies integer quis auctor elit sed vulputate. Consequat ac felis donec et. Tellus orci ac auctor augue mauris.
                            Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Tincidunt arcu non sodales neque sodales.
                            Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Sodales ut etiam sit amet nisl purus.
                            Cursus sit amet dictum sit amet. Tristique senectus et netus et malesuada fames ac turpis egestas.
                            Et tortor consequat id porta nibh venenatis cras sed. Diam maecenas ultricies mi eget mauris.
                            Eget egestas purus viverra accumsan in nisl nisi. Suscipit adipiscing bibendum est ultricies integer.
                            Mattis aliquam faucibus purus in massa tempor nec.
                        </p>
                        <ScrollTop target="parent" threshold={100} className="custom-scrolltop" icon="pi pi-arrow-up" />
                    </ScrollPanel>
                </div>

            </div>
        );
    }
}
`
        },
        'hooks': {
            tabName: 'Hooks Source',
            content: `
import React from 'react';
import { ScrollTop } from 'primereact/scrolltop';
import { ScrollPanel } from 'primereact/scrollpanel';
import './ScrollTopDemo.css';

export const ScrollTopDemo = () => {
    return (
        <div>
            <div className="card">
                <h5>Window</h5>
                <p>Scroll down the page to display the ScrollTo component.</p>
                <ScrollTop />

                <h5>Element</h5>
                <ScrollPanel style={{width: '250px', height: '200px'}}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Vitae et leo duis ut diam.
                        Ultricies mi quis hendrerit dolor magna eget est lorem. Amet consectetur adipiscing elit ut.
                        Nam libero justo laoreet sit amet. Pharetra massa massa ultricies mi quis hendrerit dolor magna.
                        Est ultricies integer quis auctor elit sed vulputate. Consequat ac felis donec et. Tellus orci ac auctor augue mauris.
                        Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Tincidunt arcu non sodales neque sodales.
                        Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Sodales ut etiam sit amet nisl purus.
                        Cursus sit amet dictum sit amet. Tristique senectus et netus et malesuada fames ac turpis egestas.
                        Et tortor consequat id porta nibh venenatis cras sed. Diam maecenas ultricies mi eget mauris.
                        Eget egestas purus viverra accumsan in nisl nisi. Suscipit adipiscing bibendum est ultricies integer.
                        Mattis aliquam faucibus purus in massa tempor nec.
                    </p>
                    <ScrollTop target="parent" threshold={100} className="custom-scrolltop" icon="pi pi-arrow-up" />
                </ScrollPanel>
            </div>

        </div>
    );
}
`
        },
        'ts': {
            tabName: 'TS Source',
            content: `
import React from 'react';
import { ScrollTop } from 'primereact/scrolltop';
import { ScrollPanel } from 'primereact/scrollpanel';
import './ScrollTopDemo.css';

export const ScrollTopDemo = () => {
    return (
        <div>
            <div className="card">
                <h5>Window</h5>
                <p>Scroll down the page to display the ScrollTo component.</p>
                <ScrollTop />

                <h5>Element</h5>
                <ScrollPanel style={{width: '250px', height: '200px'}}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Vitae et leo duis ut diam.
                        Ultricies mi quis hendrerit dolor magna eget est lorem. Amet consectetur adipiscing elit ut.
                        Nam libero justo laoreet sit amet. Pharetra massa massa ultricies mi quis hendrerit dolor magna.
                        Est ultricies integer quis auctor elit sed vulputate. Consequat ac felis donec et. Tellus orci ac auctor augue mauris.
                        Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Tincidunt arcu non sodales neque sodales.
                        Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Sodales ut etiam sit amet nisl purus.
                        Cursus sit amet dictum sit amet. Tristique senectus et netus et malesuada fames ac turpis egestas.
                        Et tortor consequat id porta nibh venenatis cras sed. Diam maecenas ultricies mi eget mauris.
                        Eget egestas purus viverra accumsan in nisl nisi. Suscipit adipiscing bibendum est ultricies integer.
                        Mattis aliquam faucibus purus in massa tempor nec.
                    </p>
                    <ScrollTop target="parent" threshold={100} className="custom-scrolltop" icon="pi pi-arrow-up" />
                </ScrollPanel>
            </div>

        </div>
    );
}
`
        },
        'browser': {
            tabName: 'Browser Source',
            imports: `
        <link rel="stylesheet" href="./ScrollTopDemo.css" />

        <script src="https://unpkg.com/primereact/core/core.min.js"></script>
        <script src="https://unpkg.com/primereact/scrolltop/scrolltop.min.js"></script>
        <script src="https://unpkg.com/primereact/scrollpanel/scrollpanel.min.js"></script>`,
            content: `
const { useState } = React;
const { ScrollTop } = primereact.scrolltop;
const { ScrollPanel } = primereact.scrollpanel;

const ScrollTopDemo = () => {
    return (
        <div>
            <div className="card">
                <h5>Window</h5>
                <p>Scroll down the page to display the ScrollTo component.</p>
                <ScrollTop />

                <h5>Element</h5>
                <ScrollPanel style={{width: '250px', height: '200px'}}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Vitae et leo duis ut diam.
                        Ultricies mi quis hendrerit dolor magna eget est lorem. Amet consectetur adipiscing elit ut.
                        Nam libero justo laoreet sit amet. Pharetra massa massa ultricies mi quis hendrerit dolor magna.
                        Est ultricies integer quis auctor elit sed vulputate. Consequat ac felis donec et. Tellus orci ac auctor augue mauris.
                        Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Tincidunt arcu non sodales neque sodales.
                        Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Sodales ut etiam sit amet nisl purus.
                        Cursus sit amet dictum sit amet. Tristique senectus et netus et malesuada fames ac turpis egestas.
                        Et tortor consequat id porta nibh venenatis cras sed. Diam maecenas ultricies mi eget mauris.
                        Eget egestas purus viverra accumsan in nisl nisi. Suscipit adipiscing bibendum est ultricies integer.
                        Mattis aliquam faucibus purus in massa tempor nec.
                    </p>
                    <ScrollTop target="parent" threshold={100} className="custom-scrolltop" icon="pi pi-arrow-up" />
                </ScrollPanel>
            </div>

        </div>
    );
}
                `
        }
    };

    const extFiles = {
        'demo/ScrollTopDemo.css': {
            content: `
.custom-scrolltop {
    width: 2rem;
    height: 2rem;
    border-radius: 4px;
    background-color: var(--primary-color) !important;
}
.custom-scrolltop:hover {
    background-color: var(--primary-color) !important;
}

.custom-scrolltop .p-scrolltop-icon {
    font-size: 1rem;
    color: var(--primary-color-text);
}
                `
        }
    }

    return (
        <div className="content-section documentation" id="app-doc">
            <TabView>
                <TabPanel header="Documentation">
                    <h5>Import via Module</h5>
<CodeHighlight lang="js">
{`
import { ScrollTop } from 'primereact/scrolltop';
`}
</CodeHighlight>

                    <h5>Import via CDN</h5>
<CodeHighlight>
{`
<script src="https://unpkg.com/primereact/core/core.min.js"></script>
<script src="https://unpkg.com/primereact/scrolltop/scrolltop.min.js"></script>
`}
</CodeHighlight>

                    <h5>Getting Started</h5>
                    <p>Without any configuration, ScrollTop listens window scroll.</p>
<CodeHighlight>
{`
<ScrollTop />
`}
</CodeHighlight>
                    <h5>Threshold</h5>
                    <p>When the vertical scroll position reaches a certain value, ScrollTop gets displayed. This value is
                        defined with the <i>threshold</i> property that defaults to 400.</p>
<CodeHighlight>
{`
<ScrollTop threshold={200} />
`}
</CodeHighlight>
                    <h5>Target Element</h5>
                    <p>ScrollTop can also be assigned to its parent element by setting <i>target</i> as "parent".</p>
<CodeHighlight>
{`
<div style={{height: '400px', overflow: 'auto'}}>
    Content that overflows to container
    <ScrollTop />
</div>
`}
</CodeHighlight>

                    <h5>Properties</h5>
                    <p>Any valid attribute is passed to the root element implicitly, extended properties are as follows;</p>
                    <div className="doc-tablewrapper">
                        <table className="doc-table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Type</th>
                                    <th>Default</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>target</td>
                                    <td>string</td>
                                    <td>window</td>
                                    <td>Target of the ScrollTop, valid values are "window" and "parent".</td>
                                </tr>
                                <tr>
                                    <td>threshold</td>
                                    <td>number</td>
                                    <td>400</td>
                                    <td>Defines the threshold value of the vertical scroll position of the target to toggle the visibility.</td>
                                </tr>
                                <tr>
                                    <td>icon</td>
                                    <td>string</td>
                                    <td>pi pi-chevron-up</td>
                                    <td>Icon to display.</td>
                                </tr>
                                <tr>
                                    <td>behavior</td>
                                    <td>string</td>
                                    <td>smooth</td>
                                    <td>Defines the scrolling behavi, "smooth" adds an animation and "auto" scrolls with a jump.</td>
                                </tr>
                                <tr>
                                    <td>transitionOptions</td>
                                    <td>object</td>
                                    <td>null</td>
                                    <td>The properties of <a href="https://reactcommunity.org/react-transition-group/css-transition" rel="noopener noreferrer" target="_blank">CSSTransition</a> can be customized, except for "nodeRef" and "in" properties.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h5>Events</h5>
                    <div className="doc-tablewrapper">
                        <table className="doc-table">
                            <thead>
                            <tr>
                                <th>Name</th>
                                <th>Parameters</th>
                                <th>Description</th>
                            </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>onShow</td>
                                    <td>-</td>
                                    <td>Callback to invoke when overlay becomes visible.</td>
                                </tr>
                                <tr>
                                    <td>onHide</td>
                                    <td>-</td>
                                    <td>Callback to invoke when overlay becomes hidden.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h5>Styling</h5>
                    <p>Following is the list of structural style classes, for theming classes visit <Link href="/theming">theming</Link> page.</p>
                    <div className="doc-tablewrapper">
                        <table className="doc-table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Element</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>p-scrolltop</td>
                                    <td>Container element.</td>
                                </tr>
                                <tr>
                                    <td>p-scrolltop-sticky</td>
                                    <td>Container element when attached to its parent.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h5>Accessibility</h5>
                <DevelopmentSection>
                    <h6>Screen Reader</h6>
                    <p>ScrollTop uses a button element with an <i>aria-label</i> that refers to the <i>aria.scrollTop</i> property of the <Link href="/locale">locale</Link> API by default, you may use
                    your own aria roles and attributes as any valid attribute is passed to the button element implicitly.</p>

                    <h6>Keyboard Support</h6>
                    <div className="doc-tablewrapper">
                        <table className="doc-table">
                            <thead>
                                <tr>
                                    <th>Key</th>
                                    <th>Function</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><i>enter</i></td>
                                    <td>Scrolls to top.</td>
                                </tr>
                                <tr>
                                    <td><i>space</i></td>
                                    <td>Scrolls to top.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </DevelopmentSection>

                    <h5>Dependencies</h5>
                    <p>None.</p>
                </TabPanel>

                {
                    useLiveEditorTabs({ name: 'ScrollTopDemo', sources: sources, extFiles: extFiles })
                }
            </TabView>
        </div>
    );
})

export default ScrollTopDoc;
