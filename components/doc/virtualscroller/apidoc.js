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
                                <td>id</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Unique identifier of the element.</td>
                            </tr>
                            <tr>
                                <td>style</td>
                                <td>object</td>
                                <td>null</td>
                                <td>Inline style of the component.</td>
                            </tr>
                            <tr>
                                <td>className</td>
                                <td>any</td>
                                <td>null</td>
                                <td>Style class of the component.</td>
                            </tr>
                            <tr>
                                <td>items</td>
                                <td>array</td>
                                <td>null</td>
                                <td>An array of objects to display.</td>
                            </tr>
                            <tr>
                                <td>itemSize</td>
                                <td>number / [number, number]</td>
                                <td>null</td>
                                <td>The height/width of item according to orientation.</td>
                            </tr>
                            <tr>
                                <td>scrollHeight</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Height of the scroll viewport.</td>
                            </tr>
                            <tr>
                                <td>scrollWidth</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Width of the scroll viewport.</td>
                            </tr>
                            <tr>
                                <td>orientation</td>
                                <td>string</td>
                                <td>'vertical'</td>
                                <td>The orientation of scrollbar, valid values are 'vertical', 'horizontal' and 'both'.</td>
                            </tr>
                            <tr>
                                <td>numToleratedItems</td>
                                <td>number</td>
                                <td>null</td>
                                <td>
                                    Determines how many additional elements to add to the DOM outside of the view. <br />
                                    According to the scrolls made up and down, extra items are added in a certain algorithm in the form of multiples of this number. <br />
                                    Default value is half the number of items shown in the view.
                                </td>
                            </tr>
                            <tr>
                                <td>delay</td>
                                <td>number</td>
                                <td>0</td>
                                <td>Delay in scroll before new data is loaded.</td>
                            </tr>
                            <tr>
                                <td>resizeDelay</td>
                                <td>number</td>
                                <td>10</td>
                                <td>Delay after window's resize finishes.</td>
                            </tr>
                            <tr>
                                <td>lazy</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Defines if data is loaded and interacted with in lazy manner.</td>
                            </tr>
                            <tr>
                                <td>disabled</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>If disabled, the VirtualScroller feature is eliminated and the content is displayed directly.</td>
                            </tr>
                            <tr>
                                <td>loaderDisabled</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Used to implement a custom loader instead of using the loader feature in the VirtualScroller.</td>
                            </tr>
                            <tr>
                                <td>loading</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Whether the data is loaded.</td>
                            </tr>
                            <tr>
                                <td>autoSize</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Whether to dynamically change the height or width of scrollable container.</td>
                            </tr>
                            <tr>
                                <td>showSpacer</td>
                                <td>boolean</td>
                                <td>true</td>
                                <td>Used to implement a custom spacer instead of using the spacer feature in the VirtualScroller.</td>
                            </tr>
                            <tr>
                                <td>showLoader</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Whether to show loader.</td>
                            </tr>
                            <tr>
                                <td>loadingTemplate</td>
                                <td>any</td>
                                <td>null</td>
                                <td>The template of loader.</td>
                            </tr>
                            <tr>
                                <td>loaderIconTemplate</td>
                                <td>any</td>
                                <td>null</td>
                                <td>The template of loader's icon.</td>
                            </tr>
                            <tr>
                                <td>itemTemplate</td>
                                <td>any</td>
                                <td>null</td>
                                <td>The template of item.</td>
                            </tr>
                            <tr>
                                <td>contentTemplate</td>
                                <td>any</td>
                                <td>null</td>
                                <td>The template of item's wrapper element.</td>
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
                                <td>onScroll</td>
                                <td>event: Browser event</td>
                                <td>Callback to invoke when scroll position changes.</td>
                            </tr>
                            <tr>
                                <td>onScrollIndexChange</td>
                                <td>
                                    event.first: First index of the new data range to be loaded.
                                    <br />
                                    event.last: Last index of the new data range to be loaded.
                                </td>
                                <td>Callback to invoke when scroll position and item's range in view changes.</td>
                            </tr>
                            <tr>
                                <td>onLazyLoad</td>
                                <td>
                                    event.first: First index of the new data range to be loaded.
                                    <br />
                                    event.last: Last index of the new data range to be loaded.
                                </td>
                                <td>Callback to invoke in lazy mode to load new data.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSubSection>

            <DocSubSection id="methods" label="Methods">
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
                                <td>scrollTo</td>
                                <td>
                                    left: Left position of scroll. <br />
                                    top: Top position of scroll <br />
                                    behavior: Behavior of scroll, valid values are 'auto' and 'smooth'
                                </td>
                                <td>Scroll to move to a specific position.</td>
                            </tr>
                            <tr>
                                <td>scrollToIndex</td>
                                <td>
                                    index: Index of item according to orientation mode. <br />
                                    behavior: Behavior of scroll, valid values are 'auto' and 'smooth'
                                </td>
                                <td>Scroll to move to a specific item.</td>
                            </tr>
                            <tr>
                                <td>scrollInView</td>
                                <td>
                                    index: Index of item according to orientation mode. <br />
                                    to: Defines the location of the item in view, valid values are 'to-start' and 'to-end'. <br />
                                    behavior: Behavior of scroll, valid values are 'auto' and 'smooth'
                                </td>
                                <td>It is used to move the specified index into the view. It is a method that will usually be needed when keyboard support is added to the virtualScroller component.</td>
                            </tr>
                            <tr>
                                <td>getRenderedRange</td>
                                <td>-</td>
                                <td>Returns the range of items added to the DOM.</td>
                            </tr>
                            <tr>
                                <td>getElementRef</td>
                                <td>-</td>
                                <td>Returns the reference of virtualScroller's container.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSubSection>
        </>
    );
}
