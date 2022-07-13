import React from 'react';
import Link from 'next/link';
import { CodeHighlight } from '../../components/doc/common/codehighlight';
import Head from 'next/head';
import getConfig from 'next/config';
import { Panel } from '../../components/lib/panel/Panel';
import { Button } from '../../components/lib/button/Button';
import stylesModule from './theming.module.css';
import css from 'styled-jsx/css';

const ThemingPage = () => {
    const contextPath = getConfig().publicRuntimeConfig.contextPath;
    const {className, styles} = css.resolve`
        .p-panel > :global(.p-panel-header) {
            background-color: #54b5a6;
            color: #ffffff;
        }
    `;

    return (
        <div>
            <Head>
                <title>Theming - PrimeReact</title>
                <meta name="description" content="Choose from a variety of themes or develop your own theme easily." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>Theming</h1>
                    <p>Choose from a variety of themes or develop your own theme easily.</p>
                </div>
            </div>

            <div className="content-section documentation theming-page">
                <h5>Architecture</h5>
                <img alt="Architecture" src={`${contextPath}/images/architecture.jpg`} className="architecture-image"/>
                <p>PrimeReact is a design agnostic library so unlike other UI libraries it does not enforce a certain styling such as material or bootstrap. In order to achieve this, styling has been
                    separated into two parts, core and theme. Core resides inside PrimeReact to implement the structure of the components such as positioning whereas theme brings the colors, paddings
                    and margins. vVarious free themes and premium themes are available along with premium templates that provide an application layout as well. All the free themes are built with
                    the <a href="https://www.primefaces.org/designer/primereact">Theme Designer</a> and the npm package brings the compiled CSS output of the theme whereas SCSS is kept as a premium feature
                    in the designer.</p>

                <h5>Free Themes</h5>
                <div className="h-20rem overflow-auto">
                <p>PrimeReact ships with various free themes to choose from. The list below states all the available themes in the npm distribution with import paths.</p>
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

                <h5>Designer</h5>
                <p>CSS of the themes share the same license as PrimeReact which is MIT, this means the generated CSS can be customized per your needs however this should be avoided if your customizations
                    are not simple. For instance even to change a primary color, since there is no variable a find and replace should be performed various times. On the other hand, this can be achieved
                    by changing a single variable e.g. <i>$primaryColor</i>. Visit the <a href="https://www.primefaces.org/designer/api/primereact/7.0.0">SASS API</a> for the documentation of available customization options.</p>

                <p><a href="https://www.primefaces.org/designer/primereact">Designer</a> is the ultimate tool to create your own PrimeReact experience powered by a SASS based theme engine
                    with 500+ variables and a Visual Designer. PrimeReact only ships the generated CSS of <b>Material</b>, <b>Bootstrap</b>, <b>Tailwind</b> and <b>PrimeOne</b> themes whereas Designer provides
                    full access to the whole SASS structure and the variables of these pre-built themes for easier customization. In addition, designer provides exclusive premium themes to subscribers including <b>Soho</b>, <b>Viva</b>, <b>Mira</b> and <b>Nano</b> that are not available in core PrimeReact distribution at NPM.</p>

                <p>Whether you have your own style guide or just need a custom theme, Designer is the right tool to design and bring them to existence.</p>

                <p>Visit <a href="https://www.primefaces.org/designer/primereact">Designer Website</a> for more information and live demos.</p>
                <a href="http://www.primefaces.org/designer/primereact" className="designer-image">
                    <img alt="PrimeReact Designer" src={`${contextPath}/images/primereact-designer.jpg`} style={{ width: '100%' }} />
                </a>

                <h5>Scoped Styling</h5>
                <p>Designer themes apply a global skin to the library, in case you need to change the style of a particular component, you may use a named class, CSS Modules or a CSS-in-JS solution like styled-jsx. 
                    A video tutorial that goes through the alternatives below is available.</p>

                <div className="video-container">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/3pO79DdPpiU" frameBorder="0" allowFullScreen="true" title="Scoped CSS with PrimeReact"></iframe>
                </div>

                <h6>Named Class</h6>
                <p>A named class is bound to the className prop of a component and the CSS is included with an import. Note that, the css still is still bundled globally so prefer this approach
                    if your application doesn't have a built-in solution to do CSS scoping.</p>
                <i>custompanel.css</i>
<CodeHighlight lang="css">
{`
.mypanel .p-panel-header {
    background-color: #07c4e8;
    color: #ffffff;
}
`}
</CodeHighlight>

                <p>Then use <i>mypanel</i> class as the className of your panel.</p>
<CodeHighlight>
{`
import React from 'react';
import { Panel } from 'primereact/panel';
import './custompanel.css';

export default function PanelDemo() {
    return (
        <Panel header="Named ClassName" className="mypanel">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </Panel>
    )
}
`}
</CodeHighlight>

                <Panel header="Named ClassName" className="mypanel">
                    <p className="p-0 m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </Panel>

                <h6>CSS Modules</h6>
                <p>CSS modules allow importing a css file to your react component and refer the classes inside using a variable. Unfortunately CSS modules do not support cascaded classes to be applied to external components however attribute selectors
                    can be used as a common workaround. NextJS has built-in support for CSS modules allowing css files with <i>.module.css</i> suffix to be interpreted as modules.</p>

                <i>paneldemo.module.css</i>
<CodeHighlight lang="css">
{`
.mypanel > [class~="p-panel-header"] {
    background-color: #07c4e8;
    color: #ffffff;
}
`}
</CodeHighlight>

<CodeHighlight>
{`
import React from 'react';
import { Panel } from 'primereact/panel';
import stylesModule from './paneldemo.module.css';

export default function PanelDemo() {
    return (
        <Panel header="CSS Module" className={stylesModule.mypanel}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </Panel>
    )
}
`}
</CodeHighlight>

                <Panel header="CSS Module" className={stylesModule.mypanel}>
                    <p className="p-0 m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </Panel>

                <h6>CSS-in-JS</h6>
                <p>CSS-in-JS solutions are also popular to implement scoped css, as an example we'll be using <a href="https://github.com/vercel/styled-jsx">styled-jsx</a> to customize our panel. Note that use of <i>:global</i> does not make the styling global and only
                removes the namespacing from the inner element as it is enough to scope the main container element, in this case <i>.p-panel</i>.</p>

                <CodeHighlight>
{`
import React from 'react';
import { Panel } from 'primereact/panel';
import css from 'styled-jsx/css';

export default function PanelDemo() {
    const {className, styles} = css.resolve\`
        .p-panel > :global(.p-panel-header) {
            background-color: #54b5a6;
            color: #ffffff;
        }
    \`;

    return (
        <>
            <style jsx>{styles}</style>
            <Panel header="CSS Module" className={className}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </Panel>
        </>
    )
}
`}
</CodeHighlight>

                <style>{styles}</style>
                <Panel header="Styled Component" className={className}>
                    <p className="p-0 m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </Panel>

                <h5>Scaling</h5>
                <p>PrimeReact utilizes rem units to make sure the components blend in with the rest of your UI perfectly. This also enables scaling, for example changing the size of the components
                    is easy as configuring the font size of your document. Code below sets the scale of the components based on 16px. If you reqire bigger or smaller components, just
                    change this variable and components will scale accordingly.</p>

<CodeHighlight lang="css">
{`
html {
    font-size: 16px;
}
`}
</CodeHighlight>

                <p>Some commonly used components such as inputs, buttons and datatable also provide per component scaling with special classes. Components with specific scaling options
                    are documented in their own documentation.</p>
<CodeHighlight>
{`
<InputText type="text" className="p-inputtext-sm" />;
<Button label="Button" className="p-button-lg" />;
`}
</CodeHighlight>

                <h5>PrimeFlex CSS</h5>
                <p><a href="https://www.primefaces.org/primeflex/">PrimeFlex</a> is a lightweight responsive CSS utility
                library to accompany Prime UI libraries and static webpages as well. PrimeReact can be used with any CSS utility library like bootstrap and tailwind however PrimeFlex has benefits like integration with PrimeReact themes usign CSS variables so
                that colors classes e.g. <i>bg-blue-500</i> receive the color code from the PrimeReact theme being used. PrimeReact follows the CSS utility approach of PrimeFlex and currently does not provide an extended style property like <i>sx</i>.
                Same approach is also utilized in <a href="https://www.primefaces.org/primeblocks-react">PrimeBlocks for PrimeReact</a> project as well.</p>

                <p>Here is an example to demonstrate how to align 3 buttons horizontally on bigger screens and display them as stacked on smaller ones.</p>

                <div className="flex flex-column md:flex-row justify-content-between my-5">
                    <Button type="button" label="Button 1" className="mb-3 md:mb-0"></Button>
                    <Button type="button" label="Button 2" className="p-button-secondary mb-3 md:mb-0"></Button>
                    <Button type="button" label="Button 3" className="p-button-help"></Button>
                </div>

                <CodeHighlight>
{`
<div className="flex flex-column md:flex-row justify-content-between my-5">
    <Button type="button" label="Button 1" className="mb-3 md:mb-0"></Button>
    <Button type="button" label="Button 2" className="p-button-secondary mb-3 md:mb-0"></Button>
    <Button type="button" label="Button 3" className="p-button-help"></Button>
</div>
`}
</CodeHighlight>

                <p>In addition to PrimeFlex, PrimeReact has a couple of css utility classes on its own as well.</p>
                <div className="doc-tablewrapper">
                    <table className="doc-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>p-component</td>
                                <td>Applies component theming such as font-family and font-size to an element.</td>
                            </tr>
                            <tr>
                                <td>p-fluid</td>
                                <td>Applies 100% width to all descendant components.</td>
                            </tr>
                            <tr>
                                <td>p-disabled</td>
                                <td>Applies an opacity to display as disabled.</td>
                            </tr>
                            <tr>
                                <td>p-sr-only</td>
                                <td>Element becomes visually hidden however accessibility is still available.</td>
                            </tr>
                            <tr>
                                <td>p-reset</td>
                                <td>Resets the browsers defaults.</td>
                            </tr>
                            <tr>
                                <td>p-link</td>
                                <td>Renders a button as a link.</td>
                            </tr>
                            <tr>
                                <td>p-error</td>
                                <td>Indicates an error text.</td>
                            </tr>
                            <tr>
                                <td>p-invalid</td>
                                <td>Applies the invalid style to a text or a form field.</td>
                            </tr>
                            <tr>
                                <td>p-text-secondary</td>
                                <td>Applies the text color of the theme with the secondary priority.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h5>CSS Variables</h5>
                <p>Each PrimeReact theme exports numerous CSS variables, refer to <Link href="/colors">Colors</Link> page for more details.</p>
            </div>
        </div>
    );
}

export default ThemingPage;
