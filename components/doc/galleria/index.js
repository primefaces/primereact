import React, { memo } from 'react';
import Link from 'next/link';
import { TabView, TabPanel } from '../../lib/tabview/TabView';
import { CodeHighlight } from '../common/codehighlight';
import { useLiveEditorTabs } from '../common/liveeditor';
import { DevelopmentSection } from '../common/developmentsection';

const GalleriaDoc = memo(() => {

    const sources = {
        'class': {
            tabName: 'Class Source',
            content: `
import React, { Component } from 'react';
import { PhotoService } from '../service/PhotoService';
import { Galleria } from 'primereact/galleria';

export class GalleriaDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            images: null
        };

        this.galleriaService = new PhotoService();
        this.itemTemplate = this.itemTemplate.bind(this);
        this.thumbnailTemplate = this.thumbnailTemplate.bind(this);
    }

    componentDidMount() {
        this.galleriaService.getImages().then(data => this.setState({ images: data }));
    }

    itemTemplate(item) {
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%' }} />
    }

    thumbnailTemplate(item) {
        return <img src={item.thumbnailImageSrc} alt={item.alt} />
    }

    render() {
        return (
            <div>
                <div className="card">
                    <Galleria value={this.state.images} responsiveOptions={this.responsiveOptions} numVisible={5} style={{maxWidth: '640px'}}
                        item={this.itemTemplate} thumbnail={this.thumbnailTemplate} />
                </div>
            </div>
        );
    }
            `
    },
    'hooks': {
        tabName: 'Hooks Source',
        content: `
import React, { useState, useEffect } from 'react';
import { PhotoService } from '../service/PhotoService';
import { Galleria } from 'primereact/galleria';

const GalleriaDemo = () => {

    const [images, setImages] = useState(null);
    const galleriaService = new PhotoService();

    useEffect(() => {
        galleriaService.getImages().then(data => setImages(data));
    }, [])

    const responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];

    const itemTemplate = (item) => {
        return <img src={\`images/\${item.itemImageSrc}\`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={item.alt} style={{ width: '100%' }} />
    }

    const thumbnailTemplate = (item) => {
        return <img src={\`images/\${item.thumbnailImageSrc}\`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={item.alt} />
    }

    return (
        <div>
            <div className="card">
                <Galleria value={images} responsiveOptions={responsiveOptions} numVisible={5} style={{ maxWidth: '640px' }}
                    item={itemTemplate} thumbnail={thumbnailTemplate} />
            </div>
        </div>
    );
}
            `
    },
    'ts': {
        tabName: 'TS Source',
        content: `
import React, { useState, useEffect } from 'react';
import { PhotoService } from '../service/PhotoService';
import { Galleria } from 'primereact/galleria';

const GalleriaDemo = () => {

    const [images, setImages] = useState(null);
    const galleriaService = new PhotoService();

    useEffect(() => {
        galleriaService.getImages().then(data => setImages(data));
    }, [])

    const responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];

    const itemTemplate = (item) => {
        return <img src={\`images/\${item.itemImageSrc}\`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={item.alt} style={{ width: '100%' }} />
    }

    const thumbnailTemplate = (item) => {
        return <img src={\`images/\${item.thumbnailImageSrc}\`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={item.alt} />
    }

    return (
        <div>
            <div className="card">
                <Galleria value={images} responsiveOptions={responsiveOptions} numVisible={5} style={{ maxWidth: '640px' }}
                    item={itemTemplate} thumbnail={thumbnailTemplate} />
            </div>
        </div>
    );
}
            `
    },
    'browser': {
        tabName: 'Browser Source',
        imports: `
        <script src="./PhotoService.js"></script>
        <script src="https://unpkg.com/primereact/core/core.min.js"></script>
        <script src="https://unpkg.com/primereact/galleria/galleria.min.js"></script>`,
        content: `
const { useEffect, useState, useRef } = React;
const { Galleria } = primereact.galleria;


const GalleriaDemo = () => {

    const [images, setImages] = useState(null);
    const galleriaService = new PhotoService();

    useEffect(() => {
        galleriaService.getImages().then(data => setImages(data));
    }, [])

    const responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];

    const itemTemplate = (item) => {
        return <img src={\`images/\${item.itemImageSrc}\`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={item.alt} style={{ width: '100%' }} />
    }

    const thumbnailTemplate = (item) => {
        return <img src={\`images/\${item.thumbnailImageSrc}\`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={item.alt} />
    }

    return (
        <div>
            <div className="card">
                <Galleria value={images} responsiveOptions={responsiveOptions} numVisible={5} style={{ maxWidth: '640px' }}
                    item={itemTemplate} thumbnail={thumbnailTemplate} />
            </div>
        </div>
    );
}
            `
    }
}

    return (
        <div className="content-section documentation" id="app-doc">
            <TabView>
                <TabPanel header="Documentation">
                    <h5>Import via Module</h5>
<CodeHighlight lang="js">
{`
import { Galleria } from 'primereact/galleria';
`}
</CodeHighlight>

                    <h5>Import via CDN</h5>
<CodeHighlight>
{`
<script src="https://unpkg.com/primereact/core/core.min.js"></script>
<script src="https://unpkg.com/primereact/galleria/galleria.min.js"></script>
`}
</CodeHighlight>

                    <h5>Getting Started</h5>
                    <p>Galleria requires a value as an array of objects and can either be used as a Controlled or Uncontrolled component.</p>

<CodeHighlight>
{`
<Galleria value={images} item={itemTemplate} thumbnail={thumbnailTemplate}></Galleria>
`}
</CodeHighlight>
<CodeHighlight lang="js">
{`
const itemTemplate = (item) => {
    // custom item content
}

const thumbnailTemplate = (item) => {
    // custom thumbnail content
}
`}
</CodeHighlight>

                    <h5>Items per page</h5>
                    <p>Number of items per page is defined using the <i>numVisible</i> property.</p>
<CodeHighlight>
{`
<Galleria value={images} item={itemTemplate} thumbnail={thumbnailTemplate}
    numVisible={5}></Galleria>
`}
</CodeHighlight>

                    <h5>Responsive</h5>
                    <p>For responsive design, <i>numVisible</i> can be defined using the <i>responsiveOptions</i> property that should be an array of
                    objects whose breakpoint defines the max-width to apply the settings.</p>
<CodeHighlight>
{`
<Galleria value={images} item={itemTemplate} thumbnail={thumbnailTemplate}
    numVisible={5} responsiveOptions={responsiveOptions}></Galleria>
`}
</CodeHighlight>

<CodeHighlight lang="js">
{`
const responsiveOptions = [
    {
        breakpoint: '1024px',
        numVisible: 5
    },
    {
        breakpoint: '768px',
        numVisible: 3
    },
    {
        breakpoint: '560px',
        numVisible: 1
    }
];
`}
</CodeHighlight>

                    <h5>Header and Footer</h5>
                    <p>Custom content projection is available using the <i>header</i> and <i>footer</i> properties.</p>
<CodeHighlight>
{`
<Galleria value={images} item={itemTemplate} thumbnail={thumbnailTemplate}
    header={<h1>Header</h1>}></Galleria>

`}
</CodeHighlight>

                    <h5>Controlled vs Uncontrolled</h5>
                    <p>In controlled mode, <i>activeIndex</i> and <i>onItemChange</i> properties need to be defined to control the first visible item.</p>

<CodeHighlight>
{`
<Galleria value={images} item={itemTemplate} thumbnail={thumbnailTemplate}
    activeIndex={activeIndex} onItemChange={(e) => setActiveIndex(e.index)}></Galleria>
`}
</CodeHighlight>

                    <h5>Uncontrolled</h5>
                    <p>In uncontrolled mode, no additional properties are required. Initial item can be provided using the <i>activeItemIndex</i> property in uncontrolled mode however it is evaluated at initial rendering and ignored in further updates. If you programmatically
                        need to update the first visible item index, prefer to use the component as controlled.</p>

<CodeHighlight>
{`
<Galleria value={images} item={itemTemplate} thumbnail={thumbnailTemplate}></Galleria>
`}
</CodeHighlight>

                    <h5>Properties</h5>
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
                                    <td>The properties of <a href="https://reactcommunity.org/react-transition-group/css-transition" rel="noopener noreferrer" target="_blank">CSSTransition</a> can be customized, except for "nodeRef" and "in" properties.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h5>Events</h5>
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

                    <h5>Styling</h5>
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

                    <h5>Accessibility</h5>
                    <DevelopmentSection>
                        <h6>Screen Reader</h6>
                        <p>Galleria uses <i>region</i> role and since any attribute is passed to the main container element, attributes such as <i>aria-label</i> and <i>aria-roledescription</i> can be used as well. The slides container has <i>aria-live</i> attribute 
                        set as "polite" if galleria is not in autoplay mode, otherwise "off" would be the value in autoplay.</p>

                        <p>A slide has a <i>group</i> role with an aria-label that refers to the <i>aria.slideNumber</i> property of the <Link href="/locale">locale</Link> API. Similarly <i>aria.slide</i> is used as the <i>aria-roledescription</i> of the item.
                        Inactive slides are hidden from the readers with <i>aria-hidden</i>.</p>

                        <p>Next and Previous navigators are button elements with <i>aria-label</i> attributes referring to the <i>aria.nextPageLabel</i> and <i>aria.firstPageLabel</i> properties of the <Link href="/locale">locale</Link> API by default respectively, 
                        you may still use your own aria roles and attributes as any valid attribute is passed to the button elements implicitly by using <i>nextButtonProps</i> and <i>prevButtonProps</i>.</p>

                        <p>Quick navigation elements and thumnbails follow the tab pattern. They are placed inside an element with a <i>tablist</i> role whereas each item has a <i>tab</i> role with <i>aria-selected</i> and <i>aria-controls</i> attributes.
                        The <i>aria-label</i> attribute of a quick navigation item refers to the <i>aria.pageLabel</i>  of the <Link href="/locale">locale</Link> API. Current page is marked with <i>aria-current</i>.</p>

                        <p>In full screen mode, modal element uses <i>dialog</i> role with <i>aria-modal</i> enabled. The close button retrieves <i>aria-label</i> from the <i>aria.close</i> property of the <Link href="/locale">locale</Link> API.</p>

                        <h6>Next/Prev Keyboard Support</h6>
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
                                        <td><i>tab</i></td>
                                        <td>Moves focus through interactive elements in the carousel.</td>
                                    </tr>
                                    <tr>
                                        <td><i>enter</i></td>
                                        <td>Activates navigation.</td>
                                    </tr>
                                    <tr>
                                        <td><i>space</i></td>
                                        <td>Activates navigation.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h6>Quick Navigation Keyboard Support</h6>
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
                                        <td><i>tab</i></td>
                                        <td>Moves focus through the active slide link.</td>
                                    </tr>
                                    <tr>
                                        <td><i>enter</i></td>
                                        <td>Activates the focused slide link.</td>
                                    </tr>
                                    <tr>
                                        <td><i>space</i></td>
                                        <td>Activates the focused slide link.</td>
                                    </tr>
                                    <tr>
                                        <td><i>right arrow</i></td>
                                        <td>Moves focus to the next slide link.</td>
                                    </tr>
                                    <tr>
                                        <td><i>left arrow</i></td>
                                        <td>Moves focus to the previous slide link.</td>
                                    </tr>
                                    <tr>
                                        <td><i>home</i></td>
                                        <td>Moves focus to the first slide link.</td>
                                    </tr>
                                    <tr>
                                        <td><i>end</i></td>
                                        <td>Moves focus to the last slide link.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </DevelopmentSection>

                    <h5>Dependencies</h5>
                    <p>None.</p>
                </TabPanel>
                {
                    useLiveEditorTabs({ name: 'GalleriaDemo', sources: sources, service: 'PhotoService', data: 'photos' })
                }
            </TabView>
        </div>
    );
})

export default GalleriaDoc;
