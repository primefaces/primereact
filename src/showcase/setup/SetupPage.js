import React, { Component } from 'react';
import {CodeHighlight} from '../codehighlight/CodeHighlight';

export class SetupPage extends Component {

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Setup</h1>
                        <p>PrimeReact is a rich set of open source native components for React.</p>
                    </div>
                </div>

                <div className="content-section source">
                    <h3 style={{margin:'0'}}>Download</h3>
                    <p>PrimeReact is available at npm, if you have an existing application run the following commands to download PrimeReact and PrimeIcons to your project.</p>
<CodeHighlight className="language-javascript">
{`
npm install primereact --save
npm install primeicons --save

`}
</CodeHighlight>


                <h3>Import</h3>
                <p>Path of each component is available at the "import" section of a component documentation.</p>

<CodeHighlight className="language-javascript">
{`
//import {ComponentName} from 'primereact/{componentname}';
import {Dialog} from 'primereact/dialog';
import {Accordion,AccordionTab} from 'primereact/accordion';

`}
</CodeHighlight>
                
                    <h3>Dependencies</h3>
                    <p>Majority of PrimeReact components (95%) are native and there are some exceptions having 3rd party dependencies such as Google Maps for GMap.</p>
                    <p>In addition, components require PrimeIcons library for icons, <a href="https://www.npmjs.com/package/classnames">classNames</a> package to manage style classes and 
                        <a href="react transition group">react-transition-group</a> for animations.</p>

<CodeHighlight className="json">
{`
dependencies: {
    "react": "^16.0.0",
    "react-dom": "^16.0.0",
    "react-transition-group": "^2.2.1",
    "classnames": "^2.2.5",
    "primeicons": "^1.0.0-beta.9"
}

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
                                    <td>Charts</td>
                                    <td>Charts.js 2.1.x</td>
                                </tr>
                                <tr>
                                    <td>GMap</td>
                                    <td>Google Maps</td>
                                </tr>
                                <tr>
                                    <td>Editor</td>
                                    <td>Quill.js</td>
                                </tr>
                                <tr>
                                    <td>Schedule *</td>
                                    <td>FullCalendar 4.0 Alpha and Moment</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    
                    <p>* Schedule will not depend on jQuery in PrimeReact 2.0.0.</p>
                        
                    <h3>Styles</h3>
                    <p>The css dependencies are as follows, note that you may change the theme with another one of your choice.</p>
                    
<CodeHighlight className="language-javascript">
{`
primereact/resources/themes/omega/theme.css
primereact/resources/primereact.min.css
primeicons/primeicons.css

`}
</CodeHighlight>

                    <p>primereact.min.css is a bundle that contains styles of all components, if you require a style of a specific component import the css from the folder of the component along with the Common.css.</p>
<CodeHighlight className="language-javascript">
{`
primereact/resources/themes/omega/theme.css
primereact/components/common/Common.css
primereact/components/autocomplete/AutoComplete.css

`}
</CodeHighlight>

                    <p>If you are using a bundler such as webpack with a css loader you may also import them to your main application component, an example from create-react-app would be.</p>
<CodeHighlight className="language-javascript">
{`
import 'primereact/resources/themes/omega/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

`}
</CodeHighlight>

                    <h3>Quickstart</h3>
                    <p>An example application based on create-react-app is available at <a href="https://github.com/primefaces/primereact-quickstart">github</a>.</p>
                    
                    <h3>Typescript</h3>
                    <p>Typescript is fully supported as type definition files are provided in the npm package of PrimeReact. A sample typescript-primereact application 
                    is available as well at <a href="https://github.com/primefaces/primereact-typescript-quickstart">github</a>.</p>

                    <p>Note: A shorthand API is available to import APIs such as MenuModel and SelectItem.</p>
                    <CodeHighlight className="language-javascript">
{`
import {SelectItem} from 'primereact/api';
import {MenuItem} from 'primereact/api';

`}
</CodeHighlight>
                </div>        
            </div>
        );
    }
}
