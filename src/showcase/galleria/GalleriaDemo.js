import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import { GalleriaService } from '../service/GalleriaService';
import { Button } from '../../components/button/Button';
import { Galleria } from '../../components/galleria/Galleria';
import { GalleriaSubmenu } from './GalleriaSubmenu';
import { TabView,TabPanel } from '../../components/tabview/TabView';
import { CodeHighlight } from '../codehighlight/CodeHighlight';
import AppContentContext from '../../AppContentContext';

export class GalleriaDemo extends Component {

    constructor() {
        super();

        this.state = {
            images: null,
            activeIndex: 0,
            showThumbnails: false,
            isAutoPlayActive: true,
            isPreviewFullScreen: false
        };

        this.galleriaService = new GalleriaService();
        this.itemTemplate = this.itemTemplate.bind(this);
        this.previewTemplate = this.previewTemplate.bind(this);
        this.onThumbnailChange = this.onThumbnailChange.bind(this);
        this.onItemChange = this.onItemChange.bind(this);
        this.onFullScreenChange = this.onFullScreenChange.bind(this);
    }

    componentDidMount() {
        this.galleriaService.getImages().then(data => this.setState({ images: data }));
        this.bindDocumentListeners();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.isAutoPlayActive !== this.galleria.isAutoPlayActive()) {
            this.setState({
                isAutoPlayActive: this.galleria.isAutoPlayActive()
            });
        }
    }

    componentWillUnmount() {
        this.unbindDocumentListeners();
    }

    onThumbnailChange(event) {
        this.setState({ activeIndex: event.index });
    }

    onItemChange(event) {
        this.setState({ activeIndex: event.index });
    }

    toggleFullScreen() {
        if (this.state.isPreviewFullScreen) {
            this.closePreviewFullScreen();
        }
        else {
            this.openPreviewFullScreen();
        }
    }

    onFullScreenChange() {
        this.setState({ isPreviewFullScreen: !this.state.isPreviewFullScreen });
    }

    openPreviewFullScreen() {
        let elem = ReactDOM.findDOMNode(this.galleria);
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        }
        else if (elem.mozRequestFullScreen) { /* Firefox */
            elem.mozRequestFullScreen();
        }
        else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
            elem.webkitRequestFullscreen();
        }
        else if (elem.msRequestFullscreen) { /* IE/Edge */
            elem.msRequestFullscreen();
        }
    }

    closePreviewFullScreen() {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
        else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        }
        else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
        else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }

    bindDocumentListeners() {
        document.addEventListener("fullscreenchange", this.onFullScreenChange);
        document.addEventListener("mozfullscreenchange", this.onFullScreenChange);
        document.addEventListener("webkitfullscreenchange", this.onFullScreenChange);
        document.addEventListener("msfullscreenchange", this.onFullScreenChange);
    }

    unbindDocumentListeners() {
        document.removeEventListener("fullscreenchange", this.onFullScreenChange);
        document.removeEventListener("mozfullscreenchange", this.onFullScreenChange);
        document.removeEventListener("webkitfullscreenchange", this.onFullScreenChange);
        document.removeEventListener("msfullscreenchange", this.onFullScreenChange);
    }

    itemTemplate(item) {
        return (
            <div className="p-grid p-nogutter p-justify-center">
                <img src={`${item.thumbnailImageSrc}`} alt={item.alt} style={{ display: 'block' }} />
            </div>
        );
    }

    previewTemplate(item) {
        if (this.state.isPreviewFullScreen) {
            return <img src={`${item.previewImageSrc}`} alt={item.alt} />
        }

        return <img src={`${item.previewImageSrc}`} alt={item.alt} style={{ width: '100%', display: 'block' }} />
    }

    renderFooter() {
        let autoPlayClassName = classNames('pi', {
            'pi-play': !this.state.isAutoPlayActive,
            'pi-pause': this.state.isAutoPlayActive
        });

        let fullScreenClassName = classNames('pi', {
            'pi-window-maximize': !this.state.isPreviewFullScreen,
            'pi-window-minimize': this.state.isPreviewFullScreen
        });

        return (
            <div className="custom-galleria-footer">
                <Button icon="pi pi-list" onClick={() => this.setState({ showThumbnails: !this.state.showThumbnails })} />
                <Button icon={autoPlayClassName} onClick={() => {
                    if (!this.state.isAutoPlayActive) {
                        this.galleria.startSlideShow();
                        this.setState({ isAutoPlayActive: true });
                    }
                    else {
                        this.galleria.stopSlideShow();
                        this.setState({ isAutoPlayActive: false });
                    }
                }} />
                {
                    this.state.images && (
                        <span>
                            <span>{this.state.activeIndex + 1}/{this.state.images.length}</span>
                            <span className="title">{this.state.images[this.state.activeIndex].title}</span>
                            <span>{this.state.images[this.state.activeIndex].alt}</span>
                        </span>
                    )
                }
                <Button icon={fullScreenClassName} onClick={() => this.toggleFullScreen()} />
            </div>
        );
    }

    render() {
        const footer = this.renderFooter();
        const galleriaClassName = classNames('custom-galleria', {
            'preview-fullscreen': this.state.isPreviewFullScreen
        });

        return (
            <div className="galleria-demo">
                <GalleriaSubmenu />

                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Galleria</h1>
                        <p>Galleria is a content gallery component.</p>

                        <AppContentContext.Consumer>
                            {context => <button onClick={() => context.onChangelogBtnClick("galleria")} className="layout-changelog-button">{context.changelogText}</button>}
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation">
                    <Galleria ref={(el) => this.galleria = el} value={this.state.images} activeIndex={this.state.activeIndex} onItemChange={this.onItemChange}
                        showThumbnails={this.state.showThumbnails} showPreviewNavButtons={true} showNavButtonsOnPreviewHover={true}
                        numVisible={5} circular={true} autoPlay={true} transitionInterval={3000}
                        previewItemTemplate={this.previewTemplate} thumbnailItemTemplate={this.itemTemplate} footer={footer}
                        style={{ maxWidth: '520px' }} className={galleriaClassName} />
                </div>

                <GalleriaDoc />
            </div>
        );
    }
}

export class GalleriaDoc extends Component {

    shouldComponentUpdate(){
        return false;
    }

    render() {
        return (
            <div className="content-section documentation">
                <TabView>
                    <TabPanel header="Documentation">
                        <h3>Import</h3>
<CodeHighlight className="language-javascript">
{`
import {Galleria} from 'primereact/galleria';

`}
</CodeHighlight>

            <h3>Getting Started</h3>
            <p>Galleria requires a value as an array of objects and can either be used as a Controlled or Uncontrolled component.</p>

<CodeHighlight className="language-jsx">
{`
<Galleria value={this.state.images} previewItemTemplate={this.previewTemplate} thumbnailItemTemplate={this.itemTemplate}></Galleria>

`}
</CodeHighlight>
<CodeHighlight className="language-javascript">
{`
constructor() {
    super();

    this.state = {
        images: null
    };

    this.galleriaService = new GalleriaService();
    this.itemTemplate = this.itemTemplate.bind(this);
    this.previewTemplate = this.previewTemplate.bind(this);
    this.onItemChange = this.onItemChange.bind(this)
}

componentDidMount() {
    this.galleriaService.getImages().then(data => this.setState({ images: data }));
}

onItemChange(event) {
    this.setState({ activeIndex: event.index });
}

itemTemplate(item) {
    return (
        <div className="p-grid p-nogutter p-justify-center">
            <img src={\`\${item.thumbnailImageSrc}\`} alt={item.alt} />
        </div>
    );
}

previewTemplate(item) {
    return <img src={\`\${item.previewImageSrc}\`} alt={item.alt} style={{ width: '100%' }} />
}

`}
</CodeHighlight>

            <h3>Items per page</h3>
            <p>Number of items per page is defined using the <i>numVisible</i> property.</p>
            <CodeHighlight className="language-jsx">
{`
<Galleria value={this.state.images} previewItemTemplate={this.previewTemplate} thumbnailItemTemplate={this.itemTemplate}
    numVisible={5}></Galleria>

`}
</CodeHighlight>

            <h3>Responsive</h3>
            <p>For responsive design, <i>numVisible</i> can be defined using the <i>responsiveOptions</i> property that should be an array of
            objects whose breakpoint defines the max-width to apply the settings.</p>
            <CodeHighlight className="language-jsx">
{`
<Galleria value={this.state.images} previewItemTemplate={this.previewTemplate} thumbnailItemTemplate={this.itemTemplate}
    numVisible={5} responsiveOptions={responsiveOptions}></Galleria>

`}
</CodeHighlight>

<CodeHighlight className="language-javascript">
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

            <h3>Header and Footer</h3>
            <p>Custom content projection is available using the <i>header</i> and <i>footer</i> properties.</p>
            <CodeHighlight className="language-jsx">
{`
<Galleria value={this.state.images} previewItemTemplate={this.previewTemplate} thumbnailItemTemplate={this.itemTemplate}
    header={<h1>Header</h1>}></Galleria>

`}
</CodeHighlight>

            <h3>Controlled vs Uncontrolled</h3>
            <p>In controlled mode, <i>activeIndex</i> and <i>onItemChange</i> properties need to be defined to control the first visible item.</p>

<CodeHighlight className="language-jsx">
{`
<Galleria value={this.state.images} previewItemTemplate={this.previewTemplate} thumbnailItemTemplate={this.itemTemplate}
    activeIndex={this.state.activeIndex} onItemChange={(e) => this.setState({ activeIndex: e.index })}></Galleria>

`}
</CodeHighlight>

            <h3>Uncontrolled</h3>
            <p>In uncontrolled mode, no additional properties are required. Initial item can be provided using the <i>activeItemIndex</i> property in uncontrolled mode however it is evaluated at initial rendering and ignored in further updates. If you programmatically
                need to update the first visible item index, prefer to use the component as controlled.</p>

<CodeHighlight className="language-jsx">
{`
<Galleria value={this.state.images} previewItemTemplate={this.previewTemplate} thumbnailItemTemplate={this.itemTemplate}></Galleria>

`}
</CodeHighlight>

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
                            <td>previewItemTemplate</td>
                            <td>function</td>
                            <td>null</td>
                            <td>Function that gets an item in the value and returns the content for preview item.</td>
                        </tr>
                        <tr>
                            <td>thumbnailItemTemplate</td>
                            <td>function</td>
                            <td>null</td>
                            <td>Function that gets an item in the value and returns the content for thumbnail item.</td>
                        </tr>
                        <tr>
                            <td>indicatorItemTemplate</td>
                            <td>function</td>
                            <td>null</td>
                            <td>Function that gets an item in the value and returns the content for indicator item.</td>
                        </tr>
                        <tr>
                            <td>captionTemplate</td>
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
                            <td>showPreviewNavButtons</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>Whether to display navigation buttons in preview container.</td>
                        </tr>
                        <tr>
                            <td>showThumbnailNavButtons</td>
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
                            <td>showIndicatorsOnPreview</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>When enabled, indicator container is displayed on preview container.</td>
                        </tr>
                        <tr>
                            <td>showNavButtonsOnPreviewHover</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>Whether to display navigation buttons on preview container's hover.</td>
                        </tr>
                        <tr>
                            <td>changePreviewOnIndicatorHover</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>When enabled, preview item is changed on indicator item's hover.</td>
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
                            <td>onItemChange</td>
                            <td>event.index = index of the new item.</td>
                            <td>Callback to invoke after changing item.</td>
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
                            <td>p-galleria-preview-content</td>
                            <td>Preview content element. It contains preview and indicator containers.</td>
                        </tr>
                        <tr>
                            <td>p-galleria-preview-container</td>
                            <td>Container of the preview content. It contains navigation buttons, preview item and caption content.</td>
                        </tr>
                        <tr>
                            <td>p-galleria-indicator-container</td>
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
                            <td>p-galleria-preview-caption</td>
                            <td>Content of the preview caption.</td>
                        </tr>
                    </tbody>
                </table>

                <h3>Dependencies</h3>
                <p>None.</p>
            </div>

            </TabPanel>

            <TabPanel header="Source">
                <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/galleria" className="btn-viewsource" target="_blank" rel="noopener noreferrer">
                    <span>View on GitHub</span>
                </a>
<CodeHighlight className="language-javascript">
{`
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import { GalleriaService } from '../service/GalleriaService';
import { Button } from '../../components/button/Button';
import { Galleria } from '../../components/galleria/Galleria';

export class GalleriaDemo extends Component {

    constructor() {
        super();

        this.state = {
            images: null,
            activeIndex: 0,
            showThumbnails: false,
            isAutoPlayActive: true,
            isPreviewFullScreen: false
        };

        this.galleriaService = new GalleriaService();
        this.itemTemplate = this.itemTemplate.bind(this);
        this.previewTemplate = this.previewTemplate.bind(this);
        this.onThumbnailChange = this.onThumbnailChange.bind(this);
        this.onItemChange = this.onItemChange.bind(this);
        this.onFullScreenChange = this.onFullScreenChange.bind(this);
    }

    componentDidMount() {
        this.galleriaService.getImages().then(data => this.setState({ images: data }));
        this.bindDocumentListeners();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.isAutoPlayActive !== this.galleria.isAutoPlayActive()) {
            this.setState({
                isAutoPlayActive: this.galleria.isAutoPlayActive()
            });
        }
    }

    componentWillUnmount() {
        this.unbindDocumentListeners();
    }

    onThumbnailChange(event) {
        this.setState({ activeIndex: event.index });
    }

    onItemChange(event) {
        this.setState({ activeIndex: event.index });
    }

    toggleFullScreen() {
        if (this.state.isPreviewFullScreen) {
            this.closePreviewFullScreen();
        }
        else {
            this.openPreviewFullScreen();
        }
    }

    onFullScreenChange() {
        this.setState({ isPreviewFullScreen: !this.state.isPreviewFullScreen });
    }

    openPreviewFullScreen() {
        let elem = ReactDOM.findDOMNode(this.galleria);
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        }
        else if (elem.mozRequestFullScreen) { /* Firefox */
            elem.mozRequestFullScreen();
        }
        else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
            elem.webkitRequestFullscreen();
        }
        else if (elem.msRequestFullscreen) { /* IE/Edge */
            elem.msRequestFullscreen();
        }
    }

    closePreviewFullScreen() {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
        else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        }
        else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
        else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }

    bindDocumentListeners() {
        document.addEventListener("fullscreenchange", this.onFullScreenChange);
        document.addEventListener("mozfullscreenchange", this.onFullScreenChange);
        document.addEventListener("webkitfullscreenchange", this.onFullScreenChange);
        document.addEventListener("msfullscreenchange", this.onFullScreenChange);
    }

    unbindDocumentListeners() {
        document.removeEventListener("fullscreenchange", this.onFullScreenChange);
        document.removeEventListener("mozfullscreenchange", this.onFullScreenChange);
        document.removeEventListener("webkitfullscreenchange", this.onFullScreenChange);
        document.removeEventListener("msfullscreenchange", this.onFullScreenChange);
    }

    itemTemplate(item) {
        return (
            <div className="p-grid p-nogutter p-justify-center">
                <img src={\`\${item.thumbnailImageSrc}\`} alt={item.alt} style={{ display: 'block' }} />
            </div>
        );
    }

    previewTemplate(item) {
        if (this.state.isPreviewFullScreen) {
            return <img src={\`\${item.previewImageSrc}\`} alt={item.alt} />
        }

        return <img src={\`\${item.previewImageSrc}\`} alt={item.alt} style={{ width: '100%', display: 'block' }} />
    }

    renderFooter() {
        let autoPlayClassName = classNames('pi', {
            'pi-play': !this.state.isAutoPlayActive,
            'pi-pause': this.state.isAutoPlayActive
        });

        let fullScreenClassName = classNames('pi', {
            'pi-window-maximize': !this.state.isPreviewFullScreen,
            'pi-window-minimize': this.state.isPreviewFullScreen
        });

        return (
            <div className="custom-galleria-footer">
                <Button icon="pi pi-list" onClick={() => this.setState({ showThumbnails: !this.state.showThumbnails })} />
                <Button icon={autoPlayClassName} onClick={() => {
                    if (!this.state.isAutoPlayActive) {
                        this.galleria.startSlideShow();
                        this.setState({ isAutoPlayActive: true });
                    }
                    else {
                        this.galleria.stopSlideShow();
                        this.setState({ isAutoPlayActive: false });
                    }
                }} />
                {
                    this.state.images && (
                        <span>
                            <span>{this.state.activeIndex + 1}/{this.state.images.length}</span>
                            <span className="title">{this.state.images[this.state.activeIndex].title}</span>
                            <span>{this.state.images[this.state.activeIndex].alt}</span>
                        </span>
                    )
                }
                <Button icon={fullScreenClassName} onClick={() => this.toggleFullScreen()} />
            </div>
        );
    }

    render() {
        const footer = this.renderFooter();
        const galleriaClassName = classNames('custom-galleria', {
            'preview-fullscreen': this.state.isPreviewFullScreen
        });

        return (
            <div className="galleria-demo">
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Galleria</h1>
                        <p>Galleria is a content gallery component.</p>

                        <AppContentContext.Consumer>
                            {context => <button onClick={() => context.onChangelogBtnClick("galleria")} className="layout-changelog-button">{context.changelogText}</button>}
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation">
                    <Galleria ref={(el) => this.galleria = el} value={this.state.images} activeIndex={this.state.activeIndex} onItemChange={this.onItemChange}
                        showThumbnails={this.state.showThumbnails} showPreviewNavButtons={true} showNavButtonsOnPreviewHover={true}
                        numVisible={5} circular={true} autoPlay={true} transitionInterval={3000}
                        previewItemTemplate={this.previewTemplate} thumbnailItemTemplate={this.itemTemplate} footer={footer}
                        style={{ maxWidth: '520px' }} className={galleriaClassName} />
                </div>
            </div>
        );
    }
}

`}
</CodeHighlight>

<CodeHighlight className="language-javascript">
{`
// SCSS codes

.custom-galleria {
    .p-galleria-content {
        height: 95%;
        overflow: hidden;
        position: relative;

        .p-galleria-thumbnail-content {
            position: absolute;
            width: 100%;
            bottom: 0;
            background-image: linear-gradient(180deg, rgba(0,0,0,0.00) 0%, rgba(0,0,0,0.50) 70%);

            .p-galleria-thumbnail-container {
                .p-galleria-thumbnail-prev,
                .p-galleria-thumbnail-next {
                    background-color: transparent;
                    color: #ffffff;
                    border: 0 none;
                    font-size: 1.2em;

                    &:hover {
                        color: var(--primaryColor);
                    }
                }

                .p-galleria-thumbnail-items-content {
                    .p-galleria-thumbnail-items-container {
                        .p-galleria-thumbnail-item {
                            opacity: .6;

                            &.p-galleria-thumbnail-item-current {
                                opacity: 1;
                            }
                        }
                    }
                }
            }
        }
    }

    .p-galleria-footer {
        padding: 0;
        background-color: rgba(0, 0, 0, .9);
        border: rgba(0, 0, 0, .9);

        .custom-galleria-footer {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: stretch;
            color: #ffffff;

            > button {
                background-color: transparent;
                padding: .1em .4em;
                border: 0 none;
                border-radius: 0;
                color: #ffffff;

                &:hover {
                    background-color: transparent;
                }
            }

            > span {
                flex-grow: 1;

                > span {
                    font-size: .9em;
                    padding-left: .829em;

                    &.title {
                        font-weight: bold;
                    }
                }
            }
        }
    }

    &.preview-fullscreen {
        .p-galleria-preview-container {
            .p-galleria-preview-nav-button {
                top: 50%;
                height: 20em;
                width: 4em;
                margin-top: -10em;
            }
        }
    }
}
                        `}
                        </CodeHighlight>
                    </TabPanel>
                </TabView>
            </div>
        );
    }
}
