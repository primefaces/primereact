import React, { Component } from 'react';
import { PhotoService } from '../service/PhotoService';
import { Galleria } from '../../components/galleria/Galleria';

import { TabView, TabPanel } from '../../components/tabview/TabView';
import { CodeHighlight } from '../codehighlight/CodeHighlight';
import { AppInlineHeader } from '../../AppInlineHeader';

export class GalleriaThumbnailDemo extends Component {

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

        this.responsiveOptions2 = [
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
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />
    }

    thumbnailTemplate(item) {
        return <img src={item.thumbnailImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <AppInlineHeader changelogText="galleria">
                        <h1>Galleria <span>Thumbnail</span></h1>
                        <p>Thumbnails represent a smaller version of the actual content.</p>
                    </AppInlineHeader>
                </div>

                <div className="content-section implementation">
                    <div className="card">
                        <h5>Positioned at Bottom</h5>
                        <Galleria value={this.state.images} responsiveOptions={this.responsiveOptions} numVisible={5} style={{ maxWidth: '640px' }}
                            item={this.itemTemplate} thumbnail={this.thumbnailTemplate} />
                    </div>

                    <div className="card">
                        <h5>Positioned at Left</h5>
                        <Galleria value={this.state.images} responsiveOptions={this.responsiveOptions2} numVisible={4} thumbnailsPosition="left" style={{ maxWidth: '640px' }}
                            item={this.itemTemplate} thumbnail={this.thumbnailTemplate} />
                    </div>

                    <div className="card">
                        <h5>Positioned at Right</h5>
                        <Galleria value={this.state.images} responsiveOptions={this.responsiveOptions2} numVisible={4} thumbnailsPosition="right" style={{ maxWidth: '640px' }}
                            item={this.itemTemplate} thumbnail={this.thumbnailTemplate} />
                    </div>

                    <div className="card">
                        <h5>Positioned at Top</h5>
                        <Galleria value={this.state.images} responsiveOptions={this.responsiveOptions} numVisible={5} thumbnailsPosition="top" style={{ maxWidth: '640px' }}
                            item={this.itemTemplate} thumbnail={this.thumbnailTemplate} />
                    </div>
                </div>

                <GalleriaThumbnailDemoDoc></GalleriaThumbnailDemoDoc>
            </div>
        );
    }
}

export class GalleriaThumbnailDemoDoc extends Component {

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
import { Galleria } from '../../components/galleria/Galleria';

export class GalleriaThumbnailDemo extends Component {

    constructor() {
        super();

        this.state = {
            images: null
        };

        this.galleriaService = new PhotoService();
        this.itemTemplate = this.itemTemplate.bind(this);
        this.previewTemplate = this.previewTemplate.bind(this);
        this.caption = this.caption.bind(this);

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
        return (
            <div className="p-grid p-nogutter p-justify-center">
                <img src={\`\${item.thumbnailImageSrc}\`} srcSet="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" alt={item.alt} style={{ width: '100%', display: 'block' }}/>
            </div>
        );
    }

    previewTemplate(item) {
        return <img src={\`\${item.previewImageSrc}\`} srcSet="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" alt={item.alt} style={{ width: '100%', display: 'block' }} />
    }

    caption(item) {
        return (
            <>
                <h4>{item.title}</h4>
                <p>{item.alt}</p>
            </>
        );
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Galleria - Thumbnail</h1>
                        <p></p>

                        <AppContentContext.Consumer>
                            {context => <button onClick={() => context.onChangelogBtnClick("galleria")} className="layout-changelog-button">{context.changelogText}</button>}
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Basic</h3>
                    <Galleria value={this.state.images} responsiveOptions={this.responsiveOptions} numVisible={5}
                        item={this.previewTemplate} thumbnail={this.itemTemplate}
                        style={{maxWidth: '520px'}} />

                    <h3>Position</h3>
                    <Galleria value={this.state.images} responsiveOptions={this.responsiveOptions2} numVisible={4}
                        item={this.previewTemplate} thumbnail={this.itemTemplate}
                        thumbnailsPosition="left"
                        style={{maxWidth: '610px', marginTop: '2em'}} header="Left" />

                    <Galleria value={this.state.images} responsiveOptions={this.responsiveOptions2} numVisible={4}
                        item={this.previewTemplate} thumbnail={this.itemTemplate}
                        thumbnailsPosition="right"
                        style={{maxWidth: '610px', marginTop: '2em'}} header="Right" />

                    <Galleria value={this.state.images} responsiveOptions={this.responsiveOptions} numVisible={5}
                        item={this.previewTemplate} thumbnail={this.itemTemplate}
                        thumbnailsPosition="top"
                        style={{maxWidth: '520px', marginTop: '2em'}} header="Top" />

                    <Galleria value={this.state.images} responsiveOptions={this.responsiveOptions} numVisible={4}
                        item={this.previewTemplate} thumbnail={this.itemTemplate}
                        thumbnailsPosition="bottom"
                        style={{maxWidth: '520px', marginTop: '2em'}} header="Bottom" />
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
