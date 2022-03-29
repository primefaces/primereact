import React from 'react';
import { Image } from '../../components/lib/image/Image';
import Link from 'next/link';
import ImageDoc from '../../components/doc/image';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';
import getConfig from 'next/config';

const ImageDemo = () => {

    const contextPath = getConfig().publicRuntimeConfig.contextPath;

    return (
        <div>
            <Head>
                <title>React Image Component</title>
                <meta name="description" content="Displays an image with preview and tranformation options." />
            </Head>
            <div className="content-section introduction">
                <div>
                    <div className="feature-intro">
                        <h1>Image</h1>
                        <p>Displays an image with preview and tranformation options. For multiple image, see <Link href="/galleria">Galleria</Link>.</p>
                    </div>
                </div>
                <DocActions github="image/index.js" />
            </div>

            <div className="content-section implementation">
                <div className="card">
                    <h5>Basic</h5>
                    <Image src={`${contextPath}/images/galleria/galleria7.jpg`} alt="Image" width="250" />

                    <h5>Preview</h5>
                    <Image src={`${contextPath}/images/galleria/galleria11.jpg`} alt="Image" width="250" preview />
                </div>
            </div>

            <ImageDoc></ImageDoc>
        </div>
    )
}

export default ImageDemo;
