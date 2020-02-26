import React, { Component } from 'react';
import { GalleriaService } from '../service/GalleriaService';
import { Galleria } from '../../components/galleria/Galleria';
import { GalleriaSubmenu } from './GalleriaSubmenu';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { CodeHighlight } from '../codehighlight/CodeHighlight';
import AppContentContext from '../../AppContentContext';

export class GalleriaPreviewDemo extends Component {

    constructor() {
        super();

        this.state = {
            images: null
        };

        this.galleriaService = new GalleriaService();
        this.itemTemplate = this.itemTemplate.bind(this);
        this.previewTemplate = this.previewTemplate.bind(this);

        this.responsiveOptions = [
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
    }

    componentDidMount() {
        this.galleriaService.getImages().then(data => this.setState({ images: data }));
    }

    itemTemplate(item) {
        return (
            <div className="p-grid p-nogutter p-justify-center">
                <img src={`${item.thumbnailImageSrc}`} alt={item.alt} style={{ display: 'block' }} />
            </div>
        );
    }

    previewTemplate(item) {
        return <img src={`${item.previewImageSrc}`} alt={item.alt} style={{ width: '100%', display: 'block' }} />
    }

    render() {
        return (
            <div>
                <GalleriaSubmenu />

                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Galleria - Preview</h1>
                        <p></p>

                        <AppContentContext.Consumer>
                            {context => <button onClick={() => context.onChangelogBtnClick("galleria")} className="layout-changelog-button">{context.changelogText}</button>}
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Basic</h3>
                    <Galleria value={this.state.images} responsiveOptions={this.responsiveOptions} numVisible={5} circular={true}
                        previewItemTemplate={this.previewTemplate} thumbnailItemTemplate={this.itemTemplate} style={{maxWidth: '520px'}} />

                    <h3>Navigation Buttons</h3>
                    <Galleria value={this.state.images} responsiveOptions={this.responsiveOptions} numVisible={5} circular={true}
                        previewItemTemplate={this.previewTemplate} thumbnailItemTemplate={this.itemTemplate}
                        showPreviewNavButtons={true} style={{maxWidth: '520px'}} header="With Thumbnails"/>

                    <Galleria value={this.state.images} responsiveOptions={this.responsiveOptions} numVisible={5} circular={true}
                        previewItemTemplate={this.previewTemplate} thumbnailItemTemplate={this.itemTemplate}
                        showPreviewNavButtons={true} showThumbnails={false} style={{maxWidth: '520px', marginTop: '2em'}} header="Without Thumbnails"/>

                    <h3>Show Navigation Buttons on Preview Hover</h3>
                    <Galleria value={this.state.images} responsiveOptions={this.responsiveOptions} numVisible={5} circular={true}
                        previewItemTemplate={this.previewTemplate} thumbnailItemTemplate={this.itemTemplate}
                        showPreviewNavButtons={true} showNavButtonsOnPreviewHover={true} style={{maxWidth: '520px'}} header="With Thumbnails" />

                    <Galleria value={this.state.images} responsiveOptions={this.responsiveOptions} numVisible={5} circular={true}
                        previewItemTemplate={this.previewTemplate} thumbnailItemTemplate={this.itemTemplate}
                        showPreviewNavButtons={true} showNavButtonsOnPreviewHover={true} showThumbnails={false}
                        style={{maxWidth: '520px', marginTop: '2em'}} header="Without Thumbnails"/>

                    <h3>Advanced</h3>
                    <Galleria value={this.state.images} responsiveOptions={this.responsiveOptions} numVisible={5} circular={true}
                        previewItemTemplate={this.previewTemplate} thumbnailItemTemplate={this.itemTemplate}
                        showPreviewNavButtons={true} showNavButtonsOnPreviewHover={true} showThumbnails={false}
                        showIndicators={true} showIndicatorsOnPreview={true} changePreviewOnIndicatorHover={true}
                        style={{maxWidth: '520px'}}/>
                </div>

                <GalleriaPreviewDemoDoc></GalleriaPreviewDemoDoc>
            </div>
        );
    }
}

export class GalleriaPreviewDemoDoc extends Component {

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <div className="content-section documentation">
                <TabView>
                    <TabPanel header="Source">
                        <CodeHighlight className="language-javascript">
                            {`
import React, { Component } from 'react';
import { GalleriaService } from '../service/GalleriaService';
import { Galleria } from '../../components/galleria/Galleria';

export class GalleriaPreviewDemo extends Component {

    constructor() {
        super();

        this.state = {
            images: null
        };

        this.galleriaService = new GalleriaService();
        this.itemTemplate = this.itemTemplate.bind(this);
        this.previewTemplate = this.previewTemplate.bind(this);

        this.responsiveOptions = [
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
    }

    componentDidMount() {
        this.galleriaService.getImages().then(data => this.setState({ images: data }));
    }

    itemTemplate(item) {
        return (
            <div className="car-details">
                <div className="p-grid p-nogutter p-justify-center">
                    <img src={\`\${item.thumbnailImageSrc}\`} alt={item.alt} style={{ display: 'block' }} />
                </div>
            </div>
        );
    }

    previewTemplate(item) {
        return <img src={\`\${item.previewImageSrc}\`} alt={item.alt} style={{ width: '100%', display: 'block' }} />
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Galleria - Preview</h1>
                        <p></p>

                        <AppContentContext.Consumer>
                            {context => <button onClick={() => context.onChangelogBtnClick("galleria")} className="layout-changelog-button">{context.changelogText}</button>}
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Basic</h3>
                    <Galleria value={this.state.images} responsiveOptions={this.responsiveOptions} numVisible={5} circular={true}
                        previewItemTemplate={this.previewTemplate} thumbnailItemTemplate={this.itemTemplate} style={{maxWidth: '520px'}} />

                    <h3>Navigation Buttons</h3>
                    <Galleria value={this.state.images} responsiveOptions={this.responsiveOptions} numVisible={5} circular={true}
                        previewItemTemplate={this.previewTemplate} thumbnailItemTemplate={this.itemTemplate}
                        showPreviewNavButtons={true} style={{maxWidth: '520px'}} header="With Thumbnails"/>

                    <Galleria value={this.state.images} responsiveOptions={this.responsiveOptions} numVisible={5} circular={true}
                        previewItemTemplate={this.previewTemplate} thumbnailItemTemplate={this.itemTemplate}
                        showPreviewNavButtons={true} showThumbnails={false} style={{maxWidth: '520px', marginTop: '2em'}} header="Without Thumbnails"/>

                    <h3>Show Navigation Buttons on Preview Hover</h3>
                    <Galleria value={this.state.images} responsiveOptions={this.responsiveOptions} numVisible={5} circular={true}
                        previewItemTemplate={this.previewTemplate} thumbnailItemTemplate={this.itemTemplate}
                        showPreviewNavButtons={true} showNavButtonsOnPreviewHover={true} style={{maxWidth: '520px'}} header="With Thumbnails" />

                    <Galleria value={this.state.images} responsiveOptions={this.responsiveOptions} numVisible={5} circular={true}
                        previewItemTemplate={this.previewTemplate} thumbnailItemTemplate={this.itemTemplate}
                        showPreviewNavButtons={true} showNavButtonsOnPreviewHover={true} showThumbnails={false}
                        style={{maxWidth: '520px', marginTop: '2em'}} header="Without Thumbnails"/>

                    <h3>Advanced</h3>
                    <Galleria value={this.state.images} responsiveOptions={this.responsiveOptions} numVisible={5} circular={true}
                        previewItemTemplate={this.previewTemplate} thumbnailItemTemplate={this.itemTemplate}
                        showPreviewNavButtons={true} showNavButtonsOnPreviewHover={true} showThumbnails={false}
                        showIndicators={true} showIndicatorsOnPreview={true} changePreviewOnIndicatorHover={true}
                        style={{maxWidth: '520px'}}/>
                </div>
            </div>
        );
    }
}

`}
                        </CodeHighlight>
                    </TabPanel>
                </TabView>
            </div>
        )
    }
}
