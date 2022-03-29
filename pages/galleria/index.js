import React, { useState, useEffect } from 'react';
import { PhotoService } from '../../service/PhotoService';
import { Galleria } from '../../components/lib/galleria/Galleria';
import GalleriaDoc from '../../components/doc/galleria';
import Head from 'next/head';
import getConfig from 'next/config';

const GalleriaDemo = () => {

    const [images, setImages] = useState(null);

    const contextPath = getConfig().publicRuntimeConfig.contextPath;
    const galleriaService = new PhotoService();

    useEffect(() => {
        galleriaService.getImages().then(data => setImages(data));
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    const responsiveOptions = [
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

    const itemTemplate = (item) => {
        return <img src={`${contextPath}/${item.itemImageSrc}`} alt={item.alt} style={{ width: '100%' }} />
    }

    const thumbnailTemplate = (item) => {
        return <img src={`${contextPath}/${item.thumbnailImageSrc}`} alt={item.alt} />
    }

    return (
        <div>
            <Head>
                <title>React Gallery Component</title>
                <meta name="description" content="Galleria is a content gallery component." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>Galleria</h1>
                    <p>Galleria is a content gallery component.</p>
                </div>
            </div>

            <div className="content-section implementation">
                <div className="card">
                    <Galleria value={images} responsiveOptions={responsiveOptions} numVisible={5} style={{ maxWidth: '640px' }}
                        item={itemTemplate} thumbnail={thumbnailTemplate} />
                </div>
            </div>

            <GalleriaDoc />
        </div>
    );
}

export default GalleriaDemo;
