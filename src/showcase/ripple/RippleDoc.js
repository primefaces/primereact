import React, { Component } from 'react';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { CodeHighlight } from '../codehighlight/CodeHighlight';

export class RippleDoc extends Component {

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <div className="content-section documentation">
                <TabView>
                    <TabPanel header="Documentation">

                    </TabPanel>

                    <TabPanel header="Source">
<CodeHighlight lang="js">
{`
import React, { Component } from 'react';
import { Ripple } from 'primereact/ripple';
import './RippleDemo.scss';

export class RippleDemo extends Component {

    render() {
        return (
            <div className="ripple-demo">
                <div className="card-container p-d-flex">
                    <div className="card primary-box p-ripple">
                        Default
                        <Ripple />
                    </div>
                    <div className="card styled-box-green p-ripple">
                        Green
                        <Ripple />
                    </div>
                    <div className="card styled-box-orange p-ripple">
                        Orange
                        <Ripple />
                    </div>
                    <div className="card styled-box-purple p-ripple">
                        Purple
                        <Ripple />
                    </div>
                </div>
            </div>
        );
    }
}
`}
</CodeHighlight>

<CodeHighlight lang="scss">
{`
.ripple-demo {
    .card-container {
        .card {
            width: 75px;
            height: 75px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 1rem;
            user-select: none;
            padding: 0;

            &.primary-box {
                background-color: var(--primary-color);
                padding: 0;
                color: var(--primary-color-text);
            }

            &.styled-box-green {
                .p-ink {
                    background: rgba(#4baf50, 0.3);
                }
            }

            &.styled-box-orange {
                .p-ink {
                    background: rgba(#ffc106, 0.3);
                }
            }

            &.styled-box-purple {
                .p-ink {
                    background: rgba(#9c27b0, 0.3);
                }
            }

            &:last-child {
                margin-right: 0;
            }
        }
    }
}
`}
</CodeHighlight>
                    </TabPanel>
                </TabView>
            </div>
        );
    }
}
