import Link from 'next/link';
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
                                <td>value</td>
                                <td>array</td>
                                <td>null</td>
                                <td>An array of objects to display.</td>
                            </tr>
                            <tr>
                                <td>activeIndex</td>
                                <td>number</td>
                                <td>0</td>
                                <td>Index of the first item.</td>
                            </tr>
                            <tr>
                                <td>header</td>
                                <td>any</td>
                                <td>null</td>
                                <td>Label of header.</td>
                            </tr>
                            <tr>
                                <td>footer</td>
                                <td>any</td>
                                <td>null</td>
                                <td>Label of footer.</td>
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
                                <td>item</td>
                                <td>function</td>
                                <td>null</td>
                                <td>Function that gets an item in the value and returns the content for preview item.</td>
                            </tr>
                            <tr>
                                <td>thumbnail</td>
                                <td>function</td>
                                <td>null</td>
                                <td>Function that gets an item in the value and returns the content for thumbnail item.</td>
                            </tr>
                            <tr>
                                <td>indicator</td>
                                <td>function</td>
                                <td>null</td>
                                <td>Function that gets an item in the value and returns the content for indicator item.</td>
                            </tr>
                            <tr>
                                <td>caption</td>
                                <td>function</td>
                                <td>null</td>
                                <td>Function that gets an item in the value and returns the content for caption item.</td>
                            </tr>
                            <tr>
                                <td>circular</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Defines if scrolling would be infinite.</td>
                            </tr>
                            <tr>
                                <td>autoPlay</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Items are displayed with a slideshow in autoPlay mode.</td>
                            </tr>
                            <tr>
                                <td>transitionInterval</td>
                                <td>number</td>
                                <td>4000</td>
                                <td>Time in milliseconds to scroll items.</td>
                            </tr>
                            <tr>
                                <td>numVisible</td>
                                <td>number</td>
                                <td>3</td>
                                <td>Number of items per page.</td>
                            </tr>
                            <tr>
                                <td>responsiveOptions</td>
                                <td>any</td>
                                <td>null</td>
                                <td>An array of options for responsive design.</td>
                            </tr>
                            <tr>
                                <td>thumbnailsPosition</td>
                                <td>string</td>
                                <td>bottom</td>
                                <td>Position of thumbnails. Valid values are "bottom", "top", "left" and "right".</td>
                            </tr>
                            <tr>
                                <td>indicatorsPosition</td>
                                <td>string</td>
                                <td>bottom</td>
                                <td>Position of indicators. Valid values are "bottom", "top", "left" and "right".</td>
                            </tr>
                            <tr>
                                <td>verticalThumbnailViewPortHeight</td>
                                <td>string</td>
                                <td>300px</td>
                                <td>Height of the viewport in vertical thumbnail.</td>
                            </tr>
                            <tr>
                                <td>showItemNavigators</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Whether to display navigation buttons in item container.</td>
                            </tr>
                            <tr>
                                <td>showThumbnailNavigators</td>
                                <td>boolean</td>
                                <td>true</td>
                                <td>Whether to display navigation buttons in thumbnail container.</td>
                            </tr>
                            <tr>
                                <td>showThumbnails</td>
                                <td>boolean</td>
                                <td>true</td>
                                <td>Whether to display thumbnail container.</td>
                            </tr>
                            <tr>
                                <td>showIndicators</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Whether to display indicator container.</td>
                            </tr>
                            <tr>
                                <td>showIndicatorsOnItem</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>When enabled, indicator container is displayed on item container.</td>
                            </tr>
                            <tr>
                                <td>showItemNavigatorsOnHover</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Whether to display navigation buttons on item container's hover.</td>
                            </tr>
                            <tr>
                                <td>changeItemOnIndicatorHover</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>When enabled, item is changed on indicator item's hover.</td>
                            </tr>
                            <tr>
                                <td>fullScreen</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Whether to display the component on fullscreen.</td>
                            </tr>
                            <tr>
                                <td>baseZIndex</td>
                                <td>number</td>
                                <td>0</td>
                                <td>Base zIndex value to use in layering.</td>
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
                                <td>onItemChange</td>
                                <td>event.index = index of the new item.</td>
                                <td>Callback to invoke after changing item.</td>
                            </tr>
                            <tr>
                                <td>onShow</td>
                                <td>-</td>
                                <td>Callback to invoke when modal becomes visible.</td>
                            </tr>
                            <tr>
                                <td>onHide</td>
                                <td>-</td>
                                <td>Callback to invoke when modal becomes hidden.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSubSection>

            <DocSubSection id="styling" label="Styling">
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
                                <td>p-galleria</td>
                                <td>Container element.</td>
                            </tr>
                            <tr>
                                <td>p-galleria-header</td>
                                <td>Header section.</td>
                            </tr>
                            <tr>
                                <td>p-galleria-footer</td>
                                <td>Footer section.</td>
                            </tr>
                            <tr>
                                <td>p-galleria-item-wrapper</td>
                                <td>Item wrapper element. It contains item container and indicators.</td>
                            </tr>
                            <tr>
                                <td>p-galleria-item-container</td>
                                <td>Container of the item wrapper. It contains navigation buttons, items and caption content.</td>
                            </tr>
                            <tr>
                                <td>p-galleria-indicators</td>
                                <td>Container of the indicators. It contains indicator items.</td>
                            </tr>
                            <tr>
                                <td>p-galleria-thumbnail-content</td>
                                <td>Thumbnail content element.</td>
                            </tr>
                            <tr>
                                <td>p-galleria-thumbnail-container</td>
                                <td>Container of the thumbnail content. It contains navigation buttons and thumbnail items.</td>
                            </tr>
                            <tr>
                                <td>p-galleria-caption</td>
                                <td>Content of the item caption.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSubSection>

            <DocSubSection id="accessibility" label="Accessibility">
                <DevelopmentSection>
                    <h4>Screen Reader</h4>
                    <p>
                        Galleria uses <i>region</i> role and since any attribute is passed to the main container element, attributes such as <i>aria-label</i> and <i>aria-roledescription</i> can be used as well. The slides container has{' '}
                        <i>aria-live</i> attribute set as "polite" if galleria is not in autoplay mode, otherwise "off" would be the value in autoplay.
                    </p>

                    <p>
                        A slide has a <i>group</i> role with an aria-label that refers to the <i>aria.slideNumber</i> property of the <Link href="/locale">locale</Link> API. Similarly <i>aria.slide</i> is used as the <i>aria-roledescription</i> of
                        the item. Inactive slides are hidden from the readers with <i>aria-hidden</i>.
                    </p>

                    <p>
                        Next and Previous navigators are button elements with <i>aria-label</i> attributes referring to the <i>aria.nextPageLabel</i> and <i>aria.firstPageLabel</i> properties of the <Link href="/locale">locale</Link> API by default
                        respectively, you may still use your own aria roles and attributes as any valid attribute is passed to the button elements implicitly by using <i>nextButtonProps</i> and <i>prevButtonProps</i>.
                    </p>

                    <p>
                        Quick navigation elements and thumnbails follow the tab pattern. They are placed inside an element with a <i>tablist</i> role whereas each item has a <i>tab</i> role with <i>aria-selected</i> and <i>aria-controls</i>{' '}
                        attributes. The <i>aria-label</i> attribute of a quick navigation item refers to the <i>aria.pageLabel</i> of the <Link href="/locale">locale</Link> API. Current page is marked with <i>aria-current</i>.
                    </p>

                    <p>
                        In full screen mode, modal element uses <i>dialog</i> role with <i>aria-modal</i> enabled. The close button retrieves <i>aria-label</i> from the <i>aria.close</i> property of the <Link href="/locale">locale</Link> API.
                    </p>

                    <h4>Next/Prev Keyboard Support</h4>
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
                                    <td>Moves focus through interactive elements in the carousel.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>enter</i>
                                    </td>
                                    <td>Activates navigation.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>space</i>
                                    </td>
                                    <td>Activates navigation.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h4>Quick Navigation Keyboard Support</h4>
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
                                    <td>Moves focus through the active slide link.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>enter</i>
                                    </td>
                                    <td>Activates the focused slide link.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>space</i>
                                    </td>
                                    <td>Activates the focused slide link.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>right arrow</i>
                                    </td>
                                    <td>Moves focus to the next slide link.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>left arrow</i>
                                    </td>
                                    <td>Moves focus to the previous slide link.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>home</i>
                                    </td>
                                    <td>Moves focus to the first slide link.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>end</i>
                                    </td>
                                    <td>Moves focus to the last slide link.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </DevelopmentSection>
            </DocSubSection>
        </>
    );
}
