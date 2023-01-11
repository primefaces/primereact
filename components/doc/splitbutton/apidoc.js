import Link from 'next/link';
import { CodeHighlight } from '../common/codehighlight';
import { DevelopmentSection } from '../common/developmentsection';
import { DocSectionText } from '../common/docsectiontext';
import { DocSubSection } from '../common/docsubsection';

export function ApiDoc(props) {
    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <DocSubSection id="menumodelapi" label="MenuModel API">
                <p>
                    SplitButton uses the common MenuModel API to define the items, visit <Link href="/menumodel">MenuModel API</Link> for details.
                </p>
            </DocSubSection>

            <DocSubSection id="severity" label="Severity">
                <p>Different color options are available as severity levels.</p>

                <ul>
                    <li>.p-button-secondary</li>
                    <li>.p-button-success</li>
                    <li>.p-button-info</li>
                    <li>.p-button-warning</li>
                    <li>.p-button-danger</li>
                </ul>

                <CodeHighlight>
                    {`
<SplitButton label="Primary" />
<SplitButton label="Secondary" className="p-button-secondary" model={items} />
<SplitButton label="Success" className="p-button-success" model={items} />
<SplitButton label="Info" className="p-button-info" model={items} />
<SplitButton label="Warning" className="p-button-warning" model={items} />
<SplitButton label="Danger" className="p-button-danger" model={items} />
`}
                </CodeHighlight>
            </DocSubSection>
            <DocSubSection id="raisedrounded" label="Raised and Rounded Buttons">
                <p>SplitButton can be raised by having "p-button-raised" style class and similarly borders can be made rounded using "p-button-rounded" class.</p>
                <CodeHighlight>
                    {`
<SplitButton label="Proceed" className="p-button-raised p-button-rounded" model={items} />
`}
                </CodeHighlight>
            </DocSubSection>

            <DocSubSection id="properties" label="Properties">
                <div className="doc-tablewrapper">
                    <table className="doc-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Default</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>id</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Identifier of the component.</td>
                            </tr>
                            <tr>
                                <td>label</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Text of the button.</td>
                            </tr>
                            <tr>
                                <td>icon</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Name of the icon.</td>
                            </tr>
                            <tr>
                                <td>model</td>
                                <td>object</td>
                                <td>null</td>
                                <td>MenuModel instance to define the overlay items.</td>
                            </tr>
                            <tr>
                                <td>disabled</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>When present, it specifies that the component should be disabled.</td>
                            </tr>
                            <tr>
                                <td>visible</td>
                                <td>boolean</td>
                                <td>true</td>
                                <td>When present, it specifies that the element should be visible.</td>
                            </tr>
                            <tr>
                                <td>style</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Inline style of the component.</td>
                            </tr>
                            <tr>
                                <td>className</td>
                                <td>string</td>
                                <td>null</td>
                                <td>ClassName of the component.</td>
                            </tr>
                            <tr>
                                <td>buttonClassName</td>
                                <td>string</td>
                                <td>null</td>
                                <td>ClassName of the button.</td>
                            </tr>
                            <tr>
                                <td>menuStyle</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Inline style of the overlay menu.</td>
                            </tr>
                            <tr>
                                <td>menuClassName</td>
                                <td>string</td>
                                <td>null</td>
                                <td>ClassName class of the overlay menu.</td>
                            </tr>
                            <tr>
                                <td>menuButtonClassName</td>
                                <td>string</td>
                                <td>null</td>
                                <td>ClassName of the menu dropdown button.</td>
                            </tr>
                            <tr>
                                <td>buttonProps</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Props for the main button, any prop is passed implicity to the button element.</td>
                            </tr>
                            <tr>
                                <td>menuButtonProps</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Props for the dropdown button, any prop is passed implicity to the dropdown button element.</td>
                            </tr>
                            <tr>
                                <td>tabIndex</td>
                                <td>number</td>
                                <td>null</td>
                                <td>Index of the element in tabbing order.</td>
                            </tr>
                            <tr>
                                <td>appendTo</td>
                                <td>DOM element | string</td>
                                <td>document.body</td>
                                <td>
                                    DOM element instance where the overlay panel should be mounted. Valid values are any DOM Element and 'self'. The <i>self</i> value is used to render a component where it is located.
                                </td>
                            </tr>
                            <tr>
                                <td>tooltip</td>
                                <td>any</td>
                                <td>null</td>
                                <td>Content of the tooltip.</td>
                            </tr>
                            <tr>
                                <td>tooltipOptions</td>
                                <td>object</td>
                                <td>null</td>
                                <td>Configuration of the tooltip, refer to the tooltip documentation for more information.</td>
                            </tr>
                            <tr>
                                <td>buttonTemplate</td>
                                <td>any</td>
                                <td>null</td>
                                <td>Template of the default button.</td>
                            </tr>
                            <tr>
                                <td>transitionOptions</td>
                                <td>object</td>
                                <td>null</td>
                                <td>
                                    The properties of{' '}
                                    <a href="https://reactcommunity.org/react-transition-group/css-transition" rel="noopener noreferrer" target="_blank">
                                        CSSTransition
                                    </a>{' '}
                                    can be customized, except for "nodeRef" and "in" properties.
                                </td>
                            </tr>
                            <tr>
                                <td>dropdownIcon</td>
                                <td>string</td>
                                <td>pi pi-chevron-down</td>
                                <td>Icon class of the dropdown icon.</td>
                            </tr>
                            <tr>
                                <td>loading</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Display loading icon of the button</td>
                            </tr>
                            <tr>
                                <td>loadingIcon</td>
                                <td>any</td>
                                <td>null</td>
                                <td>Name of the loading icon or JSX.Element for loading icon.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSubSection>

            <DocSubSection id="events" label="Events">
                <div className="doc-tablewrapper">
                    <table className="doc-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Parameters</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>onClick</td>
                                <td>event: Browser event</td>
                                <td>Callback to invoke when main button is clicked.</td>
                            </tr>
                            <tr>
                                <td>onShow</td>
                                <td>-</td>
                                <td>Callback to invoke when overlay panel becomes visible.</td>
                            </tr>
                            <tr>
                                <td>onHide</td>
                                <td>-</td>
                                <td>Callback to invoke when overlay panel becomes hidden.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSubSection>
        </>
    );
}
