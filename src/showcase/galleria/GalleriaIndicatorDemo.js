import React, { Component } from 'react';
import { PhotoService } from '../service/PhotoService';
import { Galleria } from '../../components/galleria/Galleria';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { CodeHighlight } from '../codehighlight/CodeHighlight';
import { AppInlineHeader } from '../../AppInlineHeader';
import './GalleriaDemo.scss';

export class GalleriaIndicatorDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            images: null,
            images2: null
        };

        this.galleriaService = new PhotoService();
        this.itemTemplate = this.itemTemplate.bind(this);
        this.thumbnailTemplate = this.thumbnailTemplate.bind(this);
        this.indicatorTemplate = this.indicatorTemplate.bind(this);

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
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    }

    thumbnailTemplate(item) {
        return <img src={`${item.previewImageSrc}`} alt={item.alt} style={{ width: '100%', display: 'block' }} />
    }

    indicatorTemplate(index) {
        return (
            <span className="indicator-text">
                {index + 1}
            </span>
        )
    }

    render() {
        return (
            <div className="galleria-demo">
                <div className="content-section introduction">
                    <AppInlineHeader changelogText="galleria">
                        <h1>Galleria <span>Indicator</span></h1>
                        <p>Indicators allow quick navigation between the items.</p>
                    </AppInlineHeader>
                </div>

                <div className="content-section implementation galleria-demo">
                    <div className="card">
                        <h5>Indicators with Click Event</h5>
                        <Galleria value={this.state.images} responsiveOptions={this.responsiveOptions} numVisible={5} style={{ maxWidth: '640px' }}
                            showThumbnails={false} showIndicators item={this.itemTemplate} />
                    </div>

                    <div className="card">
                        <h5>Indicators with Hover Event</h5>
                        <Galleria value={this.state.images} responsiveOptions={this.responsiveOptions} numVisible={5} style={{ maxWidth: '640px' }}
                            showThumbnails={false} showIndicators changeItemOnIndicatorHover item={this.itemTemplate} />
                    </div>

                    <div className="card">
                        <h5>Inside Content</h5>
                        <Galleria value={this.state.images} responsiveOptions={this.responsiveOptions} numVisible={5} style={{ maxWidth: '640px' }}
                            showThumbnails={false} showIndicators changeItemOnIndicatorHover showIndicatorsOnItem item={this.itemTemplate} />
                    </div>

                    <div className="card">
                        <h5>Positioned at Top</h5>
                        <Galleria value={this.state.images} responsiveOptions={this.responsiveOptions} numVisible={5} style={{ maxWidth: '640px' }}
                            showThumbnails={false} showIndicators changeItemOnIndicatorHover showIndicatorsOnItem indicatorsPosition="top" item={this.itemTemplate} />
                    </div>

                    <div className="card">
                        <h5>Positioned at Left</h5>
                        <Galleria value={this.state.images} responsiveOptions={this.responsiveOptions} numVisible={5} style={{ maxWidth: '640px' }}
                            showThumbnails={false} showIndicators changeItemOnIndicatorHover showIndicatorsOnItem indicatorsPosition="left" item={this.itemTemplate} />
                    </div>

                    <div className="card">
                        <h5>Positioned at Right</h5>
                        <Galleria value={this.state.images} responsiveOptions={this.responsiveOptions} numVisible={5} style={{ maxWidth: '640px' }}
                            showThumbnails={false} showIndicators changeItemOnIndicatorHover showIndicatorsOnItem indicatorsPosition="right" item={this.itemTemplate} />
                    </div>

                    <div className="card">
                        <h5>Indicator Template</h5>
                        <Galleria value={this.state.images} responsiveOptions={this.responsiveOptions} numVisible={5} style={{ maxWidth: '640px' }} className="custom-indicator-galleria"
                            showThumbnails={false} showIndicators changeItemOnIndicatorHover showIndicatorsOnItem indicatorsPosition="left" item={this.itemTemplate} indicator={this.indicatorTemplate} />
                    </div>
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
                        <CodeHighlight lang="javascript">
                            {`
import React, { Component } from 'react';
import { PhotoService } from '../service/PhotoService';
import { Galleria } from '../../components/galleria/Galleria';

export class GalleriaIndicatorDemo extends Component {

    constructor() {
        super();

        this.state = {
            images: null,
            images2: null
        };

        this.galleriaService = new PhotoService();
        this.itemTemplate = this.itemTemplate.bind(this);
        this.previewTemplate = this.previewTemplate.bind(this);
        this.indicator = this.indicator.bind(this);
        this.indicator2 = this.indicator2.bind(this);

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
                <img src={\`\${item.thumbnailImageSrc}\`} srcSet="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" alt={item.alt} style={{ display: 'block' }}/>
            </div>
        );
    }

    previewTemplate(item) {
        return <img src={\`\${item.previewImageSrc}\`} srcSet="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" alt={item.alt} style={{ width: '100%', display: 'block' }} />
    }

    indicator(index) {
        return (
            <div>
                {index + 1}
            </div>
        )
    }

    indicator2(index) {
        let item = this.state.images2[index];
        return (
            <div style={{padding: '.2em', cursor: 'pointer'}}>
                <img src={\`\${item.thumbnailImageSrc}\`} srcSet="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" alt={item.alt} style={{ display: 'block' }}/>
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
                        item={this.previewTemplate} thumbnail={this.itemTemplate} showThumbnails={false}
                        showIndicators={true} style={{maxWidth: '520px'}} />

                    <hr />

                    <h3>Change Preview On Indicator Hover</h3>
                    <Galleria value={this.state.images} responsiveOptions={this.responsiveOptions} numVisible={5}
                        item={this.previewTemplate} thumbnail={this.itemTemplate} showThumbnails={false}
                        showIndicators={true} changeItemOnIndicatorHover={true} style={{maxWidth: '520px'}} />

                    <hr />

                    <h3>Show Indicator On Preview</h3>
                    <Galleria value={this.state.images} responsiveOptions={this.responsiveOptions} numVisible={5}
                        item={this.previewTemplate} thumbnail={this.itemTemplate} showThumbnails={false}
                        showIndicators={true} changeItemOnIndicatorHover={true} showIndicatorsOnItem={true} style={{maxWidth: '520px'}} />

                    <hr />

                    <h3>Position</h3>
                    <Galleria value={this.state.images} responsiveOptions={this.responsiveOptions} numVisible={5}
                        item={this.previewTemplate} thumbnail={this.itemTemplate} showThumbnails={false}
                        showIndicators={true} changeItemOnIndicatorHover={true} showIndicatorsOnItem={true} indicatorsPosition="bottom"
                        style={{maxWidth: '520px'}} header="Bottom" />

                    <Galleria value={this.state.images} responsiveOptions={this.responsiveOptions} numVisible={5}
                        item={this.previewTemplate} thumbnail={this.itemTemplate} showThumbnails={false}
                        showIndicators={true} changeItemOnIndicatorHover={true} showIndicatorsOnItem={true} indicatorsPosition="top"
                        style={{maxWidth: '520px', marginTop: '2em'}} header="Top" />

                    <Galleria value={this.state.images} responsiveOptions={this.responsiveOptions} numVisible={5}
                        item={this.previewTemplate} thumbnail={this.itemTemplate} showThumbnails={false}
                        showIndicators={true} changeItemOnIndicatorHover={true} showIndicatorsOnItem={true} indicatorsPosition="left"
                        style={{maxWidth: '520px', marginTop: '2em'}} header="Left" />

                    <Galleria value={this.state.images} responsiveOptions={this.responsiveOptions} numVisible={5}
                        item={this.previewTemplate} thumbnail={this.itemTemplate} showThumbnails={false}
                        showIndicators={true} changeItemOnIndicatorHover={true} showIndicatorsOnItem={true} indicatorsPosition="right"
                        style={{maxWidth: '520px', marginTop: '2em'}} header="Right" />

                    <hr />

                    <h3>Template</h3>
                    <Galleria value={this.state.images} responsiveOptions={this.responsiveOptions} numVisible={5}
                        item={this.previewTemplate} thumbnail={this.itemTemplate}
                        indicator={this.indicator} showThumbnails={false}
                        showIndicators={true} changeItemOnIndicatorHover={true} showIndicatorsOnItem={true} indicatorsPosition="left"
                        style={{maxWidth: '520px'}} className="custom-indicator-galleria"/>

                    <Galleria value={this.state.images} responsiveOptions={this.responsiveOptions} numVisible={5}
                        item={this.previewTemplate} thumbnail={this.itemTemplate}
                        indicator={this.indicator} showThumbnails={false}
                        showIndicators={true} changeItemOnIndicatorHover={true} indicatorsPosition="left"
                        style={{maxWidth: '520px', marginTop: '2em'}} className="custom-indicator-galleria"/>

                    <Galleria value={this.state.images2} responsiveOptions={this.responsiveOptions} numVisible={5}
                        item={this.previewTemplate} thumbnail={this.itemTemplate}
                        indicator={this.indicator2} showThumbnails={false}
                        showIndicators={true} changeItemOnIndicatorHover={true} indicatorsPosition="left"
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
