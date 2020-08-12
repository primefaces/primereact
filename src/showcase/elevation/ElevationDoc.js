import React, { Component } from 'react';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { CodeHighlight } from '../codehighlight/CodeHighlight';

export class ElevationDoc extends Component {

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <div className="content-section documentation">
                <TabView>
                    <TabPanel header="Documentation">
                        <h5>Getting Started</h5>
                        <p>Elevation is added to an element using the <i>.p-shadow-{`{level}`}</i> class.</p>
<CodeHighlight>
{`
<div className="p-shadow-1" />
`}
</CodeHighlight>

                        <h5>Levels</h5>
                        <p>There are 24 depths available varying from 1 to 24.</p>
<CodeHighlight>
{`
<div className="p-shadow-1" />
<div className="p-shadow-24" />
`}
</CodeHighlight>

                        <h5>Dependencies</h5>
                        <p>PrimeFlex.</p>
                    </TabPanel>

                    <TabPanel header="Source">
<CodeHighlight lang="js">
{`
export class ElevationDemo extends Component {

    render() {
        let cols = [];

        for (let i = 1; i < 25; i++) {
            let col = (
                <div key={i} className="p-col">
                    <div className={\`box p-shadow-\${i}\`}>
                        p-shadow-{i}
                    </div>
                </div>
            );

            cols.push(col);
        }

        return (
            <div className="p-grid">
                {cols}
            </div>
        );
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
