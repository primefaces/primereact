import React, { Component } from 'react';
import { PhotoService } from '../service/PhotoService';
import { Galleria } from '../../components/galleria/Galleria';
import { Button } from '../../components/button/Button';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { CodeHighlight } from '../codehighlight/CodeHighlight';
import { AppInlineHeader } from '../../AppInlineHeader';

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
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    }

    thumbnailTemplate(item) {
        return <img src={item.thumbnailImageSrc} alt={item.alt} style={{ display: 'block' }} />;
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <AppInlineHeader changelogText="galleria">
                        <h1>Galleria <span>FullScreen</span></h1>
                        <p>In fullscreen mode content covers the whole page over a mask.</p>
                    </AppInlineHeader>
                </div>

                <div className="content-section implementation">
                    <div className="card">
                        <h5>With Thumbnails</h5>
                        <Galleria ref={(el) => this.galleria1 = el} value={this.state.images} responsiveOptions={this.responsiveOptions2} numVisible={9} style={{ maxWidth: '50%' }}
                            circular fullScreen showItemNavigators item={this.itemTemplate} thumbnail={this.thumbnailTemplate} />

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

                        <div className="p-grid" style={{ maxWidth: '400px' }}>
                            {
                                this.state.images && this.state.images.map((image, index) => {
                                    let imgEl = <img src={image.thumbnailImageSrc} alt={image.alt} style={{ cursor: 'pointer' }} onClick={() => {
                                        this.setState({ activeIndex: index }, () => this.galleria3.show());
                                    }} />

                                    return (
                                        <div className="p-col-3" key={index}>
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
}

export class GalleriaFullScreenDemoDoc extends Component {

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
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    }

    thumbnailTemplate(item) {
        return <img src={item.thumbnailImageSrc} alt={item.alt} style={{ display: 'block' }} />;
    }

    render() {
        return (
            <div>
                <div className="card">
                    <h5>With Thumbnails</h5>
                    <Galleria ref={(el) => this.galleria1 = el} value={this.state.images} responsiveOptions={this.responsiveOptions2} numVisible={9} style={{ maxWidth: '50%' }}
                        circular fullScreen showItemNavigators item={this.itemTemplate} thumbnail={this.thumbnailTemplate} />

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

                    <div className="p-grid" style={{ maxWidth: '400px' }}>
                        {
                            this.state.images && this.state.images.map((image, index) => {
                                let imgEl = <img src={image.thumbnailImageSrc} alt={image.alt} style={{ cursor: 'pointer' }} onClick={() => {
                                    this.setState({ activeIndex: index }, () => this.galleria3.show());
                                }} />

                                return (
                                    <div className="p-col-3" key={index}>
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
`}
                        </CodeHighlight>
                    </TabPanel>
                </TabView>
            </div>
        )
    }
}
