import React, { useState, useEffect, memo } from 'react';
import { PhotoService } from '../../service/PhotoService';
import { Galleria } from '../../components/lib/galleria/Galleria';
import { TabView, TabPanel } from '../../components/lib/tabview/TabView';
import { CodeHighlight } from '../../components/doc/common/codehighlight';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';
import getConfig from 'next/config';

const GalleriaIndicatorDemo = () => {

    const [images, setImages] = useState(null);
    const [images2, setImages2] = useState(null);

    const galleriaService = new PhotoService();
    const contextPath = getConfig().publicRuntimeConfig.contextPath;

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

    useEffect(() => {
        galleriaService.getImages().then(data => {setImages(data); setImages2(data.slice(0, 5))})
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const itemTemplate = (item) => {
        return <img src={`${contextPath}/${item.itemImageSrc}`} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    }

    const thumbnailTemplate = (item) => {
        return <img src={`${contextPath}/${item.thumbnailImageSrc}`} alt={item.alt} style={{ width: '100%', display: 'block' }} />
    }

    const indicatorTemplate = (index) => {
        return (
            <span className="indicator-text">
                {index + 1}
            </span>
        )
    }

    return (
        <div>
            <Head>
                <title>React Gallery Component - Indicator</title>
                <meta name="description" content="Indicators allow quick navigation between the items." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>Galleria <span>Indicator</span></h1>
                    <p>Indicators allow quick navigation between the items.</p>
                </div>

                <DocActions github="galleria/indicator.js" />
            </div>

            <div className="content-section implementation galleria-demo">
                <div className="card">
                    <h5>Indicators with Click Event</h5>
                    <Galleria value={images} responsiveOptions={responsiveOptions} numVisible={5} style={{ maxWidth: '640px' }}
                        showThumbnails={false} showIndicators item={itemTemplate} />
                </div>

                <div className="card">
                    <h5>Indicators with Hover Event</h5>
                    <Galleria value={images} responsiveOptions={responsiveOptions} numVisible={5} style={{ maxWidth: '640px' }}
                        showThumbnails={false} showIndicators changeItemOnIndicatorHover item={itemTemplate} />
                </div>

                <div className="card">
                    <h5>Inside Content</h5>
                    <Galleria value={images} responsiveOptions={responsiveOptions} numVisible={5} style={{ maxWidth: '640px' }}
                        showThumbnails={false} showIndicators changeItemOnIndicatorHover showIndicatorsOnItem item={itemTemplate} />
                </div>

                <div className="card">
                    <h5>Positioned at Top</h5>
                    <Galleria value={images} responsiveOptions={responsiveOptions} numVisible={5} style={{ maxWidth: '640px' }}
                        showThumbnails={false} showIndicators changeItemOnIndicatorHover showIndicatorsOnItem indicatorsPosition="top" item={itemTemplate} />
                </div>

                <div className="card">
                    <h5>Positioned at Left</h5>
                    <Galleria value={images} responsiveOptions={responsiveOptions} numVisible={5} style={{ maxWidth: '640px' }}
                        showThumbnails={false} showIndicators changeItemOnIndicatorHover showIndicatorsOnItem indicatorsPosition="left" item={itemTemplate} />
                </div>

                <div className="card">
                    <h5>Positioned at Right</h5>
                    <Galleria value={images} responsiveOptions={responsiveOptions} numVisible={5} style={{ maxWidth: '640px' }}
                        showThumbnails={false} showIndicators changeItemOnIndicatorHover showIndicatorsOnItem indicatorsPosition="right" item={itemTemplate} />
                </div>

                <div className="card">
                    <h5>Indicator Template</h5>
                    <Galleria value={images} responsiveOptions={responsiveOptions} numVisible={5} style={{ maxWidth: '640px' }} className="custom-indicator-galleria"
                        showThumbnails={false} showIndicators changeItemOnIndicatorHover showIndicatorsOnItem indicatorsPosition="left" item={itemTemplate} indicator={indicatorTemplate} />
                </div>
            </div>

            <GalleriaIndicatorDemoDoc></GalleriaIndicatorDemoDoc>
        </div>
    );

}

export default GalleriaIndicatorDemo;

export const GalleriaIndicatorDemoDoc = memo(() => {

    return (
        <div className="content-section documentation" id="app-doc">
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
})
