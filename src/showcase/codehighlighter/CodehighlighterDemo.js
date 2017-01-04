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
                    <h3 className="first">CSS</h3>
                    <CodeHighlighter className="language-css">
{`
.ui-datatable table {
    border-collapse:collapse;
    width: 100%;
    table-layout: fixed;
}

`}
                    </CodeHighlighter>

                    <h3>HTML</h3>
                    <CodeHighlighter className="language-markup">
{`
<div class="content-section">
    <div>
        <span class="feature-title">DataTable</span>
        <span>DataTable displays data in tabular format.</span>
    </div>
</div>

<div class="content-section implementation">
    <h3 class="first">Basic</h3>
    <p-dataTable [value]="cars">
        <p-column field="vin" header="Vin"></p-column>
        <p-column field="year" header="Year"></p-column>
        <p-column field="brand" header="Brand"></p-column>
        <p-column field="color" header="Color"></p-column>
    </p-dataTable>
    
    <h3>Dynamic Columns</h3>
    <p-dataTable [value]="cars">
        <p-column *ngFor="let col of cols" [field]="col.field" [header]="col.header"></p-column>
    </p-dataTable>
</div>

`}
                    </CodeHighlighter>

                    <h3>JavaScript</h3>
                    <CodeHighlighter className="language-javascript">
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
                    </CodeHighlighter>
                </div>
            </div>
        );
    }
}