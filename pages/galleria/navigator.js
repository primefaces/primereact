import React, { useState, useEffect, memo } from 'react';
import { PhotoService } from '../../service/PhotoService';
import { Galleria } from '../../components/lib/galleria/Galleria';
import { TabView } from '../../components/lib/tabview/TabView';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';
import getConfig from 'next/config';
import { useLiveEditorTabs } from '../../components/doc/common/liveeditor';

const GalleriaNavigatorDemo = () => {

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
                <title>React Gallery Component - Navigator</title>
                <meta name="description" content="Combining item navigators, thumbnails and indicators provide various UI alternatives." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>Galleria <span>Navigator</span></h1>
                    <p>Combining item navigators, thumbnails and indicators provide various UI alternatives.</p>
                </div>

                <DocActions github="galleria/navigator.js" />
            </div>

            <div className="content-section implementation">
                <div className="card">
                    <h5>Item Navigators and Thumbnails</h5>
                    <Galleria value={images} responsiveOptions={responsiveOptions} numVisible={5} circular style={{ maxWidth: '640px' }}
                        showItemNavigators item={itemTemplate} thumbnail={thumbnailTemplate} />
                </div>

                <div className="card">
                    <h5>Item Navigators without Thumbnails</h5>
                    <Galleria value={images} responsiveOptions={responsiveOptions} numVisible={5} circular style={{ maxWidth: '640px' }}
                        showItemNavigators showThumbnails={false} item={itemTemplate} thumbnail={thumbnailTemplate} />
                </div>

                <div className="card">
                    <h5>Item Navigators on Hover</h5>
                    <Galleria value={images} responsiveOptions={responsiveOptions} numVisible={5} circular style={{ maxWidth: '640px' }}
                        showItemNavigators showItemNavigatorsOnHover item={itemTemplate} thumbnail={thumbnailTemplate} />
                </div>

                <div className="card">
                    <h5>Item Navigators and Indicators</h5>
                    <Galleria value={images} responsiveOptions={responsiveOptions} numVisible={5} circular style={{ maxWidth: '640px' }}
                        showItemNavigators showThumbnails={false} showItemNavigatorsOnHover showIndicators item={itemTemplate} thumbnail={thumbnailTemplate} />
                </div>
            </div>

            <GalleriaNavigatorDemoDoc />
        </div>
    );
}

export default GalleriaNavigatorDemo;

export const GalleriaNavigatorDemoDoc = memo(() => {

    const sources = {
        'class': {
            tabName: 'Class Source',
            content: `
import React, { Component } from 'react';
import { PhotoService } from '../service/PhotoService';
import { Galleria } from 'primereact/galleria';

export class GalleriaNavigatorDemo extends Component {

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
        return <img src={item.itemImageSrc} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'}  alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    }

    thumbnailTemplate(item) {
        return <img src={item.thumbnailImageSrc} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'}  alt={item.alt} style={{ display: 'block' }} />;
    }

    render() {
        return (
            <div>
                <div className="card">
                    <h5>Item Navigators and Thumbnails</h5>
                    <Galleria value={this.state.images} responsiveOptions={this.responsiveOptions} numVisible={5} circular style={{ maxWidth: '640px' }}
                        showItemNavigators item={this.itemTemplate} thumbnail={this.thumbnailTemplate} />
                </div>

                <div className="card">
                    <h5>Item Navigators without Thumbnails</h5>
                    <Galleria value={this.state.images} responsiveOptions={this.responsiveOptions} numVisible={5} circular style={{ maxWidth: '640px' }}
                        showItemNavigators showThumbnails={false} item={this.itemTemplate} thumbnail={this.thumbnailTemplate} />
                </div>

                <div className="card">
                    <h5>Item Navigators on Hover</h5>
                    <Galleria value={this.state.images} responsiveOptions={this.responsiveOptions} numVisible={5} circular style={{ maxWidth: '640px' }}
                        showItemNavigators showItemNavigatorsOnHover item={this.itemTemplate} thumbnail={this.thumbnailTemplate} />
                </div>

                <div className="card">
                    <h5>Item Navigators and Indicators</h5>
                    <Galleria value={this.state.images} responsiveOptions={this.responsiveOptions} numVisible={5} circular style={{ maxWidth: '640px' }}
                        showItemNavigators showThumbnails={false} showItemNavigatorsOnHover showIndicators item={this.itemTemplate} thumbnail={this.thumbnailTemplate} />
                </div>
            </div>
        );
    }
}
            `
        },
        'hooks': {
            tabName: 'Hooks Source',
            content: `
import React, { useState, useEffect } from 'react';
import { PhotoService } from '../service/PhotoService';
import { Galleria } from 'primereact/galleria';

const GalleriaNavigatorDemo = () => {

        const [images, setImages] = useState(null)
        const galleriaService = new PhotoService();

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
        return <img src={item.itemImageSrc} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    }

    const thumbnailTemplate = (item) => {
        return <img src={item.thumbnailImageSrc} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={item.alt} style={{ display: 'block' }} />;
    }

    return (
        <div>
            <div className="card">
                <h5>Item Navigators and Thumbnails</h5>
                <Galleria value={images} responsiveOptions={responsiveOptions} numVisible={5} circular style={{ maxWidth: '640px' }}
                    showItemNavigators item={itemTemplate} thumbnail={thumbnailTemplate} />
            </div>

            <div className="card">
                <h5>Item Navigators without Thumbnails</h5>
                <Galleria value={images} responsiveOptions={responsiveOptions} numVisible={5} circular style={{ maxWidth: '640px' }}
                    showItemNavigators showThumbnails={false} item={itemTemplate} thumbnail={thumbnailTemplate} />
            </div>

            <div className="card">
                <h5>Item Navigators on Hover</h5>
                <Galleria value={images} responsiveOptions={responsiveOptions} numVisible={5} circular style={{ maxWidth: '640px' }}
                    showItemNavigators showItemNavigatorsOnHover item={itemTemplate} thumbnail={thumbnailTemplate} />
            </div>

            <div className="card">
                <h5>Item Navigators and Indicators</h5>
                <Galleria value={images} responsiveOptions={responsiveOptions} numVisible={5} circular style={{ maxWidth: '640px' }}
                    showItemNavigators showThumbnails={false} showItemNavigatorsOnHover showIndicators item={itemTemplate} thumbnail={thumbnailTemplate} />
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

const GalleriaNavigatorDemo = () => {

        const [images, setImages] = useState(null)
        const galleriaService = new PhotoService();

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
        return <img src={item.itemImageSrc} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    }

    const thumbnailTemplate = (item) => {
        return <img src={item.thumbnailImageSrc} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={item.alt} style={{ display: 'block' }} />;
    }

    return (
        <div>
            <div className="card">
                <h5>Item Navigators and Thumbnails</h5>
                <Galleria value={images} responsiveOptions={responsiveOptions} numVisible={5} circular style={{ maxWidth: '640px' }}
                    showItemNavigators item={itemTemplate} thumbnail={thumbnailTemplate} />
            </div>

            <div className="card">
                <h5>Item Navigators without Thumbnails</h5>
                <Galleria value={images} responsiveOptions={responsiveOptions} numVisible={5} circular style={{ maxWidth: '640px' }}
                    showItemNavigators showThumbnails={false} item={itemTemplate} thumbnail={thumbnailTemplate} />
            </div>

            <div className="card">
                <h5>Item Navigators on Hover</h5>
                <Galleria value={images} responsiveOptions={responsiveOptions} numVisible={5} circular style={{ maxWidth: '640px' }}
                    showItemNavigators showItemNavigatorsOnHover item={itemTemplate} thumbnail={thumbnailTemplate} />
            </div>

            <div className="card">
                <h5>Item Navigators and Indicators</h5>
                <Galleria value={images} responsiveOptions={responsiveOptions} numVisible={5} circular style={{ maxWidth: '640px' }}
                    showItemNavigators showThumbnails={false} showItemNavigatorsOnHover showIndicators item={itemTemplate} thumbnail={thumbnailTemplate} />
            </div>
        </div>
    );
}
                        `
        },
        'browser' : {
            tabName: 'Browser Source',
            imports: `
        <script src="./PhotoService.js"></script>
        <script src="https://unpkg.com/primereact/core/core.min.js"></script>
        <script src="https://unpkg.com/primereact/galleria/galleria.min.js"></script>`,
            content: `
    const { useState, useRef, useEffect } = React;
    const { Galleria } = primereact.galleria;

    const GalleriaNavigatorDemo = () => {

        const [images, setImages] = useState(null)
        const galleriaService = new PhotoService();

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
        return <img src={item.itemImageSrc} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    }

    const thumbnailTemplate = (item) => {
        return <img src={item.thumbnailImageSrc} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={item.alt} style={{ display: 'block' }} />;
    }

    return (
        <div>
            <div className="card">
                <h5>Item Navigators and Thumbnails</h5>
                <Galleria value={images} responsiveOptions={responsiveOptions} numVisible={5} circular style={{ maxWidth: '640px' }}
                    showItemNavigators item={itemTemplate} thumbnail={thumbnailTemplate} />
            </div>

            <div className="card">
                <h5>Item Navigators without Thumbnails</h5>
                <Galleria value={images} responsiveOptions={responsiveOptions} numVisible={5} circular style={{ maxWidth: '640px' }}
                    showItemNavigators showThumbnails={false} item={itemTemplate} thumbnail={thumbnailTemplate} />
            </div>

            <div className="card">
                <h5>Item Navigators on Hover</h5>
                <Galleria value={images} responsiveOptions={responsiveOptions} numVisible={5} circular style={{ maxWidth: '640px' }}
                    showItemNavigators showItemNavigatorsOnHover item={itemTemplate} thumbnail={thumbnailTemplate} />
            </div>

            <div className="card">
                <h5>Item Navigators and Indicators</h5>
                <Galleria value={images} responsiveOptions={responsiveOptions} numVisible={5} circular style={{ maxWidth: '640px' }}
                    showItemNavigators showThumbnails={false} showItemNavigatorsOnHover showIndicators item={itemTemplate} thumbnail={thumbnailTemplate} />
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
                {
                    useLiveEditorTabs({ name: 'GalleriaNavigatorDemo', sources: sources, service: 'PhotoService', data: 'photos'})
                }
            </TabView>
        </div>
    )
})
