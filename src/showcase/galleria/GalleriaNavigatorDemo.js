import React, { Component } from 'react';
import { PhotoService } from '../service/PhotoService';
import { Galleria } from '../../components/galleria/Galleria';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { CodeHighlight } from '../codehighlight/CodeHighlight';
import { AppInlineHeader } from '../../AppInlineHeader';

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
                        <h1>Galleria <span>Navigator</span></h1>
                        <p>Combining item navigators, thumbnails and indicators provide various UI alternatives.</p>
                    </AppInlineHeader>
                </div>

                <div className="content-section implementation">
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

                <GalleriaNavigatorDemoDoc />
            </div>
        );
    }
}

export class GalleriaNavigatorDemoDoc extends Component {

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
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    }

    thumbnailTemplate(item) {
        return <img src={item.thumbnailImageSrc} alt={item.alt} style={{ display: 'block' }} />;
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

`}
</CodeHighlight>
                    </TabPanel>
                </TabView>
            </div>
        )
    }
}
