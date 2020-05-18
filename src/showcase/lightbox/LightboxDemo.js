import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Lightbox} from '../../components/lightbox/Lightbox';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';
import AppContentContext from '../../AppContentContext';
import { LiveEditor } from '../liveeditor/LiveEditor';

export class LightboxDemo extends Component {

    render() {
        const images = [
            {
                source:'showcase/resources/demo/images/sopranos/sopranos1.jpg',
                thumbnail:'showcase/resources/demo/images/sopranos/sopranos1_small.jpg',
                title:'Sopranos 1'
            },
            {
                source:'showcase/resources/demo/images/sopranos/sopranos2.jpg',
                thumbnail:'showcase/resources/demo/images/sopranos/sopranos2_small.jpg',
                title:'Sopranos 2'
            },
            {
                source:'showcase/resources/demo/images/sopranos/sopranos3.jpg',
                thumbnail:'showcase/resources/demo/images/sopranos/sopranos3_small.jpg',
                title:'Sopranos 3'
            },
            {
                source:'showcase/resources/demo/images/sopranos/sopranos4.jpg',
                thumbnail:'showcase/resources/demo/images/sopranos/sopranos4_small.jpg',
                title:'Sopranos 4'
            }
        ];

        const videoTarget = (
            <button className="p-link">Watch a Video</button>
        );

        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Lightbox - (Deprecated in favor of Galleria)</h1>
                        <p>LightBox is a modal overlay component to display images, videos and inline content.</p>

                        <AppContentContext.Consumer>
                            { context => <button onClick={() => context.onChangelogBtnClick("lightbox")} className="layout-changelog-button">{context.changelogText}</button> }
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation lightbox-demo">
                    <h3 className="first">Basic</h3>
                    <Lightbox images={images} />

                    <h3>Content</h3>
                    <Lightbox target={videoTarget}>
                        <iframe title="Video" width="560" height="315" src="https://www.youtube.com/embed/9bZkp7q19f0" frameBorder="0" allowFullScreen></iframe>
                    </Lightbox>
                </div>

                <LightboxDoc/>
            </div>
        );
    }
}

class LightboxDoc extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0
        };

        this.sources = {
            'app': {
                tabName: 'Source',
                content: `
import React, { Component } from 'react';
import {Lightbox} from 'primereact/lightbox';

export class LightboxDemo extends Component {

    render() {
        const images = [
            {
                source:'showcase/resources/demo/images/sopranos/sopranos1.jpg',
                thumbnail:'showcase/resources/demo/images/sopranos/sopranos1_small.jpg',
                title:'Sopranos 1'
            },
            {
                source:'showcase/resources/demo/images/sopranos/sopranos2.jpg',
                thumbnail:'showcase/resources/demo/images/sopranos/sopranos2_small.jpg',
                title:'Sopranos 2'
            },
            {
                source:'showcase/resources/demo/images/sopranos/sopranos3.jpg',
                thumbnail:'showcase/resources/demo/images/sopranos/sopranos3_small.jpg',
                title:'Sopranos 3'
            },
            {
                source:'showcase/resources/demo/images/sopranos/sopranos4.jpg',
                thumbnail:'showcase/resources/demo/images/sopranos/sopranos4_small.jpg',
                title:'Sopranos 4'
            }
        ];

        const videoTarget = (
            <button className="p-link">Watch a Video</button>
        );

        return (
            <div className="lightbox-demo">
                <h3 className="first">Basic</h3>
                <Lightbox images={images} />

                <h3>Content</h3>
                <Lightbox target={videoTarget}>
                    <iframe title="Video" width="560" height="315" src="https://www.youtube.com/embed/9bZkp7q19f0" frameBorder="0" allowFullScreen></iframe>
                </Lightbox>
            </div>
        );
    }
}
                `
            },
            'hooks': {
                tabName: 'Hooks Source',
                content: `
import React from 'react';
import {Lightbox} from 'primereact/lightbox';

const LightboxDemo = () => {

    const images = [
        {
            source:'showcase/resources/demo/images/sopranos/sopranos1.jpg',
            thumbnail:'showcase/resources/demo/images/sopranos/sopranos1_small.jpg',
            title:'Sopranos 1'
        },
        {
            source:'showcase/resources/demo/images/sopranos/sopranos2.jpg',
            thumbnail:'showcase/resources/demo/images/sopranos/sopranos2_small.jpg',
            title:'Sopranos 2'
        },
        {
            source:'showcase/resources/demo/images/sopranos/sopranos3.jpg',
            thumbnail:'showcase/resources/demo/images/sopranos/sopranos3_small.jpg',
            title:'Sopranos 3'
        },
        {
            source:'showcase/resources/demo/images/sopranos/sopranos4.jpg',
            thumbnail:'showcase/resources/demo/images/sopranos/sopranos4_small.jpg',
            title:'Sopranos 4'
        }
    ];

    const videoTarget = (
        <button className="p-link">Watch a Video</button>
    );

    return (
        <div className="lightbox-demo">
            <h3 className="first">Basic</h3>
            <Lightbox images={images} />

            <h3>Content</h3>
            <Lightbox target={videoTarget}>
                <iframe title="Video" width="560" height="315" src="https://www.youtube.com/embed/9bZkp7q19f0" frameBorder="0" allowFullScreen></iframe>
            </Lightbox>
        </div>
    );
}
                `
            },
            'ts': {
                tabName: 'TS Source',
                content: `
import React from 'react';
import {Lightbox} from 'primereact/lightbox';

const LightboxDemo = () => {

    const images = [
        {
            source:'showcase/resources/demo/images/sopranos/sopranos1.jpg',
            thumbnail:'showcase/resources/demo/images/sopranos/sopranos1_small.jpg',
            title:'Sopranos 1'
        },
        {
            source:'showcase/resources/demo/images/sopranos/sopranos2.jpg',
            thumbnail:'showcase/resources/demo/images/sopranos/sopranos2_small.jpg',
            title:'Sopranos 2'
        },
        {
            source:'showcase/resources/demo/images/sopranos/sopranos3.jpg',
            thumbnail:'showcase/resources/demo/images/sopranos/sopranos3_small.jpg',
            title:'Sopranos 3'
        },
        {
            source:'showcase/resources/demo/images/sopranos/sopranos4.jpg',
            thumbnail:'showcase/resources/demo/images/sopranos/sopranos4_small.jpg',
            title:'Sopranos 4'
        }
    ];

    const videoTarget: any = (
        <button className="p-link">Watch a Video</button>
    );

    return (
        <div className="lightbox-demo">
            <h3 className="first">Basic</h3>
            <Lightbox images={images} />

            <h3>Content</h3>
            <Lightbox target={videoTarget}>
                <iframe title="Video" width="560" height="315" src="https://www.youtube.com/embed/9bZkp7q19f0" frameBorder="0" allowFullScreen></iframe>
            </Lightbox>
        </div>
    );
}
                `
            }
        }

        this.extFiles = {
            'index.css': `
.lightbox-demo .p-lightbox-image-target {
    margin-right: .5em;
}
            `
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.activeIndex !== nextState.activeIndex) {
            return true;
        }

        return false;
    }

    renderSourceButtons() {
        return (
            <div className="source-button-group">
                <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/lightbox" className="btn-viewsource" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    <span>View on GitHub</span>
                </a>
                <LiveEditor name="LightboxDemo" sources={this.sources} extFiles={this.extFiles} activeButtonIndex={this.state.activeIndex - 1} />
            </div>
        )
    }

    render() {
        const sourceButtons = this.renderSourceButtons();

        return (
            <div className="content-section documentation">
                <TabView activeIndex={this.state.activeIndex} onTabChange={(e) => this.setState({ activeIndex: e.index })}>
                    <TabPanel header="Documentation">
                        <h3>Import</h3>
                        <CodeHighlight className="language-javascript">
                            {`
import {Lightbox} from 'primereact/lightbox';

`}</CodeHighlight>

                        <h3>Getting Started</h3>
                        <p>Lightbox has two modes; image and custom content. In image mode a collection of images are required to display
                        where an image object in the collection defines the source of the original image, thumbnail image and the title.</p>

                        <CodeHighlight className="language-javascript">
{`
var images=[
    {source:'showcase/resources/demo/images/sopranos/sopranos1.jpg', thumbnail:'showcase/resources/demo/images/sopranos/sopranos1_small.jpg', title:'Sopranos 1'},
    {source:'showcase/resources/demo/images/sopranos/sopranos2.jpg', thumbnail:'showcase/resources/demo/images/sopranos/sopranos2_small.jpg', title:'Sopranos 2'},
    {source:'showcase/resources/demo/images/sopranos/sopranos3.jpg', thumbnail:'showcase/resources/demo/images/sopranos/sopranos3_small.jpg', title:'Sopranos 3'},
    {source:'showcase/resources/demo/images/sopranos/sopranos4.jpg', thumbnail:'showcase/resources/demo/images/sopranos/sopranos4_small.jpg', title:'Sopranos 4'}
];

`}
                        </CodeHighlight>

                        <CodeHighlight className="language-jsx">
                            {`
<Lightbox images={images} />

`}
                        </CodeHighlight>

                        <p>Content mode is enabled by defining <i>target</i> property as the trigger to display the lightbox. In this setting, children of the component would be displayed inside the overlay</p>
                        <CodeHighlight className="language-jsx">
                            {`
<Lightbox target={<a>Watch Video</a>}>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/9bZkp7q19f0" frameBorder="0" allowFullScreen></iframe>
</Lightbox>

`}
                        </CodeHighlight>

                        <h3>Effects</h3>
                        <p>The easing function to use between image transitions is "ease-out" by default and this can be customized using <i>easing</i> property. See <a href="http://www.w3schools.com/cssref/css3_pr_transition-timing-function.asp">here</a> for possible alternative values. Duration of the effect can be changed using effectDuration option.</p>
                        <CodeHighlight className="language-jsx">
                            {`
<Lightbox images={images} easing="ease-in" effectDuration="1500ms" />

`}
                        </CodeHighlight>

                        <h3>Properties</h3>
                        <div className="doc-tablewrapper">
                            <table className="doc-table">
                                <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Type</th>
                                    <th>Default</th>
                                    <th>Description</th>
                                </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>id</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Unique identifier of the element.</td>
                                    </tr>
                                    <tr>
                                        <td>images</td>
                                        <td>array</td>
                                        <td>null</td>
                                        <td>An array of images to display.</td>
                                    </tr>
                                    <tr>
                                        <td>target</td>
                                        <td>any</td>
                                        <td>null</td>
                                        <td>Target element to show the Lightbox in content mode.</td>
                                    </tr>
                                    <tr>
                                        <td>style</td>
                                        <td>object</td>
                                        <td>null</td>
                                        <td>Inline style of the component.</td>
                                    </tr>
                                    <tr>
                                        <td>className</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Style class of the component.</td>
                                    </tr>
                                    <tr>
                                        <td>easing</td>
                                        <td>string</td>
                                        <td>ease-out</td>
                                        <td>Easing to use for transition between images.</td>
                                    </tr>
                                    <tr>
                                        <td>effectDuration</td>
                                        <td>string</td>
                                        <td>500ms</td>
                                        <td>Duration of the transition between the images.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <h3>Styling</h3>
                        <p>Following is the list of structural style classes, for theming classes visit <Link to="/theming"> theming</Link> page.</p>
                        <div className="doc-tablewrapper">
                            <table className="doc-table">
                                <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Element</th>
                                </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>p-lightbox</td>
                                        <td>Container element</td>
                                    </tr>
                                    <tr>
                                        <td>p-lightbox-content</td>
                                        <td>Content element.</td>
                                    </tr>
                                    <tr>
                                        <td>p-lightbox-nav-right</td>
                                        <td>Element to navigate to next image.</td>
                                    </tr>
                                    <tr>
                                        <td>p-lightbox-nav-left</td>
                                        <td>Element to navigate to previous image.</td>
                                    </tr>
                                    <tr>
                                        <td>p-lightbox-caption</td>
                                        <td>Caption element.</td>
                                    </tr>
                                    <tr>
                                        <td>p-lightbox-caption-text</td>
                                        <td>Text of caption.</td>
                                    </tr>
                                    <tr>
                                        <td>p-lightbox-close</td>
                                        <td>Close icon.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3>Dependencies</h3>
                        <p>None.</p>
                    </TabPanel>

                    {
                        this.sources && Object.entries(this.sources).map(([key, value], index) => {
                            return (
                                <TabPanel key={`source_${index}`} header={value.tabName}>
                                    {sourceButtons}

                                    <CodeHighlight className="language-javascript">
                                        {value.content}
                                    </CodeHighlight>
                                </TabPanel>
                            );
                        })
                    }
                </TabView>
            </div>
        )
    }

}
