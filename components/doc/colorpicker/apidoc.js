import { DevelopmentSection } from '../common/developmentsection';
import { DocSectionText } from '../common/docsectiontext';

export function ApiDoc(props) {
    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <h3>Properties</h3>
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
                            <td>Unique identifier of the component.</td>
                        </tr>
                        <tr>
                            <td>value</td>
                            <td>any</td>
                            <td>null</td>
                            <td>Value of the component.</td>
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
                            <td>Style class of the component.</td>
                        </tr>
                        <tr>
                            <td>defaultColor</td>
                            <td>string</td>
                            <td>ff0000</td>
                            <td>Default color to display when value is null.</td>
                        </tr>
                        <tr>
                            <td>inline</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>Whether to display as an overlay or not.</td>
                        </tr>
                        <tr>
                            <td>format</td>
                            <td>string</td>
                            <td>hex</td>
                            <td>Format to use in value binding, supported formats are "hex", "rgb" and "hsb".</td>
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
                            <td>disabled</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>When present, it specifies that the component should be disabled.</td>
                        </tr>
                        <tr>
                            <td>tabIndex</td>
                            <td>number</td>
                            <td>null</td>
                            <td>Index of the element in tabbing order.</td>
                        </tr>
                        <tr>
                            <td>inputId</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Identifier of the focus input to match a label defined for the dropdown.</td>
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
                    </tbody>
                </table>
            </div>

            <h3>Events</h3>
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
                            <td>onChange</td>
                            <td>value: Selected color value whose type depends on the format.</td>
                            <td>Callback to invoke when a color is selected.</td>
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

            <h3>Styling</h3>
            <p>Following is the list of structural style classes</p>
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
                            <td>p-colorpicker</td>
                            <td>Container element.</td>
                        </tr>
                        <tr>
                            <td>p-colorpicker-overlay</td>
                            <td>Container element in overlay mode.</td>
                        </tr>
                        <tr>
                            <td>p-colorpicker-preview </td>
                            <td>Preview input in overlay mode.</td>
                        </tr>
                        <tr>
                            <td>p-colorpicker-panel</td>
                            <td>Panel element of the colorpicker.</td>
                        </tr>
                        <tr>
                            <td>p-colorpicker-content</td>
                            <td>Wrapper that contains color and hue sections.</td>
                        </tr>
                        <tr>
                            <td>p-colorpicker-color-selector</td>
                            <td>Color selector container.</td>
                        </tr>
                        <tr>
                            <td>p-colorpicker-color</td>
                            <td>Color element.</td>
                        </tr>
                        <tr>
                            <td>p-colorpicker-color-handle</td>
                            <td>Handle of the color element.</td>
                        </tr>
                        <tr>
                            <td>p-colorpicker-hue</td>
                            <td>Hue slider.</td>
                        </tr>
                        <tr>
                            <td>p-colorpicker-hue-handle</td>
                            <td>Handle of the hue slider.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3>Accessibility</h3>
            <DevelopmentSection>
                <h6>Screen Reader</h6>
                <p>
                    Specification does not cover a color picker <a href="https://github.com/w3c/aria/issues/930">yet</a> and using a semantic native color picker is not consistent across browsers so currently component is not compatible with screen
                    readers. In the upcoming versions, text fields will be introduced below the slider section to be able to pick a color using accessible text boxes in hsl, rgba and hex formats.
                </p>

                <h6>Closed State Keyboard Support of Popup ColorPicker</h6>
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
                                    <i>tab</i>
                                </td>
                                <td>Moves focus to the color picker button.</td>
                            </tr>
                            <tr>
                                <td>
                                    <i>space</i>
                                </td>
                                <td>Opens the popup and moves focus to the color slider.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h6>Popup Keyboard Support</h6>
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
                                <td>Selects the color and closes the popup.</td>
                            </tr>
                            <tr>
                                <td>
                                    <i>space</i>
                                </td>
                                <td>Selects the color and closes the popup.</td>
                            </tr>
                            <tr>
                                <td>
                                    <i>escape</i>
                                </td>
                                <td>Closes the popup, moves focus to the input.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h6>Color Picker Slider</h6>
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
                                    <i>arrow keys</i>
                                </td>
                                <td>Changes color.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h6>Hue Slider</h6>
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
                                    <span className="inline-flex flex-column">
                                        <i className="mb-1">up arrow</i>
                                        <i>down arrow</i>
                                    </span>
                                </td>
                                <td>Changes hue.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DevelopmentSection>
            <h3>Dependencies</h3>
            <p>None.</p>
        </>
    );
}
