import React, { Component } from 'react';
import {CodeHighlight} from '../../components/codehighlight/CodeHighlight';

export class SetupPage extends Component {

    render() {
        return (
            <div>
                <div className="content-section">
                    <div className="feature-intro">
                        <h1>Setup</h1>
                        <p>PrimeReact is a rich set of open source native components for React.</p>
                    </div>
                </div>

                <div className="content-section source">
                <h3 style={{margin:'0'}}>Download</h3>
                <p>PrimeReact is available at npm, if you have an existing application run the following command to download it to your project.</p>
<CodeHighlight className="language-javascript">
{`
npm install primereact --save

`}
</CodeHighlight>


                <h3>Import</h3>
                <p>UI components are configured as modules, once PrimeNG is downloaded and configured, modules and apis can be imported from 'primeng/primeng' shorthand in your application code.</p>
<CodeHighlight className="language-javascript">
{`
import {Accordion,AccordionTab} from 'primereact';

`}
</CodeHighlight>

                <p>Importing from primeng/primeng will load all other components as well, to only import a specific component pattern would result in a smaller bundle size.</p>
<CodeHighlight className="language-javascript">
{`
//import {ComponentName} from 'primereact/components/componentname/componentname';
import {Accordion,AccordionTab} from 'primereact/components/accordion/Accordion';

`}
</CodeHighlight>
                
                <h3>Dependencies</h3>
                <p>Majority of PrimeReact components (95%) are native and there are some exceptions having 3rd party dependencies. In addition, components require font-awesome for icons and 
                    <a href="https://www.npmjs.com/package/classnames">classNames</a> package to manage style classes.</p>

                <p>The css dependencies are as follows, note that you may change the theme with another one of your choice.</p>
<CodeHighlight className="language-javascript">
{`
primeng/resources/themes/omega/theme.css
primeng/resources/primeng.min.css

`}
</CodeHighlight>

               <p>If you are using webpack with a css loader you may also import them to your main application component.</p>
<CodeHighlight className="language-javascript">
{`
import 'primereact/resources/primeng.min.css';
import 'primereact/resources/themes/omega/theme.css';
import 'font-awesome/css/font-awesome.css';

`}
</CodeHighlight>

                <p>Here is the list of components with 3rd party dependencies.</p>

                <div className="doc-tablewrapper">
                    <table className="doc-table">
                        <thead>
                            <tr>
                                <th>Component</th>
                                <th>Dependency</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Schedule</td>
                                <td>FullCalendar, jQuery and Moment.js</td>
                            </tr>
                            <tr>
                                <td>Charts</td>
                                <td>Charts.js 2.1.x</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
                <h3>Quickstart</h3>
                <p>An example application based on create-react-app is available at <a href="https://github.com/primefaces/primereact-quickstart">github</a>.</p>
                </div>            
            </div>
        );
    }
}