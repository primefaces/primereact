import React, {Component} from 'react';
import {Codehighlighter} from '../../components/codehighlighter/Codehighlighter';

export class CodehighlighterDemo extends Component {
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
                    <Codehighlighter className="language-css">
                        .ui-datatable table &#123;
                            border-collapse:collapse;
                            width: 100%;
                            table-layout: fixed;
                        &#125;
                    </Codehighlighter>

                    <Codehighlighter className="language-markup">
                        &lt;div id="pm" style="width:300px"&gt;
                        &lt;div&gt;
                        &lt;div&gt;&lt;a data-icon="fa-file-o"&gt;File&lt;/a&gt;&lt;/div&gt;
                        &lt;div&gt;
                            &lt;ul&gt;
                                &lt;li&gt;&lt;a data-icon="fa-plus"&gt;New&lt;/a&gt;
                                    &lt;ul&gt;
                                        &lt;li&gt;&lt;a&gt;Project&lt;/a&gt;&lt;/li&gt;
                                        &lt;li&gt;&lt;a&gt;Other&lt;/a&gt;&lt;/li&gt;
                                    &lt;/ul&gt;
                                &lt;/li&gt;
                                &lt;li&gt;&lt;a&gt;Open&lt;/a&gt;&lt;/li&gt;
                                &lt;li&gt;&lt;a&gt;Quit&lt;/a&gt;&lt;/li&gt;
                            &lt;/ul&gt;
                        &lt;/div&gt;
                        &lt;/div&gt;
                        &lt;/div&gt;
                    </Codehighlighter>
                </div>
            </div>
        );
    }
}