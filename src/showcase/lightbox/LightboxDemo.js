import React, {Component} from 'react';
import {Link} from 'react-router';
import {Lightbox} from '../../components/lightbox/Lightbox';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../../components/codehighlight/CodeHighlight';

export class LightboxDemo extends Component {

    constructor() {
        super();
        this.state = {};
    }

    render() {
        var images=[
            {source:'showcase/resources/demo/images/sopranos/sopranos1.jpg',
                thumbnail:'showcase/resources/demo/images/sopranos/sopranos1_small.jpg',
                title:'Sopranos 1'},
            {source:'showcase/resources/demo/images/sopranos/sopranos2.jpg',
                thumbnail:'showcase/resources/demo/images/sopranos/sopranos2_small.jpg',
                title:'Sopranos 2'},
            {source:'showcase/resources/demo/images/sopranos/sopranos3.jpg',
                thumbnail:'showcase/resources/demo/images/sopranos/sopranos3_small.jpg',
                title:'Sopranos 3'},
            {source:'showcase/resources/demo/images/sopranos/sopranos4.jpg',
                thumbnail:'showcase/resources/demo/images/sopranos/sopranos4_small.jpg',
                title:'Sopranos 4'}
        ];

        return (
            <div>
                <div className="content-section">
                    <div className="feature-intro">
                        <h1>Lightbox</h1>
                        <p>LightBox is a modal overlay component to display images, videos, inline html content and iframes.</p>
                    </div>
                </div>
                <div className="content-section implementation">
                    <h3 className="first">Basic</h3>
                    <Lightbox type="images" images={images} />
                    <h3>Content</h3>
                    <Lightbox type="content">
                        <a className="group" href="#">
                            Watch Video
                        </a>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/9bZkp7q19f0" frameBorder="0" allowFullScreen></iframe>
                    </Lightbox>
                </div>

                <LightboxDoc/>

            </div>
        );
    }
}

class LightboxDoc extends Component {
    render() {
        return (
            <div className="content-section source">
                <TabView effect="fade">
                    <TabPanel header="Documentation">
                        <h3>Import</h3>
                        <CodeHighlight className="language-javascript">
                            {`
import {Lightbox} from 'primereact/components/lightbox/Lightbox';

`}</CodeHighlight>

                        <h3>Getting Started</h3>
                        <p>Lightbox has two modes; image and custom content defined using type property. In image mode a collection of images are required to display where an image object in the collection defines the source of the original image, thumbnail image and the title.</p>
                        <CodeHighlight className="language-markup">
                            {`
<Lightbox type="images" images={images}/>

`}
                        </CodeHighlight>
                        <CodeHighlight className="language-markup">
                            {`
var images=[
            {source:'showcase/resources/demo/images/sopranos/sopranos1.jpg', thumbnail:'showcase/resources/demo/images/sopranos/sopranos1_small.jpg', title:'Sopranos 1'},
            {source:'showcase/resources/demo/images/sopranos/sopranos2.jpg', thumbnail:'showcase/resources/demo/images/sopranos/sopranos2_small.jpg', title:'Sopranos 2'},
            {source:'showcase/resources/demo/images/sopranos/sopranos3.jpg', thumbnail:'showcase/resources/demo/images/sopranos/sopranos3_small.jpg', title:'Sopranos 3'},
            {source:'showcase/resources/demo/images/sopranos/sopranos4.jpg', thumbnail:'showcase/resources/demo/images/sopranos/sopranos4_small.jpg', title:'Sopranos 4'}
        ];

`}
                        </CodeHighlight>
                        <p>Content mode is enabled by setting type property to "content", providing an anchor to open the lightbox and content to display inside lightbox.</p>
                        <CodeHighlight className="language-markup">
                            {`
<Lightbox type="content">
    <a className="group" href="#">
        Watch Video
    </a>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/9bZkp7q19f0" frameBorder="0" allowFullScreen></iframe>
</Lightbox>

`}
                        </CodeHighlight>

                        <h3>Effects</h3>
                        <p>The easing function to use between image transitions is "ease-out" by default and this can be customized using easing property. See <a href="http://www.w3schools.com/cssref/css3_pr_transition-timing-function.asp">here</a> for possible alternative values. Duration of the effect can be changed using effectDuration option.</p>
                        <CodeHighlight className="language-markup">
                            {`
<Lightbox type="images" images={images} easing="ease-in" effectDuration="1500ms" />

`}
                        </CodeHighlight>

                        <h3>Attributes</h3>
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
                                        <td>images</td>
                                        <td>array</td>
                                        <td>null</td>
                                        <td>An array of images to display.</td>
                                    </tr>
                                    <tr>
                                        <td>type</td>
                                        <td>string</td>
                                        <td>image</td>
                                        <td>Type of the lightbox, valid values are "image" and "content".</td>
                                    </tr>
                                    <tr>
                                        <td>style</td>
                                        <td>object</td>
                                        <td>null</td>
                                        <td>Inline style of the component.</td>
                                    </tr>
                                    <tr>
                                        <td>styleClass</td>
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
                                        <td>ui-lightbox</td>
                                        <td>Container element</td>
                                    </tr>
                                    <tr>
                                        <td>ui-lightbox-content</td>
                                        <td>Content element.</td>
                                    </tr>
                                    <tr>
                                        <td>ui-lightbox-nav-right</td>
                                        <td>Element to navigate to next image.</td>
                                    </tr>
                                    <tr>
                                        <td>ui-lightbox-nav-left</td>
                                        <td>Element to navigate to previous image.</td>
                                    </tr>
                                    <tr>
                                        <td>ui-lightbox-caption</td>
                                        <td>Caption element.</td>
                                    </tr>
                                    <tr>
                                        <td>ui-lightbox-caption-text</td>
                                        <td>Text of caption.</td>
                                    </tr>
                                    <tr>
                                        <td>ui-lightbox-close</td>
                                        <td>Close icon.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3>Dependencies</h3>
                        <p>None.</p>
                    </TabPanel>

                    <TabPanel header="Source">
                        <CodeHighlight className="language-javascript">
                            {`
export class LightboxDemo extends Component {

    constructor() {
        super();
        this.state = {};
    }

    render() {
        var images=[
            {source:'showcase/resources/demo/images/sopranos/sopranos1.jpg', thumbnail:'showcase/resources/demo/images/sopranos/sopranos1_small.jpg', title:'Sopranos 1'},
            {source:'showcase/resources/demo/images/sopranos/sopranos2.jpg', thumbnail:'showcase/resources/demo/images/sopranos/sopranos2_small.jpg', title:'Sopranos 2'},
            {source:'showcase/resources/demo/images/sopranos/sopranos3.jpg', thumbnail:'showcase/resources/demo/images/sopranos/sopranos3_small.jpg', title:'Sopranos 3'},
            {source:'showcase/resources/demo/images/sopranos/sopranos4.jpg', thumbnail:'showcase/resources/demo/images/sopranos/sopranos4_small.jpg', title:'Sopranos 4'}
        ];

        return (
            <div>
                <div className="content-section">
                    <div className="feature-intro">
                        <h1>Lightbox</h1>
                        <p>LightBox is a modal overlay component to display images, videos, inline html content and iframes.</p>
                    </div>
                </div>
                <div className="content-section implementation">
                    <h3 className="first">Basic</h3>
                    <Lightbox type="images" images={images} />

                    <h3>Content</h3>
                    <Lightbox type="content">
                        <a className="group" href="#">
                            Watch Video
                        </a>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/9bZkp7q19f0" frameBorder="0" allowFullScreen></iframe>
                    </Lightbox>
                </div>

                <LightboxDoc/>

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