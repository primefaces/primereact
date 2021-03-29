import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CodeHighlight } from '../codehighlight/CodeHighlight';

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

                <div className="content-section documentation">
                    <h5>Download</h5>
                    <p>PrimeReact is available at npm, if you have an existing application run the following commands to download PrimeReact and PrimeIcons to your project.</p>

<CodeHighlight lang="js">
{`
npm install primereact --save
npm install primeicons --save
`}
</CodeHighlight>

                    <h5>PrimeFlex</h5>
                    <p>PrimeFlex is a CSS utility library featuring various helpers such as a grid system, flexbox, spacing, elevation and more. Although it is not required, it is highly
                    recommended to add PrimeFlex as it is likely to need such utilities when developing applications. View the <Link to="/primeflex">PrimeFlex</Link> section for the installation.</p>

                    <h5>Import</h5>
                    <p>Path of each component is available at the "import" section of a component documentation.</p>

<CodeHighlight lang="js">
{`
//import { ComponentName } from 'primereact/{componentname}';
import { Dialog } from 'primereact/dialog';
import { Accordion,AccordionTab } from 'primereact/accordion';
`}
</CodeHighlight>

                    <h5>Dependencies</h5>
                    <p>Majority of PrimeReact components (95%) are native and there are some exceptions having 3rd party dependencies such as Google Maps for GMap.</p>
                    <p>In addition, components require PrimeIcons library for icons and
                         <a href="https://www.npmjs.com/package/react-transition-group" className="layout-content-link"> react-transition-group</a> for animations.</p>

<CodeHighlight lang="js">
{`
dependencies: {
    "react": "^17.0.1",
    "react-dom": "^17.0.1",
    "react-transition-group": "^4.4.1",
    "primeicons": "^4.1.0",
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
                                    <td>FullCalendar</td>
                                    <td>FullCalendar 4.0 Alpha.2+.</td>
                                </tr>
                                <tr>
                                    <td>PrimeFlex</td>
                                    <td>DataView component.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h5>Styles</h5>
                    <p>The css dependencies are as follows, note that you may change the theme with another one of your choice.</p>

<CodeHighlight lang="js">
{`
primereact/resources/themes/saga-blue/theme.css
primereact/resources/primereact.min.css
primeicons/primeicons.css
`}
</CodeHighlight>

                    <p>If you are using a bundler such as webpack with a css loader you may also import them to your main application component, an example from create-react-app would be.</p>
<CodeHighlight lang="js">
{`
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
`}
</CodeHighlight>

                <h5>Free Themes</h5>
                <p>PrimeReact ships with various free themes to choose from.</p>
<CodeHighlight lang="js">
{`
primereact/resources/themes/bootstrap4-light-blue/theme.css
primereact/resources/themes/bootstrap4-light-purple/theme.css
primereact/resources/themes/bootstrap4-dark-blue/theme.css
primereact/resources/themes/bootstrap4-dark-purple/theme.css
primereact/resources/themes/md-light-indigo/theme.css
primereact/resources/themes/md-light-deeppurple/theme.css
primereact/resources/themes/md-dark-indigo/theme.css
primereact/resources/themes/md-dark-deeppurple/theme.css
primereact/resources/themes/mdc-light-indigo/theme.css
primereact/resources/themes/mdc-light-deeppurple/theme.css
primereact/resources/themes/mdc-dark-indigo/theme.css
primereact/resources/themes/mdc-dark-deeppurple/theme.css
primereact/resources/themes/fluent-light/theme.css
primereact/resources/themes/saga-blue/theme.css
primereact/resources/themes/saga-green/theme.css
primereact/resources/themes/saga-orange/theme.css
primereact/resources/themes/saga-purple/theme.css
primereact/resources/themes/vela-blue/theme.css
primereact/resources/themes/vela-green/theme.css
primereact/resources/themes/vela-orange/theme.css
primereact/resources/themes/vela-purple/theme.css
primereact/resources/themes/arya-blue/theme.css
primereact/resources/themes/arya-green/theme.css
primereact/resources/themes/arya-orange/theme.css
primereact/resources/themes/arya-purple/theme.css
primereact/resources/themes/nova/theme.css
primereact/resources/themes/nova-alt/theme.css
primereact/resources/themes/nova-accent/theme.css
primereact/resources/themes/nova-vue/theme.css
primereact/resources/themes/luna-amber/theme.css
primereact/resources/themes/luna-blue/theme.css
primereact/resources/themes/luna-green/theme.css
primereact/resources/themes/luna-pink/theme.css
primereact/resources/themes/rhea/theme.css
`}
</CodeHighlight>

                    <h5>Ripple</h5>
                    <p>Ripple is an optional animation for the supported components such as buttons. It is disabled by default and needs to be enabled at
                        your app's entry file (e.g. main.js) using the <i>PrimeReact</i> variable.
                    </p>
<CodeHighlight lang="js">
{`
import PrimeReact from 'primereact/api';

PrimeReact.ripple = true;
`}
</CodeHighlight>

                    <h5>Quickstart</h5>
                    <p>An example application based on create-react-app is available at <a href="https://github.com/primefaces/primereact-quickstart" className="layout-content-link">GitHub</a>.</p>

                    <h5>Typescript</h5>
                    <p>Typescript is fully supported as type definition files are provided in the npm package of PrimeReact. A sample typescript-primereact application
                    is available as well at <a href="https://github.com/primefaces/primereact-typescript-quickstart" className="layout-content-link">GitHub</a>.</p>

                    <p>Note: A shorthand API is available to import APIs such as MenuModel and SelectItem.</p>
<CodeHighlight lang="js">
{`
import { SelectItem } from 'primereact/api';
import { MenuItem } from 'primereact/api';
`}
</CodeHighlight>

					<h5>Next.js</h5>
					<p>A sample next.js-primereact application is available as well at <a href="https://github.com/primefaces/primereact-nextjs-quickstart" className="layout-content-link">GitHub</a>.</p>
                </div>
            </div>
        );
    }
}
