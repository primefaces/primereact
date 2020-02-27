import React, { Component } from 'react';
import { GalleriaService } from '../service/GalleriaService';
import { Galleria } from '../../components/galleria/Galleria';
import { GalleriaSubmenu } from './GalleriaSubmenu';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { CodeHighlight } from '../codehighlight/CodeHighlight';
import AppContentContext from '../../AppContentContext';

export class GalleriaIndicatorDemo extends Component {

    constructor() {
        super();

        this.state = {
            images: null,
            images2: null
        };

        this.galleriaService = new GalleriaService();
        this.itemTemplate = this.itemTemplate.bind(this);
        this.previewTemplate = this.previewTemplate.bind(this);
        this.indicatorItemTemplate = this.indicatorItemTemplate.bind(this);
        this.indicatorItemTemplate2 = this.indicatorItemTemplate2.bind(this);

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
        this.galleriaService.getImages().then(data => this.setState({
            images: data,
            images2: data.slice(0, 5)
        }));
    }

    itemTemplate(item) {
        return (
            <div className="car-details">
                <div className="p-grid p-nogutter p-justify-center">
                    <img src={`${item.thumbnailImageSrc}`} alt={item.alt} style={{ display: 'block' }}/>
                </div>
            </div>
        );
    }

    previewTemplate(item) {
        return <img src={`${item.previewImageSrc}`} alt={item.alt} style={{ width: '100%', display: 'block' }} />
    }

    indicatorItemTemplate(index) {
        return (
            <div>
                {index + 1}
            </div>
        )
    }

    indicatorItemTemplate2(index) {
        let item = this.state.images2[index];
        return (
            <div style={{padding: '.2em', cursor: 'pointer'}}>
                <img src={`${item.thumbnailImageSrc}`} alt={item.alt} style={{ display: 'block' }}/>
            </div>
        )
    }

    render() {
        return (
            <div className="galleria-demo">
                <GalleriaSubmenu />

                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Galleria - Indicator</h1>
                        <p></p>

                        <AppContentContext.Consumer>
                            {context => <button onClick={() => context.onChangelogBtnClick("galleria")} className="layout-changelog-button">{context.changelogText}</button>}
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Basic</h3>
                    <Galleria value={this.state.images} responsiveOptions={this.responsiveOptions} numVisible={5}
                        previewItemTemplate={this.previewTemplate} thumbnailItemTemplate={this.itemTemplate} showThumbnails={false}
                        showIndicators={true} style={{maxWidth: '520px'}} />

                    <hr />

                    <h3>Change Preview On Indicator Hover</h3>
                    <Galleria value={this.state.images} responsiveOptions={this.responsiveOptions} numVisible={5}
                        previewItemTemplate={this.previewTemplate} thumbnailItemTemplate={this.itemTemplate} showThumbnails={false}
                        showIndicators={true} changePreviewOnIndicatorHover={true} style={{maxWidth: '520px'}} />

                    <hr />

                    <h3>Show Indicator On Preview</h3>
                    <Galleria value={this.state.images} responsiveOptions={this.responsiveOptions} numVisible={5}
                        previewItemTemplate={this.previewTemplate} thumbnailItemTemplate={this.itemTemplate} showThumbnails={false}
                        showIndicators={true} changePreviewOnIndicatorHover={true} showIndicatorsOnPreview={true} style={{maxWidth: '520px'}} />

                    <hr />

                    <h3>Position</h3>
                    <Galleria value={this.state.images} responsiveOptions={this.responsiveOptions} numVisible={5}
                        previewItemTemplate={this.previewTemplate} thumbnailItemTemplate={this.itemTemplate} showThumbnails={false}
                        showIndicators={true} changePreviewOnIndicatorHover={true} showIndicatorsOnPreview={true} indicatorsPosition="bottom"
                        style={{maxWidth: '520px'}} header="Bottom" />

                    <Galleria value={this.state.images} responsiveOptions={this.responsiveOptions} numVisible={5}
                        previewItemTemplate={this.previewTemplate} thumbnailItemTemplate={this.itemTemplate} showThumbnails={false}
                        showIndicators={true} changePreviewOnIndicatorHover={true} showIndicatorsOnPreview={true} indicatorsPosition="top"
                        style={{maxWidth: '520px', marginTop: '2em'}} header="Top" />

                    <Galleria value={this.state.images} responsiveOptions={this.responsiveOptions} numVisible={5}
                        previewItemTemplate={this.previewTemplate} thumbnailItemTemplate={this.itemTemplate} showThumbnails={false}
                        showIndicators={true} changePreviewOnIndicatorHover={true} showIndicatorsOnPreview={true} indicatorsPosition="left"
                        style={{maxWidth: '520px', marginTop: '2em'}} header="Left" />

                    <Galleria value={this.state.images} responsiveOptions={this.responsiveOptions} numVisible={5}
                        previewItemTemplate={this.previewTemplate} thumbnailItemTemplate={this.itemTemplate} showThumbnails={false}
                        showIndicators={true} changePreviewOnIndicatorHover={true} showIndicatorsOnPreview={true} indicatorsPosition="right"
                        style={{maxWidth: '520px', marginTop: '2em'}} header="Right" />

                    <hr />

                    <h3>Template</h3>
                    <Galleria value={this.state.images} responsiveOptions={this.responsiveOptions} numVisible={5}
                        previewItemTemplate={this.previewTemplate} thumbnailItemTemplate={this.itemTemplate}
                        indicatorItemTemplate={this.indicatorItemTemplate} showThumbnails={false}
                        showIndicators={true} changePreviewOnIndicatorHover={true} showIndicatorsOnPreview={true} indicatorsPosition="left"
                        style={{maxWidth: '520px'}} className="custom-indicator-galleria"/>

                    <Galleria value={this.state.images} responsiveOptions={this.responsiveOptions} numVisible={5}
                        previewItemTemplate={this.previewTemplate} thumbnailItemTemplate={this.itemTemplate}
                        indicatorItemTemplate={this.indicatorItemTemplate} showThumbnails={false}
                        showIndicators={true} changePreviewOnIndicatorHover={true} indicatorsPosition="left"
                        style={{maxWidth: '520px', marginTop: '2em'}} className="custom-indicator-galleria"/>

                    <Galleria value={this.state.images2} responsiveOptions={this.responsiveOptions} numVisible={5}
                        previewItemTemplate={this.previewTemplate} thumbnailItemTemplate={this.itemTemplate}
                        indicatorItemTemplate={this.indicatorItemTemplate2} showThumbnails={false}
                        showIndicators={true} changePreviewOnIndicatorHover={true} indicatorsPosition="left"
                        style={{maxWidth: '520px', marginTop: '2em'}} className="custom-indicator-galleria2" />
                </div>

                <GalleriaIndicatorDemoDoc></GalleriaIndicatorDemoDoc>
            </div>
        );
    }
}

export class GalleriaIndicatorDemoDoc extends Component {

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

export class GalleriaIndicatorDemo extends Component {

    constructor() {
        super();

        this.state = {
            images: null,
            images2: null
        };

        this.galleriaService = new GalleriaService();
        this.itemTemplate = this.itemTemplate.bind(this);
        this.previewTemplate = this.previewTemplate.bind(this);
        this.indicatorItemTemplate = this.indicatorItemTemplate.bind(this);
        this.indicatorItemTemplate2 = this.indicatorItemTemplate2.bind(this);

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
        this.galleriaService.getImages().then(data => this.setState({
            images: data,
            images2: data.slice(0, 5)
        }));
    }

    itemTemplate(item) {
        return (
            <div className="p-grid p-nogutter p-justify-center">
                <img src={\`\${item.thumbnailImageSrc}\`} alt={item.alt} style={{ display: 'block' }}/>
            </div>
        );
    }

    previewTemplate(item) {
        return <img src={\`\${item.previewImageSrc}\`} alt={item.alt} style={{ width: '100%', display: 'block' }} />
    }

    indicatorItemTemplate(index) {
        return (
            <div>
                {index + 1}
            </div>
        )
    }

    indicatorItemTemplate2(index) {
        let item = this.state.images2[index];
        return (
            <div style={{padding: '.2em', cursor: 'pointer'}}>
                <img src={\`\${item.thumbnailImageSrc}\`} alt={item.alt} style={{ display: 'block' }}/>
            </div>
        )
    }

    render() {
        return (
            <div className="galleria-demo">
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Galleria - Indicator</h1>
                        <p></p>

                        <AppContentContext.Consumer>
                            {context => <button onClick={() => context.onChangelogBtnClick("galleria")} className="layout-changelog-button">{context.changelogText}</button>}
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Basic</h3>
                    <Galleria value={this.state.images} responsiveOptions={this.responsiveOptions} numVisible={5}
                        previewItemTemplate={this.previewTemplate} thumbnailItemTemplate={this.itemTemplate} showThumbnails={false}
                        showIndicators={true} style={{maxWidth: '520px'}} />

                    <hr />

                    <h3>Change Preview On Indicator Hover</h3>
                    <Galleria value={this.state.images} responsiveOptions={this.responsiveOptions} numVisible={5}
                        previewItemTemplate={this.previewTemplate} thumbnailItemTemplate={this.itemTemplate} showThumbnails={false}
                        showIndicators={true} changePreviewOnIndicatorHover={true} style={{maxWidth: '520px'}} />

                    <hr />

                    <h3>Show Indicator On Preview</h3>
                    <Galleria value={this.state.images} responsiveOptions={this.responsiveOptions} numVisible={5}
                        previewItemTemplate={this.previewTemplate} thumbnailItemTemplate={this.itemTemplate} showThumbnails={false}
                        showIndicators={true} changePreviewOnIndicatorHover={true} showIndicatorsOnPreview={true} style={{maxWidth: '520px'}} />

                    <hr />

                    <h3>Position</h3>
                    <Galleria value={this.state.images} responsiveOptions={this.responsiveOptions} numVisible={5}
                        previewItemTemplate={this.previewTemplate} thumbnailItemTemplate={this.itemTemplate} showThumbnails={false}
                        showIndicators={true} changePreviewOnIndicatorHover={true} showIndicatorsOnPreview={true} indicatorsPosition="bottom"
                        style={{maxWidth: '520px'}} header="Bottom" />

                    <Galleria value={this.state.images} responsiveOptions={this.responsiveOptions} numVisible={5}
                        previewItemTemplate={this.previewTemplate} thumbnailItemTemplate={this.itemTemplate} showThumbnails={false}
                        showIndicators={true} changePreviewOnIndicatorHover={true} showIndicatorsOnPreview={true} indicatorsPosition="top"
                        style={{maxWidth: '520px', marginTop: '2em'}} header="Top" />

                    <Galleria value={this.state.images} responsiveOptions={this.responsiveOptions} numVisible={5}
                        previewItemTemplate={this.previewTemplate} thumbnailItemTemplate={this.itemTemplate} showThumbnails={false}
                        showIndicators={true} changePreviewOnIndicatorHover={true} showIndicatorsOnPreview={true} indicatorsPosition="left"
                        style={{maxWidth: '520px', marginTop: '2em'}} header="Left" />

                    <Galleria value={this.state.images} responsiveOptions={this.responsiveOptions} numVisible={5}
                        previewItemTemplate={this.previewTemplate} thumbnailItemTemplate={this.itemTemplate} showThumbnails={false}
                        showIndicators={true} changePreviewOnIndicatorHover={true} showIndicatorsOnPreview={true} indicatorsPosition="right"
                        style={{maxWidth: '520px', marginTop: '2em'}} header="Right" />

                    <hr />

                    <h3>Template</h3>
                    <Galleria value={this.state.images} responsiveOptions={this.responsiveOptions} numVisible={5}
                        previewItemTemplate={this.previewTemplate} thumbnailItemTemplate={this.itemTemplate}
                        indicatorItemTemplate={this.indicatorItemTemplate} showThumbnails={false}
                        showIndicators={true} changePreviewOnIndicatorHover={true} showIndicatorsOnPreview={true} indicatorsPosition="left"
                        style={{maxWidth: '520px'}} className="custom-indicator-galleria"/>

                    <Galleria value={this.state.images} responsiveOptions={this.responsiveOptions} numVisible={5}
                        previewItemTemplate={this.previewTemplate} thumbnailItemTemplate={this.itemTemplate}
                        indicatorItemTemplate={this.indicatorItemTemplate} showThumbnails={false}
                        showIndicators={true} changePreviewOnIndicatorHover={true} indicatorsPosition="left"
                        style={{maxWidth: '520px', marginTop: '2em'}} className="custom-indicator-galleria"/>

                    <Galleria value={this.state.images2} responsiveOptions={this.responsiveOptions} numVisible={5}
                        previewItemTemplate={this.previewTemplate} thumbnailItemTemplate={this.itemTemplate}
                        indicatorItemTemplate={this.indicatorItemTemplate2} showThumbnails={false}
                        showIndicators={true} changePreviewOnIndicatorHover={true} indicatorsPosition="left"
                        style={{width: '520px', marginTop: '2em'}} className="custom-indicator-galleria2" />
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
