import React, {Component} from 'react';
import {CodeHighlight} from '../../components/codehighlight/CodeHighlight';
import {TabView,TabPanel} from '../../components/tabview/TabView';

export class CodeHighlightDemo extends Component {
    render() {
        
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>CodeHighlight</h1>
                        <p>CodeHighlight is used for highlighting code blocks using Highlight.js</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3 className="first">CSS</h3>
                    <CodeHighlight className="css">
{`
.ui-datatable table {
    border-collapse:collapse;
    width: 100%;
    table-layout: fixed;
}

`}
                    </CodeHighlight>

                    <h3>HTML</h3>
                    <CodeHighlight className="html">
{`
<div className="content-section">
    <div className="feature-intro">
        <h1>CodeHighlight</h1>
        <p>CodeHighlight is used for highlighting code blocks using PrismJS</p>
    </div>
</div>

`}
                    </CodeHighlight>

                    <h3>JavaScript</h3>
                    <CodeHighlight className="javascript">
{`
resolveFieldData(data, field) {
    if(data && field) {
        if(field.indexOf('.') === -1) {
            return data[field];
        }
        else {
            let fields = field.split('.');
            let value = data;
            for(var i = 0, len = fields.length; i < len; ++i) {
                value = value[fields[i]];
            }
            return value;
        }
    }
    else {
        return null;
    }
}

`}
                    </CodeHighlight>
                </div>
                <CodeHighlightDoc></CodeHighlightDoc>
            </div>
        );
    }
}

export class CodeHighlightDoc extends Component {
    
    render() {
        return (
            <div className="content-section source">
                <TabView>
                    <TabPanel header="Documentation">
                        <h3>Import</h3>
<CodeHighlight className="javascript">
{`
import {CodeHighlight} from 'primereact/components/codehighlight/CodeHighlight';

`}
</CodeHighlight>

            <h3>Getting Started</h3>
            <p>CodeHighlighter is applied CodeHighlight element.
               The CodeHiglight element should have a className specify the
               language to highlight. See Highlightjs docs for the list of available languages.
               An example block with css code would be as follows.</p>
<CodeHighlight className="css">
{`
.ui-datatable table {
    border-collapse:collapse;
    width: 100%;
    table-layout: fixed;
}

`}
</CodeHighlight>
            <div className="doc-tablewrapper">
                <h3>Dependencies</h3>
                <p>None.</p>
            </div>
            
            </TabPanel>
                </TabView>
            </div>
        );
    }
}