import React, { Component } from 'react';
import { PhotoService } from '../service/PhotoService';
import { Galleria } from '../../components/galleria/Galleria';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { CodeHighlight } from '../codehighlight/CodeHighlight';
import { AppInlineHeader } from '../../AppInlineHeader';
import { Button } from '../../components/button/Button';

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
                        <h1>Galleria <span>Programmatic</span></h1>
                        <p>Galleria can be controlled programmatically using the <b>activeIndex</b> property.</p>
                    </AppInlineHeader>
                </div>

                <div className="content-section implementation">
                    <div className="card">
                        <div className="p-py-2">
                            <Button icon="pi pi-minus" onClick={this.prev} className="p-button-secondary" />
                            <Button icon="pi pi-plus" onClick={this.next} className="p-button-secondary p-ml-2" />
                        </div>

                        <Galleria value={this.state.images} activeIndex={this.state.activeIndex} onItemChange={(e) => this.setState({ activeIndex: e.index })} responsiveOptions={this.responsiveOptions} numVisible={5}
                            item={this.itemTemplate} thumbnail={this.thumbnailTemplate} style={{ maxWidth: '640px' }} />
                    </div>
                </div>

                <GalleriaProgrammaticDemoDoc />
            </div>
        );
    }
}

export class GalleriaProgrammaticDemoDoc extends Component {

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

export class GalleriaCaptionDemo extends Component {

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
    }

    componentDidMount() {
        this.galleriaService.getImages().then(data => this.setState({ images: data }));
    }

    itemTemplate(item) {
        return (
            <div className="p-grid p-nogutter p-justify-center">
                <img src={\`\${item.thumbnailImageSrc}\`} srcSet="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" alt={item.alt} style={{ display: 'block' }} />
            </div>
        );
    }

    previewTemplate(item) {
        return <img src={\`\${item.previewImageSrc}\`} srcSet="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" alt={item.alt} style={{ width: '100%', display: 'block' }} />
    }

    caption(item) {
        return (
            <>
                <h4 style={{marginBottom: '.5em'}}>{item.title}</h4>
                <p>{item.alt}</p>
            </>
        );
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Galleria - Caption</h1>
                        <p></p>

                        <AppContentContext.Consumer>
                            {context => <button onClick={() => context.onChangelogBtnClick("galleria")} className="layout-changelog-button">{context.changelogText}</button>}
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation">
                    <Galleria value={this.state.images} responsiveOptions={this.responsiveOptions} numVisible={5}
                        item={this.previewTemplate} thumbnail={this.itemTemplate}
                        caption={this.caption} style={{maxWidth: '520px'}} />
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
