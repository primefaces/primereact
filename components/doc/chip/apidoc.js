import Link from 'next/link';
import { CodeHighlight } from '../common/codehighlight';
import { DevelopmentSection } from '../common/developmentsection';
import { DocSectionText } from '../common/docsectiontext';
import { DocSubSection } from '../common/docsubsection';

export function ApiDoc(props) {
    return (
        <>
            <DocSectionText {...props}></DocSectionText>

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
                                <td>label</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Defines the text to display.</td>
                            </tr>
                            <tr>
                                <td>icon</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Defines the icon to display.</td>
                            </tr>
                            <tr>
                                <td>image</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Defines the image to display.</td>
                            </tr>
                            <tr>
                                <td>removable</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Whether to display a remove icon.</td>
                            </tr>
                            <tr>
                                <td>removeIcon</td>
                                <td>string</td>
                                <td>pi pi-times-circle</td>
                                <td>Icon of the remove element.</td>
                            </tr>
                            <tr>
                                <td>style</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Inline style of the element.</td>
                            </tr>
                            <tr>
                                <td>className</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Style class of the element.</td>
                            </tr>
                            <tr>
                                <td>template</td>
                                <td>any</td>
                                <td>null</td>
                                <td>Template of an item.</td>
                            </tr>
                            <tr>
                                <td>imageAlt</td>
                                <td>any</td>
                                <td>null</td>
                                <td>It specifies an alternate text for an image, if the image cannot be displayed.</td>
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
                                <td>onRemove</td>
                                <td>event: Browser event</td>
                                <td>Callback to invoke when a chip is removed.</td>
                            </tr>
                            <tr>
                                <td>onImageError</td>
                                <td>event: Browser event</td>
                                <td>This event is triggered if an error occurs while loading an image file.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSubSection>
            <DocSubSection id="styling" label="Styling">
                <p>
                    Following is the list of structural style classes, for theming classes visit <Link href="/theming">theming</Link> page.
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
                                <td>p-chip</td>
                                <td>Container element.</td>
                            </tr>
                            <tr>
                                <td>p-chip-image</td>
                                <td>Container element in image mode.</td>
                            </tr>
                            <tr>
                                <td>p-chip-text</td>
                                <td>Text of the chip.</td>
                            </tr>
                            <tr>
                                <td>pi-chip-remove-icon</td>
                                <td>Remove icon.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSubSection>

            <DocSubSection id="accessibility" label="Accessibility">
                <DevelopmentSection>
                    <h4>Screen Reader</h4>
                    <p>
                        Chip uses the <i>label</i> property as the default <i>aria-label</i>, since any attribute is passed to the root element <i>aria-labelledby</i> or <i>aria-label</i> can be used to override the default behavior. Removable chips
                        have a <i>tabIndex</i> and focusable with the tab key.
                    </p>

                    <h4>Keyboard Support</h4>
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
                                        <i>backspace</i>
                                    </td>
                                    <td>Hides removable.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </DevelopmentSection>
            </DocSubSection>
        </>
    );
}
