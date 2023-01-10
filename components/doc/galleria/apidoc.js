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
        </>
    );
}
