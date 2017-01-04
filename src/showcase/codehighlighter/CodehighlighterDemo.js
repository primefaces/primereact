import React, {Component} from 'react';
import {CodeHighlighter} from '../../components/codehighlighter/CodeHighlighter';

export class CodeHighlighterDemo extends Component {
    render() {
        
        return (
            <div>
                <div className="content-section">
                    <div className="feature-intro">
                        <h1>CodeHighlighter</h1>
                        <p>Chips is used to enter multiple values on an inputfield.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <CodeHighlighter className="language-css">
{`
.ui-datatable table {
    border-collapse:collapse;
    width: 100%;
    table-layout: fixed;
}

`}
                    </CodeHighlighter>

                    <CodeHighlighter className="language-markup">
{`
<div className="feature-intro">
    <h1>CodeHighlighter</h1>
    <p>Chips is used to enter multiple values on an inputfield.</p>
</div>

`}
                    </CodeHighlighter>
                </div>
            </div>
        );
    }
}