import React, { Component } from 'react';
import { GalleriaService } from '../service/GalleriaService';
import { Galleria } from '../../components/galleria/Galleria';
import { GalleriaSubmenu } from './GalleriaSubmenu';
import { Button } from '../../components/button/Button';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { CodeHighlight } from '../codehighlight/CodeHighlight';
import AppContentContext from '../../AppContentContext';

export class GalleriaFullScreenDemo extends Component {

    constructor() {
        super();

        this.state = {
            images: null,
            activeIndex: 0
        };

        this.galleriaService = new GalleriaService();
        this.itemTemplate = this.itemTemplate.bind(this);
        this.previewTemplate = this.previewTemplate.bind(this);
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
                        <h1>Galleria - FullScreen</h1>
                        <p></p>

                        <AppContentContext.Consumer>
                            {context => <button onClick={() => context.onChangelogBtnClick("galleria")} className="layout-changelog-button">{context.changelogText}</button>}
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Basic</h3>
                    <Galleria ref={(el) => this.galleria1 = el} value={this.state.images} responsiveOptions={this.responsiveOptions2} numVisible={9}
                        previewItemTemplate={this.previewTemplate} thumbnailItemTemplate={this.itemTemplate}
                        circular={true} fullScreen={true} showPreviewNavButtons={true} style={{maxWidth: '50%'}} />

                    <Button label="Show" icon="pi pi-external-link" onClick={() => this.galleria1.show()} />

                    <h3>Without Thumbnails</h3>
                    <Galleria ref={(el) => this.galleria2 = el} value={this.state.images} responsiveOptions={this.responsiveOptions} numVisible={7}
                        previewItemTemplate={this.previewTemplate} thumbnailItemTemplate={this.itemTemplate}
                        circular={true} fullScreen={true} showPreviewNavButtons={true} showThumbnails={false} style={{maxWidth: '850px'}} />

                    <Button label="Show" icon="pi pi-external-link" onClick={() => this.galleria2.show()} />

                    <h3>Custom Contents</h3>
                    <Galleria ref={(el) => this.galleria3 = el} value={this.state.images} activeIndex={this.state.activeIndex} onItemChange={this.onItemChange}
                        responsiveOptions={this.responsiveOptions} numVisible={7} previewItemTemplate={this.previewTemplate} thumbnailItemTemplate={this.itemTemplate}
                        circular={true} fullScreen={true} showPreviewNavButtons={true} showThumbnails={false} style={{maxWidth: '850px'}} />

                    <div className="p-grid" style={{maxWidth: '400px'}}>
                    {
                        this.state.images && this.state.images.map((image, index) => {
                            let imgEl = <img src={`${image.thumbnailImageSrc}`} alt={image.alt} style={{cursor: 'pointer'}} onClick={() => {
                                this.setState({ activeIndex: index }, () => this.galleria3.show());
                            }}/>

                            return (
                                <div className="p-col-3" key={index}>
                                    {imgEl}
                                </div>
                            )
                        })
                    }
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
                        <CodeHighlight className="language-javascript">
                            {`
import React, { Component } from 'react';
import { GalleriaService } from '../service/GalleriaService';
import { Galleria } from '../../components/galleria/Galleria';
import { Button } from '../../components/button/Button';

export class GalleriaFullScreenDemo extends Component {

    constructor() {
        super();

        this.state = {
            images: null,
            activeIndex: 0
        };

        this.galleriaService = new GalleriaService();
        this.itemTemplate = this.itemTemplate.bind(this);
        this.previewTemplate = this.previewTemplate.bind(this);
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
        return (
            <div className="p-grid p-nogutter p-justify-center">
                <img src={\`\${item.thumbnailImageSrc}\`} alt={item.alt} style={{ display: 'block' }} />
            </div>
        );
    }

    previewTemplate(item) {
        return <img src={\`\${item.previewImageSrc}\`} alt={item.alt} style={{ width: '100%', display: 'block' }} />
    }

    render() {
        return (
            <div>
                <GalleriaSubmenu />

                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Galleria - FullScreen</h1>
                        <p></p>

                        <AppContentContext.Consumer>
                            {context => <button onClick={() => context.onChangelogBtnClick("galleria")} className="layout-changelog-button">{context.changelogText}</button>}
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Basic</h3>
                    <Galleria ref={(el) => this.galleria1 = el} value={this.state.images} responsiveOptions={this.responsiveOptions2} numVisible={9}
                        previewItemTemplate={this.previewTemplate} thumbnailItemTemplate={this.itemTemplate}
                        circular={true} fullScreen={true} showPreviewNavButtons={true} style={{maxWidth: '50%'}} />

                    <Button label="Show" icon="pi pi-external-link" onClick={() => this.galleria1.show()} />

                    <h3>Without Thumbnails</h3>
                    <Galleria ref={(el) => this.galleria2 = el} value={this.state.images} responsiveOptions={this.responsiveOptions} numVisible={7}
                        previewItemTemplate={this.previewTemplate} thumbnailItemTemplate={this.itemTemplate}
                        circular={true} fullScreen={true} showPreviewNavButtons={true} showThumbnails={false} style={{maxWidth: '850px'}} />

                    <Button label="Show" icon="pi pi-external-link" onClick={() => this.galleria2.show()} />

                    <h3>Custom Contents</h3>
                    <Galleria ref={(el) => this.galleria3 = el} value={this.state.images} activeIndex={this.state.activeIndex} onItemChange={this.onItemChange}
                        responsiveOptions={this.responsiveOptions} numVisible={7} previewItemTemplate={this.previewTemplate} thumbnailItemTemplate={this.itemTemplate}
                        circular={true} fullScreen={true} showPreviewNavButtons={true} showThumbnails={false} style={{maxWidth: '850px'}} />

                    <div className="p-grid" style={{maxWidth: '400px'}}>
                    {
                        this.state.images && this.state.images.map((image, index) => {
                            let imgEl = <img src={\`\${image.thumbnailImageSrc}\`} alt={image.alt} style={{cursor: 'pointer'}} onClick={() => {
                                this.setState({ activeIndex: index }, () => this.galleria3.show());
                            }}/>

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
