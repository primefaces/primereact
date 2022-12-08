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

            <DocSubSection id="styling" label="Styling">
                <p>
                    Following is the list of structural style classes, for theming classes visit <Link href="/theming"> theming</Link> page.
                </p>
                <div className="doc-tablewrapper">
                    <table className="doc-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Element</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>p-splitbutton</td>
                                <td>Container element.</td>
                            </tr>
                            <tr>
                                <td>p-splitbutton-button</td>
                                <td>Dropdown button.</td>
                            </tr>
                            <tr>
                                <td>p-menu</td>
                                <td>Overlay menu.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSubSection>

            <DocSubSection id="accessibility" label="Accessibility">
                <DevelopmentSection>
                    <h4>Screen Reader</h4>
                    <p>
                        SplitButton component renders two native button elements, main button uses the label property to define <i>aria-label</i> by default which can be customized with <i>buttonProps</i>. Dropdown button requires an explicit
                        definition to describe it using <i>menuButtonProps</i> option and also includes <i>aria-haspopup</i>, <i>aria-expanded</i> for states along with <i>aria-controls</i> to define the relation between the popup and the button.
                    </p>

                    <p>
                        The popup overlay uses <i>menu</i> role on the list and each action item has a <i>menuitem</i> role with an <i>aria-label</i> as the menuitem label. The id of the menu refers to the <i>aria-controls</i> of the dropdown button.
                    </p>
                    <CodeHighlight>
                        {`
<SplitButton buttonProps={{'aria-label': 'Default Action'}} menuButtonProps={{'aria-label': 'More Options'}} />
`}
                    </CodeHighlight>
                    <h4>Main Button Keyboard Support</h4>
                    <div className="doc-tablewrapper">
                        <table className="doc-table">
                            <thead>
                                <tr>
                                    <th>Key</th>
                                    <th>Function</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <i>enter</i>
                                    </td>
                                    <td>Activates the button.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>space</i>
                                    </td>
                                    <td>Activates the button.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h4>Menu Button Keyboard Support</h4>
                    <div className="doc-tablewrapper">
                        <table className="doc-table">
                            <thead>
                                <tr>
                                    <th>Key</th>
                                    <th>Function</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <i>enter</i>
                                    </td>
                                    <td>Toggles the visibility of the menu.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>space</i>
                                    </td>
                                    <td>Toggles the visibility of the menu.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>down arrow</i>
                                    </td>
                                    <td>Opens the menu and moves focus to the first item.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>up arrow</i>
                                    </td>
                                    <td>Opens the menu and moves focus to the last item.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h4>Menu Keyboard Support</h4>
                    <div className="doc-tablewrapper">
                        <table className="doc-table">
                            <thead>
                                <tr>
                                    <th>Key</th>
                                    <th>Function</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <i>enter</i>
                                    </td>
                                    <td>Actives the menuitem, closes the menu and sets focus on the menu button.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>escape</i>
                                    </td>
                                    <td>Closes the menu and sets focus on the menu button.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>down arrow</i>
                                    </td>
                                    <td>Moves focus to the next item, if it is the last one then first item receives the focus.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>up arrow</i>
                                    </td>
                                    <td>Moves focus to the previous item, if it is the first one then last item receives the focus.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>home</i>
                                    </td>
                                    <td>Moves focus to the first item.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>end</i>
                                    </td>
                                    <td>Moves focus to the last item.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </DevelopmentSection>
            </DocSubSection>
        </>
    );
}
