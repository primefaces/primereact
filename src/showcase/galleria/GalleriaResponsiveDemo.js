import React, { Component } from 'react';
import { GalleriaService } from '../service/GalleriaService';
import { Galleria } from '../../components/galleria/Galleria';
import { GalleriaSubmenu } from './GalleriaSubmenu';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { CodeHighlight } from '../codehighlight/CodeHighlight';
import AppContentContext from '../../AppContentContext';

export class GalleriaResponsiveDemo extends Component {

    constructor() {
        super();

        this.state = {
            images: null
        };

        this.galleriaService = new GalleriaService();
        this.itemTemplate = this.itemTemplate.bind(this);
        this.previewTemplate = this.previewTemplate.bind(this);

        this.responsiveOptions = [
            {
                breakpoint: '1024px',
                numVisible: 5
            },
            {
                breakpoint: '960px',
                numVisible: 4
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
                        <h1>Galleria - Responsive</h1>
                        <p></p>

                        <AppContentContext.Consumer>
                            {context => <button onClick={() => context.onChangelogBtnClick("galleria")} className="layout-changelog-button">{context.changelogText}</button>}
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation">
                    <Galleria value={this.state.images} responsiveOptions={this.responsiveOptions} numVisible={7}
                        previewItemTemplate={this.previewTemplate} thumbnailItemTemplate={this.itemTemplate}
                        circular={true} style={{maxWidth: '800px'}} />
                </div>

                <GalleriaResponsiveDemoDoc></GalleriaResponsiveDemoDoc>
            </div>
        );
    }
}

export class GalleriaResponsiveDemoDoc extends Component {

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

export class GalleriaResponsiveDemo extends Component {

    constructor() {
        super();

        this.state = {
            images: null
        };

        this.galleriaService = new GalleriaService();
        this.itemTemplate = this.itemTemplate.bind(this);
        this.previewTemplate = this.previewTemplate.bind(this);

        this.responsiveOptions = [
            {
                breakpoint: '1024px',
                numVisible: 5
            },
            {
                breakpoint: '960px',
                numVisible: 4
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
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Galleria - Responsive</h1>
                        <p></p>

                        <AppContentContext.Consumer>
                            {context => <button onClick={() => context.onChangelogBtnClick("galleria")} className="layout-changelog-button">{context.changelogText}</button>}
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation">
                    <Galleria value={this.state.images} responsiveOptions={this.responsiveOptions} numVisible={7}
                        previewItemTemplate={this.previewTemplate} thumbnailItemTemplate={this.itemTemplate}
                        circular={true} style={{maxWidth: '800px'}} />
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
