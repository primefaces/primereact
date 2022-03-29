import React, { useState, useEffect, memo } from 'react';
import { PhotoService } from '../../service/PhotoService';
import { Galleria } from '../../components/lib/galleria/Galleria';
import { TabView, TabPanel } from '../../components/lib/tabview/TabView';
import { CodeHighlight } from '../../components/doc/common/codehighlight';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';
import getConfig from 'next/config';

const GalleriaAutoPlayDemo = () => {

    const [images, setImages] = useState(null)
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
        galleriaService.getImages().then(data => setImages(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const itemTemplate = (item) => {
        return <img src={`${contextPath}/${item.itemImageSrc}`} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    }

    const thumbnailTemplate = (item) => {
        return <img src={`${contextPath}/${item.thumbnailImageSrc}`} alt={item.alt} style={{ display: 'block' }} />;
    }

    return (
        <div>
            <Head>
                <title>React Gallery Component - AutoPlay</title>
                <meta name="description" content="AutoPlay mode is used to implement slideshows." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>Galleria <span>AutoPlay</span></h1>
                    <p>AutoPlay mode is used to implement slideshows.</p>
                </div>

                <DocActions github="galleria/autoplay.js" />
            </div>

            <div className="content-section implementation">
                <div className="card">
                    <Galleria value={images} responsiveOptions={responsiveOptions} numVisible={5} style={{ maxWidth: '640px' }}
                        item={itemTemplate} thumbnail={thumbnailTemplate} circular autoPlay transitionInterval={2000} />
                </div>
            </div>

            <GalleriaAutoPlayDemoDoc />
        </div>
    );
}

export default GalleriaAutoPlayDemo;

export const GalleriaAutoPlayDemoDoc = memo(() => {

    return (
        <div className="content-section documentation" id="app-doc">
            <TabView>
                <TabPanel header="Source">
                    <CodeHighlight lang="js">
                        {`
import React, { Component } from 'react';
import { PhotoService } from '../service/PhotoService';
import { Galleria } from 'primereact/galleria';

export class GalleriaAutoPlayDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            images: null
        };

        this.galleriaService = new PhotoService();
        this.itemTemplate = this.itemTemplate.bind(this);
        this.thumbnailTemplate = this.thumbnailTemplate.bind(this);

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
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    }

    thumbnailTemplate(item) {
        return <img src={item.thumbnailImageSrc} alt={item.alt} style={{ display: 'block' }} />;
    }

    render() {
        return (
            <div>
                <div className="card">
                    <Galleria value={this.state.images} responsiveOptions={this.responsiveOptions} numVisible={5} style={{ maxWidth: '640px' }}
                        item={this.itemTemplate} thumbnail={this.thumbnailTemplate} circular autoPlay transitionInterval={2000} />
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
})
