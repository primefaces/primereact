import React, { useState, useEffect, useRef, memo } from 'react';
import { PhotoService } from '../../service/PhotoService';
import { Galleria } from '../../components/lib/galleria/Galleria';
import { TabView } from '../../components/lib/tabview/TabView';
import { DocActions } from '../../components/doc/common/docactions';
import { Button } from '../../components/lib/button/Button';
import Head from 'next/head';
import getConfig from 'next/config';
import { useLiveEditorTabs } from '../../components/doc/common/liveeditor';

const GalleriaFullScreenDemo = () => {

    const [images, setImages] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const galleriaService = new PhotoService();
    const contextPath = getConfig().publicRuntimeConfig.contextPath;
    const galleria1 = useRef(null);
    const galleria2 = useRef(null);
    const galleria3 = useRef(null);

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

    const responsiveOptions2 = [
        {
            breakpoint: '1500px',
            numVisible: 5
        },
        {
            breakpoint: '1024px',
            numVisible: 3
        },
        {
            breakpoint: '768px',
            numVisible: 2
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
                <title>React Gallery Component - FullScreen</title>
                <meta name="description" content="In fullscreen mode content covers the whole page over a mask." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>Galleria <span>FullScreen</span></h1>
                    <p>In fullscreen mode content covers the whole page over a mask.</p>
                </div>

                <DocActions github="galleria/fullscreen.js" />
            </div>

            <div className="content-section implementation">
                <div className="card">
                    <h5>With Thumbnails</h5>
                    <Galleria ref={galleria1} value={images} responsiveOptions={responsiveOptions2} numVisible={9} style={{ maxWidth: '50%' }}
                        circular fullScreen showItemNavigators item={itemTemplate} thumbnail={thumbnailTemplate} />

                    <Button label="Show" icon="pi pi-external-link" onClick={() => galleria1.current.show()} />
                </div>

                <div className="card">
                    <h5>Without Thumbnails</h5>
                    <Galleria ref={galleria2} value={images} responsiveOptions={responsiveOptions} numVisible={7} style={{ maxWidth: '850px' }}
                        circular fullScreen showItemNavigators showThumbnails={false} item={itemTemplate} thumbnail={thumbnailTemplate} />

                    <Button label="Show" icon="pi pi-external-link" onClick={() => galleria2.current.show()} />
                </div>

                <div className="card">
                    <h5>Custom Content</h5>
                    <Galleria ref={galleria3} value={images} responsiveOptions={responsiveOptions} numVisible={7} style={{ maxWidth: '850px' }}
                        activeIndex={activeIndex} onItemChange={(e) => setActiveIndex(e.index)}
                        circular fullScreen showItemNavigators showThumbnails={false} item={itemTemplate} thumbnail={thumbnailTemplate} />

                    <div className="grid" style={{ maxWidth: '400px' }}>
                        {
                            images && images.map((image, index) => {
                                let imgEl = <img src={`${contextPath}/${image.thumbnailImageSrc}`} alt={image.alt} style={{ cursor: 'pointer' }} onClick={
                                    () => {setActiveIndex(index); galleria3.current.show()}
                                } />

                                return (
                                    <div className="col-3" key={index}>
                                        {imgEl}
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

            <GalleriaFullScreenDemoDoc></GalleriaFullScreenDemoDoc>
        </div>
    );
}

export default GalleriaFullScreenDemo;

export const GalleriaFullScreenDemoDoc = memo(() => {

    const sources = {
        'class': {
            tabName: 'Class Source',
            content: `
import React, { Component } from 'react';
import { PhotoService } from '../service/PhotoService';
import { Galleria } from 'primereact/galleria';
import { Button } from 'primereact/button';

export class GalleriaFullScreenDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            images: null,
            activeIndex: 0
        };

        this.galleriaService = new PhotoService();
        this.itemTemplate = this.itemTemplate.bind(this);
        this.thumbnailTemplate = this.thumbnailTemplate.bind(this);
        this.onItemChange = this.onItemChange.bind(this);

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

        this.responsiveOptions2 = [
            {
                breakpoint: '1500px',
                numVisible: 5
            },
            {
                breakpoint: '1024px',
                numVisible: 3
            },
            {
                breakpoint: '768px',
                numVisible: 2
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

    onItemChange(event) {
        this.setState({ activeIndex: event.index });
    }

    itemTemplate(item) {
        return <img src={item.itemImageSrc} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    }

    thumbnailTemplate(item) {
        return <img src={item.thumbnailImageSrc} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={item.alt} style={{ display: 'block' }} />;
    }

    render() {
        return (
            <div>
                <div className="card">
                    <h5>With Thumbnails</h5>
                    <Galleria ref={(el) => this.galleria1 = el} value={this.state.images} responsiveOptions={this.responsiveOptions2} numVisible={9} style={{ maxWidth: '50%' }}
                        circular fullScreen showItemNavigators item={this.itemTemplate} thumbnail={this.thumbnailTemplate}/>

                    <Button label="Show" icon="pi pi-external-link" onClick={() => this.galleria1.show()} />
                </div>

                <div className="card">
                    <h5>Without Thumbnails</h5>
                    <Galleria ref={(el) => this.galleria2 = el} value={this.state.images} responsiveOptions={this.responsiveOptions} numVisible={7} style={{ maxWidth: '850px' }}
                        circular fullScreen showItemNavigators showThumbnails={false} item={this.itemTemplate} thumbnail={this.thumbnailTemplate} />

                    <Button label="Show" icon="pi pi-external-link" onClick={() => this.galleria2.show()} />
                </div>

                <div className="card">
                    <h5>Custom Content</h5>
                    <Galleria ref={(el) => this.galleria3 = el} value={this.state.images} responsiveOptions={this.responsiveOptions} numVisible={7} style={{ maxWidth: '850px' }}
                        activeIndex={this.state.activeIndex} onItemChange={(e) => this.setState({ activeIndex: e.index })}
                        circular fullScreen showItemNavigators showThumbnails={false} item={this.itemTemplate} thumbnail={this.thumbnailTemplate} />

                    <div className="grid" style={{ maxWidth: '400px' }}>
                        {
                            this.state.images && this.state.images.map((image, index) => {
                                let imgEl = <img src={image.thumbnailImageSrc} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={image.alt} style={{ cursor: 'pointer' }} onClick={() => {
                                    this.setState({ activeIndex: index }, () => this.galleria3.show());
                                }} />

                                return (
                                    <div className="col-3" key={index}>
                                        {imgEl}
                                    </div>
                                )
                            })
                        }
                    </div>
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
import React, { useState, useEffect, useRef } from 'react';
import { PhotoService } from '../service/PhotoService';
import { Galleria } from 'primereact/galleria';
import { Button } from 'primereact/button';

const GalleriaFullScreenDemo = () => {

    const [images, setImages] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const galleriaService = new PhotoService();
    const galleria1 = useRef(null);
    const galleria2 = useRef(null);
    const galleria3 = useRef(null);

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

    const responsiveOptions2 = [
        {
            breakpoint: '1500px',
            numVisible: 5
        },
        {
            breakpoint: '1024px',
            numVisible: 3
        },
        {
            breakpoint: '768px',
            numVisible: 2
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
                <h5>With Thumbnails</h5>
                <Galleria ref={galleria1} value={images} responsiveOptions={responsiveOptions2} numVisible={9} style={{ maxWidth: '50%' }}
                    circular fullScreen showItemNavigators item={itemTemplate} thumbnail={thumbnailTemplate} />

                <Button label="Show" icon="pi pi-external-link" onClick={() => galleria1.current.show()} />
            </div>

            <div className="card">
                <h5>Without Thumbnails</h5>
                <Galleria ref={galleria2} value={images} responsiveOptions={responsiveOptions} numVisible={7} style={{ maxWidth: '850px' }}
                    circular fullScreen showItemNavigators showThumbnails={false} item={itemTemplate} thumbnail={thumbnailTemplate} />

                <Button label="Show" icon="pi pi-external-link" onClick={() => galleria2.current.show()} />
            </div>

            <div className="card">
                <h5>Custom Content</h5>
                <Galleria ref={galleria3} value={images} responsiveOptions={responsiveOptions} numVisible={7} style={{ maxWidth: '850px' }}
                    activeIndex={activeIndex} onItemChange={(e) => setActiveIndex(e.index)}
                    circular fullScreen showItemNavigators showThumbnails={false} item={itemTemplate} thumbnail={thumbnailTemplate} />

                <div className="grid" style={{ maxWidth: '400px' }}>
                    {
                        images && images.map((image, index) => {
                            let imgEl = <img src={image.thumbnailImageSrc} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={image.alt} style={{ cursor: 'pointer' }} onClick={
                                () => {setActiveIndex(index); galleria3.current.show()}
                            } />

                            return (
                                <div className="col-3" key={index}>
                                    {imgEl}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}
            `
        },
        'ts': {
            tabName: 'TS Source',
            content: `
import React, { useState, useEffect, useRef } from 'react';
import { PhotoService } from '../service/PhotoService';
import { Galleria } from 'primereact/galleria';
import { Button } from 'primereact/button';

const GalleriaFullScreenDemo = () => {

    const [images, setImages] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const galleriaService = new PhotoService();
    const galleria1 = useRef(null);
    const galleria2 = useRef(null);
    const galleria3 = useRef(null);

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

    const responsiveOptions2 = [
        {
            breakpoint: '1500px',
            numVisible: 5
        },
        {
            breakpoint: '1024px',
            numVisible: 3
        },
        {
            breakpoint: '768px',
            numVisible: 2
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
                <h5>With Thumbnails</h5>
                <Galleria ref={galleria1} value={images} responsiveOptions={responsiveOptions2} numVisible={9} style={{ maxWidth: '50%' }}
                    circular fullScreen showItemNavigators item={itemTemplate} thumbnail={thumbnailTemplate} />

                <Button label="Show" icon="pi pi-external-link" onClick={() => galleria1.current.show()} />
            </div>

            <div className="card">
                <h5>Without Thumbnails</h5>
                <Galleria ref={galleria2} value={images} responsiveOptions={responsiveOptions} numVisible={7} style={{ maxWidth: '850px' }}
                    circular fullScreen showItemNavigators showThumbnails={false} item={itemTemplate} thumbnail={thumbnailTemplate} />

                <Button label="Show" icon="pi pi-external-link" onClick={() => galleria2.current.show()} />
            </div>

            <div className="card">
                <h5>Custom Content</h5>
                <Galleria ref={galleria3} value={images} responsiveOptions={responsiveOptions} numVisible={7} style={{ maxWidth: '850px' }}
                    activeIndex={activeIndex} onItemChange={(e) => setActiveIndex(e.index)}
                    circular fullScreen showItemNavigators showThumbnails={false} item={itemTemplate} thumbnail={thumbnailTemplate} />

                <div className="grid" style={{ maxWidth: '400px' }}>
                    {
                        images && images.map((image, index) => {
                            let imgEl = <img src={image.thumbnailImageSrc} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={image.alt} style={{ cursor: 'pointer' }} onClick={
                                () => {setActiveIndex(index); galleria3.current.show()}
                            } />

                            return (
                                <div className="col-3" key={index}>
                                    {imgEl}
                                </div>
                            )
                        })
                    }
                </div>
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

    const GalleriaFullScreenDemo = () => {

        const [images, setImages] = useState(null);
        const [activeIndex, setActiveIndex] = useState(0);
        const galleriaService = new PhotoService();
        const galleria1 = useRef(null);
        const galleria2 = useRef(null);
        const galleria3 = useRef(null);

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

        const responsiveOptions2 = [
            {
                breakpoint: '1500px',
                numVisible: 5
            },
            {
                breakpoint: '1024px',
                numVisible: 3
            },
            {
                breakpoint: '768px',
                numVisible: 2
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
                    <h5>With Thumbnails</h5>
                    <Galleria ref={galleria1} value={images} responsiveOptions={responsiveOptions2} numVisible={9} style={{ maxWidth: '50%' }}
                        circular fullScreen showItemNavigators item={itemTemplate} thumbnail={thumbnailTemplate} />

                    <Button label="Show" icon="pi pi-external-link" onClick={() => galleria1.current.show()} />
                </div>

                <div className="card">
                    <h5>Without Thumbnails</h5>
                    <Galleria ref={galleria2} value={images} responsiveOptions={responsiveOptions} numVisible={7} style={{ maxWidth: '850px' }}
                        circular fullScreen showItemNavigators showThumbnails={false} item={itemTemplate} thumbnail={thumbnailTemplate} />

                    <Button label="Show" icon="pi pi-external-link" onClick={() => galleria2.current.show()} />
                </div>

                <div className="card">
                    <h5>Custom Content</h5>
                    <Galleria ref={galleria3} value={images} responsiveOptions={responsiveOptions} numVisible={7} style={{ maxWidth: '850px' }}
                        activeIndex={activeIndex} onItemChange={(e) => setActiveIndex(e.index)}
                        circular fullScreen showItemNavigators showThumbnails={false} item={itemTemplate} thumbnail={thumbnailTemplate} />

                    <div className="grid" style={{ maxWidth: '400px' }}>
                        {
                            images && images.map((image, index) => {
                                let imgEl = <img src={image.thumbnailImageSrc} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={image.alt} style={{ cursor: 'pointer' }} onClick={
                                    () => {setActiveIndex(index); galleria3.current.show()}
                                } />

                                return (
                                    <div className="col-3" key={index}>
                                        {imgEl}
                                    </div>
                                )
                            })
                        }
                    </div>
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
                    useLiveEditorTabs({ name: 'GalleriaFullScreenDemo', sources: sources, service: 'PhotoService', data: 'photos'})
                }
            </TabView>
        </div>
    )
})
