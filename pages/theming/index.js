import React from 'react';
import { CodeHighlight } from '../../components/doc/common/codehighlight';
import Head from 'next/head';
import getConfig from 'next/config';

const ThemingPage = () => {
    const contextPath = getConfig().publicRuntimeConfig.contextPath;

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
                    separated into core and theme. Core resides inside PrimeReact to implement the structure of the components such as positioning whereas theme brings the colors, paddings
                    and margins.</p>

                <h5>Themes</h5>
                <p>PrimeReact offers various free themes and premium themes along with premium templates that provide an application layout as well. All the free themes are built with
                    the <a href="https://www.primefaces.org/designer/primereact">Theme Designer</a> and the npm package brings the CSS output of the theme whereas SCSS is kept as a premium feature
                    in the designer. This means free themes are open source and for customization with SASS, a designer license needs to be acquired.</p>

                <h5>Customization</h5>
                <p>CSS of the themes share the same license as PrimeReact which is MIT, this means the generated CSS can be customized per your needs however this should be avoided if your customizations
                    are not simple. For instance even to change a primary color, since there is no variable a find and replace should be performed various times. On the other hand, this can be achieved
                    by changing a single variable e.g. $primaryColor. Visit the <a href="https://www.primefaces.org/designer/api/primereact/6.3.0">SASS API</a> for the documentation of available customization options.</p>

                <p><a href="https://www.primefaces.org/designer/primereact">Designer</a> is the ultimate tool to create your own PrimeReact experience powered by a SASS based theme engine
                    with 500+ variables and a Visual Designer. PrimeReact only ships the generated CSS of <b>Material</b>, <b>Bootstrap</b>, <b>Tailwind</b>, <b>Saga</b>, <b>Vela</b>, <b>Arya</b> and legacy themes whereas Designer provides
                    full access to the whole SASS structure and the variables of these pre-built themes for easier customization. In addition, designer provides exclusive premium themes to subscribers including Soho, Viva, Mira and Nano that are not available in core PrimeReact distribution.</p>

                <p>Whether you have your own style guide or just need a custom theme, Designer API is the right tool to design and bring them to existence.</p>

                <p>Visit <a href="https://www.primefaces.org/designer/primereact">Designer API HomePage</a> for more information and live demos.</p>
                <a href="http://www.primefaces.org/designer/primereact" className="designer-image">
                    <img alt="PrimeReact Designer" src={`${contextPath}/images/primereact-designer.jpg`} style={{ width: '100%' }} />
                </a>

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

                <h5>Utility Classes</h5>
                <p>A couple of utility classes are provided as a solution to common requirements.</p>

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

                <h5>Styles</h5>
                <p>The css dependencies are as follows, note that you may change the theme with another one of your choice. If you are using a bundler such as webpack with a css loader you
                may import them to your main application component.</p>

<CodeHighlight lang="js">
{`
primereact/resources/themes/lara-light-indigo/theme.css
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
        </div>
    );
}

export default ThemingPage;
