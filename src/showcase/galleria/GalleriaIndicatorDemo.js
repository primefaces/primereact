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
            <div>
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
<CodeHighlight lang="js">
{`
import React, { Component } from 'react';
import { PhotoService } from '../service/PhotoService';
import { Galleria } from 'primereact/galleria';
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
        return <img src={\`\${item.previewImageSrc}\`} alt={item.alt} style={{ width: '100%', display: 'block' }} />
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
        );
    }
}
`}
</CodeHighlight>
<CodeHighlight lang="scss">
{`
.galleria-demo {
    .custom-indicator-galleria {
        .indicator-text {
            color: #e9ecef;
            cursor: pointer;
        }

        .p-highlight {
            .indicator-text {
                color: var(--primary-color);
            }
        }
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
