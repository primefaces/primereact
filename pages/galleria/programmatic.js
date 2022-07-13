import React, { useState, useEffect, memo } from 'react';
import { PhotoService } from '../../service/PhotoService';
import { Galleria } from '../../components/lib/galleria/Galleria';
import { TabView } from '../../components/lib/tabview/TabView';
import { Button } from '../../components/lib/button/Button';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';
import getConfig from 'next/config';
import { useLiveEditorTabs } from '../../components/doc/common/liveeditor';

const GalleriaProgrammaticDemo = () => {

    const [images, setImages] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0)
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

    const next = () => {
        setActiveIndex(prevState => (prevState === images.length - 1) ? 0 : prevState + 1)
    }

    const prev = () => {
        setActiveIndex(prevState => (prevState === images.length + 1) ? 0 : prevState - 1)

    }

    const itemTemplate = (item) => {
        return <img src={`${contextPath}/${item.itemImageSrc}`} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    }

    const thumbnailTemplate = (item) => {
        return <img src={`${contextPath}/${item.thumbnailImageSrc}`} alt={item.alt} style={{ display: 'block' }} />;
    }

    return (
        <div>
            <Head>
                <title>React Gallery Component - Programmatic</title>
                <meta name="description" content="Galleria can be controlled programmatically using the activeIndex property." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>Galleria <span>Programmatic</span></h1>
                    <p>Galleria can be controlled programmatically using the <b>activeIndex</b> property.</p>
                </div>

                <DocActions github="galleria/programmatic.js" />
            </div>

            <div className="content-section implementation">
                <div className="card">
                    <div className="py-2">
                        <Button icon="pi pi-minus" onClick={prev} className="p-button-secondary" />
                        <Button icon="pi pi-plus" onClick={next} className="p-button-secondary ml-2" />
                    </div>

                    <Galleria value={images} activeIndex={activeIndex} onItemChange={(e) => setActiveIndex(e.index)} responsiveOptions={responsiveOptions} numVisible={5}
                        item={itemTemplate} thumbnail={thumbnailTemplate} style={{ maxWidth: '640px' }} />
                </div>
            </div>

            <GalleriaProgrammaticDemoDoc />
        </div>
    );

}

export default GalleriaProgrammaticDemo;

export const GalleriaProgrammaticDemoDoc = memo(() => {

    const sources = {
        'class': {
            tabName: 'Class Source',
            content: `
import React, { Component } from 'react';
import { PhotoService } from '../service/PhotoService';
import { Galleria } from 'primereact/galleria';
import { Button } from 'primereact/button';

export class GalleriaProgrammaticDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            images: null,
            activeIndex: 2
        };

        this.galleriaService = new PhotoService();
        this.itemTemplate = this.itemTemplate.bind(this);
        this.thumbnailTemplate = this.thumbnailTemplate.bind(this);
        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);

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

    next() {
        this.setState((prevState) => ({
            activeIndex: (prevState.activeIndex === this.state.images.length - 1) ? 0 : prevState.activeIndex + 1
        }));
    }

    prev() {
        this.setState((prevState) => ({
            activeIndex: (prevState.activeIndex === 0) ? this.state.images.length - 1 : prevState.activeIndex - 1
        }));
    }

    itemTemplate(item) {
        return <img src={item.itemImageSrc} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    }

    thumbnailTemplate(item) {
        return <img src={item.thumbnailImageSrc} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={item.alt} style={{ display: 'block' }} />;
    }

    render() {
        return (
            <div className="card">
                <div className="py-2">
                    <Button icon="pi pi-minus" onClick={this.prev} className="p-button-secondary" />
                    <Button icon="pi pi-plus" onClick={this.next} className="p-button-secondary ml-2" />
                </div>

                <Galleria value={this.state.images} activeIndex={this.state.activeIndex} onItemChange={(e) => this.setState({ activeIndex: e.index })} responsiveOptions={this.responsiveOptions} numVisible={5}
                    item={this.itemTemplate} thumbnail={this.thumbnailTemplate} style={{ maxWidth: '640px' }} />
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
import { Button } from 'primereact/button';

const GalleriaProgrammaticDemo = () => {

    const [images, setImages] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0)
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

    const next = () => {
        setActiveIndex(prevState => (prevState === images.length - 1) ? 0 : prevState + 1)
    }

    const prev = () => {
        setActiveIndex(prevState => (prevState === images.length + 1) ? 0 : prevState - 1)

    }

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    }

    const thumbnailTemplate = (item) => {
        return <img src={item.thumbnailImageSrc} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={item.alt} style={{ display: 'block' }} />;
    }

    return (
        <div>
            <div className="card">
                <div className="py-2">
                    <Button icon="pi pi-minus" onClick={prev} className="p-button-secondary" />
                    <Button icon="pi pi-plus" onClick={next} className="p-button-secondary ml-2" />
                </div>

                <Galleria value={images} activeIndex={activeIndex} onItemChange={(e) => setActiveIndex(e.index)} responsiveOptions={responsiveOptions} numVisible={5}
                    item={itemTemplate} thumbnail={thumbnailTemplate} style={{ maxWidth: '640px' }} />
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
import { Button } from 'primereact/button';

const GalleriaProgrammaticDemo = () => {

    const [images, setImages] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0)
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

    const next = () => {
        setActiveIndex(prevState => (prevState === images.length - 1) ? 0 : prevState + 1)
    }

    const prev = () => {
        setActiveIndex(prevState => (prevState === images.length + 1) ? 0 : prevState - 1)

    }

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    }

    const thumbnailTemplate = (item) => {
        return <img src={item.thumbnailImageSrc} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={item.alt} style={{ display: 'block' }} />;
    }

    return (
        <div>
            <div className="card">
                <div className="py-2">
                    <Button icon="pi pi-minus" onClick={prev} className="p-button-secondary" />
                    <Button icon="pi pi-plus" onClick={next} className="p-button-secondary ml-2" />
                </div>

                <Galleria value={images} activeIndex={activeIndex} onItemChange={(e) => setActiveIndex(e.index)} responsiveOptions={responsiveOptions} numVisible={5}
                    item={itemTemplate} thumbnail={thumbnailTemplate} style={{ maxWidth: '640px' }} />
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
        <script src="https://unpkg.com/primereact/core/button.min.js"></script>
        <script src="https://unpkg.com/primereact/galleria/galleria.min.js"></script>`,
            content: `
    const { useState, useRef, useEffect } = React;
    const { Button } = primereact.button;
    const { Galleria } = primereact.galleria;

    const GalleriaProgrammaticDemo = () => {

        const [images, setImages] = useState(null);
        const [activeIndex, setActiveIndex] = useState(0)
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

        const next = () => {
            setActiveIndex(prevState => (prevState === images.length - 1) ? 0 : prevState + 1)
        }

        const prev = () => {
            setActiveIndex(prevState => (prevState === images.length + 1) ? 0 : prevState - 1)

        }

        const itemTemplate = (item) => {
            return <img src={item.itemImageSrc} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
        }

        const thumbnailTemplate = (item) => {
            return <img src={item.thumbnailImageSrc} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={item.alt} style={{ display: 'block' }} />;
        }

        return (
            <div>
                <div className="card">
                    <div className="py-2">
                        <Button icon="pi pi-minus" onClick={prev} className="p-button-secondary" />
                        <Button icon="pi pi-plus" onClick={next} className="p-button-secondary ml-2" />
                    </div>

                    <Galleria value={images} activeIndex={activeIndex} onItemChange={(e) => setActiveIndex(e.index)} responsiveOptions={responsiveOptions} numVisible={5}
                        item={itemTemplate} thumbnail={thumbnailTemplate} style={{ maxWidth: '640px' }} />
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
                    useLiveEditorTabs({ name: 'GalleriaProgrammaticDemo', sources: sources, service: 'PhotoService', data: 'photos' })
                }
            </TabView>
        </div>
    )
})
