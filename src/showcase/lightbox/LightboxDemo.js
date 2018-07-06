import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Lightbox} from '../../components/lightbox/Lightbox';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';

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

        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Lightbox</h1>
                        <p>LightBox is a modal overlay component to display images, videos and inline content.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3 className="first">Basic</h3>
                    <Lightbox type="images" images={images} />

                    <h3>Content</h3>
                    <Lightbox type="content">
                        <a className="group">
                            Watch Video
                        </a>
                        <iframe title="Video" width="560" height="315" src="https://www.youtube.com/embed/9bZkp7q19f0" frameBorder="0" allowFullScreen></iframe>
                    </Lightbox>
                </div>

                <LightboxDoc/>
            </div>
        );
    }
}

class LightboxDoc extends Component {

    shouldComponentUpdate(){
        return false;
    }

    render() {
        return (
            <div className="content-section source">
                <TabView effect="fade">
                    <TabPanel header="Documentation">
                        <h3>Import</h3>
                        <CodeHighlight className="language-javascript">
                            {`
import {Lightbox} from 'primereact/lightbox';

`}</CodeHighlight>

                        <h3>Getting Started</h3>
                        <p>Lightbox has two modes; image and custom content defined using <i>type</i> property. In image mode a collection of images are required to display 
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
<Lightbox type="images" images={images} />

`}
                        </CodeHighlight>
                        
                        <p>Content mode is enabled by setting <i>type</i> property to "content", providing an anchor to open the lightbox and content to display inside lightbox.</p>
                        <CodeHighlight className="language-jsx">
                            {`
<Lightbox type="content">
    <a>Watch Video</a>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/9bZkp7q19f0" frameBorder="0" allowFullScreen></iframe>
</Lightbox>

`}
                        </CodeHighlight>

                        <h3>Effects</h3>
                        <p>The easing function to use between image transitions is "ease-out" by default and this can be customized using <i>easing</i> property. See <a href="http://www.w3schools.com/cssref/css3_pr_transition-timing-function.asp">here</a> for possible alternative values. Duration of the effect can be changed using effectDuration option.</p>
                        <CodeHighlight className="language-jsx">
                            {`
<Lightbox type="images" images={images} easing="ease-in" effectDuration="1500ms" />

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
                                        <td>type</td>
                                        <td>string</td>
                                        <td>images</td>
                                        <td>Type of the lightbox, valid values are "image" and "content".</td>
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
                        <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/lightbox" className="btn-viewsource" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-github"></i>
                            <span>View on GitHub</span>
                        </a>
                        <CodeHighlight className="language-javascript">
                            {`
import React, {Component} from 'react';
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

        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Lightbox</h1>
                        <p>LightBox is a modal overlay component to display images, videos and inline content.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3 className="first">Basic</h3>
                    <Lightbox type="images" images={images} />

                    <h3>Content</h3>
                    <Lightbox type="content">
                        <a className="group">
                            Watch Video
                        </a>
                        <iframe title="Video" width="560" height="315" src="https://www.youtube.com/embed/9bZkp7q19f0" frameBorder="0" allowFullScreen></iframe>
                    </Lightbox>
                </div>
            </div>
        );
    }
} }
}
                        `}
                        </CodeHighlight>
                    </TabPanel>
                </TabView>
            </div>
        )
    }

}