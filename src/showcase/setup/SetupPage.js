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

                <div className="content-section documentation" id="app-doc">
                    <h5>Download</h5>
                    <p>PrimeReact is available at npm, if you have an existing application run the following commands to download PrimeReact and PrimeIcons to your project.</p>

<CodeHighlight lang="js">
{`
npm install primereact --save
npm install primeicons --save
`}
</CodeHighlight>

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
    "primeicons": "^4.1.0"
}
`}
</CodeHighlight>

                    <h6>Optional</h6>
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
                    <p>The css dependencies are as follows, note that you may change the theme with another one of your choice. If you are using a bundler such as webpack with a css loader you
                    may import them to your main application component.</p>

<CodeHighlight lang="js">
{`
primereact/resources/themes/saga-blue/theme.css
primereact/resources/primereact.min.css
primeicons/primeicons.css
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
                    <h5>PrimeFlex</h5>
                    <p>PrimeFlex is a CSS utility library featuring various helpers such as a grid system, flexbox, spacing, elevation and more. Although it is not required, it is highly
                    recommended to add PrimeFlex as it is likely to need such utilities when developing applications. View the <Link to="/primeflex">PrimeFlex</Link> section for the installation.</p>

                    <h5>Ripple</h5>
                    <p>Ripple is an optional animation for the supported components such as buttons. It is disabled by default and needs to be enabled at
                        your app's entry file (e.g. App.js) using the <i>PrimeReact</i> variable.
                    </p>
<CodeHighlight lang="js">
{`
import PrimeReact from 'primereact/api';

PrimeReact.ripple = true;
`}
</CodeHighlight>

                    <h5>ZIndex Layering</h5>
                    <p>ZIndexes are managed automatically to make sure layering of overlay components work seamlessly when combining multiple components. Still there may be cases where you'd like to configure
                    the configure default values such as a custom layout where header section is fixed. In a case like this, dropdown needs to be displayed below the application header but a modal dialog should be displayed above. PrimeReact configuration
                    offers the <i>zIndex</i> property to customize the default values for <a href="https://github.com/primefaces/primereact/issues/1924" className="layout-content-link">components categories</a>. Default values are described below and can be customized when setting up PrimeReact.</p>
<CodeHighlight lang="js">
{`
import PrimeReact from 'primereact/api';

PrimeReact.zIndex = {
    modal: 1100,    // dialog, sidebar
    overlay: 1000,  // dropdown, overlaypanel
    menu: 1000,     // overlay menus
    tooltip: 1100   // tooltip
}
`}
</CodeHighlight>

                    <h5>AppendTo</h5>
                    <p>On the all overlay components, the panels can be mounted into its component or DOM element instance using this option. Valid values are any DOM Element and 'self'. The <i>self</i> value is used to render a panel where component is located.
                    The appendTo property of any overlay component can be used to customize it.</p>
<CodeHighlight lang="js">
{`
import PrimeReact from 'primereact/api';

PrimeReact.appendTo = 'self'; // Default value is null(document.body).
`}
</CodeHighlight>

                    <h5>Locale</h5>
                    <p>PrimeReact provides a Locale API to support i18n and l7n, visit the <Link to="/locale">Locale</Link> documentation for more information.</p>

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
                    <h5>Browser Support</h5>
                    <div className="doc-tablewrapper">
                        <table className="doc-table browsers">
                            <thead>
                                <tr>
                                    <th>
                                        <div className="p-d-flex p-ai-center">
                                            <img src="showcase/images/browsers/edge.svg" alt="edge" style={{width: '1.5rem'}} className="p-mr-2" />
                                            IE / Edge
                                        </div>
                                    </th>
                                    <th>
                                        <div className="p-d-flex p-ai-center">
                                            <img src="showcase/images/browsers/firefox.svg" alt="firefox" style={{width: '1.5rem'}} className="p-mr-2" />
                                            Firefox
                                        </div>
                                    </th>
                                    <th>
                                        <div className="p-d-flex p-ai-center">
                                            <img src="showcase/images/browsers/chrome.svg" alt="chrome" style={{width: '1.5rem'}} className="p-mr-2" />
                                            Chrome
                                        </div>
                                    </th>
                                    <th>
                                        <div className="p-d-flex p-ai-center">
                                            <img src="showcase/images/browsers/safari.svg" alt="safari" style={{width: '1.5rem'}} className="p-mr-2" />
                                            Safari
                                        </div>
                                    </th>
                                    <th>
                                        <div className="p-d-flex p-ai-center">
                                            <img src="showcase/images/browsers/opera.svg" alt="opera" style={{width: '1.5rem'}} className="p-mr-2" />
                                            Opera
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>IE11, Edge</td>
                                    <td>Last 2 versions</td>
                                    <td>Last 2 versions</td>
                                    <td>Last 2 versions</td>
                                    <td>Last 2 versions</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}
