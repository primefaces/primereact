import React, { Component } from 'react';
import { AppInlineHeader } from '../../AppInlineHeader';
import { ImageDoc } from './ImageDoc';
import AppDemoActions from '../../AppDemoActions';
import { Image } from '../../components/image/Image';
import { Link } from 'react-router-dom';

export class ImageDemo extends Component {

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <AppInlineHeader changelogText="image">
                        <div className="feature-intro">
                            <h1>Image</h1>
                            <p>Displays an image with preview and tranformation options. For multiple image, see <Link to="/galleria">Galleria</Link>.</p>
                        </div>
                    </AppInlineHeader>
                    <AppDemoActions github="image/ImageDemo.js" />
                </div>

                <div className="content-section implementation">
                    <div className="card">
                        <h5>Basic</h5>
                        <Image src="showcase/demo/images/galleria/galleria7.jpg" alt="Image" width="250" />

                        <h5>Preview</h5>
                        <Image src="showcase/demo/images/galleria/galleria11.jpg" alt="Image" width="250" preview />
                    </div>
                </div>

                <ImageDoc></ImageDoc>
            </div>
        )
    }
}
