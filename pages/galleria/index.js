import React, { Component } from 'react';
import { PhotoService } from '../../service/PhotoService';
import { Galleria } from '../../components/lib/galleria/Galleria';
import { GalleriaDoc } from '../../components/doc/galleria';
import Head from 'next/head';
import getConfig from 'next/config';

export default class GalleriaDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            images: null
        };

        this.galleriaService = new PhotoService();
        this.itemTemplate = this.itemTemplate.bind(this);
        this.thumbnailTemplate = this.thumbnailTemplate.bind(this);
        this.contextPath = getConfig().publicRuntimeConfig.contextPath;
    }

    componentDidMount() {
        this.galleriaService.getImages().then(data => this.setState({ images: data }));
    }

    itemTemplate(item) {
        return <img src={`${this.contextPath}/${item.itemImageSrc}`} alt={item.alt} style={{ width: '100%' }} />
    }

    thumbnailTemplate(item) {
        return <img src={`${this.contextPath}/${item.thumbnailImageSrc}`} alt={item.alt} />
    }

    render() {
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
                        <Galleria value={this.state.images} responsiveOptions={this.responsiveOptions} numVisible={5} style={{maxWidth: '640px'}}
                            item={this.itemTemplate} thumbnail={this.thumbnailTemplate} />
                    </div>
                </div>

                <GalleriaDoc />
            </div>
        );
    }
}
