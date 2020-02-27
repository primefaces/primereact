import React, { Component } from 'react';
import { GalleriaService } from '../service/GalleriaService';
import { Galleria } from '../../components/galleria/Galleria';
import { GalleriaSubmenu } from './GalleriaSubmenu';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { CodeHighlight } from '../codehighlight/CodeHighlight';
import AppContentContext from '../../AppContentContext';

export class GalleriaThumbnailDemo extends Component {

    constructor() {
        super();

        this.state = {
            images: null
        };

        this.galleriaService = new GalleriaService();
        this.itemTemplate = this.itemTemplate.bind(this);
        this.previewTemplate = this.previewTemplate.bind(this);
        this.captionTemplate = this.captionTemplate.bind(this);

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
                <img src={`${item.thumbnailImageSrc}`} alt={item.alt} style={{ width: '100%', display: 'block' }}/>
            </div>
        );
    }

    previewTemplate(item) {
        return <img src={`${item.previewImageSrc}`} alt={item.alt} style={{ width: '100%', display: 'block' }} />
    }

    captionTemplate(item) {
        return (
            <React.Fragment>
                <h4>{item.title}</h4>
                <p>{item.alt}</p>
            </React.Fragment>
        );
    }

    render() {
        return (
            <div>
                <GalleriaSubmenu />

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
                        previewItemTemplate={this.previewTemplate} thumbnailItemTemplate={this.itemTemplate}
                        style={{maxWidth: '520px'}} />

                    <h3>Position</h3>
                    <Galleria value={this.state.images} responsiveOptions={this.responsiveOptions2} numVisible={4}
                        previewItemTemplate={this.previewTemplate} thumbnailItemTemplate={this.itemTemplate}
                        thumbnailsPosition="left"
                        style={{maxWidth: '610px', marginTop: '2em'}} header="Left" />

                    <Galleria value={this.state.images} responsiveOptions={this.responsiveOptions2} numVisible={4}
                        previewItemTemplate={this.previewTemplate} thumbnailItemTemplate={this.itemTemplate}
                        thumbnailsPosition="right"
                        style={{maxWidth: '610px', marginTop: '2em'}} header="Right" />

                    <Galleria value={this.state.images} responsiveOptions={this.responsiveOptions} numVisible={5}
                        previewItemTemplate={this.previewTemplate} thumbnailItemTemplate={this.itemTemplate}
                        thumbnailsPosition="top"
                        style={{maxWidth: '520px', marginTop: '2em'}} header="Top" />

                    <Galleria value={this.state.images} responsiveOptions={this.responsiveOptions} numVisible={5}
                        previewItemTemplate={this.previewTemplate} thumbnailItemTemplate={this.itemTemplate}
                        thumbnailsPosition="bottom"
                        style={{maxWidth: '520px', marginTop: '2em'}} header="Bottom" />
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
                        <CodeHighlight className="language-javascript">
                            {`
import React, { Component } from 'react';
import { GalleriaService } from '../service/GalleriaService';
import { Galleria } from '../../components/galleria/Galleria';

export class GalleriaThumbnailDemo extends Component {

    constructor() {
        super();

        this.state = {
            images: null
        };

        this.galleriaService = new GalleriaService();
        this.itemTemplate = this.itemTemplate.bind(this);
        this.previewTemplate = this.previewTemplate.bind(this);
        this.captionTemplate = this.captionTemplate.bind(this);

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
                <img src={\`\${item.thumbnailImageSrc}\`} alt={item.alt} style={{ width: '100%', display: 'block' }}/>
            </div>
        );
    }

    previewTemplate(item) {
        return <img src={\`\${item.previewImageSrc}\`} alt={item.alt} style={{ width: '100%', display: 'block' }} />
    }

    captionTemplate(item) {
        return (
            <React.Fragment>
                <h4>{item.title}</h4>
                <p>{item.alt}</p>
            </React.Fragment>
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
                        previewItemTemplate={this.previewTemplate} thumbnailItemTemplate={this.itemTemplate}
                        style={{maxWidth: '520px'}} />

                    <h3>Position</h3>
                    <Galleria value={this.state.images} responsiveOptions={this.responsiveOptions2} numVisible={4}
                        previewItemTemplate={this.previewTemplate} thumbnailItemTemplate={this.itemTemplate}
                        thumbnailsPosition="left"
                        style={{maxWidth: '610px', marginTop: '2em'}} header="Left" />

                    <Galleria value={this.state.images} responsiveOptions={this.responsiveOptions2} numVisible={4}
                        previewItemTemplate={this.previewTemplate} thumbnailItemTemplate={this.itemTemplate}
                        thumbnailsPosition="right"
                        style={{maxWidth: '610px', marginTop: '2em'}} header="Right" />

                    <Galleria value={this.state.images} responsiveOptions={this.responsiveOptions} numVisible={5}
                        previewItemTemplate={this.previewTemplate} thumbnailItemTemplate={this.itemTemplate}
                        thumbnailsPosition="top"
                        style={{maxWidth: '520px', marginTop: '2em'}} header="Top" />

                    <Galleria value={this.state.images} responsiveOptions={this.responsiveOptions} numVisible={4}
                        previewItemTemplate={this.previewTemplate} thumbnailItemTemplate={this.itemTemplate}
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
