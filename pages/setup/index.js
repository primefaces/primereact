import React from 'react';
import Link  from 'next/link';
import { CodeHighlight } from '../../components/doc/common/codehighlight';
import Head from 'next/head';
import getConfig from 'next/config';

const SetupPage = () => {
    const contextPath = getConfig().publicRuntimeConfig.contextPath;

    return (
        <div>
            <Head>
                <title>Getting Started - PrimeReact</title>
                <meta name="description" content="PrimeReact is a rich set of open source native components for React." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>Setup</h1>
                    <p>PrimeReact is a rich set of open source native components for React.</p>
                </div>
            </div>

            <div className="content-section documentation">
                <h3>Module Loader</h3>
                <p>PrimeReact is available at <a href="https://www.npmjs.com/package/primereact">npm</a>, if you have an existing application run the following commands to download it to your project.</p>

<CodeHighlight lang="js">
{`
// with npm
npm install primereact primeicons

// with yarn
yarn add primereact primeicons
`}
</CodeHighlight>
                <p>Please note that <i>{`react >= 17.0.0`}</i> and <i>{`react-dom >= 17.0.0`}</i> are peer dependencies and some components have <Link href="#setup-configuration" scroll={false}><a>optional dependencies</a></Link>.</p>

                <p>Import path is available in the documentation of the corresponding component.</p>

<CodeHighlight lang="js">
{`
// import { ComponentName } from 'primereact/{componentname}';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
`}
</CodeHighlight>

                <p>Finally you'll be able to utilize the component in your application. See the <Link href="#setup-styles" scroll={false}><a>Styles</a></Link> section to apply styling.</p>
<CodeHighlight>
{`
<Dialog visible={state} onHide={() => setState(false)}>
    // content
</Dialog>

<Button label="Show" onClick={() => setState(true)} />
`}
</CodeHighlight>

                <p>Watch the video tutorial that goes through these steps.</p>
                <div className="video-container">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/Prz3phy2bHY" frameBorder="0" allowFullScreen title="Getting Started With PrimeReact"></iframe>
                </div>

                <h3>Script Tag</h3>
                <p>Other alternative is utilizing the components directly within the browser with the <i>iife</i> build. Note that PrimeReact does not provide a <i>umd</i> build.
                The core.min.js is required. It includes shared components and structures; utils, api, ripple, portal, keyfilter, tooltip, virtualscroller, terminalservice, overlayservice, checkbox, button, inputtext, inputnumber, messages, progressbar, dropdown, dialog, paginator and tree.</p>
<CodeHighlight lang="js">
{`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>SliderDemo</title>

    <!-- PrimeReact -->
    <link rel="stylesheet" href="https://unpkg.com/primeicons/primeicons.css" />
    <link rel="stylesheet" href="https://unpkg.com/primereact/resources/themes/lara-light-indigo/theme.css" />
    <link rel="stylesheet" href="https://unpkg.com/primereact/resources/primereact.min.css" />
    <link rel="stylesheet" href="https://unpkg.com/primeflex@2.0.0/primeflex.min.css" />

    <!-- Dependencies -->
    <script src="https://unpkg.com/react/umd/react.production.min.js"></script>
    <script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script src="https://unpkg.com/react-transition-group@4.4.2/dist/react-transition-group.js"></script>

    <!-- Demo -->
    <script src="https://unpkg.com/primereact/core/core.min.js"></script>
    <script src="https://unpkg.com/primereact/slider/slider.min.js"></script>
</head>
<body>
    <div id="root"></div>

    <script type="text/babel">

        const { useEffect, useState } = React;
        const { Slider } = primereact.slider;

        const SliderDemo = () => {
            const [value, setValue] = useState(null);

            return (
                <div className="slider-demo">
                    <div className="card">
                        <h5>Basic: {value}</h5>
                        <Slider value={value} onChange={(e) => setValue(e.value)} />
                    </div>
                </div>
            );
        }

        const rootElement = document.getElementById("root");
        ReactDOM.render(<SliderDemo />, rootElement);

    </script>
</body>
</html>
`}
</CodeHighlight>
                <p>Import all components and structures</p>
<CodeHighlight>
{`
<script src="https://unpkg.com/primereact/primereact.all.min.js"></script>
`}
</CodeHighlight>

                <h3 id="setup-styles">Styles</h3>
                <p>The css dependencies are as follows, note that you may change the theme with another one of your choice. If you are using a bundler such as webpack with a css loader you
                may import them to your main application component.</p>

<CodeHighlight lang="js">
{`
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
`}
</CodeHighlight>

            <h5>Free Themes</h5>
            <p>PrimeReact ships with various free themes to choose from.</p>
<div className="h-20rem overflow-auto">

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
primereact/resources/themes/tailwind-light/theme.css
primereact/resources/themes/fluent-light/theme.css
primereact/resources/themes/lara-light-blue/theme.css
primereact/resources/themes/lara-light-indigo/theme.css
primereact/resources/themes/lara-light-purple/theme.css
primereact/resources/themes/lara-light-teal/theme.css
primereact/resources/themes/lara-dark-blue/theme.css
primereact/resources/themes/lara-dark-indigo/theme.css
primereact/resources/themes/lara-dark-purple/theme.css
primereact/resources/themes/lara-dark-teal/theme.css
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
primereact/resources/themes/luna-amber/theme.css
primereact/resources/themes/luna-blue/theme.css
primereact/resources/themes/luna-green/theme.css
primereact/resources/themes/luna-pink/theme.css
primereact/resources/themes/rhea/theme.css
`}
</CodeHighlight>
</div>

                <h5>PrimeFlex</h5>
                <p>PrimeFlex is a CSS utility library featuring various helpers such as a grid system, flexbox, spacing, elevation and more. Although it is not required, it is highly
                recommended to add PrimeFlex as it is likely to need such utilities when developing applications. View the <Link href="/primeflex">PrimeFlex</Link> section for the installation.</p>

                <h3 id="setup-configuration">Configuration</h3>
                <h5>Dependencies</h5>
                <p>Majority of PrimeReact components (95%) are native and there are some exceptions having 3rd party dependencies such as Google Maps for GMap.</p>
                <p>In addition, components require <Link href="/icons">PrimeIcons</Link> library for icons and
                        <a href="https://www.npmjs.com/package/react-transition-group" className="layout-content-link"> react-transition-group</a> for animations.
                        The <a href="https://www.npmjs.com/package/react-transition-group" className="layout-content-link"> react-transition-group</a> is available as dependencies in the npm package of PrimeReact.</p>

<CodeHighlight lang="js">
{`
dependencies: {
    "react": "^17.0.0 || ^18.0.0",
    "react-dom": "^17.0.0 || ^18.0.0"
    "primeicons": "^5.0.0"
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
                                <td>Charts.js 3.x</td>
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
                                <td>FullCalendar*</td>
                                <td>FullCalendar 4.0 Alpha.2+</td>
                            </tr>
                            <tr>
                                <td>DataView</td>
                                <td>PrimeFlex</td>
                            </tr>
                        </tbody>
                    </table>
                    <small>* Deprecated</small>
                </div>


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

                <h5>Outlined vs Filled Input Styles</h5>
                <p>Input fields come in two styles, default is <i>outlined</i> with borders around the field whereas <i>filled</i> alternative adds a background color
                to the field. Applying <i>p-input-filled</i> to an ancestor of an input enables the filled style. If you prefer to use filled inputs in the entire application,
                use a global container such as the document body or the application element to apply the style class. Note that in case you add it to the application element, components that are teleported to the document body such as Dialog
                will not be able to display filled inputs as they are not a descendant of the application root element in the DOM tree, to resolve this case set inputStyle to 'filled' at PrimeReact configuration as well.</p>
<CodeHighlight lang="js">
{`
import PrimeReact from 'primereact/api';

PrimeReact.inputStyle = 'filled';
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
    toast: 1200     // toast
}
`}
</CodeHighlight>

                <p>The ZIndex of all components is increased according to their groups in harmony with each other. If false, each group increments its ZIndex within itself.</p>
<CodeHighlight lang="js">
{`
import PrimeReact from 'primereact/api';

PrimeReact.autoZIndex = true;
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

                <h5>cssTransition</h5>
                <p>Used to determine whether the <i>react-transition-group API</i> is enabled in all overlay components.</p>
<CodeHighlight lang="js">
{`
import PrimeReact from 'primereact/api';

PrimeReact.cssTransition = false; // Default value is true.
`}
</CodeHighlight>

                <h5>Locale</h5>
                <p>PrimeReact provides a Locale API to support i18n and l7n, visit the <Link href="/locale">Locale</Link> documentation for more information.</p>

                <h5>Browser Support</h5>
                <div className="doc-tablewrapper">
                    <table className="doc-table browsers">
                        <thead>
                            <tr>
                                <th>
                                    <div className="flex align-items-center">
                                        <img src={`${contextPath}/images/browsers/edge.svg`} alt="edge" style={{width: '1.5rem'}} className="mr-2" />
                                        Edge
                                    </div>
                                </th>
                                <th>
                                    <div className="flex align-items-center">
                                        <img src={`${contextPath}/images/browsers/firefox.svg`} alt="firefox" style={{width: '1.5rem'}} className="mr-2" />
                                        Firefox
                                    </div>
                                </th>
                                <th>
                                    <div className="flex align-items-center">
                                        <img src={`${contextPath}/images/browsers/chrome.svg`} alt="chrome" style={{width: '1.5rem'}} className="mr-2" />
                                        Chrome
                                    </div>
                                </th>
                                <th>
                                    <div className="flex align-items-center">
                                        <img src={`${contextPath}/images/browsers/safari.svg`} alt="safari" style={{width: '1.5rem'}} className="mr-2" />
                                        Safari
                                    </div>
                                </th>
                                <th>
                                    <div className="flex align-items-center">
                                        <img src={`${contextPath}/images/browsers/opera.svg`} alt="opera" style={{width: '1.5rem'}} className="mr-2" />
                                        Opera
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Last 2 versions</td>
                                <td>Last 2 versions</td>
                                <td>Last 2 versions</td>
                                <td>Last 2 versions</td>
                                <td>Last 2 versions</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3>Samples</h3>
                <h5>Quickstart</h5>
                <p>An <a href="https://github.com/primefaces/primereact-examples/tree/main/cra-basic" className="layout-content-link">example application</a> based on create-react-app is available at github.</p>

                <h5>Typescript</h5>
                <p>Typescript is fully supported as type definition files are provided in the npm package of PrimeReact. A sample <a href="https://github.com/primefaces/primereact-examples/tree/main/cra-basic-ts" className="layout-content-link">typescript-primereact</a> application with create-react-app is available as at github.</p>

                <p>Note: A shorthand API is available to import APIs such as MenuModel and SelectItem.</p>
<CodeHighlight lang="js">
{`
import { SelectItem } from 'primereact/api';
import { MenuItem } from 'primereact/api';
`}
</CodeHighlight>

                <h5>Next.js</h5>
                <p>A <a href="https://github.com/primefaces/primereact-examples/tree/main/nextjs-basic" className="layout-content-link">sample application</a> based on Next.js is available at github.</p>
                <div className="video-container">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/OrRffCobuts" frameBorder="0" allowFullScreen title="Getting Started With NextJs"></iframe>
                </div>
            </div>
        </div>
    );
}

export default SetupPage;
